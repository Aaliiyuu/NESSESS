from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.deps.auth import get_db
from api.models.payment import Payment
from api.schemas.payment import PaymentOut

router = APIRouter()

@router.get("/", response_model=list[PaymentOut])
def list_payments(db: Session = Depends(get_db)):
    return db.query(Payment).all()