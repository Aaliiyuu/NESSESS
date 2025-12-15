from pydantic import BaseModel, EmailStr
from enum import Enum
from typing import Optional
from datetime import datetime

class UserRole(str, Enum):
    admin = "admin"
    practitioner = "practitioner"
    patient = "patient"
    
class Gender(str, Enum):
    male = "male"
    female = "female"
    other = "other"

class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    surname: str
    other_names: Optional[str]
    date_of_birth: datetime
    gender: Gender
    phone_number: str
    profile_picture: Optional[str] = None
    role: UserRole = UserRole.patient
class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True
        
        
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: int
    role: UserRole
    
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    surname: Optional[str] = None
    other_names: Optional[str] = None
    date_of_birth: Optional[datetime] = None
    gender: Optional[Gender] = None
    phone_number: Optional[str] = None
    profile_picture: Optional[str] = None
    password: Optional[str] = None
    role: Optional[UserRole] = None
    is_active: Optional[bool] = None