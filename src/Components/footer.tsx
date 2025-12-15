import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/ness logo.jpeg";
import linkedin from "@/images/LinkedIn.png";
import youtube from "@/images/youtube.png";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 bg-teal-900 text-white mt-24">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image 
                src={Logo} 
                alt="EH-CAM Spagyric Logo" 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <span className="text-xl font-bold">EH-CAM Spagyric</span>
            </div>
          </Link>
          <p className="text-teal-100">
            Integrating ancient spagyric wisdom with evidence-based clinical practice for holistic healing.
          </p>
          <div className="flex gap-4">
            <Image src={facebook} alt="Facebook" width={24} height={24} className="cursor-pointer hover:opacity-80" />
            <Image src={instagram} alt="Instagram" width={24} height={24} className="cursor-pointer hover:opacity-80" />
            <Image src={youtube} alt="YouTube" width={24} height={24} className="cursor-pointer hover:opacity-80" />
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} className="cursor-pointer hover:opacity-80" />
            <Image src={twitter} alt="Twitter" width={24} height={24} className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-teal-300">Clinical Services</h3>
          <Link href="/services/consultations" className="text-teal-100 hover:text-white transition">
            Spagyric Consultations
          </Link>
          <Link href="/services/remedy-preparation" className="text-teal-100 hover:text-white transition">
            Remedy Preparation
          </Link>
          <Link href="/services/detox-programs" className="text-teal-100 hover:text-white transition">
            Detox Programs
          </Link>
          <Link href="/services/chronic-care" className="text-teal-100 hover:text-white transition">
            Chronic Condition Support
          </Link>
          <Link href="/services/workshops" className="text-teal-100 hover:text-white transition">
            Educational Workshops
          </Link>
        </div>

        {/* About Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-teal-300">About Us</h3>
          <Link href="/about/principles" className="text-teal-100 hover:text-white transition">
            Our Principles
          </Link>
          <Link href="/about/practitioners" className="text-teal-100 hover:text-white transition">
            Our Practitioners
          </Link>
          <Link href="/about/research" className="text-teal-100 hover:text-white transition">
            Research & Evidence
          </Link>
          <Link href="/about/international-collaboration" className="text-teal-100 hover:text-white transition">
            International Collaboration
          </Link>
          <Link href="/about/faq" className="text-teal-100 hover:text-white transition">
            FAQs
          </Link>
        </div>

        {/* Contact & Newsletter Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-teal-300 mb-4">Contact Us</h3>
            <p className="text-teal-100 mb-2">01 Civic Center Rd, Kofar Mata, Kano</p>
            <p className="text-teal-100 mb-2"></p>
            <p className="text-teal-100">+234 8032674787</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-300 mb-2">Stay Updated</h3>
            <p className="text-teal-100 mb-3">Receive our latest health insights and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-teal-700 text-center text-teal-300 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} EH-CAM Spagyric Clinical Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white transition">Medical Disclaimer</Link>
          </div>
        </div>
        <p className="mt-4">Developed with ❤️ for holistic health in Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;