import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" }
    }
}

export const About = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="w-[90%] md:w-[80%] bg-white flex flex-col md:flex-row items-center justify-center mx-auto">
            <Image 
                src="/about-bg.png" 
                alt="about" 
                height={700} 
                width={400} 
                className="w-full md:w-[50%] object-contain" 
            />
            <div className="w-full md:w-[50%] px-5 py-10 md:py-20 flex flex-col gap-5 border bg-slate-200">
                <h2 className="font-main text-xl md:text-lg">Re-imagine food waste</h2>
                <h1 className="font-main text-2xl md:text-3xl">Transforming Waste into Valuable Resources</h1>
                <p className="font-main text-xl md:text-base">
                    Our innovative solution not only addresses the issue of food waste but also delivers benefits to
                    food companies. By diverting surplus food from landfill, companies can significantly reduce their
                    disposal costs, adding to their bottom line and achieving their sustainability goals.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="bg-colors-secondary-500 w-40 md:w-48 py-2 rounded text-lg md:text-xl text-white font-main mt-5">
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    )
}
