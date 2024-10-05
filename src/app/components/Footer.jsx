"use client";

import Image from "next/image";
import { ArrowUpCircle, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-gradient-to-t from-gray-100 to-white py-8 border-t border-gray-200 relative">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start text-gray-600 text-sm space-y-2">
                    <p>All Rights Reserved</p>
                    <p>
                        Designed by{" "}
                        <a href="#" className="text-colors-secondary-500 hover:underline">
                            SYNAR Technology
                        </a>
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline text-gray-500">Privacy Policy</a>
                        <a href="#" className="hover:underline text-gray-500">Terms of Service</a>
                    </div>
                </div>

                {/* Center Logo */}
                <div>
                    <Image src="/nav-log.png" alt="AlteRe Logo" width={130} height={30} />
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-colors-secondary-500 transition"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-colors-secondary-500 transition"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-colors-secondary-500 transition"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-colors-secondary-500 transition"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                {/* Scroll to Top Button */}
                <button
                    className="fixed bottom-6 right-6 bg-colors-secondary-500 text-white p-3 rounded-full shadow-lg hover:bg-colors-secondary-600 transition duration-300 focus:ring-4 focus:ring-colors-secondary-300"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <ArrowUpCircle className="w-6 h-6" />
                </button>
            </div>
        </footer>
    );
}
