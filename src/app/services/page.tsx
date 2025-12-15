"use client";

import Link from "next/link";
import { ArrowRight, Shield, Users, Heart, Star, Calendar } from "lucide-react";

const ClinicalServices = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
              <Shield size={20} />
              <span className="font-semibold">Professional Clinical Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Spagyric EH-CAM Clinical Services
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
              Welcome to African Holistic Medicine Firm. We&apos;re specialists in Spagyric EH Clinical skills, 
              promoting Spagyric Electro Homeopathic natural healing.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We oppose the idea of treating our patients with synthetic drugs and conventional medicine approaches. 
                  Instead, we venture into treating clinical cases, solving problems, and providing solutions for many 
                  diseases using our clinical skills and 10 years of experience in an established TCAM Clinic setting.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">10 Years of Excellence</h3>
              </div>
              <p className="text-gray-700 text-lg">
                A decade of dedicated service in Spagyric Electro Homeopathic practice, 
                delivering proven results through specialized clinical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Star size={16} />
              Clinical Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                This is a totally non-conventional approach. We carry out all forms of patient examination in a non-surgical mode. 
                Our treatment modules look unique due to the diversity in natural holistic healing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Patient interest and recovery patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Integration of safe Spagyric EH remedies prescription</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span>Personalized diet therapy for nutrient deficiencies</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Chronic Case Management</h4>
                  <p className="text-gray-700">
                    In chronic cases, external therapeutic modalities may be in high demand to relieve pain 
                    and promote healing of poorly responded conventional treatment in chronic or acute conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Benefits of Spagyric EH</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                It&apos;s high time the poorly responded chemotherapy patients looked for Spagyric EH Practitioners&apos; intervention. 
                It should be noted that all types of Spagyric EH remedies are always found in Spagyric EH Clinics, and the 
                prescriptions are basically according to the law of opposites, law of polarization, and temperament of the patient.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Contact for Online Consultation
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Credentials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Registered Spagyric EH Practitioner */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Registered Spagyric EH Practitioner</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Registered Spagyric EH Practitioner is a practitioner with clinical skills in both Spagyric remedies and 
                Electro-homeopathic remedies. Similarly, the professional status of Spagyric EH practitioner&apos;s skills is advanced.
              </p>
            </div>

            {/* Registered Spagyric EH Therapist */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Registered Spagyric EH Therapist</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Registered Spagyric EH Therapist is a registered therapist with minimum skills in Spagyric EH remedies. 
                A registered therapist should prescribe Electro-homeopathic remedies corresponding to symptoms of Lymphatic and Sanguine temperament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Spagyric EH Healing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our certified practitioners for personalized Spagyric EH online patient consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalServices;