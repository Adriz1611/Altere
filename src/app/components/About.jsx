import Image from "next/image";
import { motion  } from "framer-motion";

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

            className="w-[80%] min-h-screen bg-gray-500 flex flex-row items-center justify-center">
            <Image src="/about-bg.png" alt="about" height={1110} width={600} />
            <div className="w-[50%] px-5 py-20 flex flex-col gap-5 border bg-slate-200">
                <h2 className="font-main text-lg">Re-imagine food waste</h2>
                <h1 className="font-main text-3xl">Transforming Waste into Valuable Resources</h1>
                <p className="font-main">
                    Our innovative solution not only addresses the issue of food waste but also delivers benefits to
                    food companies. By diverting surplus food from landfill, companies can significantly reduce their
                    disposal costs, adding to their bottom line and achieving their sustainability goals.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    className="bg-colors-secondary-500 w-48 py-2 rounded text-xl text-white font-main mt-5">Learn More</motion.button>
            </div>
        </motion.div>
    )
}