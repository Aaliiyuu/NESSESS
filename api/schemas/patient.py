from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Import related schemas
from api.schemas.medical_record import MedicalRecordResponse
from api.schemas.payment import PaymentOut as PaymentResponse


class PatientBase(BaseModel):
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    country: Optional[str] = None
    date_of_birth: Optional[datetime] = None
    gender: Optional[str] = None


class PatientCreate(PatientBase):
    # Require fields on creation
    address: str
    city: str
    state: str
    country: str
    date_of_birth: datetime
    gender: str


class PatientResponse(PatientBase):
    id: int
    user_id: int
    created_at: datetime

    # ✅ Nested relationships
    medical_records: Optional[List[MedicalRecordResponse]] = []
    payments: Optional[List[PaymentResponse]] = []

    class Config:
        orm_mode = True          # ✅ for Pydantic v1
        from_attributes = True   # ✅ for Pydantic v2
