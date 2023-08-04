import "./globals.css";

import { JBM_Font } from "../fonts";

export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "One-stop shop to learn more about me and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JBM_Font.className}>{children}</body>
    </html>
  )
}
