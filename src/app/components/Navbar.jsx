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
        <header className="py-6">
            <center>
                <nav className="border w-1/2 rounded-[2rem] flex flex-row items-center justify-between ">
                    <Image src="/nav-log.png" alt="logo" height={120} width={120} className="py-2 px-4"/>
                    <div className="flex flex-row uppercase relative z-[100] ">
                        {
                            Navlinks.map((link, index) => {
                                return (
                                    <Link className="rounded-[2rem] items-center justify-center w-28 relative py-3 " key={index} href={link.link}
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
            </center>
        </header>
    )
}