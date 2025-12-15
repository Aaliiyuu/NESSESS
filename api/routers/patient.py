from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from api.deps.auth import get_db, require_role
from api.models.user import UserRole
from api.schemas.medical_record import MedicalRecordCreate, MedicalRecordResponse
from api.models.medical_record import MedicalRecord
from api.schemas.appointment import AppointmentCreate, AppointmentOut
from api.models.appointment import Appointment
from api.schemas.payment import PaymentCreate, PaymentOut
from api.models.payment import Payment
from api.models.patient import Patient

from api.core.database import get_db
from api.models.medical_record import MedicalRecord
from api.schemas.medical_record import MedicalRecordResponse
from api.deps.auth import get_current_user
from api.models.user import User
from api.models.patient import Patient
from api.schemas.patient import PatientResponse, PatientCreate

router = APIRouter()

# -------------------------
# Patient: Create profile
# -------------------------
@router.post("/patients", response_model=PatientResponse)
def create_patient(
    patient_in: PatientCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_role(UserRole.patient)),
):
    existing = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Patient profile already exists for this user",
        )

    patient = Patient(
        **patient_in.dict(),
        user_id=current_user.id,
        created_at=datetime.utcnow(),
    )
    db.add(patient)
    db.commit()
    db.refresh(patient)
    return patient

@router.post("/records", response_model=MedicalRecordResponse)
def add_patient_record(
    record_in: MedicalRecordCreate, 
    db: Session = Depends(get_db), 
    current_user = Depends(require_role(UserRole.patient))
):
    # Get patient ID from current user
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Patient record not found"
        )
    
    record = MedicalRecord(
        **record_in.dict(),
        patient_id=patient.id,
        created_at=datetime.utcnow()
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

@router.get("/records", response_model=List[MedicalRecordResponse])
def get_my_records(
    db: Session = Depends(get_db), 
    current_user = Depends(require_role(UserRole.patient))
):
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Patient record not found"
        )
    
    records = db.query(MedicalRecord).filter(MedicalRecord.patient_id == patient.id).all()
    return records

@router.post("/appointments", response_model=AppointmentOut)
def book_appointment(
    appointment_in: AppointmentCreate, 
    db: Session = Depends(get_db), 
    current_user = Depends(require_role(UserRole.patient))
):
    # Verify patient exists
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Patient record not found"
        )
    
    appointment = Appointment(
        **appointment_in.dict(),
        status="pending",
        created_at=datetime.utcnow()
    )
    db.add(appointment)
    db.commit()
    db.refresh(appointment)
    return appointment

@router.post("/payments", response_model=PaymentOut)
def make_payment(
    payment_in: PaymentCreate, 
    db: Session = Depends(get_db), 
    current_user = Depends(require_role(UserRole.patient))
):
    # Verify patient exists
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Patient record not found"
        )
    
    payment = Payment(
        **payment_in.dict(),
        patient_id=patient.id,
        status="pending",
        created_at=datetime.utcnow()
    )
    db.add(payment)
    db.commit()
    db.refresh(payment)
    # Integrate payment gateway here
    return payment
# -------------------------
# Patient: View their own medical records
# -------------------------
@router.get("/patients/me/medical-records", response_model=List[MedicalRecordResponse])
def get_my_medical_records(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    # ensure current user is a patient
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(status_code=403, detail="Only patients can view their own medical records")

    records = db.query(MedicalRecord).filter(MedicalRecord.patient_id == patient.id).all()
    return records


@router.get("/patients/me/medical-records/{record_id}", response_model=MedicalRecordResponse)
def get_my_medical_record(
    record_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    patient = db.query(Patient).filter(Patient.user_id == current_user.id).first()
    if not patient:
        raise HTTPException(status_code=403, detail="Only patients can view their own medical records")

    record = db.query(MedicalRecord).filter(
        MedicalRecord.id == record_id,
        MedicalRecord.patient_id == patient.id,
    ).first()

    if not record:
        raise HTTPException(status_code=404, detail="Medical record not found")

    return record