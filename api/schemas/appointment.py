from pydantic import BaseModel
from enum import Enum
from typing import Optional
from datetime import datetime

class AppointmentStatus(str, Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"
    completed = "completed"

class AppointmentBase(BaseModel):
    practitioner_id: int
    patient_id: int
    scheduled_time: datetime

class AppointmentCreate(AppointmentBase):
    pass

class AppointmentUpdate(BaseModel):
    status: AppointmentStatus

class AppointmentOut(AppointmentBase):
    id: int
    status: AppointmentStatus

    class Config:
        orm_mode = True