from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime

from api.core.database import get_db
from api.models.practitioner import Practitioner
from api.models.medical_record import MedicalRecord
from api.models.patient import Patient
from api.schemas.practitioner import PractitionerResponse, AdminPractitionerApproveUpdate
from api.schemas.medical_record import MedicalRecordResponse
from api.schemas.patient import PatientResponse
from api.deps.auth import require_role
from api.models.user import UserRole

from api.core.database import get_db
from api.models.user import User, UserRole
from api.schemas.user import UserResponse, UserUpdate, UserCreate
from api.deps.auth import require_role
from passlib.hash import bcrypt
from api.models.payment import Payment
from api.models.appointment import Appointment
from api.schemas.payment import PaymentOut
from api.schemas.appointment import AppointmentOut, AppointmentCreate

router = APIRouter()

# -------------------------
# Admin: Create User
# -------------------------
@router.post("/users", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(
    user_in: UserCreate,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Only Admin
):
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user_in.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password before saving
    hashed_password = bcrypt.hash(user_in.password)

    new_user = User(
        email=user_in.email,
        first_name=user_in.first_name,
        surname=user_in.surname,
        other_names=user_in.other_names,
        date_of_birth=user_in.date_of_birth,
        gender=user_in.gender,
        phone_number=user_in.phone_number,
        profile_picture=user_in.profile_picture,
        role=user_in.role,
        is_active=True,  # Default active on creation
        hashed_password=hashed_password,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# -------------------------
# Admin: View all Users
# -------------------------
@router.get("/users", response_model=List[UserResponse])
def get_all_users(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    return db.query(User).all()


# -------------------------
# Admin: Update User
# -------------------------
@router.put("/users/{user_id}", response_model=UserResponse)
def update_user(
    user_id: int,
    update_data: UserUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    update_dict = update_data.dict(exclude_unset=True)

    # Handle password update securely
    if "password" in update_dict and update_dict["password"]:
        update_dict["hashed_password"] = bcrypt.hash(update_dict.pop("password"))

    for field, value in update_dict.items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user


# -------------------------
# Admin: Delete User
# -------------------------
@router.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()
    return None

# -------------------------
# Admin: Get ALL practitioners (approved + pending)
# -------------------------
@router.get("/practitioners", response_model=List[PractitionerResponse])
def get_all_practitioners(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    return db.query(Practitioner).all()


# -------------------------
# Admin: Get practitioners pending approval
# -------------------------
@router.get("/practitioners/pending", response_model=List[PractitionerResponse])
def get_pending_practitioners(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    practitioners = db.query(Practitioner).filter(Practitioner.is_approved == False).all()
    return practitioners


# -------------------------
# Admin: Approve or Reject Practitioner
# -------------------------
@router.put("/practitioners/{practitioner_id}/approve", response_model=PractitionerResponse)
def approve_practitioner(
    practitioner_id: int,
    update_data: AdminPractitionerApproveUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner:
        raise HTTPException(status_code=404, detail="Practitioner not found")

    practitioner.is_approved = update_data.is_approved

    if update_data.is_approved:
        if update_data.registration_number:
            practitioner.registration_number = update_data.registration_number
        elif not practitioner.registration_number:  # Auto-generate if missing
            practitioner.registration_number = f"REG-{practitioner_id:05d}"

    db.commit()
    db.refresh(practitioner)
    return practitioner


# -------------------------
# Admin: Get All Medical Records (with filters & pagination)
# -------------------------
@router.get("/medical-records/all", response_model=List[MedicalRecordResponse])
def get_all_medical_records(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only

    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    practitioner_id: Optional[int] = None,
    patient_id: Optional[int] = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
):
    query = db.query(MedicalRecord)

    if practitioner_id:
        query = query.filter(MedicalRecord.practitioner_id == practitioner_id)
    if patient_id:
        query = query.filter(MedicalRecord.patient_id == patient_id)
    if start_date:
        query = query.filter(MedicalRecord.record_date >= start_date)
    if end_date:
        query = query.filter(MedicalRecord.record_date <= end_date)

    return query.order_by(MedicalRecord.created_at.desc()).offset(skip).limit(limit).all()


# -------------------------
# Admin: Get all patients
# -------------------------
@router.get("/patients", response_model=List[PatientResponse])
def get_all_patients(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    return db.query(Patient).all()


# -------------------------
# Admin: Get a patient by ID
# -------------------------
@router.get("/patients/{patient_id}", response_model=PatientResponse)
def get_patient_by_id(
    patient_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


# -------------------------
# Admin: Get all medical records for a patient
# -------------------------
@router.get("/patients/{patient_id}/medical-records", response_model=List[MedicalRecordResponse])
def get_patient_records_admin(
    patient_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),  # ✅ Admin only
):
    return db.query(MedicalRecord).filter(MedicalRecord.patient_id == patient_id).all()




# ==========================
# Admin: Payments Endpoints
# ==========================

@router.get("/payments", response_model=List[PaymentOut])
def get_all_payments(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    practitioner_id: Optional[int] = Query(None),
    patient_id: Optional[int] = Query(None),
    start_date: Optional[datetime] = Query(None),
    end_date: Optional[datetime] = Query(None),
):
    query = db.query(Payment)

    if practitioner_id:
        query = query.filter(Payment.practitioner_id == practitioner_id)
    if patient_id:
        query = query.filter(Payment.patient_id == patient_id)
    if start_date:
        query = query.filter(Payment.payment_date >= start_date)
    if end_date:
        query = query.filter(Payment.payment_date <= end_date)

    return query.offset(skip).limit(limit).all()


@router.get("/payments/{payment_id}", response_model=PaymentOut)
def get_payment_by_id(
    payment_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    payment = db.query(Payment).filter(Payment.id == payment_id).first()
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    return payment


# ==========================
# Admin: Appointments Endpoints
# ==========================

@router.get("/appointments", response_model=List[AppointmentOut])
def get_all_appointments(
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    practitioner_id: Optional[int] = Query(None),
    patient_id: Optional[int] = Query(None),
    status: Optional[str] = Query(None, description="Filter by status"),
    start_date: Optional[datetime] = Query(None),
    end_date: Optional[datetime] = Query(None),
):
    query = db.query(Appointment)

    if practitioner_id:
        query = query.filter(Appointment.practitioner_id == practitioner_id)
    if patient_id:
        query = query.filter(Appointment.patient_id == patient_id)
    if status:
        query = query.filter(Appointment.status == status)
    if start_date:
        query = query.filter(Appointment.date >= start_date)
    if end_date:
        query = query.filter(Appointment.date <= end_date)

    return query.offset(skip).limit(limit).all()


@router.get("/appointments/{appointment_id}", response_model=AppointmentOut)
def get_appointment_by_id(
    appointment_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return appointment


@router.put("/appointments/{appointment_id}", response_model=AppointmentOut)
def update_appointment_status(
    appointment_id: int,
    update_data: AppointmentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")

    for key, value in update_data.dict(exclude_unset=True).items():
        setattr(appointment, key, value)

    db.commit()
    db.refresh(appointment)
    return appointment


@router.delete("/appointments/{appointment_id}")
def delete_appointment(
    appointment_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(UserRole.admin)),
):
    appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")

    db.delete(appointment)
    db.commit()
    return {"detail": "Appointment deleted successfully"}
