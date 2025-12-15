"use client"

import React from "react";

const PatientForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <form className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-10">
        {/* Form Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Patient Registration</h2>
          <p className="text-gray-600">Please fill out all required fields</p>
        </div>

        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-700 border-b border-green-100 pb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Age <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="30" 
                min="0" 
                max="120" 
                required 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
              <select className="input-field" required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                className="input-field" 
                placeholder="+1234567890" 
                required 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="123 Main St, City" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Your profession" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. O+" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Blood Sugar (mg/dL)</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. 90" 
              />
            </div>
            
            <div className="md:col-span-2 space-y-1">
              <label className="block text-sm font-medium text-gray-700">Case History</label>
              <textarea 
                className="input-field" 
                rows={4} 
                placeholder="Brief medical history, allergies, etc." 
              />
            </div>
          </div>
        </div>

        {/* Body Status and Vitals */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-700 border-b border-green-100 pb-2">Current Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">SYS (mmHg)</label>
              <select className="input-field">
                <option value="">Select</option>
                <option>High (&gt;140)</option>
                <option>Normal (90-140)</option>
                <option>Low (&lt;90)</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">DS (mmHg)</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Diastolic pressure" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Pulse (bpm)</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Beats per minute" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Body Temp (°F)</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="98.6" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Body Type</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Ectomorph, Mesomorph, Endomorph" 
              />
            </div>
            
            <div className="md:col-span-2 space-y-1">
              <label className="block text-sm font-medium text-gray-700">Current Symptoms</label>
              <textarea 
                className="input-field" 
                rows={4} 
                placeholder="Describe your current symptoms" 
              />
            </div>
          </div>
        </div>

        {/* Medication */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-700 border-b border-green-100 pb-2">Current Medication</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Drug Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Medication name" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Medication Period</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. 2 weeks" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Current Feeling</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="How you're feeling" 
              />
            </div>
          </div>
        </div>

        {/* Practitioner Selection */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-700 border-b border-green-100 pb-2">Appointment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Preferred Doctor <span className="text-red-500">*</span></label>
              <select className="input-field" required>
                <option value="">Select a doctor</option>
                <option>Dr. Smith (General Physician)</option>
                <option>Dr. Johnson (Cardiologist)</option>
                <option>Dr. Williams (Neurologist)</option>
                <option>Dr. Brown (Pediatrician)</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Appointment Type <span className="text-red-500">*</span></label>
              <select className="input-field" required>
                <option value="">Select type</option>
                <option>New Patient Consultation</option>
                <option>Follow-up Visit</option>
                <option>Emergency Visit</option>
                <option>Routine Checkup</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Preferred Date <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                className="input-field" 
                required 
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Preferred Time <span className="text-red-500">*</span></label>
              <select className="input-field" required>
                <option value="">Select time</option>
                <option>Morning (9am-12pm)</option>
                <option>Afternoon (1pm-4pm)</option>
                <option>Evening (5pm-8pm)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Submit Registration
          </button>
        </div>
      </form>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx>{`
        .input-field {
          @apply w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .input-field:focus {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
      `}</style>
    </div>
  );
};

export default PatientForm;