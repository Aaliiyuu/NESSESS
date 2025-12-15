from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class DocumentBase(BaseModel):
    practitioner_id: int
    file_path: str
    document_type: str

class DocumentCreate(DocumentBase):
    pass

class DocumentOut(DocumentBase):
    id: int
    status: str
    uploaded_at: datetime

    class Config:
        orm_mode = True