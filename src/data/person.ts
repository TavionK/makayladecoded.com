export const personBase = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Makayla Ferrell",
  jobTitle: "Ethical Hacker and Educator",
  url: "https://makayladecoded.com",
  image: "https://makayladecoded.com/img/headshot.png",
  sameAs: [
    "https://www.linkedin.com/in/makayla-ferrell/",
    "https://medium.com/@makayla.b.ferrell",
  ],
  knowsAbout: [
    "Penetration Testing",
    "Application Security",
    "Network Security",
    "AI/LLM Security",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Leidos",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Georgia Institute of Technology",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "M.S. Computer Science, Georgia Institute of Technology",
    },
  ],
};

export const speakerCredentials = [
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "Offensive Security Certified Professional (OSCP)",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "GIAC Web Application Penetration Tester (GWAPT)",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "eLearnSecurity Certified Professional Penetration Tester (eCPPT)",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "CompTIA Security+",
  },
];
