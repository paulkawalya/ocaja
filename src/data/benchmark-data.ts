/**
 * Benchmark data inspired by modern top-tier technology consulting & digital engineering firms
 * Benchmarked against Talentelgia (Performance metrics, Core TechStack, High-impact Case Studies,
 * Engagement Framework, Testimonials, Interactive Lead Generation Framework).
 */

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export const BENCHMARK_METRICS: MetricItem[] = [
  {
    value: "9.4/10",
    label: "Performance Index",
    sublabel: "Across enterprise deployments",
  },
  {
    value: "99.2%",
    label: "On-Time Delivery Rate",
    sublabel: "Agile 4-stage sprint execution",
  },
  {
    value: "9.5/10",
    label: "Client Satisfaction",
    sublabel: "Long-term client partnerships",
  },
  {
    value: "24/7",
    label: "SOC & Threat Monitoring",
    sublabel: "Continuous managed security",
  },
  {
    value: "2 Hubs",
    label: "Kampala & Lusaka",
    sublabel: "Direct regional presence in East & Southern Africa",
  },
];

export interface TechItem {
  name: string;
  category: "web-mobile" | "backend" | "cloud-devops" | "ai-data" | "fintech" | "security";
  desc: string;
  tag: string;
}

export const TECH_CATEGORIES = [
  { id: "web-mobile", label: "Web & Mobile" },
  { id: "backend", label: "Backend & Microservices" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "ai-data", label: "AI, ML & Analytics" },
  { id: "fintech", label: "FinTech & Integrations" },
  { id: "security", label: "Security & Compliance" },
] as const;

export const TECH_STACK_ITEMS: TechItem[] = [
  // Web & Mobile
  { name: "Next.js & React", category: "web-mobile", desc: "High-performance server-rendered and static web platforms", tag: "Frontend" },
  { name: "TypeScript", category: "web-mobile", desc: "Type-safe robust architecture across all enterprise layers", tag: "Language" },
  { name: "Tailwind CSS & Shadcn UI", category: "web-mobile", desc: "Modern, responsive, accessible enterprise design systems", tag: "UI/UX" },
  { name: "Flutter & React Native", category: "web-mobile", desc: "Cross-platform iOS and Android native performance apps", tag: "Mobile" },
  { name: "Progressive Web Apps (PWAs)", category: "web-mobile", desc: "Offline-capable web experiences for mobile-first users", tag: "PWA" },

  // Backend & Microservices
  { name: "Node.js & Express", category: "backend", desc: "High-throughput asynchronous API gateways and services", tag: "Runtime" },
  { name: "Python & FastAPI / Django", category: "backend", desc: "Scalable backend services, AI integration, and microservices", tag: "Backend" },
  { name: "Go (Golang)", category: "backend", desc: "Ultra-low-latency distributed payment and microservice engines", tag: "Core" },
  { name: "GraphQL & RESTful APIs", category: "backend", desc: "Flexible, versioned data contracts for multi-client apps", tag: "APIs" },

  // Cloud & DevOps
  { name: "Amazon Web Services (AWS)", category: "cloud-devops", desc: "Multi-region EC2, ECS, Lambda, and S3 secure architectures", tag: "Cloud" },
  { name: "Microsoft Azure", category: "cloud-devops", desc: "Enterprise cloud, Active Directory, and hybrid workloads", tag: "Cloud" },
  { name: "Google Cloud (GCP)", category: "cloud-devops", desc: "BigQuery, AI Platform, and containerized Kubernetes clusters", tag: "Cloud" },
  { name: "Docker & Kubernetes", category: "cloud-devops", desc: "Container orchestration for seamless scaling and zero-downtime deploys", tag: "Containers" },
  { name: "Terraform & GitHub Actions", category: "cloud-devops", desc: "Automated Infrastructure as Code and continuous CI/CD pipelines", tag: "DevOps" },

  // AI & Data
  { name: "Gemini & OpenAI API", category: "ai-data", desc: "Intelligent document understanding, conversational AI, and assistants", tag: "LLMs" },
  { name: "LangChain & Vector DBs", category: "ai-data", desc: "Retrieval-augmented generation (RAG) for internal enterprise data", tag: "AI Ops" },
  { name: "Python / Pandas / PyTorch", category: "ai-data", desc: "Predictive analytics, fleet route optimization, and data modeling", tag: "Machine Learning" },
  { name: "PostgreSQL & Prisma ORM", category: "ai-data", desc: "Relational database reliability with strict schema safety", tag: "Database" },
  { name: "Apache Kafka & Redis", category: "ai-data", desc: "Real-time event streaming, message brokering, and high-speed cache", tag: "Streaming" },

  // FinTech & Integrations
  { name: "MTN & Airtel Mobile Money APIs", category: "fintech", desc: "Direct operator billing, disbursements, and collections", tag: "Telecom" },
  { name: "Pesapal & Flutterwave", category: "fintech", desc: "Multi-channel card and digital wallet payment gateways", tag: "Gateways" },
  { name: "URA EFRIS & Government APIs", category: "fintech", desc: "Fiscal compliance, tax electronic invoicing, and NIRA KYC checks", tag: "Regulatory" },
  { name: "USSD & Bulk SMS Gateways", category: "fintech", desc: "Universal low-connectivity interaction across feature phones", tag: "Telco" },

  // Security & Compliance
  { name: "SOC 2 & ISO 27001 Alignment", category: "security", desc: "Enterprise data governance, risk management, and compliance", tag: "Compliance" },
  { name: "24/7 SIEM & Threat Monitoring", category: "security", desc: "Real-time incident detection, endpoint protection, and defense", tag: "Security" },
  { name: "Automated Vulnerability Scanning", category: "security", desc: "Continuous code audits, penetration testing, and patch management", tag: "Ethical Hacking" },
  { name: "End-to-End Encryption & mTLS", category: "security", desc: "Zero-trust network protocols and data-at-rest encryption", tag: "Cryptography" },
];

export interface CaseStudyItem {
  id: string;
  name: string;
  category: "Fintech & Payments" | "Fleet & Logistics" | "Enterprise CRM" | "Blockchain & Web3";
  description: string;
  challenge: string;
  solution: string;
  performanceIndex: string;
  satisfactionIndex: string;
  deliveryRate: string;
  tags: string[];
  highlight: string;
}

export const BENCHMARK_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "onenode",
    name: "OneNode Integration Engine",
    category: "Fintech & Payments",
    description:
      "A high-throughput financial middleware connecting banks, microfinance institutions, SACCOs, and payment providers across East Africa and Zambia.",
    challenge:
      "Fragmented banking protocols and telecom payment channels made cross-institutional settlement slow, error-prone, and prone to timeout failures in low-connectivity areas.",
    solution:
      "Engineered an event-driven integration switch with automated retry logic, unified KYC verification, and instant clearing across multiple currency corridors.",
    performanceIndex: "9.6",
    satisfactionIndex: "9.5",
    deliveryRate: "100%",
    tags: ["Fintech", "Interoperability", "Real-Time Settlement", "East Africa & Zambia"],
    highlight: "Processes millions in transactions with sub-second latency",
  },
  {
    id: "my-fleet",
    name: "My Fleet Management Platform",
    category: "Fleet & Logistics",
    description:
      "A 7-module enterprise fleet operations suite delivering real-time vehicle telematics, fuel audit tracking, maintenance scheduling, and driver dispatch.",
    challenge:
      "Commercial transport operators suffered from fuel siphoning, untracked vehicle downtime, and poor route visibility across cross-border transit corridors.",
    solution:
      "Built a unified IoT and web dashboard with offline-first tracking, geofence alerts, automated fuel sensor integration, and predictive maintenance alerts.",
    performanceIndex: "9.3",
    satisfactionIndex: "9.1",
    deliveryRate: "98.5%",
    tags: ["IoT Telematics", "Fleet ERP", "Fuel Auditing", "Cross-Border Logistics"],
    highlight: "Reduced operational fleet losses by over 28% for enterprise clients",
  },
  {
    id: "quick-access",
    name: "Quick Access Cashless Platform",
    category: "Fintech & Payments",
    description:
      "A seamless, cashless cross-border digital payment infrastructure advancing multi-currency merchant settlements across African borders.",
    challenge:
      "Traders and consumers faced exorbitant foreign exchange fees and multi-day clearing delays when transacting between regional borders.",
    solution:
      "Delivered a dynamic QR and mobile wallet payment rail supporting direct local currency conversions with banking-grade encryption and instant merchant notification.",
    performanceIndex: "9.5",
    satisfactionIndex: "9.3",
    deliveryRate: "99.0%",
    tags: ["Cross-Border Payments", "QR Code Rails", "Instant FX Settlement", "Pan-African"],
    highlight: "Zero-failure rate across high-volume border trade markets",
  },
  {
    id: "oneapp",
    name: "OneApp Neo-Banking & Agent Network",
    category: "Fintech & Payments",
    description:
      "A comprehensive self-help neo-banking ecosystem connecting financial institutions, third-party billers, and nationwide physical agent networks.",
    challenge:
      "Underbanked populations in rural and peri-urban centers lacked access to formal financial branch infrastructure and essential digital utilities.",
    solution:
      "Developed a lightweight, low-data mobile app paired with an agent POS portal offering deposits, withdrawals, utility bill payments, and micro-loan approvals.",
    performanceIndex: "9.2",
    satisfactionIndex: "9.4",
    deliveryRate: "98.0%",
    tags: ["Financial Inclusion", "Agent Banking POS", "Microfinance", "Low-Bandwidth"],
    highlight: "Extended financial access to over 150,000 previously unbanked users",
  },
  {
    id: "futa-plus",
    name: "Futa Plus Blockchain Voucher Engine",
    category: "Blockchain & Web3",
    description:
      "An immutable digital voucher platform enabling fuel stations and retail networks to issue, manage, and verify fraud-proof promotional campaigns.",
    challenge:
      "Paper vouchers and standard coupon codes suffered from rampant counterfeiting, double-spending, and slow merchant reconciliation.",
    solution:
      "Implemented a tamper-proof cryptographic token engine with instant QR validation at POS counters and automated partner commission settlements.",
    performanceIndex: "9.4",
    satisfactionIndex: "9.2",
    deliveryRate: "99.2%",
    tags: ["Cryptographic Vouchers", "Retail Loyalty", "Anti-Fraud", "Smart Reconciliation"],
    highlight: "100% elimination of voucher counterfeit incidents",
  },
  {
    id: "my-crm",
    name: "My CRM Enterprise System",
    category: "Enterprise CRM",
    description:
      "A multi-tenant, customizable customer relationship management system tailored for African mid-market enterprises and NGOs.",
    challenge:
      "Global CRM solutions were prohibitively expensive, overly complex, and lacked integration with local communication channels like WhatsApp and local SMS gateways.",
    solution:
      "Constructed a modular CRM with native SMS/WhatsApp pipelines, deal pipeline tracking, role-based security, and localized currency reporting.",
    performanceIndex: "9.1",
    satisfactionIndex: "9.0",
    deliveryRate: "97.8%",
    tags: ["Modular CRM", "WhatsApp / SMS Integration", "Pipeline Analytics", "SME & NGO Ready"],
    highlight: "Empowering customer-facing teams with 40% faster response times",
  },
];

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  rating: number;
  quote: string;
  pillar: string;
}

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    name: "Emmanuel S.",
    role: "Head of Digital Transformation",
    organization: "Regional Financial Institution",
    location: "Kampala, Uganda",
    rating: 5,
    quote:
      "OCAJA transformed our payment integration architecture. Their team understands the unique regulatory and infrastructural landscape of East Africa. The OneNode integration was delivered ahead of schedule and with zero production downtime.",
    pillar: "Digital Financial Services",
  },
  {
    id: "rev-2",
    name: "Chanda M.",
    role: "Chief Information Security Officer",
    organization: "Commercial Holdings Group",
    location: "Lusaka, Zambia",
    rating: 5,
    quote:
      "Their 24/7 Managed Cybersecurity operations gave our executive team peace of mind. Threat detection is proactive, response times are under 15 minutes, and their ethical hacking assessment uncovered critical issues before our audit.",
    pillar: "Cybersecurity & SOC",
  },
  {
    id: "rev-3",
    name: "Grace K.",
    role: "Operations Director",
    organization: "Logistics & Freight Corporation",
    location: "Kampala, Uganda",
    rating: 5,
    quote:
      "My Fleet replaced our fragmented tracking tools with one single source of truth. Fuel discrepancies were cut significantly within 60 days, and our dispatchers can monitor cross-border trucks even when offline.",
    pillar: "Software & Apps / Fleet",
  },
  {
    id: "rev-4",
    name: "Patrick N.",
    role: "Managing Director",
    organization: "Development Partner Alliance",
    location: "Regional (Uganda & Zambia)",
    rating: 5,
    quote:
      "Vendor-neutral advice is hard to find. OCAJA's IT consulting practice conducted an objective system review that saved us tens of thousands of dollars in redundant software licenses.",
    pillar: "IT Consulting & Advisory",
  },
];

export const CONSULTATION_BENEFITS = [
  "Comprehensive architecture and security baseline review",
  "Technology stack alignment with 3-5 year growth roadmap",
  "Realistic timeline, resource allocation, and budget breakdown",
  "Evaluation of local integration requirements (URA, NIRA, Mobile Money)",
  "No obligation, vendor-neutral expert engineering feedback",
];
