import "./globals.css";
import Navbar from "@/app/components/Navbar";
import {Ubuntu} from "next/font/google";


const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-ubuntu",
})

export const metadata = {
    title: "AlteRe",
    description: "AlteRe is a platform for green solutions and urban waste challenges.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${ubuntu.variable} `}
        >
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
