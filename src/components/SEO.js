const structuredData = {
  "@context": "https://schema.org/",
  "@type": "ProfessionalService",
  "currenciesAccepted": "GBP",
  "priceRange": "$$",
  "email": "mailto:eraychumak_@outlook.com",
  "image": "https://eraychumak.dev/pfp.jpg",
  "jobTitle": "Frontend Developer",
  "gender": "male",
  "name": "Eray Chumak",
  "url": "https://eraychumak.dev",
  "telephone": "+447305682150",
  "address": "United Kingdom",
  "slogan": "Just your friendly neighborhood frontend developer student",
  "makesOffer": {
    "@type": "OfferForPurchase",
    "itemOffered": {
      "@type": "CreativeWork",
      "about": "Testing"
    }
  },
  "founder": [{
    "@type": "Organization",
    "legalName": "Web Line Community Interest Company",
    "nonprofitStatus": "LimitedByGuaranteeCharity",
    "slogan": "You innovate it. We code it. You price it. You own it."
  }]
}


export default function SEO() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
  );
}