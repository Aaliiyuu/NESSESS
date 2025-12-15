import { z } from "zod";

export const practitionerFormSchema = z.object({
user_id: z.number().int().positive(),
specialization: z.string().optional(),
license_number: z.string().optional(),
address: z.string().optional(),
city: z.string().optional(),
state: z.string().optional(),
country: z.string().optional(),
latitude: z.string().optional(),
longitude: z.string().optional(),

// Clinic Address
clinic_address: z.object({
    clinic_name: z.string().min(1),
    address_line_1: z.string().min(1),
    address_line_2: z.string().optional(),
    city: z.string().min(1),
    state: z.string().min(1),
    lga: z.string().optional(),
    country: z.string().default("Nigeria"),
    phone_number: z.string().min(10),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    staff_count: z.number().int().optional(),
    staff_details: z.string().optional(),
    focus_areas: z.string().optional(),
    eh_cam_practitioner_id: z.string().optional(),
    social_facebook: z.string().url().optional(),
    social_whatsapp: z.string().url().optional(),
    social_instagram: z.string().url().optional(),
}),

// Trainings
trainings: z.array(
    z.object({
    certificate_obtained: z.string().optional(),
    awarding_body: z.string().min(1),
    duration: z.string().optional(),
    training_center: z.string().min(1),
    course_of_study: z.string().min(1),
    })
).optional()
});

export type PractitionerFormData = z.infer<typeof practitionerFormSchema>;
