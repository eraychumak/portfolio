import { Person, WithContext } from "schema-dts";

const structuredData: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eray Chumak",
  url: "https://eraychumak.dev",
  image: "https://eraychumak.dev/pfp.avif",
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "United Kingdom"
  },
  email: "mailto:eraychumak_@outlook.com",
  gender: "male",
  knowsAbout: [
    "React",
    "React Native",
    "NextJS",
    "JavaScript",
    "TypeScript",
    "AWS",
    "Terraform",
    "NodeJS",
    "HTML",
    "CSS"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "United Kingdom"
    },
    skills: "React, NextJS, AWS, JavaScript, TypeScript",
  },
  sameAs: [
    "https://eraychumak.dev",
  ]
}

export default function SEO() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
  );
}