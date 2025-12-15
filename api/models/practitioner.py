from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Text
from sqlalchemy.orm import relationship
from api.core.database import Base
from datetime import datetime
import random
import string

class Practitioner(Base):
    __tablename__ = "practitioners"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, unique=True)
    state = Column(String, nullable=False)
    lga = Column(String, nullable=False)
    nationality = Column(String, nullable=False)
    tribe = Column(String, nullable=True)
    religion = Column(String, nullable=True)
    nin_number = Column(String, nullable=False)
    residential_address = Column(String, nullable=False)
    specialization = Column(String, nullable=True)
    license_number = Column(String, nullable=True)
    years_of_practice = Column(Integer, nullable=True)
    highest_qualification = Column(String, nullable=True)
    other_medicine_practice = Column(String, nullable=True)
    current_operation = Column(String, nullable=True)
    other_association_membership = Column(String, nullable=True)
    membership_category = Column(String, nullable=True)
    registration_number = Column(String, nullable=True)
    is_approved = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="practitioner", uselist=False)
    clinic_address = relationship("ClinicAddress", back_populates="practitioner", uselist=False, cascade="all, delete-orphan")
    qualifications = relationship("Qualification", back_populates="practitioner", cascade="all, delete-orphan")
    documents = relationship("Document", back_populates="practitioner", cascade="all, delete-orphan")
    medical_records = relationship("MedicalRecord", back_populates="practitioner", cascade="all, delete-orphan")

class ClinicAddress(Base):
    __tablename__ = "clinic_addresses"

    id = Column(Integer, primary_key=True, index=True)
    practitioner_id = Column(Integer, ForeignKey("practitioners.id"), unique=True, nullable=False)
    registration_number = Column(String, unique=True, index=True, nullable=True)
    clinic_name = Column(String, nullable=False)
    state = Column(String, nullable=False)
    lga = Column(String, nullable=False)
    address = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    email = Column(String, nullable=True)
    staff_count = Column(Integer, nullable=True)
    certificate_issue_date = Column(DateTime, nullable=True)
    focus_description = Column(String, nullable=True)
    previous_association = Column(String, nullable=True)
    practice_place = Column(String, nullable=True)
    area_of_interest = Column(String, nullable=True)
    clinical_report_duration = Column(String, nullable=True)
    civil_service_engagement = Column(String, nullable=True)
    facebook = Column(String, nullable=True)
    whatsapp = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    practitioner = relationship("Practitioner", back_populates="clinic_address")

class Qualification(Base):
    __tablename__ = "qualifications"

    id = Column(Integer, primary_key=True, index=True)
    practitioner_id = Column(Integer, ForeignKey("practitioners.id"), nullable=False)
    certificate_obtained = Column(String, nullable=False)
    awarding_body = Column(String, nullable=False)
    duration = Column(String, nullable=True)
    training_center = Column(String, nullable=False)
    course_study = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    practitioner = relationship("Practitioner", back_populates="qualifications")

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    practitioner_id = Column(Integer, ForeignKey("practitioners.id"), nullable=False)
    document_type = Column(String, nullable=False)
    file_path = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    practitioner = relationship("Practitioner", back_populates="documents")
