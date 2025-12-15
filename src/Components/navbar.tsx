"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/ness logo.jpeg";
import Menu from "./Menu";

const NavBar = () => {
return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
    {/* Main Navigation */}
    <nav className="bg-green-700 border-b border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full relative">
            {/* Logo */}
            <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <Image
                src={Logo}
                alt="EH-CAM Spagyric Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-teal-600"
                priority
                />
                <h1 className="ml-3 text-lg sm:text-xl font-bold text-white hidden md:block">
                EH-CAM <span className="text-teal-200">Spagyric</span>
                </h1>
            </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-4">
            <Link
                href="/"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Home
            </Link>
            <Link
                href="/services"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Clinical Services
            </Link>
            <Link
                href="/acadamy"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Academy
            </Link>
            <Link
                href="/research"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Blogs
            </Link>
            <Link
                href="/about"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                About
            </Link>
            <Link
                href="/association"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Membership
            </Link>
            <Link
                href="/contact"
                className="text-white hover:text-teal-200 px-3 py-2 font-medium transition-colors"
            >
                Contact
            </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-4">
                {/* Login/Register Links */}
                <Link
                href="/login"
                className="text-white hover:text-teal-200 transition-colors px-3 py-2"
                >
                Login
                </Link>
                <Link
                href="/register"
                className="text-white hover:text-teal-200 transition-colors px-3 py-2"
                >
                Register
                </Link>
            </div>

            {/* Appointment Button - Visible on tablet and desktop */}
            <Link
                href="/appointment"
                className="hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
                Book Appointment
            </Link>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center ml-2">
                <Menu />
            </div>
            </div>
        </div>
        </div>
    </nav>
    </header>
);
};

export default NavBar;