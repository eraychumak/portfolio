import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

const JBM_Font = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Eray Chumak - Portfolio",
  description: "All about me.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JBM_Font.className}>{children}</body>
    </html>
  )
}
