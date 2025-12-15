from fastapi import APIRouter, Depends, HTTPException, status, File, UploadFile, Form 
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
import os
from datetime import datetime
from sqlalchemy.orm import Session
from typing import Annotated

from api.schemas.user import UserCreate, UserResponse, Token, TokenData, UserRole, Gender
from api.core.security import get_password_hash, verify_password, create_access_token
from api.core.database import get_db
from api.models.user import User
from api.models.practitioner import Practitioner

router = APIRouter()


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(
    email: str = Form(...),
    password: str = Form(...),
    first_name: str = Form(...),
    surname: str = Form(...),
    date_of_birth: datetime = Form(...),
    gender: Gender = Form(...),
    phone_number: str = Form(...),
    role: UserRole = Form(UserRole.patient),
    other_names: str = Form(None),
    profile_picture: UploadFile = File(None),
    db: Session = Depends(get_db),   # ✅ keep dependency last
):
    """
    Register a new user with optional profile picture upload
    """
    # Check if email exists
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Save profile picture if uploaded
    profile_picture_url = None
    if profile_picture:
        if not profile_picture.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="Only image files are allowed.")

        os.makedirs("static/users", exist_ok=True)
        file_location = f"static/users/{profile_picture.filename}"
        with open(file_location, "wb") as f:
            f.write(await profile_picture.read())

        profile_picture_url = f"/static/users/{profile_picture.filename}"

    hashed_password = get_password_hash(password)

    new_user = User(
        email=email,
        hashed_password=hashed_password,
        first_name=first_name,
        surname=surname,
        other_names=other_names,
        date_of_birth=date_of_birth,
        gender=gender,
        phone_number=phone_number,
        profile_picture=profile_picture_url,
        role=role,
        is_active=True,
        created_at=datetime.utcnow(),
    )

    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )


@router.post("/login", response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Login user - practitioners can use either their admin-assigned registration number or email
    """
    practitioner = None  # ✅ Initialize variable so it's always defined

    # Check if input looks like a registration number (starts with PRAC-)
    if form_data.username.startswith("PRAC-"):
        practitioner = db.query(Practitioner).filter(
            Practitioner.registration_number == form_data.username,
            Practitioner.is_approved == True
        ).first()
        
        if not practitioner:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid registration number or practitioner not approved",
            )
        
        user = practitioner.user
    else:
        # Regular email login for non-practitioners or practitioners logging in with email
        user = db.query(User).filter(User.email == form_data.username).first()
        
        if user and user.role == UserRole.practitioner:
            # Fetch practitioner's record if role matches
            practitioner = db.query(Practitioner).filter(
                Practitioner.user_id == user.id
            ).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user"
        )
    
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={
            "sub": practitioner.registration_number if practitioner else user.email,
            "user_id": user.id,
            "role": user.role
        },
        expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token, 
        "token_type": "bearer",
        "user_id": user.id,
        "role": user.role
    }

@router.post("/refresh", response_model=Token)
async def refresh_token(
    token_data: TokenData,
    db: Annotated[Session, Depends(get_db)]
):
    """
    Refresh access token
    """
    user = db.query(User).filter(User.id == token_data.user_id).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user"
        )
    
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user"
        )
    
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={
            "sub": user.email,
            "user_id": user.id,
            "role": user.role
        },
        expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token, 
        "token_type": "bearer",
        "user_id": user.id,
        "role": user.role
    }