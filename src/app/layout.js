import { Analytics } from "@vercel/analytics/react"
import { Heebo, Padauk, Source_Code_Pro, Sansita_Swashed } from "next/font/google";

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

const fontHeebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap"
});

const fontPadauk = Padauk({
  subsets: ["latin"],
  variable: "--font-padauk",
  display: "swap",
  weight: ["400", "700"]
});

const fontSourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-sourcecode-pro",
  display: "swap",
});

export default function RootLayout({ children }) {
  const fonts = `${fontHeebo.variable} ${fontTemp.variable} ${fontPadauk.variable} ${fontSourceCodePro.variable}`;

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
