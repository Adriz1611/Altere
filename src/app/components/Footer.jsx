"use client";

import Image from "next/image";
import { ArrowUpCircle, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [year, setYear] = useState(new Date().getFullYear());
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Form submitted:', contactForm);
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <footer className="bg-gradient-to-t from-gray-100 to-white py-12 border-t border-gray-200 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image src="/nav-log.png" alt="AlteRe Logo" width={130} height={30} className="mb-4" />
                        <p className="text-sm text-gray-600 mb-2">Innovative solutions for a better future.</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail size={16} />
                            <a href="mailto:contact@altere.com" className="hover:underline">contact@altere.com</a>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                            <Phone size={16} />
                            <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Services</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-colors-secondary-500 transition">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
                        <form onSubmit={handleContactSubmit} className="space-y-2">
                            <input 
                                type="text" 
                                name="name"
                                value={contactForm.name}
                                onChange={handleInputChange}
                                placeholder="Your Name" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-colors-secondary-500"
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                value={contactForm.email}
                                onChange={handleInputChange}
                                placeholder="Your Email" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-colors-secondary-500"
                                required
                            />
                            <textarea 
                                name="message"
                                value={contactForm.message}
                                onChange={handleInputChange}
                                placeholder="Your Message" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-colors-secondary-500"
                                rows="3"
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full px-4 py-2 bg-colors-secondary-500 text-white rounded-md hover:bg-colors-secondary-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-colors-secondary-300 flex items-center justify-center"
                            >
                                <Send size={16} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                        {submitStatus === 'success' && (
                            <p className="mt-2 text-green-600 text-sm">Message sent successfully!</p>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col-reverse md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600 mt-4 md:mt-0">
                        © {year} AlteRe. All Rights Reserved. Designed by{" "}
                        <a href="#" className="text-colors-secondary-500 hover:underline">FireDevs</a>
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {[
                            { Icon: Twitter, href: "https://twitter.com" },
                            { Icon: Facebook, href: "https://facebook.com" },
                            { Icon: Instagram, href: "https://instagram.com" },
                            { Icon: Linkedin, href: "https://linkedin.com" }
                        ].map(({ Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-colors-secondary-500 transition"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollButton && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 bg-colors-secondary-500 text-white p-3 rounded-full shadow-lg hover:bg-colors-secondary-600 transition duration-300 focus:ring-4 focus:ring-colors-secondary-300"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ArrowUpCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}