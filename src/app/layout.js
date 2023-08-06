import "./globals.css";

import Script from "next/script";
import { JBM_Font } from "../fonts";

export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "One-stop shop to learn more about me and get in touch.",
};

const logoFeature = {
  "@context": "https://eraychumak.dev",
  "@type": "Organization",
  "url": "https://eraychumak.dev",
  "logo": "https://eraychumak.dev/logo.svg"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="LdJsonItemLogoFeature" type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify(logoFeature)}/>
      <body className={JBM_Font.className}>{children}</body>
    </html>
  )
}
