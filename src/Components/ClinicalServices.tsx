"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, FlaskRound, GraduationCap } from "lucide-react";
import download from "@/images/download.png";

const Services = () => {
    const services = [
        {
            title: "Clinical Services",
            description: "Our expert practitioners provide personalized Spagyric medicine consultations, creating tailored treatment plans based on Count Mattei's principles and modern clinical research. We address root causes of health issues through holistic assessment and customized spagyric formulations.",
            link: "/services",
            icon: Users
        },
        {
            title: "Spagyric Remedy Preparation",
            description: "Using specialized processes combined with modern quality standards, we prepare potent spagyric essences, solutions, and remedies. Our preparations follow strict protocols to ensure maximum bioavailability and therapeutic effectiveness.",
            link: "/academy",
            icon: FlaskRound
        },
        {
            title: "Research & Education",
            description: "We collaborate with international Spagyric EH members to advance research and education in Nigeria. Our programs include practitioner training, public workshops, and clinical studies to validate spagyric approaches.",
            link: "/research-education",
            icon: GraduationCap
        }
    ];

    return (
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Users size={16} />
                        Our Specialized Services
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Professional Spagyric Services
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive Spagyric Electro Homeopathic solutions integrating specialized knowledge with modern clinical practice
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div 
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200"
                            >
                                <div className="h-48 relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                    <Image 
                                        src={download} 
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                        {service.description}
                                    </p>
                                    <Link href={service.link} className="inline-flex items-center gap-2 group/link">
                                        <button className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform group-hover/link:translate-x-1 shadow-md hover:shadow-lg">
                                            Learn More
                                            <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 lg:mt-20">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Experience Professional Spagyric Care?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Connect with our certified practitioners to begin your journey toward holistic wellness and natural healing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/appointment">
                                <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Schedule Consultation
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                    Contact Our Team
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;