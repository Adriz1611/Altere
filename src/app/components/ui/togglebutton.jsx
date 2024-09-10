"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ToggleButton({ isOpen, setIsOpen}) {


    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <button
            onClick={toggleOpen}
            className="w-12 h-12 rounded-full border flex items-center justify-center focus:outline-none md:hidden"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 2 2.5 L 20 2.5"
                    animate={{
                        d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
                    }}
                />
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    animate={{
                        opacity: isOpen ? 0 : 1,
                        x: isOpen ? 20 : 0,
                    }}
                />
                <motion.path
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 2 16.346 L 20 16.346"
                    animate={{
                        d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
                    }}
                />
            </svg>
        </button>
    );
};

ToggleButton;