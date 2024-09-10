"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

const Navlinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/"
    },
    {
        name: "Contact",
        link: "/"
    },
]

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <header className="py-6 grid grid-cols-3">
            <Image src="/nav-log.png" alt="logo" height={150} width={150} className="py-2 px-4 col-span-1"/>
            <nav className="border-2 p-[1px] w-1/2 rounded-[2rem] flex flex-row items-center justify-center col-span-2">
                <div className="flex flex-row items-center justify-evenly w-full text-center relative z-[100] ">
                    {
                        Navlinks.map((link, index) => {
                            return (
                                <Link className="rounded-[2rem] items-center justify-center relative py-3 w-full"
                                      key={index} href={link.link}
                                      onClick={() => setActiveIndex(index)}><span>{link.name}</span>
                                    {
                                        index === activeIndex && (
                                            <motion.div
                                                layoutId="navbar"
                                                aria-hidden="true"
                                                style={{
                                                    width: "100%",
                                                }}
                                                transition={{
                                                    type: "tween",
                                                    duration: 0.3,
                                                }}
                                                className="bg-green-500 absolute h-full rounded-[2rem] left-0 bottom-0 -z-10"/>
                                        )
                                    }
                                </Link>

                            )
                        })
                    }
                </div>
            </nav>

        </header>
    )
}