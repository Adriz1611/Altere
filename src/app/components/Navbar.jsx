"use client";

import { useState } from "react";


const Navlinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Impact", link: "/" },
    { name: "Metrics", link: "/" },
];

export default function Navbar() {
    const [active, setActive] = useState(false);

    return (
        <header>

        </header>
    );
}
