"use client";

import Link from "next/link";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

interface HeroSectionProps {
title?: string;
subtitle?: string;
primaryButtonText?: string;
secondaryButtonText?: string;
primaryButtonLink?: string;
secondaryButtonLink?: string;
showStats?: boolean;
}

const HeroSection = ({
title = "Spagyric Medical Practitioners",
subtitle = "Advancing Complementary and Alternative Medicine in Nigeria through Professional Excellence",
primaryButtonText = "Learn More",
secondaryButtonText = "Membership",
primaryButtonLink = "/about",
secondaryButtonLink = "/membership",
showStats = true
}: HeroSectionProps) => {
const stats = [
    { number: "500+", label: "Certified Practitioners", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "50+", label: "Training Programs", icon: BookOpen },
];

return (
    <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 lg:py-28 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Professional Medical Association</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed opacity-95">
            {subtitle}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
            href={primaryButtonLink}
            className="group inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
            {primaryButtonText}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
            href={secondaryButtonLink}
            className="group inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
            {secondaryButtonText}
            <Users size={20} className="ml-2 group-hover:scale-110 transition-transform" />
            </Link>
        </div>

        {/* Statistics */}
        {showStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                <div
                    key={index}
                    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                    <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white/20 rounded-full">
                        <IconComponent size={24} className="text-white" />
                    </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-white/80 font-medium">
                    {stat.label}
                    </div>
                </div>
                );
            })}
            </div>
        )}
        </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
        </div>
    </div>
    </section>
);
};

export default HeroSection;