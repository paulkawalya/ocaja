/**
 * OCAJA Technologies — website content
 * Source: "OCAJA Technologies – Website Content & Breakdown" (Oct 30, 2026)
 * All copy is taken from the supplied content document. Do not invent facts.
 */

export type Route =
  | { name: "home" }
  | { name: "about" }
  | { name: "services" }
  | { name: "solutions" }
  | { name: "sectors" }
  | { name: "how-we-work" }
  | { name: "contact" }
  | { name: "pillar"; pillarId: string };

export type IconKey =
  | "app-window"
  | "shield"
  | "cloud"
  | "ai"
  | "wallet"
  | "compass"
  | "globe"
  | "plug"
  | "zap"
  | "lifebuoy"
  | "radar"
  | "clipboard-list"
  | "flask"
  | "siren"
  | "cloud-upload"
  | "layers"
  | "server"
  | "wifi"
  | "lightbulb"
  | "bot"
  | "file-scan"
  | "chart"
  | "route"
  | "smartphone"
  | "credit-card"
  | "sms"
  | "wifi-off"
  | "headset"
  | "graduation"
  | "building"
  | "truck"
  | "package"
  | "users"
  | "network"
  | "qr"
  | "banknote"
  | "ticket"
  | "landmark"
  | "handshake"
  | "scale"
  | "signal"
  | "briefcase"
  | "map-pin"
  | "mail"
  | "phone"
  | "check"
  | "arrow-right"
  | "sparkles"
  | "hand-heart";

export interface ServiceBlock {
  title: string;
  text: string;
  icon: IconKey;
}

export interface Pillar {
  id: string;
  num: string;
  title: string;
  menuTitle: string;
  label: string;
  tagline: string;
  icon: IconKey;
  intro: string;
  blocks: ServiceBlock[];
  benefits: string[];
  seoTitle: string;
  seoDesc: string;
}

export const PILLARS: Pillar[] = [
  {
    id: "software-apps",
    num: "01",
    title: "Software & Apps",
    menuTitle: "Software & Apps",
    label: "Modernised",
    tagline:
      "Bespoke applications, mobile and web platforms, systems integration and workflow automation.",
    icon: "app-window",
    intro:
      "We design, develop and maintain secure, scalable digital solutions that help organisations operate more efficiently, improve customer experiences and drive long-term growth. From enterprise software and mobile applications to cloud platforms and intelligent automation, we build technology that fits your organisation today while remaining flexible for tomorrow.",
    blocks: [
      {
        title: "Custom Business Apps",
        text: "Bespoke business applications, ERP and CRM systems, internal portals, workflow automation, dashboards and digital tools tailored to how your organisation operates.",
        icon: "app-window",
      },
      {
        title: "Mobile and Web Apps",
        text: "Responsive websites, progressive web apps (PWAs), Android and iOS applications, customer portals and cloud-based platforms.",
        icon: "globe",
      },
      {
        title: "System Integrations",
        text: "Connections with government and third-party platforms, including URA, NIRA, NSSF, banking systems, payment gateways, SMS services, APIs and accounting software.",
        icon: "plug",
      },
      {
        title: "Rapid Digital Solutions",
        text: "Quick-build tools and lightweight workflow applications for teams that need practical digitalisation without a full enterprise development cycle.",
        icon: "zap",
      },
      {
        title: "Ongoing Support Plans",
        text: "Maintenance, security updates, performance optimisation, backups, technical support and feature enhancements.",
        icon: "lifebuoy",
      },
    ],
    benefits: [
      "Reduce repetitive manual processes and fragmented workflows",
      "Connect systems and data across departments and external platforms",
      "Launch customer-facing digital services that evolve over time",
      "Keep applications supported, secure and relevant after go-live",
    ],
    seoTitle: "Software & App Development Uganda – OCAJA Technologies",
    seoDesc:
      "Bespoke business applications, mobile and web platforms, systems integration and workflow automation.",
  },
  {
    id: "cybersecurity",
    num: "02",
    title: "Cybersecurity & Managed Security",
    menuTitle: "Cybersecurity",
    label: "Flagship",
    tagline:
      "24/7 monitoring, managed protection, ethical hacking and rapid incident response.",
    icon: "shield",
    intro:
      "Our flagship practice. We help organisations prevent, detect and respond to cyber threats through continuous monitoring, managed protection, testing and expert support, including organisations without a full in-house security team.",
    blocks: [
      {
        title: "24/7 Threat Monitoring",
        text: "Continuous monitoring of networks, servers, endpoints and cloud environments for suspicious activity.",
        icon: "radar",
      },
      {
        title: "Managed Security Plans",
        text: "Flexible monthly services covering endpoint protection, firewall management, email security, vulnerability management and security reporting.",
        icon: "clipboard-list",
      },
      {
        title: "Ethical Hacking and Testing",
        text: "Penetration testing and security assessment for networks, websites, mobile applications and cloud infrastructure.",
        icon: "flask",
      },
      {
        title: "Rapid Incident Response",
        text: "Support to contain incidents, remove malware, investigate events and recover systems.",
        icon: "siren",
      },
    ],
    benefits: [
      "Better visibility of threats across critical systems",
      "Security expertise without building a full internal team",
      "Vulnerabilities found before they become incidents",
      "Faster response and less disruption when incidents occur",
    ],
    seoTitle: "Managed Cybersecurity Services Uganda – OCAJA",
    seoDesc:
      "24/7 monitoring, managed security plans, ethical hacking and rapid incident response.",
  },
  {
    id: "cloud-infrastructure",
    num: "03",
    title: "Cloud & Infrastructure",
    menuTitle: "Cloud & Infrastructure",
    label: "Repositioned",
    tagline:
      "Cloud migration, Microsoft 365 / Google Workspace, hosting, backup and secure networking.",
    icon: "cloud",
    intro:
      "Modern organisations need secure, reliable and scalable infrastructure that supports teams across offices, branches and remote locations. OCAJA plans, deploys and manages cloud and infrastructure environments designed to improve resilience, connectivity and operational simplicity.",
    blocks: [
      {
        title: "Cloud Migration & Management",
        text: "Applications, data and workloads across AWS, Microsoft Azure and Google Cloud.",
        icon: "cloud-upload",
      },
      {
        title: "Microsoft 365 / Google Workspace",
        text: "Setup, migration, configuration and ongoing support.",
        icon: "layers",
      },
      {
        title: "Secure Data Centre Hosting",
        text: "Secure hosting, automated backups, disaster recovery planning and business-continuity support.",
        icon: "server",
      },
      {
        title: "Office & Branch Networking",
        text: "Secure, high-performance networking, including modern Wi-Fi and connectivity design for distributed teams.",
        icon: "wifi",
      },
    ],
    benefits: [
      "Modernise infrastructure without unnecessary complexity",
      "Improve availability, backup and recovery readiness",
      "Support collaboration across offices and remote teams",
      "Build a scalable foundation for future applications",
    ],
    seoTitle: "Cloud & Infrastructure Services Uganda – OCAJA Technologies",
    seoDesc:
      "Cloud migration, Microsoft 365 / Google Workspace, secure hosting, backup and office networking.",
  },
  {
    id: "ai-data-analytics",
    num: "04",
    title: "AI, Data & Analytics",
    menuTitle: "AI, Data & Analytics",
    label: "New",
    tagline:
      "Practical AI advisory, automation, dashboards, document processing and smart tracking.",
    icon: "ai",
    intro:
      "We focus on practical AI and data solutions that solve real operational problems: finding where AI creates value, automating repetitive work, improving visibility through analytics and turning complex data into clearer decisions.",
    blocks: [
      {
        title: "Clear AI Advice",
        text: "Process assessment, automation opportunities, practical AI recommendations and implementation roadmaps focused on business outcomes.",
        icon: "lightbulb",
      },
      {
        title: "Chatbots & Smart Automation",
        text: "Digital assistants, chatbots, workflow automation and AI-powered tools.",
        icon: "bot",
      },
      {
        title: "Document Processing",
        text: "AI-assisted processing of forms, applications, invoices and reports where suitable.",
        icon: "file-scan",
      },
      {
        title: "Dashboards & Reporting",
        text: "Interactive dashboards, reporting systems and analytics platforms.",
        icon: "chart",
      },
      {
        title: "Smart Tracking",
        text: "Tracking for vehicles, equipment, assets and temperature-sensitive goods such as cold-chain products.",
        icon: "route",
      },
    ],
    benefits: [
      "Identify realistic AI opportunities rather than adopting technology for its own sake",
      "Automate repetitive administrative and service processes",
      "Give decision-makers clearer access to operational data",
      "Improve monitoring of mobile or high-value assets",
    ],
    seoTitle: "AI, Data & Analytics Solutions Uganda – OCAJA Technologies",
    seoDesc:
      "Practical AI advisory, chatbots and automation, document processing, dashboards and smart tracking.",
  },
  {
    id: "digital-financial-services",
    num: "05",
    title: "Digital Financial Services",
    menuTitle: "Digital Financial Services",
    label: "Elevated",
    tagline:
      "Mobile banking, wallets, payment integrations, SMS/OTP/USSD and low-connectivity platforms.",
    icon: "wallet",
    intro:
      "We develop secure, scalable financial technology solutions designed for African markets, where mobile money, digital banking, cross-platform integration and reliable low-connectivity experiences are central.",
    blocks: [
      {
        title: "Mobile Banking Apps",
        text: "Secure mobile banking applications, digital wallets and financial platforms to send, receive, manage and track transactions.",
        icon: "smartphone",
      },
      {
        title: "Payment Gateway Integrations",
        text: "Flutterwave, Pesapal, mobile money services, card-payment providers and other financial platforms.",
        icon: "credit-card",
      },
      {
        title: "Bulk SMS, Secure OTPs & USSD",
        text: "Transaction alerts, one-time passwords, customer notifications, bulk SMS and USSD-based interactions.",
        icon: "sms",
      },
      {
        title: "Low-Connectivity Support",
        text: "Platforms designed to perform reliably where internet is limited or unstable.",
        icon: "wifi-off",
      },
    ],
    benefits: [
      "Extend financial services through mobile-first channels",
      "Connect businesses to multiple payment and banking ecosystems",
      "Improve transaction communication, authentication and customer access",
      "Deliver more reliably in low-connectivity environments",
    ],
    seoTitle: "Fintech & Payment Integration Uganda, Zambia – OCAJA",
    seoDesc:
      "Mobile banking apps, payment gateway integrations, SMS/OTP/USSD and low-connectivity platforms.",
  },
  {
    id: "it-consulting-training",
    num: "06",
    title: "IT Consulting & Training",
    menuTitle: "IT Consulting & Training",
    label: "Advisory",
    tagline:
      "Independent strategy, outsourced IT support, training programmes and public-sector solutions.",
    icon: "compass",
    intro:
      "Technology decisions directly affect performance, security and growth. OCAJA provides independent advisory, outsourced support and practical training that help organisations make informed technology choices, strengthen internal capability and improve service delivery.",
    blocks: [
      {
        title: "Independent Strategy Advice",
        text: "Objective, vendor-neutral guidance to assess current systems and develop practical IT strategies.",
        icon: "compass",
      },
      {
        title: "Outsourced IT Support",
        text: "Remote and on-site support and helpdesk capability that extends your internal team.",
        icon: "headset",
      },
      {
        title: "Training Programmes",
        text: "Cybersecurity awareness, digital workplace skills, software development and technology capacity building.",
        icon: "graduation",
      },
      {
        title: "Public Sector Solutions",
        text: "Technology solutions and advisory support for government institutions, NGOs and development partners.",
        icon: "building",
      },
    ],
    benefits: [
      "Better-informed technology investment decisions",
      "Reliable support without carrying every capability in-house",
      "Stronger staff confidence and digital capability",
      "Improved digital service delivery in public and development-sector settings",
    ],
    seoTitle: "IT Consulting & Training Uganda – OCAJA Technologies",
    seoDesc:
      "Independent IT strategy, outsourced support, training programmes and public-sector solutions.",
  },
];

export const STAGES = [
  {
    num: "01",
    title: "Discover",
    what: "Requirements workshops, systems reviews and budget alignment.",
    outcome: "A clear scope, priorities and initial recommendation",
  },
  {
    num: "02",
    title: "Design & Plan",
    what: "Solution architecture, integration mapping, implementation steps, timelines and responsibilities.",
    outcome: "An agreed project plan and delivery roadmap",
  },
  {
    num: "03",
    title: "Build & Integrate",
    what: "Develop, configure, integrate and test with staged check-ins and quality controls.",
    outcome: "A tested solution ready for launch or deployment",
  },
  {
    num: "04",
    title: "Support & Grow",
    what: "Monitoring, patching, helpdesk, optimisation, reviews and planned enhancements.",
    outcome: "A support approach matched to operational needs and budget",
  },
];

export interface SolutionItem {
  name: string;
  type: "Product" | "Featured project";
  text: string;
  icon: IconKey;
}

export const SOLUTIONS_INTRO =
  "A portfolio of platforms and products designed and built by OCAJA Technologies across fleet management, logistics, customer relationship management and financial technology.";

export const PRODUCTS: SolutionItem[] = [
  {
    name: "My Fleet",
    type: "Product",
    text: "A seven-module fleet management platform covering core fleet-management functions, designed to improve visibility and operational control.",
    icon: "truck",
  },
  {
    name: "OCAJA Express",
    type: "Product",
    text: "An iOS and Android application providing truck-logistics services for clients transporting goods.",
    icon: "package",
  },
  {
    name: "My CRM",
    type: "Product",
    text: "A customisable Customer Relationship Management system for organisations across different sectors.",
    icon: "users",
  },
];

export const FEATURED_PROJECTS: SolutionItem[] = [
  {
    name: "OneNode",
    type: "Featured project",
    text: "An integration engine connecting fintech companies across East Africa and Zambia, including banks, microfinance institutions, SACCOs and payment providers.",
    icon: "network",
  },
  {
    name: "Quick Access",
    type: "Featured project",
    text: "A seamless, cashless cross-border platform designed to advance digital payments across Africa.",
    icon: "qr",
  },
  {
    name: "OneApp",
    type: "Featured project",
    text: "A self-help neo-banking application bringing financial services, institutions and third-party providers into one ecosystem, supported by an agent network.",
    icon: "banknote",
  },
  {
    name: "Futa Plus",
    type: "Featured project",
    text: "A blockchain-based electronic voucher platform that lets stations design, issue and manage promotional “Futa Token” campaigns for customers.",
    icon: "ticket",
  },
];

export interface Sector {
  name: string;
  text: string;
  icon: IconKey;
}

export const SECTORS_INTRO =
  "Our services adapt to different operating environments and organisational sizes. Our portfolio and track record are relevant across these client groups.";

export const SECTORS: Sector[] = [
  {
    name: "Financial Services & Fintech",
    text: "Digital payments, integrations, mobile banking, transaction communications and supporting infrastructure.",
    icon: "banknote",
  },
  {
    name: "Government & Public Sector",
    text: "Technology solutions and advisory support focused on service delivery, accountability and operational efficiency.",
    icon: "landmark",
  },
  {
    name: "NGOs & Development Partners",
    text: "Practical, supportable digital solutions and managed services designed around operational realities and budget needs.",
    icon: "hand-heart",
  },
  {
    name: "Commercial Enterprises & SMEs",
    text: "Business applications, cloud services, cybersecurity, automation, support and digital customer experiences.",
    icon: "briefcase",
  },
  {
    name: "Logistics & Fleet Operations",
    text: "Fleet management, tracking and transport/logistics applications.",
    icon: "truck",
  },
];

export const WHY_OCAJA: { title: string; text: string; icon: IconKey }[] = [
  {
    title: "Regional presence, regional understanding",
    text: "Offices in Kampala and Lusaka.",
    icon: "map-pin",
  },
  {
    title: "Independent, vendor-neutral advice",
    text: "Recommendations based on long-term fit.",
    icon: "scale",
  },
  {
    title: "Affordable, flexible packages",
    text: "Sized for small businesses and NGOs as well as large institutions.",
    icon: "wallet",
  },
  {
    title: "Built for real operating conditions",
    text: "Mobile-first, distributed and low-connectivity environments.",
    icon: "signal",
  },
  {
    title: "End-to-end support",
    text: "From discovery through continuous improvement.",
    icon: "lifebuoy",
  },
  {
    title: "Cross-sector experience",
    text: "Commercial, fintech, NGO, government and development sectors.",
    icon: "briefcase",
  },
];

export const ABOUT = {
  tagline:
    "One regional technology partner. Six specialised practices. Practical solutions built to perform in the real world.",
  whoWeAre: [
    "OCAJA Technologies is a privately held technology solutions and advisory company serving organisations across Uganda and Zambia, with an understanding of the wider East and Southern African operating environment. We design, build, secure, integrate and support digital solutions that help organisations work more efficiently, strengthen resilience and create better experiences for customers and teams.",
    "Our capabilities span six specialised service pillars: Software & Apps; Cybersecurity & Managed Security; Cloud & Infrastructure; AI, Data & Analytics; Digital Financial Services; and IT Consulting & Training. Together, they give clients one accountable technology partner from initial discovery and solution design through implementation, integration, support and continuous improvement.",
  ],
  approach:
    "Our approach combines technical depth with practical delivery. We focus on solutions that fit how organisations actually operate, including distributed teams, mobile-first customers, evolving security risks, integration requirements and areas where connectivity may be limited or inconsistent.",
  vision:
    "To be a trusted technology innovation partner enabling organisations to operate securely, efficiently and intelligently.",
  mission:
    "To combine innovation, research and practical engineering to deliver advanced, affordable and measurable technology solutions that meet client requirements and make technology easier to use, manage and scale.",
  values: [
    {
      title: "Respect & trust",
      text: "We build long-term relationships through professionalism, responsiveness and mutual respect.",
      icon: "handshake" as IconKey,
    },
    {
      title: "Simplicity & innovation",
      text: "We make technology practical and understandable while continuously looking for better ways to solve real problems.",
      icon: "sparkles" as IconKey,
    },
    {
      title: "Honesty, integrity and business ethics",
      text: "We act transparently, protect client interests and uphold responsible professional standards.",
      icon: "scale" as IconKey,
    },
  ],
  cta: "Let's talk about what your organisation needs next.",
};

export const OFFICES = [
  {
    country: "Uganda",
    note: "Head office",
    city: "Kampala",
    address: "Plot 1026/8, Mawanda Road, Kampala, Uganda",
    phones: ["+256 772 418 560", "+256 774 523 181", "+256 754 213 295"],
  },
  {
    country: "Zambia",
    note: "",
    city: "Lusaka",
    address: "Plot 6976, Cairo Road, Electra House, 1st Floor, Lusaka, Zambia",
    phones: ["+260 976 335 914", "+260 763 355 702"],
  },
];

export const CONTACT_EMAIL = "info@ocajatech.com";
export const CONTACT_WEB = "www.ocajatech.com";

export const SEO: Record<string, { title: string; desc: string }> = {
  home: {
    title: "OCAJA Technologies – Six Pillars. One Technology Partner.",
    desc: "Integrated software, cybersecurity, cloud, AI, digital financial and IT consulting services for organisations in Uganda, Zambia and East and Southern Africa.",
  },
  about: {
    title: "About OCAJA Technologies – Kampala & Lusaka",
    desc: "A privately held technology solutions and advisory company serving organisations across Uganda and Zambia.",
  },
  services: {
    title: "IT Services in Uganda & Zambia – OCAJA Technologies",
    desc: "Six specialist practices delivered through one accountable partner, from discovery to ongoing support.",
  },
  solutions: {
    title: "Solutions & Track Record – OCAJA Technologies",
    desc: "Platforms and products built by OCAJA across fleet management, logistics, CRM and financial technology.",
  },
  sectors: {
    title: "Sectors We Support – OCAJA Technologies",
    desc: "Financial services, government, NGOs, commercial enterprises and logistics across East and Southern Africa.",
  },
  "how-we-work": {
    title: "How We Work – OCAJA Technologies",
    desc: "Every engagement follows four practical stages, from discovery to ongoing support.",
  },
  contact: {
    title: "Contact OCAJA Technologies – Kampala & Lusaka",
    desc: "Reach our Kampala head office or Lusaka office.",
  },
};

export const HOME = {
  heroKicker: "OCAJA Technologies · Uganda & Zambia",
  heroTitle: "Six Pillars. One Technology Partner.",
  heroSub:
    "Integrated technology solutions designed for the realities of East and Southern Africa.",
  heroSupport:
    "Secure. Scalable. Practical technology solutions built for the way organisations operate.",
  introHeading:
    "Technology that fits the environment, the organisation and the outcome.",
  intro:
    "OCAJA Technologies is a privately held technology solutions and advisory company serving organisations across Uganda and Zambia, with an understanding of the wider East and Southern African operating environment. We design, build, secure, integrate and support digital solutions that help organisations work more efficiently, strengthen resilience and create better experiences for customers and teams.",
  pillarsHeading: "Our six service pillars",
  howHeading: "From idea to ongoing support in four stages.",
  featuredHeading: "Platforms we have designed and built.",
  ctaHeading: "Let's connect.",
  ctaText:
    "Tell us what you are trying to achieve and we will recommend a practical path.",
};

export const TAGLINE = "Six Pillars. One Technology Partner.";
