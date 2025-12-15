from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
import os
import shutil

from api.core.database import get_db
from api.models.practitioner import Practitioner, ClinicAddress
from api.models.practitioner import Qualification
from api.models.practitioner import Document
from api.schemas.practitioner import PractitionerCreate, PractitionerResponse
from api.schemas.practitioner import ClinicAddressCreate, ClinicAddressResponse
from api.schemas.practitioner import QualificationCreate, QualificationResponse
from api.schemas.practitioner import DocumentResponse

from api.core.database import get_db
from api.models.practitioner import Practitioner
from api.models.medical_record import MedicalRecord
from api.schemas.medical_record import (
    MedicalRecordCreate,
    MedicalRecordUpdate,
    MedicalRecordResponse,
)
from api.deps.auth import get_current_user
from api.models.user import User

router = APIRouter()

UPLOAD_DIR = "uploads/documents"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# -------------------------
# Practitioner Create
# -------------------------
@router.post("/", response_model=PractitionerResponse)
def create_practitioner(practitioner_in: PractitionerCreate, db: Session = Depends(get_db)):
    existing = db.query(Practitioner).filter(Practitioner.user_id == practitioner_in.user_id).first()
    if existing:
        raise HTTPException(status_code=400, detail="Practitioner already exists for this user")

    practitioner = Practitioner(**practitioner_in.dict())
    db.add(practitioner)
    db.commit()
    db.refresh(practitioner)
    return practitioner


# -------------------------
# Clinic Address Create
# -------------------------
@router.post("/{practitioner_id}/clinic-address", response_model=ClinicAddressResponse)
def create_clinic_address(
    practitioner_id: int,
    clinic_in: ClinicAddressCreate,
    db: Session = Depends(get_db),
):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner:
        raise HTTPException(status_code=404, detail="Practitioner not found")

    if practitioner.clinic_address:
        raise HTTPException(status_code=400, detail="Clinic address already exists for this practitioner")

    clinic_address = ClinicAddress(**clinic_in.dict(), practitioner_id=practitioner_id)
    db.add(clinic_address)
    db.commit()
    db.refresh(clinic_address)
    return clinic_address


# -------------------------
# Clinic Address Update
# -------------------------
@router.put("/{practitioner_id}/clinic-address", response_model=ClinicAddressResponse)
def update_clinic_address(
    practitioner_id: int,
    clinic_in: ClinicAddressCreate,
    db: Session = Depends(get_db),
):
    clinic_address = db.query(ClinicAddress).filter(ClinicAddress.practitioner_id == practitioner_id).first()
    if not clinic_address:
        raise HTTPException(status_code=404, detail="Clinic address not found")

    for field, value in clinic_in.dict(exclude_unset=True).items():
        setattr(clinic_address, field, value)

    db.commit()
    db.refresh(clinic_address)
    return clinic_address


# -------------------------
# Qualification CRUD
# -------------------------
@router.post("/{practitioner_id}/qualifications", response_model=QualificationResponse)
def create_qualification(practitioner_id: int, qualification_in: QualificationCreate, db: Session = Depends(get_db)):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner:
        raise HTTPException(status_code=404, detail="Practitioner not found")

    qualification = Qualification(**qualification_in.dict(), practitioner_id=practitioner_id)
    db.add(qualification)
    db.commit()
    db.refresh(qualification)
    return qualification


@router.get("/{practitioner_id}/qualifications", response_model=List[QualificationResponse])
def get_qualifications(practitioner_id: int, db: Session = Depends(get_db)):
    return db.query(Qualification).filter(Qualification.practitioner_id == practitioner_id).all()


@router.put("/qualifications/{qualification_id}", response_model=QualificationResponse)
def update_qualification(qualification_id: int, qualification_in: QualificationCreate, db: Session = Depends(get_db)):
    qualification = db.query(Qualification).filter(Qualification.id == qualification_id).first()
    if not qualification:
        raise HTTPException(status_code=404, detail="Qualification not found")

    for field, value in qualification_in.dict(exclude_unset=True).items():
        setattr(qualification, field, value)

    db.commit()
    db.refresh(qualification)
    return qualification


@router.delete("/qualifications/{qualification_id}", response_model=dict)
def delete_qualification(qualification_id: int, db: Session = Depends(get_db)):
    qualification = db.query(Qualification).filter(Qualification.id == qualification_id).first()
    if not qualification:
        raise HTTPException(status_code=404, detail="Qualification not found")

    db.delete(qualification)
    db.commit()
    return {"detail": "Qualification deleted successfully"}


# -------------------------
# Document CRUD
# -------------------------
@router.post("/{practitioner_id}/documents", response_model=List[DocumentResponse])
async def upload_documents(
    practitioner_id: int,
    document_type: str = Form(...),
    files: List[UploadFile] = File(...),
    db: Session = Depends(get_db),
):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner:
        raise HTTPException(status_code=404, detail="Practitioner not found")

    saved_documents = []
    for file in files:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        new_doc = Document(
            practitioner_id=practitioner_id,
            file_path=file_path,
            document_type=document_type,
            created_at=datetime.utcnow(),
        )
        db.add(new_doc)
        db.commit()
        db.refresh(new_doc)
        saved_documents.append(new_doc)

    return saved_documents


@router.get("/{practitioner_id}/documents", response_model=List[DocumentResponse])
def get_documents(practitioner_id: int, db: Session = Depends(get_db)):
    return db.query(Document).filter(Document.practitioner_id == practitioner_id).all()


@router.put("/documents/{document_id}", response_model=DocumentResponse)
def update_document(document_id: int, document_type: str = Form(...), db: Session = Depends(get_db)):
    document = db.query(Document).filter(Document.id == document_id).first()
    if not document:
        raise HTTPException(status_code=404, detail="Document not found")

    document.document_type = document_type
    db.commit()
    db.refresh(document)
    return document


@router.delete("/documents/{document_id}", response_model=dict)
def delete_document(document_id: int, db: Session = Depends(get_db)):
    document = db.query(Document).filter(Document.id == document_id).first()
    if not document:
        raise HTTPException(status_code=404, detail="Document not found")

    # delete file from storage
    if os.path.exists(document.file_path):
        os.remove(document.file_path)

    db.delete(document)
    db.commit()
    return {"detail": "Document deleted successfully"}


# -------------------------
# Create Medical Record
# -------------------------
@router.post("/{practitioner_id}/medical-records", response_model=MedicalRecordResponse)
def create_medical_record(
    practitioner_id: int,
    record_in: MedicalRecordCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner:
        raise HTTPException(status_code=404, detail="Practitioner not found")

    if practitioner.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to create records for this practitioner")

    new_record = MedicalRecord(
        **record_in.dict()
    )
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return new_record


# -------------------------
# Get All Medical Records for Practitioner
# -------------------------
@router.get("/{practitioner_id}/medical-records", response_model=List[MedicalRecordResponse])
def get_medical_records(
    practitioner_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    practitioner = db.query(Practitioner).filter(Practitioner.id == practitioner_id).first()
    if not practitioner or practitioner.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view these records")

    return db.query(MedicalRecord).filter(MedicalRecord.practitioner_id == practitioner_id).all()


# -------------------------
# Get Single Medical Record
# -------------------------
@router.get("/medical-records/{record_id}", response_model=MedicalRecordResponse)
def get_medical_record(
    record_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Medical record not found")

    if record.practitioner.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to view this record")

    return record


# -------------------------
# Update Medical Record
# -------------------------
@router.put("/medical-records/{record_id}", response_model=MedicalRecordResponse)
def update_medical_record(
    record_id: int,
    record_in: MedicalRecordUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Medical record not found")

    if record.practitioner.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to update this record")

    for field, value in record_in.dict(exclude_unset=True).items():
        setattr(record, field, value)

    db.commit()
    db.refresh(record)
    return record


# -------------------------
# Delete Medical Record
# -------------------------
@router.delete("/medical-records/{record_id}", response_model=dict)
def delete_medical_record(
    record_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    record = db.query(MedicalRecord).filter(MedicalRecord.id == record_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Medical record not found")

    if record.practitioner.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this record")

    db.delete(record)
    db.commit()
    return {"detail": "Medical record deleted successfully"}
