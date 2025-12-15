"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Shield, BookOpen } from "lucide-react";

const AboutElectroHomeopathy = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf size={16} />
            Understanding Electro-Homeopathy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Electro-Homeopathy?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Definition Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Understanding the Terminology
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Electro-Homeopathy is derived from three fundamental components:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-semibold text-green-700">Electro = Energy</span>
                    <p className="text-gray-600 text-sm mt-1">
                      The vital energy principle in plants, blood, and lymph systems
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-semibold text-green-700">Homeo = Similar</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Following the principle of like cures like
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-semibold text-green-700">Pathy = Suffering</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Addressing pathological conditions and suffering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Professional Practice Framework
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The phenomenon involves studying impurities in blood, lymph, and constitutional 
                  pathology, corresponding to the law of temperament and selection of remedies 
                  according to the law of opposites by registered Spagyric EH Practitioners.
                </p>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium text-sm">
                    This constitutes legitimate Spagyric EH practices as recognized and regulated in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CAM Overview */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complementary &amp; Alternative Medicine (CAM)
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A comprehensive framework of healing practices recognized and integrated within Nigeria&apos;s healthcare system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Complementary Medicine</h4>
              <p className="text-gray-600 text-sm">
                Used alongside conventional medical treatments to enhance patient care and therapeutic outcomes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Alternative Medicine</h4>
              <p className="text-gray-600 text-sm">
                Non-conventional approaches used in place of mainstream medical treatments when appropriate
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advancing Professional Excellence in Electro-Homeopathy
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our mission is to promote evidence-based healing systems while maintaining the highest standards of professional practice and patient care.
            </p>
            <Link href="/about">
              <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Professional Resources
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutElectroHomeopathy;