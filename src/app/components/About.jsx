import Image from "next/image";

export const About = () => {
    return (
        <div className="w-[80%] flex flex-row items-center justify-center">
            <Image src="https://placehold.co/500x500/png" alt="about" height={500} width={500} />
            <div className="w-[50%] px-5 py-20 flex flex-col gap-5 border bg-slate-200">
                <h2 className="font-main text-lg">Re-imagine food waste</h2>
                <h1 className="font-main text-3xl">Transforming Waste into Valuable Resources</h1>
                <p className="font-main">
                    Our innovative solution not only addresses the issue of food waste but also delivers benefits to
                    food companies. By diverting surplus food from landfill, companies can significantly reduce their
                    disposal costs, adding to their bottom line and achieving their sustainability goals.
                </p>
                <button className="bg-colors-secondary-500 w-48 py-2 rounded text-xl text-white font-main mt-5">Learn More</button>
            </div>
        </div>
    )
}