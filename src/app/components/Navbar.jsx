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
        <header>

        </header>
    );
}
