import { Heebo, Libre_Baskerville, Padauk, Source_Code_Pro } from "next/font/google";

import SEO from "@/components/SEO";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "Frontend developer living in North West, England. Visit my portfolio website to learn more about my experience and get in touch.",
  keywords: ["Frontend", "Developer", "Software", "Eray", "Chumak", "Engineer", "Programmer"],
};

export const viewport = {
  themeColor: "#1b1f28",
}

const fontHeebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap"
});

const fontLibreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre_baskerville",
  display: "swap",
  weight: ["400", "700"]
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
  const fonts = `${fontHeebo.variable} ${fontLibreBaskerville.variable} ${fontPadauk.variable} ${fontSourceCodePro.variable}`;

  return (
    <html lang="en" className={fonts}>
      <body>
        <Sidebar/>
        {children}
        <Footer/>
        <SEO/>
      </body>
    </html>
  )
}
