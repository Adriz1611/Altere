"use client";

import {useState} from "react";
import Image from "next/image";


const Navlinks = [
    {name: "Home", link: "/"},
    {name: "About", link: "/"},
    {name: "Food Recycling", link: "/"},
    {name: "Feed Manufactures", link: "/"},
    {name: "Impact", link: "/"},
];

export default function Navbar() {
    const [active, setActive] = useState(false);

    return (
        <header className="shadow-[0px_5px_5px_0px_rgba(0,_0,_0,_0.22)] w-full fixed z-10 bg-white">
            <nav className="flex flex-row justify-between items-center mx-64 py-4">
                <Image src="/nav-log.png" alt="AlteRe Logo" width={130} height={0}/>
                <ul className="flex flex-row gap-8 font-main items-center">
                    {Navlinks.map((link) => (
                        <li key={link.name}>
                            <a className="text-base font-medium" href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <button className="bg-colors-secondary-500 py-3 px-5 rounded-xl text-white font-medium">
                        Contact Us
                    </button>
                </ul>
            </nav>
        </header>

    );
}
