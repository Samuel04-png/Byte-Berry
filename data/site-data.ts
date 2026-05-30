export const siteConfig = {
  name: 'Byte & Berry',
  shortName: 'Byte & Berry',
  url: 'https://byteandberry.com',
  description:
    'We build websites, apps, and AI systems for Zambian businesses. Live in 6 weeks. Payment processing integration. Based in Lusaka.',
  email: 'hello@byteandberry.com',
  whatsappNumber: '076 0580949',
  whatsappApiNumber: '260760580949',
  whatsappHref:
    'https://wa.me/260760580949?text=Hi%20Byte%20%26%20Berry%2C%20I%20would%20like%20a%20free%20quote%20for%20my%20business.%20I%20need%20help%20with%3A%20%5Bwebsite%20%2F%20app%20%2F%20business%20system%20%2F%20AI%20automation%5D.',
  whatsappFloatingHref:
    'https://wa.me/260760580949?text=Hi%20Byte%20%26%20Berry%2C%20I%20would%20like%20a%20free%20quote%20for%20my%20business.%20I%20need%20help%20with%3A%20%5Bwebsite%20%2F%20app%20%2F%20business%20system%20%2F%20AI%20automation%5D.',
  location: 'Lusaka, Zambia',
  tagline: 'Building the digital backbone of Zambia.',
  socials: {
    instagram: 'https://www.instagram.com/byteandberry/',
    linkedin: 'https://www.linkedin.com/company/byte-berry/about/',
    facebook: 'https://web.facebook.com/p/ByteBerry-61575125536198/?_rdc=1&_rdr#',
  },
} as const

export type ProjectType = 'web_desktop' | 'mobile_app' | 'saas_platform' | 'dual_platform'

export type Project = {
  slug: string
  name: string
  category: string
  label: string
  location: string
  year: string
  projectType: ProjectType
  domain: string
  summary: string
  description: string
  story: string
  services: string[]
  timeline: string
  outcome: string
  featurePills?: string[]
  metrics?: string[]
  accent: {
    solid: string
    soft: string
  }
  desktopImage?: string | null
  mobileImage?: string | null
  dashboardImage?: string | null
  imagePresentation?: 'screen' | 'studio'
  heroImage: string
  heroAlt: string
  image: string | null
  imageAlt: string
  gallery: Array<{
    src: string
    alt: string
  }>
}

const studioMockups = {
  kimbalert: {
    hero: '/studio-mockups/kimbalert/hero.png',
    mobile: '/studio-mockups/kimbalert/mobile.png',
    gallery: '/studio-mockups/kimbalert/gallery.png',
  },
  pharmaLink: {
    hero: '/studio-mockups/pharma-link/hero.png',
    mobile: '/studio-mockups/pharma-link/mobile.png',
    gallery: '/studio-mockups/pharma-link/gallery.png',
  },
  sharkCarHire: {
    hero: '/studio-mockups/shark-car-hire/hero.png',
    mobile: '/studio-mockups/shark-car-hire/mobile.png',
    gallery: '/studio-mockups/shark-car-hire/gallery.png',
  },
} as const

export const projects: Project[] = [
  {
    slug: 'tailored-manor',
    name: 'Tailored Manor',
    category: 'Luxury Furniture',
    label: 'Furniture Platform + Room Visualiser',
    location: 'Lusaka, Zambia',
    year: '2026',
    projectType: 'web_desktop',
    domain: 'tailoredmanor.byteandberry.com',
    summary:
      'A premium digital storefront concept for a Lusaka furniture brand, built to make products feel luxurious and spatially real online.',
    description:
      'Tailored Manor represents the kind of premium digital experience Byte & Berry is building for Zambian retail brands: strong visual storytelling, confident positioning, and tools that help customers imagine a purchase before they visit the showroom.',
    story:
      'Tailored Manor is framed as a digital flagship for a high-touch furniture business. The experience focuses on atmosphere, space, and premium presentation so the brand feels established before a customer ever steps into the store.',
    services: ['Luxury web design', 'Furniture storytelling', 'Room visualiser planning'],
    timeline: '6 weeks',
    outcome:
      'A premium concept direction for a furniture business that needs to look more expensive, more modern, and more memorable online.',
    accent: {
      solid: '#B8935A',
      soft: 'rgba(184, 147, 90, 0.14)',
    },
    desktopImage: null,
    heroImage: '/og-image.svg',
    heroAlt: 'Tailored Manor project preview',
    image: null,
    imageAlt: 'Tailored Manor project preview',
    gallery: [],
  },
  {
    slug: 'shark-car-hire',
    name: 'Shark Car Hire',
    category: 'Car Hire',
    label: 'Booking + Payment Processing + Admin CRM',
    location: 'Zambia',
    year: '2026',
    projectType: 'web_desktop',
    domain: 'sharkcarhire.byteandberry.com',
    summary:
      'A booking-led mobility platform for a car hire business that needed faster reservations, cleaner fleet operations, and local payment support.',
    description:
      'Shark Car Hire is positioned around trust, availability, and easy booking. The product story focuses on taking a call-driven business and turning it into a clear digital booking system with better visibility for both customers and the team.',
    story:
      'Shark Car Hire needed a product surface that makes booking feel immediate and credible. The experience is designed around clarity, quick decisions, and the confidence customers need before they commit to a vehicle online.',
    services: ['Booking experience', 'Payment flow planning', 'Fleet operations UX'],
    timeline: '6 weeks',
    outcome:
      'A cleaner digital booking direction for a car hire business that wants to stop losing high-intent customers between enquiry and payment.',
    accent: {
      solid: '#1A7FD4',
      soft: 'rgba(26, 127, 212, 0.12)',
    },
    desktopImage: studioMockups.sharkCarHire.hero,
    mobileImage: studioMockups.sharkCarHire.mobile,
    imagePresentation: 'studio',
    heroImage: studioMockups.sharkCarHire.hero,
    heroAlt: 'Shark Car Hire laptop booking mockup',
    image: studioMockups.sharkCarHire.hero,
    imageAlt: 'Shark Car Hire laptop booking mockup',
    gallery: [
      { src: studioMockups.sharkCarHire.hero, alt: 'Shark Car Hire desktop booking mockup' },
      { src: studioMockups.sharkCarHire.mobile, alt: 'Shark Car Hire mobile booking mockup' },
      { src: studioMockups.sharkCarHire.gallery, alt: 'Shark Car Hire mobile screen collage' },
    ],
  },
  {
    slug: 'pushr',
    name: 'Pushr',
    category: 'Delivery Platform',
    label: 'On-demand Delivery Platform',
    location: 'Lusaka, Zambia',
    year: '2025',
    projectType: 'mobile_app',
    domain: 'pushr.byteandberry.com',
    summary:
      'A mobile-first delivery platform built for speed, task creation, and trust in a busy city environment.',
    description:
      'Pushr had to feel immediate on mobile. We shaped the product around fast intent capture, visible progress, and a cleaner rider-and-customer experience that helps the business look reliable from the first tap.',
    story:
      'Pushr had to feel fast before it even loaded. The product was designed around urgency, trust, and simple task creation so users could move from need to order without friction.',
    services: ['Mobile-first interface', 'Delivery workflow UX', 'Growth positioning'],
    timeline: '6 weeks',
    outcome:
      'A sharper, more operational delivery product that helps customers trust the platform and helps the business communicate speed more clearly.',
    featurePills: ['Live in Lusaka', 'Payment processing', 'iOS + Android'],
    accent: {
      solid: '#22C55E',
      soft: 'rgba(34, 197, 94, 0.12)',
    },
    mobileImage: '/optimized/projects/pushr-mobile.webp',
    heroImage: '/optimized/projects/pushr-hero.webp',
    heroAlt: 'Pushr delivery platform interface',
    image: '/optimized/projects/pushr-hero.webp',
    imageAlt: 'Pushr delivery platform interface',
    gallery: [
      { src: '/optimized/projects/pushr-hero.webp', alt: 'Pushr delivery platform home screen' },
      { src: '/optimized/projects/pushr-mobile.webp', alt: 'Pushr task flow mobile screen' },
      { src: '/optimized/projects/pushr-workflow.webp', alt: 'Pushr delivery workflow screen' },
    ],
  },
  {
    slug: 'kimbalert-africa',
    name: 'KimbAlert Africa',
    category: 'Safety Tech',
    label: 'Child Safety Platform',
    location: 'South Africa',
    year: '2025',
    projectType: 'dual_platform',
    domain: 'kimbalert.byteandberry.com',
    summary:
      'A child safety platform that needed a calm, trustworthy product experience across landing, mobile, and admin surfaces.',
    description:
      'KimbAlert Africa needed sensitivity and clarity more than noise. The work focused on trust, hierarchy, and operational usability so parents and partners could understand the mission quickly and move with confidence.',
    story:
      'KimbAlert Africa needed to feel safe, composed, and dependable. Every screen was shaped to reduce noise and make a sensitive mission easier to understand for parents, partners, and operators.',
    services: ['Product website', 'Dashboard UX', 'Mobile product design'],
    timeline: '6 weeks',
    outcome:
      'A more credible launch presence and stronger clarity across the platform touchpoints that matter most.',
    featurePills: ['Parent alerts', 'Web + Mobile', 'Role-based access'],
    accent: {
      solid: '#F97316',
      soft: 'rgba(249, 115, 22, 0.14)',
    },
    desktopImage: studioMockups.kimbalert.hero,
    mobileImage: studioMockups.kimbalert.mobile,
    imagePresentation: 'studio',
    heroImage: studioMockups.kimbalert.hero,
    heroAlt: 'KimbAlert Africa laptop homepage mockup',
    image: studioMockups.kimbalert.hero,
    imageAlt: 'KimbAlert Africa laptop homepage mockup',
    gallery: [
      { src: studioMockups.kimbalert.hero, alt: 'KimbAlert Africa laptop homepage mockup' },
      { src: studioMockups.kimbalert.mobile, alt: 'KimbAlert Africa handheld mobile mockup' },
      { src: studioMockups.kimbalert.gallery, alt: 'KimbAlert Africa multi-screen mobile mockup' },
    ],
  },
  {
    slug: 'zedbooks',
    name: 'ZedBooks',
    category: 'Accounting SaaS',
    label: 'Accounting Automation SaaS',
    location: 'Zambia',
    year: '2026',
    projectType: 'saas_platform',
    domain: 'zedbooks.byteandberry.com',
    summary:
      'An accounting automation product for Zambian teams that need cleaner records, smoother workflows, and less admin drag.',
    description:
      'ZedBooks is positioned as a practical operations product rather than a generic finance dashboard. The focus is on clarity, repeatability, and a product story that feels grounded in the day-to-day realities of local businesses.',
    story:
      'ZedBooks is about making accounting feel less heavy for teams that need simple systems and stronger consistency. The product direction prioritizes clarity, useful structure, and an interface that feels practical from the first screen.',
    services: ['SaaS positioning', 'Finance workflow UI', 'Operations storytelling'],
    timeline: '6 weeks',
    outcome:
      'A cleaner product direction for accounting automation that is easier to explain, demo, and trust.',
    metrics: ['ZMW 2,000/mo', '24/7 automated', 'Zero setup'],
    accent: {
      solid: '#6366F1',
      soft: 'rgba(99, 102, 241, 0.14)',
    },
    dashboardImage: null,
    heroImage: '/og-image.svg',
    heroAlt: 'ZedBooks product preview',
    image: null,
    imageAlt: 'ZedBooks product preview',
    gallery: [],
  },
  {
    slug: 'tengaloans',
    name: 'TengaLoans',
    category: 'Loan Management',
    label: 'Loan Management System',
    location: 'Zambia',
    year: '2025',
    projectType: 'saas_platform',
    domain: 'tengaloans.byteandberry.com',
    summary:
      'A lending platform designed to replace spreadsheet-heavy workflows with a cleaner, more operational product.',
    description:
      'TengaLoans helps lenders understand repayments, customer status, and next actions at a glance. The interface was designed to feel modern and dependable from day one so the product is easier to sell and easier to run.',
    story:
      'TengaLoans was shaped to give lenders better operational visibility without the clutter of spreadsheet-driven workflows. The interface leans on structure, repayment visibility, and next-step clarity.',
    services: ['SaaS UI', 'Operations dashboard', 'Product positioning'],
    timeline: '6 weeks',
    outcome:
      'A cleaner platform experience that improves both internal usability and external product confidence.',
    metrics: ['Loan tracking', 'Auto reports', 'Multi-user'],
    accent: {
      solid: '#8B5CF6',
      soft: 'rgba(139, 92, 246, 0.14)',
    },
    dashboardImage: '/optimized/projects/tengaloans-overview.webp',
    heroImage: '/optimized/projects/tengaloans-overview.webp',
    heroAlt: 'TengaLoans dashboard screenshot',
    image: '/optimized/projects/tengaloans-overview.webp',
    imageAlt: 'TengaLoans dashboard screenshot',
    gallery: [
      { src: '/optimized/projects/tengaloans-overview.webp', alt: 'TengaLoans dashboard overview' },
      { src: '/optimized/projects/tengaloans-loans.webp', alt: 'TengaLoans loans list page' },
      { src: '/optimized/projects/tengaloans-details.webp', alt: 'TengaLoans loan details page' },
    ],
  },
  {
    slug: 'nexusflow',
    name: 'NexusFlow',
    category: 'Automation Platform',
    label: 'Automation Platform',
    location: 'Zambia',
    year: '2025',
    projectType: 'saas_platform',
    domain: 'nexusflow.byteandberry.com',
    summary:
      'A workflow and automation platform built to make operational systems feel structured, premium, and easy to trust.',
    description:
      'NexusFlow needed sophistication without clutter. The work focused on making approvals, workflows, and data presentation feel tangible so decision-makers could understand the product value immediately.',
    story:
      'NexusFlow had to communicate system power without overwhelming the viewer. The design direction balances structured data, workflow control, and premium restraint so the platform feels serious and saleable.',
    services: ['Workflow design', 'Automation product UX', 'Dashboard presentation'],
    timeline: '6 weeks',
    outcome:
      'A stronger automation product narrative that makes process design and operational visibility feel tangible.',
    metrics: ['Workflows', 'API ready', 'Real-time'],
    accent: {
      solid: '#06B6D4',
      soft: 'rgba(6, 182, 212, 0.14)',
    },
    dashboardImage: '/optimized/projects/nexusflow-hero.webp',
    heroImage: '/optimized/projects/nexusflow-hero.webp',
    heroAlt: 'NexusFlow automation platform screenshot',
    image: '/optimized/projects/nexusflow-hero.webp',
    imageAlt: 'NexusFlow automation platform screenshot',
    gallery: [
      { src: '/optimized/projects/nexusflow-hero.webp', alt: 'NexusFlow dashboard overview' },
      { src: '/optimized/projects/nexusflow-workflow.webp', alt: 'NexusFlow workflow builder screen' },
      { src: '/optimized/projects/nexusflow-detail.webp', alt: 'NexusFlow interface detail' },
    ],
  },
  {
    slug: 'pharma-link',
    name: 'Pharma Link',
    category: 'Pharmaceutical Platform',
    label: 'Pharmaceutical Platform',
    location: 'Zambia',
    year: '2025',
    projectType: 'saas_platform',
    domain: 'pharmalink.byteandberry.com',
    summary:
      'A pharmaceutical product experience built to feel credible, structured, and easy for stakeholders to navigate.',
    description:
      'Pharma Link needed to communicate trust first. The design system stayed clean and information-led so the platform could feel usable, modern, and appropriate for a sensitive sector.',
    story:
      'Pharma Link needed a system that looked dependable before it tried to look clever. The product experience focuses on order, trust, and a clearer information hierarchy for an industry where confidence matters.',
    services: ['Platform UI', 'Healthcare product design', 'Information architecture'],
    timeline: '6 weeks',
    outcome:
      'A more trustworthy product presentation that helps the platform feel stable and easier to understand.',
    metrics: ['Inventory ready', 'Secure access', 'Role-based'],
    accent: {
      solid: '#EC4899',
      soft: 'rgba(236, 72, 153, 0.14)',
    },
    dashboardImage: studioMockups.pharmaLink.hero,
    mobileImage: studioMockups.pharmaLink.mobile,
    imagePresentation: 'studio',
    heroImage: studioMockups.pharmaLink.hero,
    heroAlt: 'Pharma Link mobile product mockup collage',
    image: studioMockups.pharmaLink.hero,
    imageAlt: 'Pharma Link mobile product mockup collage',
    gallery: [
      { src: studioMockups.pharmaLink.hero, alt: 'Pharma Link mobile product mockup collage' },
      { src: studioMockups.pharmaLink.mobile, alt: 'Pharma Link handheld medication tracker mockup' },
      { src: studioMockups.pharmaLink.gallery, alt: 'Pharma Link dual-screen product mockup' },
    ],
  },
  {
    slug: 'zambia-wildlife-safari',
    name: 'Zambia Wildlife Safari',
    category: 'Tourism Platform',
    label: 'Tourism Platform',
    location: 'Zambia',
    year: '2025',
    projectType: 'web_desktop',
    domain: 'Project preview',
    summary:
      'A booking-oriented tourism experience designed to turn safari interest into stronger enquiries and higher-value trips.',
    description:
      'For tourism, desire has to happen fast. This work leaned into scenic imagery, package storytelling, and premium composition so visitors could imagine the trip quickly and feel ready to enquire.',
    story:
      'Zambia Wildlife Safari had to create desire almost instantly. The experience uses cinematic imagery, stronger package framing, and simpler booking signals so visitors can imagine the trip and act quickly.',
    services: ['Luxury web design', 'Tourism storytelling', 'Booking UX'],
    timeline: '6 weeks',
    outcome:
      'A more premium tourism experience that gives the brand stronger visual pull and a clearer route to enquiry.',
    accent: {
      solid: '#84CC16',
      soft: 'rgba(132, 204, 22, 0.14)',
    },
    desktopImage: '/optimized/projects/safari-hero.webp',
    heroImage: '/optimized/projects/safari-hero.webp',
    heroAlt: 'Zambia Wildlife Safari site screenshot',
    image: '/optimized/projects/safari-hero.webp',
    imageAlt: 'Zambia Wildlife Safari site screenshot',
    gallery: [
      { src: '/optimized/projects/safari-hero.webp', alt: 'Zambia Wildlife Safari homepage' },
      { src: '/optimized/projects/safari-destination.webp', alt: 'Zambia Wildlife Safari destination page' },
      { src: '/optimized/projects/safari-booking.webp', alt: 'Zambia Wildlife Safari booking section' },
    ],
  },
  {
    slug: 'aeither-posts',
    name: 'Aeither Posts',
    category: 'Social Media Tool',
    label: 'Social Media Tool',
    location: 'Zambia',
    year: '2025',
    projectType: 'dual_platform',
    domain: 'Project preview',
    summary:
      'A creator-friendly scheduling and content operations tool built for cleaner planning and publishing workflows.',
    description:
      'Aeither Posts needed an interface that felt organized rather than chaotic. The product design focuses on rhythm, clarity, and a tool experience that growing teams can understand quickly.',
    story:
      'Aeither Posts needed to feel like a system rather than a pile of content tasks. The interface direction focuses on rhythm, clean planning, and a calmer publishing experience for growing teams.',
    services: ['SaaS interface', 'Content workflow design', 'Product presentation'],
    timeline: '6 weeks',
    outcome:
      'A more polished social publishing product that is easier to explain, sell, and onboard teams into.',
    featurePills: ['Content ops', 'Mobile + Web', 'Team-ready'],
    accent: {
      solid: '#EF4444',
      soft: 'rgba(239, 68, 68, 0.14)',
    },
    desktopImage: '/optimized/projects/aeither-hero.webp',
    mobileImage: '/optimized/projects/aeither-publishing.webp',
    heroImage: '/optimized/projects/aeither-hero.webp',
    heroAlt: 'Aeither Posts dashboard screenshot',
    image: '/optimized/projects/aeither-hero.webp',
    imageAlt: 'Aeither Posts dashboard screenshot',
    gallery: [
      { src: '/optimized/projects/aeither-hero.webp', alt: 'Aeither Posts dashboard' },
      { src: '/optimized/projects/aeither-publishing.webp', alt: 'Aeither Posts publishing workflow' },
      { src: '/optimized/projects/aeither-planning.webp', alt: 'Aeither Posts planning interface' },
    ],
  },
]

export const heroSlides = [
  projects.find((project) => project.slug === 'kimbalert-africa'),
  projects.find((project) => project.slug === 'pharma-link'),
  projects.find((project) => project.slug === 'shark-car-hire'),
].filter(Boolean) as Project[]

export const workProjects = projects
export const heroProjects = heroSlides
export const featuredProjects = workProjects.slice(0, 6)
export const productNames = projects.map((project) => project.name)

export const services = [
  {
    id: 'premium-websites',
    key: 'premium-websites',
    number: '01',
    title: 'Premium Websites',
    description: 'Fast, mobile-ready websites built to convert visitors into WhatsApp conversations and real enquiries.',
    price: 'From ZMW 5,000',
  },
  {
    id: 'mobile-applications',
    key: 'mobile-applications',
    number: '02',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile experiences designed for Zambian users, devices, and network realities.',
    price: 'From ZMW 15,000',
  },
  {
    id: 'ai-automation',
    key: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    description: 'Lead qualification, follow-up, and workflow automation that keeps the business moving after hours.',
    price: 'From ZMW 8,000',
  },
  {
    id: 'payment-integration',
    key: 'payment-integration',
    number: '04',
    title: 'Payment Integration',
    description:
      'Payment processing integration for cards, transfers, and local payment flows that help businesses get paid online.',
    price: 'From ZMW 3,500',
  },
  {
    id: 'business-systems',
    key: 'business-systems',
    number: '05',
    title: 'Business Systems',
    description: 'Operational systems for bookings, CRM, admin, fleet, and the messy workflows in between.',
    price: 'From ZMW 8,000',
  },
  {
    id: 'saas-products',
    key: 'saas-products',
    number: '06',
    title: 'SaaS Products',
    description: 'Deployable software like TengaLoans and ZedBooks built for local operators.',
    price: 'ZMW 2,000/mo',
  },
] as const

export const offerPackages = [
  {
    eyebrow: 'Website Launch',
    title: 'Website Launch Package',
    bestFor: 'For SMEs that need to look credible online and generate clearer enquiries.',
    price: 'From ZMW 5,000',
    includes: ['Mobile-responsive website', 'WhatsApp CTA + contact path', 'Basic SEO and metadata', 'Launch support'],
    cta: 'Get Website Quote',
  },
  {
    eyebrow: 'Business System',
    title: 'Business System Package',
    bestFor: 'For teams stuck with Excel, WhatsApp, scattered records, and manual reports.',
    price: 'From ZMW 8,000',
    includes: ['Custom dashboard', 'Admin panel and user roles', 'Reports and exports', 'Workflow or booking tracking'],
    cta: 'Discuss Your Workflow',
  },
  {
    eyebrow: 'AI Automation',
    title: 'AI Automation Package',
    bestFor: 'For businesses wasting time on repetitive follow-ups, reports, and admin work.',
    price: 'From ZMW 8,000',
    includes: ['Lead capture automation', 'FAQ/customer response planning', 'Document or report automation', 'Safe-use training'],
    cta: 'Explore Automation',
  },
  {
    eyebrow: 'Mobile App',
    title: 'Mobile App Build Package',
    bestFor: 'For products and services that need a mobile-first customer experience.',
    price: 'From ZMW 15,000',
    includes: ['Feature planning', 'UI/UX direction', 'Backend/API integration', 'Testing and launch support'],
    cta: 'Plan Your App',
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, customers, current workflow, and the result you need.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We define the simplest solution: website, app, system, automation, or a combination.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create the interface and user journey for your customers, staff, or operators.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'We develop, connect core features, test the experience, and tighten the details.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We help you go live, review the system, and hand over with clear next steps.',
  },
] as const

export const painPoints = [
  'Your business looks less professional online than the work you actually do.',
  'Customers cannot clearly find your services, prices, proof, or next step.',
  'Bookings, payments, customer details, and follow-ups are scattered across WhatsApp, Excel, and paper.',
  'Reports take too long because too much of the business is still manual.',
  'You are losing leads because follow-up depends on memory instead of a system.',
]

export const solutionPoints = [
  'A professional website that makes your business easier to find, trust, and contact.',
  'Clear offers, proof, and WhatsApp quote paths built around real buyer problems.',
  'Custom systems that centralize bookings, customer records, reports, and operations.',
  'Payment-ready platforms and mobile-friendly experiences for modern customers.',
  'AI automation opportunities that reduce repetitive admin, responses, and reporting.',
]

export const proofStats = [
  { value: 10, suffix: '+', label: 'Projects delivered' },
  { value: 6, suffix: '', label: 'Weeks average delivery' },
  { value: 2, suffix: '', label: 'Live SaaS products' },
  { value: 100, suffix: '%', label: 'Zambian-built' },
]

export const founders = [
  {
    name: 'Samuel Kamanga',
    role: 'Technical Lead & Co-Founder',
    image: '/optimized/founders/samuel-kamanga.webp',
    alt: 'Samuel Kamanga portrait',
  },
  {
    name: 'Simon Mulenga',
    role: 'Growth Lead & Co-Founder',
    image: '/optimized/founders/simon-mulenga.webp',
    alt: 'Simon Mulenga portrait',
  },
] as const

export const productCards = [
  {
    id: 'tengaloans',
    title: 'TengaLoans',
    description:
      'Loan lifecycle software for lenders who need applications, repayments, and account visibility in one place.',
    price: 'ZMW 2,000/mo',
    image: '/optimized/projects/tengaloans-overview.webp',
    alt: 'TengaLoans product dashboard',
    href: 'https://tengaloans.com',
    demoHref:
      'https://wa.me/260760580949?text=Hi%20Byte%20%26%20Berry%2C%20I%20want%20a%20TengaLoans%20demo%20for%20my%20lending%20business.',
    ctaLabel: 'Book TengaLoans Demo',
    shortPitch: 'For microfinance teams, loan officers, SACCOs, and lending desks.',
    outcomes: ['Repayment visibility', 'Borrower records', 'Officer follow-ups'],
    workflow: ['Applications', 'Approval', 'Repayments', 'Arrears', 'Reports'],
  },
  {
    id: 'zedbooks',
    title: 'ZedBooks',
    description:
      'Accounting automation for Zambian teams that want cleaner records, repeatable workflows, and less admin drag.',
    price: 'From ZMW 2,000/mo',
    href: 'https://zedbooks.byteandberry.com',
    demoHref:
      'https://wa.me/260760580949?text=Hi%20Byte%20%26%20Berry%2C%20I%20want%20a%20ZedBooks%20demo%20for%20my%20business%20accounts.',
    ctaLabel: 'Book ZedBooks Demo',
    shortPitch: 'For SMEs that need invoices, expenses, records, and monthly clarity.',
    outcomes: ['Cleaner records', 'Faster invoices', 'Monthly reporting'],
    workflow: ['Invoices', 'Expenses', 'Customers', 'Payments', 'Reports'],
  },
] as const

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug).slice(0, 3)
}
