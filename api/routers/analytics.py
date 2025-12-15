from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.deps.auth import get_db

router = APIRouter()

@router.get("/appointments")
def appointments_stats(db: Session = Depends(get_db)):
    # Example: Number of appointments per month
    result = db.execute("""
        SELECT DATE_TRUNC('month', scheduled_time) as month, COUNT(id) as total
        FROM appointments
        GROUP BY month
        ORDER BY month
    """).fetchall()
    return [dict(row) for row in result]