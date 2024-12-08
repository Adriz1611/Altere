import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Jost } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const jost = Jost({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata = {
  title: "AlteRe",
  description:
    "AlteRe is a platform for green solutions and urban waste challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
