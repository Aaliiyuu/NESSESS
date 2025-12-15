from pydantic import BaseModel
from enum import Enum
from typing import Optional
from datetime import datetime

class PaymentStatus(str, Enum):
    pending = "pending"
    paid = "paid"
    failed = "failed"

class PaymentBase(BaseModel):
    patient_id: int
    appointment_id: Optional[int]
    amount: float
    currency: str = "INR"

class PaymentCreate(PaymentBase):
    pass

class PaymentOut(PaymentBase):
    id: int
    status: PaymentStatus
    created_at: datetime

    class Config:
        orm_mode = True