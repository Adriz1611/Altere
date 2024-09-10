"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ToggleButton({ isOpen, setIsOpen}) {


    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <button
            onClick={toggleOpen}
            className="w-12 h-12 rounded-full flex items-center justify-center focus:outline-none md:hidden"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 4 6 L 20 6"
                    animate={{
                        d: isOpen ? "M 6 18 L 18 6" : "M 4 6 L 20 6",
                    }}
                />
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 4 12 L 20 12"
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        x: isOpen ? 20 : 0,
                    }}
                />
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 4 18 L 20 18"
                    animate={{
                        d: isOpen ? "M 6 6 L 18 18" : "M 4 18 L 20 18",
                    }}
                />
            </svg>
        </button>
    );
};

ToggleButton;