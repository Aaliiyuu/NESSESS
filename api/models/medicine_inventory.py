from sqlalchemy import Column, Integer, String, DateTime, Float
from api.core.database import Base

class MedicineInventory(Base):
    __tablename__ = "medicine_inventory"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    quantity = Column(Integer, nullable=False, default=0)
    price = Column(Float, nullable=False)
    created_at = Column(DateTime, nullable=False)