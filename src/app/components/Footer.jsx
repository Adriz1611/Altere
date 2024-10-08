"use client";

import Image from "next/image";
import { ArrowUpCircle, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "food-recycling", label: "Food Recycling" },
  { id: "feed-manufacturing", label: "Feed Manufacturing" },
  { id: "impact", label: "Impact" },
];

const SOCIAL_LINKS = [
  { Icon: Twitter, href: "https://x.com/altere_" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/alterein/" },
];

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white py-12 border-t border-gray-200 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/nav-log.png" alt="AlteRe Logo" width={130} height={30} />
            <p className="text-sm text-gray-600">Innovative solutions for a better future.</p>
            {[
              { Icon: Mail, href: "mailto:sreyance@altere.in", text: "sreyance@altere.in" },
              { Icon: Phone, href: "tel:+91 8876987246", text: "+91 8876987246" },
            ].map(({ Icon, href, text }) => (
              <div key={href} className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon size={16} />
                <a href={href} className="hover:underline">
                  {text}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-colors-green-main">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    className="text-gray-600 hover:text-colors-secondary-500 transition cursor-pointer"
                    onClick={() => scrollToSection(id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-colors-green-main">Our Purpose</h3>
            {[
              {
                title: "Mission",
                content:
                  "To revolutionize waste management through innovative solutions, promoting sustainability and environmental responsibility.",
              },
              {
                title: "Vision",
                content:
                  "A world where waste is minimized, resources are conserved, and communities thrive in a cleaner, healthier environment.",
              },
            ].map(({ title, content }) => (
              <div key={title} className="space-y-2">
                <h4 className="font-medium text-colors-green-main">{title}</h4>
                <p className="text-sm text-gray-600">{content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            © {year} AlteRe. All Rights Reserved. Designed by{" "}
            <Link
              href="#"
              className="text-colors-green-main font-bold hover:underline"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:firedevsfreelance@gmail.com";
              }}
            >
              FireDevs
            </Link>
          </p>

          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ Icon, href }, index) => (
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
