from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# -------------------------
# Medical Record Base
# -------------------------
class MedicalRecordBase(BaseModel):
    patient_id: int
    practitioner_id: Optional[int]
    record_date: Optional[datetime] = None
    visit_type: Optional[str] = "initial"
    fpc_card_number: Optional[str]

    # Patient Demographics
    patient_age_at_visit: Optional[int]
    patient_blood_group_at_visit: Optional[str]
    patient_weight_kg: Optional[float]
    patient_height_cm: Optional[float]
    patient_phone_number_at_visit: Optional[str]
    patient_occupation: Optional[str]
    patient_blood_sugar: Optional[str]

    # Case History / Chief Complaint
    case_history: Optional[str]
    chief_complaint: Optional[str]

    # Current Status
    current_status: Optional[str]
    current_body_sign_symptoms: Optional[str]

    # Vital Signs
    systolic_bp: Optional[int]
    diastolic_bp: Optional[int]
    pulse_rate: Optional[int]
    body_temp_celsius: Optional[float]
    body_type: Optional[str]
    respiratory_rate: Optional[int]
    oxygen_saturation: Optional[float]

    # Follow-up visit details
    symptoms_persist: Optional[str]
    new_symptoms_appeared: Optional[str]
    symptoms_vanished_or_subsided: Optional[str]

    # Medications & Interventions
    current_medication_details: Optional[str]
    eh_cam_intervention: Optional[str]
    eh_cam_practitioners_id_no: Optional[str]
    external_therapy: Optional[str]
    internal_therapy: Optional[str]
    diet_therapy: Optional[str]

    # Assessment and Plan
    diagnosis: Optional[str]
    treatment_plan: Optional[str]
    notes: Optional[str]

    # Correspondence / Consent
    correspondence_name: Optional[str]
    patient_consent: Optional[bool] = False
    patient_consent_text: Optional[str]


# -------------------------
# Create Medical Record
# -------------------------
class MedicalRecordCreate(MedicalRecordBase):
    pass


# -------------------------
# Update Medical Record (Partial Update)
# -------------------------
class MedicalRecordUpdate(BaseModel):
    record_date: Optional[datetime]
    visit_type: Optional[str]
    fpc_card_number: Optional[str]

    # Patient Demographics
    patient_age_at_visit: Optional[int]
    patient_blood_group_at_visit: Optional[str]
    patient_weight_kg: Optional[float]
    patient_height_cm: Optional[float]
    patient_phone_number_at_visit: Optional[str]
    patient_occupation: Optional[str]
    patient_blood_sugar: Optional[str]

    # Case History / Chief Complaint
    case_history: Optional[str]
    chief_complaint: Optional[str]

    # Current Status
    current_status: Optional[str]
    current_body_sign_symptoms: Optional[str]

    # Vital Signs
    systolic_bp: Optional[int]
    diastolic_bp: Optional[int]
    pulse_rate: Optional[int]
    body_temp_celsius: Optional[float]
    body_type: Optional[str]
    respiratory_rate: Optional[int]
    oxygen_saturation: Optional[float]

    # Follow-up visit details
    symptoms_persist: Optional[str]
    new_symptoms_appeared: Optional[str]
    symptoms_vanished_or_subsided: Optional[str]

    # Medications & Interventions
    current_medication_details: Optional[str]
    eh_cam_intervention: Optional[str]
    eh_cam_practitioners_id_no: Optional[str]
    external_therapy: Optional[str]
    internal_therapy: Optional[str]
    diet_therapy: Optional[str]

    # Assessment and Plan
    diagnosis: Optional[str]
    treatment_plan: Optional[str]
    notes: Optional[str]

    # Correspondence / Consent
    correspondence_name: Optional[str]
    patient_consent: Optional[bool]
    patient_consent_text: Optional[str]


# -------------------------
# Response Medical Record
# -------------------------
class MedicalRecordResponse(MedicalRecordBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
