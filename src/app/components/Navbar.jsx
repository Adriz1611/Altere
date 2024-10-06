"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import Lucide Icons for better mobile experience

const Navlinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Food Recycling", link: "food-recycling" },
    { name: "Impact", link: "impact" },
];

export default function Navbar() {
    const [active, setActive] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => {
        setActive(!active);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
        setActive(false);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <header className="shadow-md w-full fixed z-50 bg-white ">
            <nav className="flex justify-between items-center mx-4 lg:mx-64 py-4">
                {/* Logo */}
                <Image src="/nav-log.png" alt="AlteRe Logo" width={130} height={0} />

                {/* Desktop Links */}
                <ul className="hidden lg:flex flex-row gap-8 font-main items-center">
                    {Navlinks.map((link) => (
                        <li key={link.name} className="relative group">
                            <a
                                className="text-base font-medium relative overflow-hidden block transition-colors duration-300 ease-in-out hover:text-colors-secondary-500 cursor-pointer"
                                onClick={() => scrollToSection(link.link)}
                            >
                                {link.name}
                                {/* Hover underline animation */}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-colors-secondary-500 transform origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-out"></span>
                            </a>
                        </li>
                    ))}
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="bg-colors-secondary-500 py-3 px-5 rounded-xl text-white font-medium hover:bg-colors-secondary-600 transition-colors duration-300"
                    >
                        Contact Us
                    </button>
                </ul>

                {/* Hamburger Menu for Mobile */}
                <button
                    aria-label="Toggle menu"
                    className="lg:hidden block focus:outline-none z-50 relative"
                    onClick={toggleMenu}
                    aria-expanded={active ? "true" : "false"}
                >
                    {active ? (
                        <X className="w-6 h-6 text-black" />
                    ) : (
                        <Menu className="w-6 h-6 text-black" />
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-0 w-full h-full bg-white transition-transform duration-500 ease-in-out z-40 ${active ? "translate-x-0" : "-translate-x-full"
                        } shadow-lg`}
                >
                    <ul className="flex flex-col items-center gap-6 py-16 font-main text-lg">
                        {Navlinks.map((link) => (
                            <li key={link.name} className="group">
                                <a
                                    className="text-lg font-medium block transition-colors duration-300 ease-in-out hover:text-colors-secondary-500 cursor-pointer"
                                    onClick={() => scrollToSection(link.link)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="bg-colors-secondary-500 py-3 px-5 rounded-xl text-white font-medium hover:bg-colors-secondary-600 transition-colors duration-300"
                        >
                            Contact Us
                        </button>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
