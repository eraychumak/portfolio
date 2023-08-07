import "./globals.css";

import { JBM_Font } from "../fonts";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "email": "mailto:eraychumak_@outlook.com",
  "image": "https://eraychumak.dev/pfp.jpg",
  "jobTitle": "Frontend Developer",
  "gender": "male",
  "name": "Eray Chumak",
  "url": "https://eraychumak.dev",
  "founder": [{
    "legalName": "Web Line Community Interest Company",
    "nonprofitStatus": "LimitedByGuaranteeCharity",
    "slogan": "You innovate it. We code it. You price it. You own it."
  }],
  "logo": "https://eraychumak.dev/logo.svg"
}


export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "One-stop shop to learn more about me and get in touch.",
  themeColor: "#1b1f28",
  keywords: ["Frontend", "Developer", "Software", "Eray", "Chumak", "Engineer", "Programmer"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="beforeInteractive"
          id="my-ldjson-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
      </head>
      <body className={JBM_Font.className}>{children}</body>
    </html>
  )
}
