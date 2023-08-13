import "./globals.css";

import { JBM_Font } from "../fonts";
import SEO from "@/components/SEO";

export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "One-stop shop to learn more about me and get in touch.",
  themeColor: "#1b1f28",
  keywords: ["Frontend", "Developer", "Software", "Eray", "Chumak", "Engineer", "Programmer"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JBM_Font.className}>
        {children}
        <SEO/>
      </body>
    </html>
  )
}
