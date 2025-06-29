import { Analytics } from "@vercel/analytics/react"
import { Sansita_Swashed, Atkinson_Hyperlegible } from "next/font/google";

import SEO from "@/_components/SEO";
import Sidebar from "@/_components/Sidebar";
import Footer from "@/_components/Footer";

import "./globals.css";

export const metadata = {
  title: "Eray Chumak - Web Design & Development",
  description: "Find out about what I've done and what I'm working on now. Reach out if you want to hire me or if you need a website, a makeover for your current site, or a new mobile app.",
  keywords: ["Frontend", "Developer", "Software", "Eray", "Chumak", "Engineer", "Programmer"],
};

export const viewport = {
  themeColor: "#1b1f28",
}

const fontTemp = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita-swashed",
  weight: ["400"],
  display: "swap"
});

const fontAtkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-atkinson",
  weight: ["400", "700"],
  display: "swap"
});

export default function RootLayout({ children }) {
  const fonts = `${fontTemp.variable} ${fontAtkinson.variable}`;

  return (
    <html lang="en" className={fonts}>
      <body>
        <Sidebar/>
        {children}
        <Footer/>
        <SEO/>
        <Analytics/>
      </body>
    </html>
  )
}
