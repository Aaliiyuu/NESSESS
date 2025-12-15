from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, Float, Boolean
from sqlalchemy.orm import relationship
from api.core.database import Base
from datetime import datetime




class MedicalRecord(Base):
    __tablename__ = "medical_records"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"), nullable=False)
    practitioner_id = Column(Integer, ForeignKey("practitioners.id"), nullable=True)
    record_date = Column(DateTime, default=datetime.utcnow)
    visit_type = Column(String(50), default="initial", nullable=False)
    fpc_card_number = Column(String(50), nullable=True)

    # Patient Demographics
    patient_age_at_visit = Column(Integer, nullable=True)
    patient_blood_group_at_visit = Column(String, nullable=True)
    patient_weight_kg = Column(Float, nullable=True)
    patient_height_cm = Column(Float, nullable=True)
    patient_phone_number_at_visit = Column(String, nullable=True)
    patient_occupation = Column(String(100), nullable=True)
    patient_blood_sugar = Column(String(50), nullable=True)

    # Case History / Chief Complaint
    case_history = Column(Text, nullable=True)
    chief_complaint = Column(Text, nullable=True)

    # Current Status
    current_status = Column(Text, nullable=True)
    current_body_sign_symptoms = Column(Text, nullable=True)

    # Vital Signs
    systolic_bp = Column(Integer, nullable=True)
    diastolic_bp = Column(Integer, nullable=True)
    pulse_rate = Column(Integer, nullable=True)
    body_temp_celsius = Column(Float, nullable=True)
    body_type = Column(String, nullable=True)
    respiratory_rate = Column(Integer, nullable=True)
    oxygen_saturation = Column(Float, nullable=True)

    # Follow-up visit details
    symptoms_persist = Column(Text, nullable=True)
    new_symptoms_appeared = Column(Text, nullable=True)
    symptoms_vanished_or_subsided = Column(Text, nullable=True)

    # Medications & Interventions
    current_medication_details = Column(Text, nullable=True)
    eh_cam_intervention = Column(Text, nullable=True)
    eh_cam_practitioners_id_no = Column(String(100), nullable=True)
    external_therapy = Column(Text, nullable=True)
    internal_therapy = Column(Text, nullable=True)
    diet_therapy = Column(Text, nullable=True)

    # Assessment and Plan
    diagnosis = Column(Text, nullable=True)
    treatment_plan = Column(Text, nullable=True)
    notes = Column(Text, nullable=True)

    # Correspondence / Consent
    correspondence_name = Column(String(255), nullable=True)
    patient_consent = Column(Boolean, default=False)
    patient_consent_text = Column(Text, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    patient = relationship("Patient", back_populates="medical_records", foreign_keys=[patient_id])
    practitioner = relationship("Practitioner", back_populates="medical_records", foreign_keys=[practitioner_id])