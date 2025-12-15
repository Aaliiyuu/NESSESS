from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from api.core.database import Base

class Prescription(Base):
    __tablename__ = "prescriptions"
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"), nullable=False)
    practitioner_id = Column(Integer, ForeignKey("practitioners.id"), nullable=False)
    medicines = Column(Text, nullable=False)  # JSON string or CSV
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, nullable=False)
    patient = relationship("Patient")
    practitioner = relationship("Practitioner")