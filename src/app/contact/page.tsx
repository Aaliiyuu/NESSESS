"use client";

import { useState } from "react";

export default function AppointmentForm() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    appointment_time: "",
});

const [success, setSuccess] = useState(false);
const [error, setError] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
    const res = await fetch("http://127.0.0.1:8000/appointments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to book appointment");

    setSuccess(true);
    setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        appointment_time: "",
    });
    } catch (err) {
    // Fix 1: Type the error properly instead of using 'any'
    if (err instanceof Error) {
        setError(err.message);
    } else {
        setError("Something went wrong");
    }
    } finally {
    setIsSubmitting(false);
    }
};

return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Book an Appointment
    </h2>

    {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
        <p className="font-medium">Appointment booked successfully!</p>
        <p className="text-sm mt-1">
            {/* Fix 2: Escape the apostrophe */}
            We&apos;ll contact you shortly to confirm your appointment.
        </p>
        </div>
    )}

    {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
        <p className="font-medium">Error</p>
        <p className="text-sm mt-1">{error}</p>
        </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">
        <div>
        <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Full Name
        </label>
        <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
        <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Email
        </label>
        <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
        <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Phone Number
        </label>
        <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
        <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Reason for Appointment
        </label>
        <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Please describe the reason for your visit"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div>
        <label
            htmlFor="appointment_time"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Preferred Date & Time
        </label>
        <input
            id="appointment_time"
            name="appointment_time"
            value={formData.appointment_time}
            onChange={handleChange}
            type="datetime-local"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
            isSubmitting
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        }`}
        >
        {isSubmitting ? "Processing..." : "Book Appointment"}
        </button>
    </form>
    </div>
);
}