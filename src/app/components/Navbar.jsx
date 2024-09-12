"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ToggleButton from "@/app/components/ui/togglebutton";

const Navlinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Impact", link: "/" },
    { name: "Metrics", link: "/" },
];

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <header className="py-6 grid grid-cols-2 md:grid-cols-3 px-4 md:px-0 relative">
            <motion.div
                className="col-span-1 hidden md:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Image src="/nav-log.png" alt="logo" height={150} width={150} className="py-2 px-4" />
            </motion.div>
            <nav
                className="border-2 p-[1px] w-full md:w-1/2 rounded-[2rem] flex flex-row items-center justify-between md:justify-center col-span-2"
            >
                <motion.div
                    className="col-span-1 block md:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src="/nav-log.png" alt="logo" height={150} width={150} className="py-2 px-4" />
                </motion.div>
                <div
                    className={`absolute top-24 left-0 px-4 md:px-0 md:top-0 md:flex-row items-center justify-evenly w-full text-center md:relative z-[100]
                    ${active ? "flex" : "hidden md:flex"}
                    transition-transform duration-300 ease-in-out`}
                >
                    {Navlinks.map((link, index) => (
                        <Link
                            className="relative py-3 w-full font-main font-semibold transition-colors duration-300 ease-in-out hover:text-[#536e59]"
                            key={index}
                            href={link.link}
                            onClick={() => setActiveIndex(index)}
                        >
                            <motion.span
                                initial={{ color: "#000" }}
                                animate={index === activeIndex ? { color: "#fff" } : { color: "#000" }}
                                transition={{ duration: 0.3 }}
                            >
                                {link.name}
                            </motion.span>
                            {index === activeIndex && (
                                <motion.div
                                    layoutId="navbar"
                                    aria-hidden="true"
                                    style={{ width: "100%" }}
                                    transition={{ type: "tween", duration: 0.3 }}
                                    className="bg-[#536e59] absolute h-full rounded-[2rem] left-0 bottom-0 -z-10"
                                />
                            )}
                        </Link>
                    ))}
                </div>
                <ToggleButton isOpen={active} setIsOpen={setActive} />
            </nav>
        </header>
    );
}
