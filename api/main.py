from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.database import engine, Base

# Import all models BEFORE create_all
from api.models import user, patient, practitioner, payment, appointment, medical_record  

from api.routers import (
    auth,
    admin,
    practitioner as practitioner_router,
    patient as patient_router,
    payments,
    appointments,
    analytics,
)

# Now SQLAlchemy knows about all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Spagyric Electro-Homeopathic Hospital Management System")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(admin.router, prefix="/admin", tags=["Admin"])
app.include_router(practitioner_router.router, prefix="/practitioner", tags=["Practitioner"])
app.include_router(patient_router.router, prefix="/patient", tags=["Patient"])
app.include_router(payments.router, prefix="/payments", tags=["Payments"])
app.include_router(appointments.router, prefix="/appointments", tags=["Appointments"])
app.include_router(analytics.router, prefix="/analytics", tags=["Analytics"])
