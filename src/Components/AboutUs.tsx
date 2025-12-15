"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Complement from "@/images/comple2.jpg";

const AboutUs = () => {
  // Professional animation variants with proper TypeScript types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const  // Use 'as const' or specify exact string literal
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      id="about-us"
      className="w-full bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="about-us-heading"
    >
      {/* Professional background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Professional Section Header */}
          <header className="text-center mb-16 lg:mb-20">
            <motion.div 
              variants={itemVariants}
              className="inline-flex flex-col items-center mb-8"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-4" />
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              id="about-us-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Electro Homeopathy Complementary 
              <span className="block text-green-600">and Alternative Medicine</span>
            </motion.h2>

            <motion.div variants={itemVariants}>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto" />
            </motion.div>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            {/* Professional Image Section */}
            <motion.div 
              variants={imageVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={Complement}
                  alt="Traditional Complementary and Alternative Medicine practices"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={500}
                  priority
                  placeholder="blur"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/5" />
              </div>
              
              {/* Professional accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full -z-10" />
            </motion.div>

            {/* Professional Text Content */}
            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg lg:text-xl leading-relaxed lg:leading-loose font-light"
              >
                The Nigeria Complementary and Alternative Medicine (CAM) profession operates within a robust regulatory framework. All CAM branches are legally recognized and regulated by the Medical and Dental Council of Nigeria (MDCN), under Decree No. 38 of 1998 and the Medical and Dental Council Act of 1992. This comprehensive regulatory structure ensures standardized practice across various CAM specialties including Homeopathy, Naturopathy, Osteopathy, Chiropractic, and Acupuncture.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-gray-600 text-base lg:text-lg leading-relaxed font-light"
              >
                Our commitment to excellence and adherence to established medical standards guarantees the highest quality of care in electro homeopathy and complementary medicine practices.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="pt-4"
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center group"
                  aria-label="Learn more about our Complementary and Alternative Medicine practices"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center gap-3">
                    Learn More About Our Practice
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;