from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum
from api.models.user import UserRole
from api.schemas.user import UserResponse


class Gender(str, Enum):
    male = "male"
    female = "female"
    other = "other"


# -------------------------
# Document
# -------------------------
class DocumentBase(BaseModel):
    document_type: str
    file_path: str


class DocumentCreate(DocumentBase):
    pass


class DocumentResponse(DocumentBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True


# -------------------------
# Qualification
# -------------------------
class QualificationBase(BaseModel): # ✅ added to align with model
    certificate_obtained: str
    awarding_body: str
    duration: Optional[str]
    training_center: str
    course_study: str

class QualificationCreate(QualificationBase):
    pass

class QualificationResponse(QualificationBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True


# -------------------------
# Clinic Address
# -------------------------
class ClinicAddressBase(BaseModel):
    registration_number: Optional[str]  # ✅ Added this to align with model
    clinic_name: str
    state: str
    lga: str
    address: str
    phone_number: str
    email: Optional[EmailStr]
    staff_count: Optional[int]
    certificate_issue_date: Optional[datetime]
    focus_description: Optional[str]
    previous_association: Optional[str]
    practice_place: Optional[str]
    area_of_interest: Optional[str]
    clinical_report_duration: Optional[str]
    civil_service_engagement: Optional[str]
    facebook: Optional[str]
    whatsapp: Optional[str]


class ClinicAddressCreate(ClinicAddressBase):
    pass


class ClinicAddressResponse(ClinicAddressBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


# -------------------------
# Practitioner
# -------------------------
class PractitionerBase(BaseModel):
    user_id: int
    state: str
    lga: str
    nationality: str
    tribe: Optional[str]
    religion: Optional[str]
    nin_number: str
    residential_address: str
    specialization: Optional[str]
    license_number: Optional[str]
    years_of_practice: Optional[int]
    highest_qualification: Optional[str]
    other_medicine_practice: Optional[str]
    current_operation: Optional[str]
    other_association_membership: Optional[str]
    membership_category: Optional[str]


class PractitionerCreate(PractitionerBase):
    pass



class PractitionerUpdate(BaseModel):  # ✅ Cleaned duplicates
    specialization: Optional[str]
    license_number: Optional[str]
    years_of_practice: Optional[int]
    highest_qualification: Optional[str]
    other_medicine_practice: Optional[str]
    current_operation: Optional[str]
    other_association_membership: Optional[str]
    membership_category: Optional[str]
    is_approved: Optional[bool]
    clinic_address: Optional[ClinicAddressCreate]
    qualifications: Optional[List[QualificationCreate]]
    documents: Optional[List[DocumentCreate]]


class PractitionerResponse(PractitionerBase):
    id: int
    user: Optional[UserResponse]
    clinic_address: Optional[ClinicAddressResponse]
    qualifications: List[QualificationResponse] = []
    documents: List[DocumentResponse] = []

    class Config:
        orm_mode = True




class UserWithPractitionerResponse(UserResponse):
    practitioner: Optional[PractitionerResponse] = None

class AdminPractitionerApproveUpdate(BaseModel):
    is_approved: bool
    registration_number: Optional[str]