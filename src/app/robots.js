export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cv.pdf"
    },
    sitemap: "https://eraychumak.dev/sitemap.xml",
  }
}