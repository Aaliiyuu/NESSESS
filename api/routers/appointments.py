from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.deps.auth import get_db
from api.models.appointment import Appointment
from api.schemas.appointment import AppointmentOut

router = APIRouter()

@router.get("/", response_model=list[AppointmentOut])
def list_appointments(db: Session = Depends(get_db)):
    return db.query(Appointment).all()