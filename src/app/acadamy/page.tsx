"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bello from "@/images/bello.jpg";
import { 
GraduationCap, 
Target, 
Eye, 
BookOpen, 
Users, 
Award, 
CheckCircle,
ArrowRight,
FileText,
Calendar,
UserCheck
} from "lucide-react";

const AcademyPage = () => {
const [activeTab, setActiveTab] = useState("mission");

const missionContent = [
    {
    title: "Mission Statement",
    content: `The mission of the Institute is to provide Spagyric Electro-homeopathy/electropathy standard and formal Educational training, clinical research and complementing healthcare under the exiting national, state and local government Nigeria healthcare policy, west African countries and African countries at large, however, to invest more efforts financially and otherwise in the Community Services for Socioeconomic development. This concept will be neutral to the cultural heritage of the Host community involving Kano State in Particular and North-western Geopolitical Zone in general.`
    },
    {
    title: "Vision Statement",
    content: `To be a world–class citadel of learning that provides general Practices of Spagyric Therapy/ Electro-Homeopathic Medicine and holistic approaches to study therapeutic modalities outside Allopathic Medicine preamble and directed towards the training of highly knowledgeable skilled and discipline citizens.`
    }
];

const objectives = [
    "To focus on Complementary and alternative medical therapeutic modalities, clinical practice and research correspondence to Spagyric EH Philosophy, principles and clinically study Homeopathic medical boundaries and beyond.",
    "To mitigate pains through multiples approaches and Clinically continues Program development. (CCPD) analytical external and internal therapeutic modalities of patients responses in each seasonal humid of the state geographical zones, locations and local government areas in Nigeria, west African countries and the African continent at large for good Spagyric general practice, research within the boundaries of EH - CAM Operational guidelines.",
    "To liaise with an active national colleges and institute of Complementary and Alternative Medicine internationally, Nigeria or elsewhere for collaboration and Spagyric medicine as CAM clinical partnerships physically or virtual workshop/ seminars, webinar and e. t. c.",
    "To work under the existing healthcare policy and established law in line with proposed regulatory bodies/ agencies under federal, state and local government areas for all branches of Complementary and Alternative Medicine. And Spagyric EH practices specifically",
    "To provide courses of instruction and other facilities for the pursuit of learning in all its branches and make these facilities available on proper terms to such persons who are fit to benefit from them;",
    "To produce quality graduates at certificate and diploma levels fully conscious of their history and duty to serve and empower their community to face its many challenges;",
    "To recruit, develop and maintain highly qualified teaching staff that will be active in, and renowned for research and commitment to teaching;",
    "To dedicate itself to the challenges of solving societal problems by encouraging collaboration and innovative multidisciplinary research and seeking out old and new challenges that have been ignored;",
    "To orient itself and work with the community, drawing inspiration and documenting the philosophies, ideas, achievements, academic outputs and examples of ancient states in the West Countries and African countries at large, similarly, promoting ancient therapeutic modalities restoration and preserving the whole cultures involving healing techniques in west Africa countries and African at large.",
    "To establish and nurture relationships with community, organizations, government agencies as well as the private sector to enhance the educational, economic, religious and socio-cultural vitality of the Stats innovating healthcare system through CAM.",
    "To encourage the exploration of local technologies as well as stimulate innovation, adaption and application of intermediate and cost effective technology solution to societal problems of environmental degradation and desertification, systematic ways of medicinal plant agricultural output, delivery of educational and healthcare services to the rural populace, along with water supply and housing challenges, amongst others;",
    "To creatively infuse activities that map all academic studies to real-life skills and services by attachments, visitations and such other mechanisms as seem feasible, so that all students in all disciplines benefit from mentoring and guidance from practitioners in their related fields of study and appreciate the dignity of labour;",
    "To equip all students with innovative healthcare entrepreneurship skills so as to empower them to be job creators rather than job seekers upon graduation;",
    "To promote sound moral principles, ethics, national unity, excellence and service to God and humanity;",
    "To relate its activities to the cultural, social, religious, and economic needs of the people of Kano State in particular, Nigeria, West Africans and largely African countries in general;",
    "To undertake any other activities, appropriate for a university of the highest standing."
];

const principalOfficers = [
    {
    image: bello,
    name: "Dr. Bello Adam",
    qualifications: "MD Homeopathy, RDT ADSEHom",
    designation: "Chairman Board of Directors, Director Clinical Services and Research, Chairman Board of trustee NESSMP"
    },
    {
    image: bello,
    name: "Dr Amina Abubakar",
    qualifications: "Bsc, Msc human anatomist, Spagyric EH Therapist Cert",
    designation: "Academic Director EH-TCAM Holistic Medical Services LTD, Secretary general (NESSMP)"
    },
    {
    image: bello,
    name: "Dr. Monica Ngozi Okoye",
    qualifications: "MD Homeopathy Diploma in Spagyric EH",
    designation: "Southeast Zone coordinator"
    }
];

const programOverview = {
    title: "Diploma in Spagyric Therapy/ Electro-Homeopathic Medicine",
    description: `The Spagyric Therapy/Electro-homeopathic Medicine recognizes the dire need for healing knowledge and skills of the 21st Century, with a focus on the development and utilization of digital economy. Consequently, the programme shares the mission and vision statements of the Spagyric Therapy/Electro-homeopathic Medicine that houses other EH-CAM Spagyric programmes in a two-years academic programme, leading to the award of the diploma of Spagyric Therapy/Electro-homeopathic Medicine The programme equally provides an opportunity by individual/college/institute to include local needs in their course contents delivery.`
};

const admissionRequirements = [
    "2 Year Programme",
    "Credit passes in five Senior Secondary Certificate (SSCE) (or its equivalent)",
    "Credit passes in English, Mathematics, Biology, Chemistry and Physics and two other relevant subjects",
    "Not more than 2 sittings",
    "Credit level pass in a recognized College/institute Certificate programme"
];

const graduationRequirements = [
    "Pass all units of courses during the 2-year diploma programme",
    "Complete 6 months clinical internship in Certified Spagyric EH-CAM Clinic",
    "Transparent FPC Cards record approved by Registered Spagyric EH Practitioner",
    "CGPA used in determination of diploma class"
];

return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <GraduationCap size={24} />
            <span className="font-semibold">Professional Education</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            College of Spagyric Therapy
        </h1>
        <div className="w-24 h-1 bg-white rounded-full mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95">
            Electro-Homeopathic Medicine - EH-CAM Spagyric
        </p>
        </div>
    </section>

    {/* Navigation Tabs */}
    <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto space-x-8">
            {[
            { id: "mission", label: "Mission & Vision", icon: Target },
            { id: "objectives", label: "Objectives", icon: BookOpen },
            { id: "leadership", label: "Leadership", icon: Users },
            { id: "programs", label: "Academic Programs", icon: GraduationCap },
            { id: "admission", label: "Admission", icon: UserCheck }
            ].map((tab) => {
            const IconComponent = tab.icon;
            return (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-6 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                >
                <IconComponent size={20} />
                {tab.label}
                </button>
            );
            })}
        </div>
        </div>
    </section>

    {/* Mission & Vision Content */}
    {activeTab === "mission" && (
        <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {missionContent.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === 0 ? "bg-green-100" : "bg-blue-100"
                    }`}>
                    {index === 0 ? (
                        <Target className="w-6 h-6 text-green-600" />
                    ) : (
                        <Eye className="w-6 h-6 text-blue-600" />
                    )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    )}

    {/* Objectives Content */}
    {activeTab === "objectives" && (
        <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Institutional Objectives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )}

    {/* Leadership Content */}
    {activeTab === "leadership" && (
        <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Principal Officers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principalOfficers.map((officer, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    <Image 
                    src={officer.image} 
                    alt={officer.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{officer.name}</h3>
                <p className="text-green-600 font-medium mb-3">{officer.qualifications}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{officer.designation}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    )}

    {/* Programs Content */}
    {activeTab === "programs" && (
        <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{programOverview.title}</h2>
                <p className="text-green-600 font-medium">Department of Complementary and Alternative Medicine</p>
                </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                <p className="text-xl leading-relaxed">{programOverview.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Course Example: EH101
                </h3>
                <p className="text-gray-700 mb-2"><strong>Introduction to Holistic Medicine</strong> (2 Units)</p>
                <p className="text-sm text-gray-600">Learning hours: 30 | Focus: Fundamental principles and contemporary state of Holistic Medicine</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Program Duration
                </h3>
                <p className="text-gray-700"><strong>2 Years</strong> Academic Program</p>
                <p className="text-gray-700"><strong>6 Months</strong> Clinical Internship</p>
                <p className="text-sm text-gray-600 mt-2">Comprehensive training with practical clinical experience</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    )}

    {/* Admission Content */}
    {activeTab === "admission" && (
        <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Admission Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-green-600" />
                Admission Requirements
                </h2>
                <div className="space-y-4">
                {admissionRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700">{requirement}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Graduation Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-600" />
                Graduation Requirements
                </h2>
                <div className="space-y-4">
                {graduationRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{requirement}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Begin Your Professional Journey
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join our prestigious Diploma program in Spagyric Therapy and Electro-Homeopathic Medicine
                </p>
                <Link href="/admission">
                <button className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Apply Now
                    <ArrowRight size={20} />
                </button>
                </Link>
            </div>
            </div>
        </div>
        </section>
    )}
    </div>
);
};

export default AcademyPage;