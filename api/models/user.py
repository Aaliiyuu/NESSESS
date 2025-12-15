from sqlalchemy import Column, Integer, String, Boolean, Enum, DateTime
from api.core.database import Base
from sqlalchemy.orm import relationship
import enum
from datetime import datetime

class UserRole(str, enum.Enum):
    admin = "admin"
    practitioner = "practitioner"
    patient = "patient"


    
    
class Gender(str, enum.Enum):
    male = "male"
    female = "female"
    other = "other"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    surname = Column(String, nullable=False)
    other_names = Column(String, nullable=True)
    date_of_birth = Column(DateTime, nullable=False)
    gender = Column(Enum(Gender), nullable=False)
    phone_number = Column(String, nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    profile_picture = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    practitioner = relationship("Practitioner", back_populates="user", uselist=False)
    patient = relationship("Patient", back_populates="user", uselist=False)
    
    
    
