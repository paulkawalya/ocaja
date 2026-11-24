/**
 * High-quality, modern, and professional photography for OCAJA Technologies
 * Exclusively featuring Black African IT specialists, software developers, data analysts,
 * cybersecurity engineers, cloud architects, and business leaders reflecting
 * the African technology ecosystem across Kampala and Lusaka.
 */

export interface PageHeroImage {
  imageUrl: string;
  imageAlt: string;
  tag: string;
  specialistName: string;
  specialistRole: string;
  specialistAvatar: string;
  hubLocation: string;
}

export interface AfricanTechLeader {
  name: string;
  role: string;
  location: string;
  avatarUrl: string;
}

export const HERO_PEOPLE_IMAGES: Record<string, PageHeroImage> = {
  // 1. Digital Financial Services
  "digital-financial-services": {
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African female FinTech engineer leading digital banking and payment systems",
    tag: "FinTech & Payment Rails Pod",
    specialistName: "Faridah Namubiru",
    specialistRole: "Senior FinTech & Payment Rails Lead",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala HQ",
  },

  // 2. Cybersecurity & Defense
  cybersecurity: {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African cybersecurity engineer in enterprise security operations center",
    tag: "24/7 Threat Defense & SOC",
    specialistName: "Moses Chisanga",
    specialistRole: "Principal Security & SOC Engineer",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Lusaka Hub",
  },

  // 3. Cloud Infrastructure & DevOps
  "cloud-infrastructure": {
    imageUrl:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African cloud systems architect deploying enterprise hybrid infrastructure",
    tag: "Multi-Cloud & SRE Cluster",
    specialistName: "Brian Mwape",
    specialistRole: "Cloud Infrastructure & SRE Lead",
    specialistAvatar:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Lusaka Hub",
  },

  // 4. Custom Software & Applications
  "software-apps": {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African software developer writing code in modern tech hub",
    tag: "AppStudio Engineering Pod",
    specialistName: "Ronald Kato",
    specialistRole: "Lead Full-Stack Architect",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala HQ",
  },

  // 5. AI & Data Analytics
  "ai-data-analytics": {
    imageUrl:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African data scientist analyzing machine learning and predictive analytics models",
    tag: "Cortex AI & Data Lake Pod",
    specialistName: "Grace Achieng",
    specialistRole: "Lead Machine Learning & AI Specialist",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala HQ",
  },

  // 6. IT Consulting & Training
  "it-consulting-training": {
    imageUrl:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African IT executive advising corporate leadership on digital transformation",
    tag: "AdvisoryIQ Governance Practice",
    specialistName: "Brenda Kiconco",
    specialistRole: "Head of IT Advisory & Compliance",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala HQ",
  },

  // 7. Services Overview
  services: {
    imageUrl:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African technology engineering team collaborating in a modern IT workspace in Lagos/Kampala",
    tag: "6 Core Practices • African Talent",
    specialistName: "Ronald Kato",
    specialistRole: "Head of Engineering",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala & Lusaka",
  },

  // 8. Solutions (My Fleet IoT & OneNode)
  solutions: {
    imageUrl:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African software developer coding on laptop at tech hub in Lagos, Nigeria",
    tag: "My Fleet IoT & OneNode Switch",
    specialistName: "Moses Chisanga",
    specialistRole: "Principal Systems Engineer",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Lusaka Hub",
  },

  // 9. Sectors
  sectors: {
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African enterprise business executive and technology consultant",
    tag: "Cross-Industry African Sectors",
    specialistName: "Brenda Kiconco",
    specialistRole: "Enterprise Sector Lead",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Uganda & Zambia",
  },

  // 10. How We Work
  "how-we-work": {
    imageUrl:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African agile development team conducting sprint review and architecture planning",
    tag: "4-Stage Agile Delivery Pods",
    specialistName: "Ronald Kato",
    specialistRole: "Agile Practice Director",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala HQ",
  },

  // 11. About Us
  about: {
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African technology leadership and software engineering team mentoring and coding",
    tag: "10+ Years Regional Experience",
    specialistName: "Moses Chisanga",
    specialistRole: "Director of Technology",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala & Lusaka",
  },

  // 12. Contact Us
  contact: {
    imageUrl:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Black African senior solutions specialist ready for technical consultation and systems review",
    tag: "Direct Solutions Intake Desk",
    specialistName: "Ronald Kato",
    specialistRole: "Senior Solutions Architect",
    specialistAvatar:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=300&q=80",
    hubLocation: "Kampala & Lusaka Direct",
  },
};

export const AFRICAN_TECH_SPECIALISTS: AfricanTechLeader[] = [
  {
    name: "Ronald Kato",
    role: "Head of Engineering & Architecture",
    location: "Kampala HQ",
    avatarUrl:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Faridah Namubiru",
    role: "Senior FinTech & Payment Rails Lead",
    location: "Kampala HQ",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Moses Chisanga",
    role: "Director of Systems & Cybersecurity",
    location: "Lusaka Hub",
    avatarUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Grace Achieng",
    role: "Lead Data Scientist & AI Specialist",
    location: "Kampala HQ",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Brian Mwape",
    role: "Principal Cloud Architect & SRE Lead",
    location: "Lusaka Hub",
    avatarUrl:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Brenda Kiconco",
    role: "Head of IT Advisory & Compliance",
    location: "Kampala HQ",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=300&q=80",
  },
];
