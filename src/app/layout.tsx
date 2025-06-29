import { Analytics } from "@vercel/analytics/react"
import { Sansita_Swashed, Atkinson_Hyperlegible } from "next/font/google";

import SEO from "@/_components/SEO";
import Sidebar from "@/_components/Sidebar";
import Footer from "@/_components/Footer";

import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eray Chumak - Software Engineer",
  description: "Experienced Software Engineer specializing in React, Next.js, and AWS. Building modern web applications with cutting-edge technologies. View my portfolio and development projects.",
  authors: [{ name: "Eray Chumak" }],
  creator: "Eray Chumak",
  publisher: "Eray Chumak",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://eraychumak.dev",
    title: "Eray Chumak - Software Engineer",
    description: "Experienced Software Engineer specializing in React, Next.js, and AWS. Building modern web applications with cutting-edge technologies.",
    siteName: "Eray Chumak Portfolio",
    images: [
      {
        url: "/pfp.avif",
        width: 400,
        height: 400,
        alt: "Eray Chumak - Software Engineer",
      },
    ],
  },
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
