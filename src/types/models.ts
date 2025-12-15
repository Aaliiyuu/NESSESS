// types.ts

// -------------------------
// Enums
// -------------------------
export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}

export enum UserRole {
  ADMIN = "admin",
  PRACTITIONER = "practitioner",
  PATIENT = "patient"
}

// -------------------------
// Base Interfaces
// -------------------------
export interface BaseModel {
  id: number;
  created_at: Date;
  updated_at?: Date;
}

// -------------------------
// User
// -------------------------
export interface UserBase {
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  date_of_birth?: Date;
  gender?: Gender;
  profile_picture?: string;
  is_active?: boolean;
  role: UserRole;
}

export interface UserCreate extends UserBase {
  password: string;
}

export interface UserResponse extends UserBase, BaseModel {}

export interface UserWithPractitionerResponse extends UserResponse {
  practitioner?: PractitionerResponse;
}

// -------------------------
// Document
// -------------------------
export interface DocumentBase {
  document_type: string;
  file_path: string;
}

// Use type alias instead of empty interface
export type DocumentCreate = DocumentBase;

export interface DocumentResponse extends DocumentBase, BaseModel {}

// -------------------------
// Qualification
// -------------------------
export interface QualificationBase {
  certificate_obtained: string;
  awarding_body: string;
  duration?: string;
  training_center: string;
  course_study: string;
}

// Use type alias instead of empty interface
export type QualificationCreate = QualificationBase;

export interface QualificationResponse extends QualificationBase, BaseModel {}

// -------------------------
// Clinic Address
// -------------------------
export interface ClinicAddressBase {
  registration_number?: string;
  clinic_name: string;
  state: string;
  lga: string;
  address: string;
  phone_number: string;
  email?: string;
  staff_count?: number;
  certificate_issue_date?: Date;
  focus_description?: string;
  previous_association?: string;
  practice_place?: string;
  area_of_interest?: string;
  clinical_report_duration?: string;
  civil_service_engagement?: string;
  facebook?: string;
  whatsapp?: string;
}

// Use type alias instead of empty interface
export type ClinicAddressCreate = ClinicAddressBase;

export interface ClinicAddressResponse extends ClinicAddressBase, BaseModel {}

// -------------------------
// Practitioner
// -------------------------
export interface PractitionerBase {
  user_id: number;
  state: string;
  lga: string;
  nationality: string;
  tribe?: string;
  religion?: string;
  nin_number: string;
  residential_address: string;
  specialization?: string;
  license_number?: string;
  years_of_practice?: number;
  highest_qualification?: string;
  other_medicine_practice?: string;
  current_operation?: string;
  other_association_membership?: string;
  membership_category?: string;
}

// Use type alias instead of empty interface
export type PractitionerCreate = PractitionerBase;

export interface PractitionerUpdate {
  specialization?: string;
  license_number?: string;
  years_of_practice?: number;
  highest_qualification?: string;
  other_medicine_practice?: string;
  current_operation?: string;
  other_association_membership?: string;
  membership_category?: string;
  is_approved?: boolean;
  clinic_address?: ClinicAddressCreate;
  qualifications?: QualificationCreate[];
  documents?: DocumentCreate[];
}

export interface PractitionerResponse extends PractitionerBase, BaseModel {
  user?: UserResponse;
  clinic_address?: ClinicAddressResponse;
  qualifications: QualificationResponse[];
  documents: DocumentResponse[];
  is_approved?: boolean;
}

// -------------------------
// Admin Approval
// -------------------------
export interface AdminPractitionerApproveUpdate {
  is_approved: boolean;
  registration_number?: string;
}

// -------------------------
// API Response Types
// -------------------------
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

// -------------------------
// Request Types
// -------------------------
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  date_of_birth?: Date;
  gender?: Gender;
  profile_picture?: string;
  is_active?: boolean;
  role: UserRole;
  password: string;
  practitioner?: PractitionerCreate;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordChangeRequest {
  current_password: string;
  new_password: string;
}

// -------------------------
// Dashboard Stats
// -------------------------
export interface DashboardStats {
  totalUsers: number;
  totalPractitioners: number;
  pendingPractitioners: number;
  totalPatients: number;
  totalRecords: number;
  totalPayments: number;
  totalAppointments: number;
}

// -------------------------
// Filter Types
// -------------------------
export interface PaginationParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PractitionerFilterParams extends PaginationParams {
  state?: string;
  lga?: string;
  specialization?: string;
  is_approved?: boolean;
  search?: string;
}

export interface UserFilterParams extends PaginationParams {
  role?: UserRole;
  is_active?: boolean;
  search?: string;
}