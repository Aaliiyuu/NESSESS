export type UserRole = "admin" | "practitioner" | "patient";
export type Gender = "male" | "female" | "other";

export interface UserInDB {
id: number;
email: string;
first_name: string;
surname: string;
other_names?: string | null;
date_of_birth: string; // ISO datetime from backend
gender: Gender;
phone_number: string;
profile_picture?: string | null;
role: UserRole;
is_active: boolean;
created_at: string; // ISO datetime from backend
}

export interface UserCreate {
email: string;
password: string; // required for creation
first_name: string;
surname: string;
other_names?: string;
date_of_birth: string; // send as ISO string
gender: Gender;
phone_number: string;
profile_picture?: string;
role: UserRole;
}

export interface UserUpdate {
email?: string;
password?: string;
first_name?: string;
surname?: string;
other_names?: string;
date_of_birth?: string; // ISO string
gender?: Gender;
phone_number?: string;
profile_picture?: string;
role?: UserRole;
is_active?: boolean;
}
