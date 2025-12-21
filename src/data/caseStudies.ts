import { getImagePath } from '@/utils/imageUtils'

export interface CaseStudy {
  id: string
  title: string
  shortDescription: string
  fullStory: string
  problem: string
  solution: string
  result: string
  testimonial?: {
    quote: string
    author: string
    role?: string
  }
  price: string
  liveLink: string
  images: string[]
  category: string
  tags: string[]
}

// Helper to create image paths
const img = (path: string) => getImagePath(path)

export const caseStudies: CaseStudy[] = [
  {
    id: 'aether',
    title: 'Aether',
    shortDescription: 'AI-powered business co-pilot designed to help small businesses automate communication and manage customer interactions.',
    fullStory: `Aether is a modern AI-powered business co-pilot designed to help small businesses automate communication, manage customer interactions, and streamline everyday operational tasks.

Created to eliminate the manual, repetitive workload that slows down entrepreneurs, Aether provides businesses with a reliable digital assistant that works 24/7 — responding to leads, organizing feedback, generating quotations, and keeping teams connected.

Aether was developed with a simple belief: every business deserves professional automation, even without a big team or expensive software.

The idea for Aether was born after recognizing how many businesses lose potential customers due to slow responses, disorganized inboxes, or the lack of professional follow-up systems. Many small business owners juggle too much — sales, marketing, communication, and operations — leading to missed opportunities.

Aether was created to solve that problem by acting as a "co-pilot" rather than just another tool. Instead of forcing businesses to adapt to complicated systems, Aether adapts to them, integrating smoothly into their existing workflow.`,
    problem: `Small businesses struggle with slow response times to customer inquiries, leading to lost leads. Many entrepreneurs juggle multiple responsibilities — sales, marketing, communication, and operations — resulting in disorganized inboxes and missed opportunities. Without a dedicated team or expensive software, maintaining professional, consistent customer communication becomes nearly impossible.`,
    solution: `Aether acts as an intelligent co-pilot that automates communication workflows. It automatically responds to new inquiries, sends professional AI-generated quotations, organizes client feedback in a simple dashboard, and notifies business owners instantly via email or Telegram. The platform integrates seamlessly into existing workflows without requiring businesses to adapt to complicated systems.`,
    result: `Businesses using Aether experience faster response times, increased customer satisfaction, and higher lead conversion rates. The platform saves entrepreneurs significant time by automating repetitive tasks, allowing them to focus on growth. With 24/7 availability, businesses never miss a potential customer, and the professional automation helps build stronger client relationships.`,
    price: 'K28,000',
    liveLink: 'https://aether-rho-woad.vercel.app/',
    images: [
      img('casestudy/aether/Copilot_lightmode.png'),
      img('casestudy/aether/Leads_lightmode.png'),
      img('casestudy/aether/Project_Tasks_lighmode.png'),
      img('casestudy/aether/Tasks_lightmode.png'),
      img('casestudy/aether/Screenshot 2025-11-13 182628.png'),
      img('casestudy/aether/Screenshot 2025-11-27 120704.png'),
      img('casestudy/aether/Screenshot 2025-11-27 120752.png')
    ],
    category: 'SaaS Platform',
    tags: ['AI', 'Automation', 'Business Tools', 'CRM']
  },
  {
    id: 'pushr',
    title: 'Pushr',
    shortDescription: 'Smart, community-driven delivery and errand platform designed to make everyday tasks easier, faster, and more reliable.',
    fullStory: `Pushr is a smart, community-driven delivery and errand platform designed to make everyday tasks easier, faster, and more reliable.

Whether you need groceries picked up, a parcel delivered, documents dropped off, or personal errands completed, Pushr connects you with trusted, verified pushers who can handle it for you.

Built with simplicity and reliability at its core, Pushr removes the stress of running small tasks by giving users access to a flexible network of helpers who are always ready to assist.

The platform was created to solve the everyday challenge of getting things done in busy urban environments. From students needing quick deliveries to small businesses requiring reliable errand services, Pushr bridges the gap between those who need help and those who can provide it.`,
    problem: `People in urban areas struggle with time-consuming errands and deliveries. Whether it's picking up groceries, delivering documents, or running personal errands, these tasks take valuable time away from work, studies, or family. Traditional delivery services are often expensive or unavailable for smaller tasks, leaving people with limited options.`,
    solution: `Pushr creates a community-driven network of verified "pushers" who can handle deliveries and errands on demand. The platform includes real-time tracking, secure payments, in-app communication, and a verification process for all pushers (including ID and face recognition) to ensure safety and trust. Users can create tasks quickly and track progress from start to finish.`,
    result: `Pushr has created a reliable, affordable solution for everyday errands and deliveries. Users save time and gain convenience, while pushers earn income through flexible work opportunities. The platform has built trust through its verification system and real-time tracking, making it a go-to solution for busy individuals, students, and small businesses in the community.`,
    price: 'K20,000',
    liveLink: 'https://samuel04-png.github.io/pushr/',
    images: [
      img('casestudy/pushr/Screenshot 2025-11-27 121317.png'),
      img('casestudy/pushr/Screenshot 2025-11-27 121451.png'),
      img('casestudy/pushr/Screenshot 2025-11-27 121543.png'),
      img('casestudy/pushr/Screenshot 2025-11-27 121639.png'),
      img('casestudy/pushr/Screenshot 2025-11-27 121728.png')
    ],
    category: 'Mobile App',
    tags: ['Delivery', 'Logistics', 'Community', 'On-Demand']
  },
  {
    id: 'zambia-wildlife',
    title: 'ZambiaWild Safaris',
    shortDescription: 'Luxury safari and wildlife adventure platform showcasing Zambia\'s untamed beauty and raw wilderness.',
    fullStory: `ZambiaWild Safaris is your gateway to the untamed beauty and raw wilderness of Zambia. We offer luxury safaris, authentic wildlife adventures, and deep-immersion cultural experiences — all thoughtfully crafted to showcase the best of Zambia's natural heritage, while honouring conservation and local communities.

The platform was designed to connect travelers with Zambia's iconic parks and wild places: lush river systems, vast plains, dense bush, and breathtaking falls. Every journey reveals Africa's wildlife in its most natural settings.

ZambiaWild Safaris combines luxury and wilderness — you don't have to choose between comfort and adventure. Each trip is designed with respect for nature and local culture, letting you connect with Zambia's wilderness while leaving a positive impact.`,
    problem: `Travelers interested in Zambian safaris often struggle to find comprehensive information about available packages, destinations, and experiences. Many safari booking platforms are generic and don't showcase the unique beauty of Zambia's wilderness. Travelers want personalized experiences but lack access to detailed information about luxury lodges, wildlife destinations, and cultural experiences.`,
    solution: `ZambiaWild Safaris provides a beautifully designed platform that showcases tailored safari packages, top wildlife destinations, luxury accommodations, and local expertise. The site offers detailed information about game drives, walking safaris, canoe trips, and photographic hideouts, allowing travelers to customize their adventure based on their preferences, comfort level, and interests.`,
    result: `The platform has successfully connected travelers with authentic Zambian safari experiences. Travelers can now easily explore options, understand what each package includes, and book personalized adventures. The site emphasizes conservation and community support, helping travelers make informed decisions that benefit both their experience and local communities.`,
    price: 'K10,000',
    liveLink: 'https://samuel04-png.github.io/ZambiaWild-Safaris/',
    images: [
      img('casestudy/Zambia wildlife/Screenshot 2025-11-27 122304.png'),
      img('casestudy/Zambia wildlife/Screenshot 2025-11-27 122413.png'),
      img('casestudy/Zambia wildlife/Screenshot 2025-11-27 122445.png'),
      img('casestudy/Zambia wildlife/Screenshot 2025-11-27 122803.png'),
      img('casestudy/Zambia wildlife/Screenshot 2025-11-27 122844.png')
    ],
    category: 'Travel & Tourism',
    tags: ['Safari', 'Travel', 'Wildlife', 'Luxury']
  },
  {
    id: 'art',
    title: 'Art Portfolio',
    shortDescription: 'Curated online gallery showcasing museum-grade originals and high-quality prints for modern collectors and art lovers.',
    fullStory: `Welcome to a curated online gallery where art meets elegance and intention — a space designed to showcase creative works that speak to the soul. This site offers museum-grade originals and high-quality prints, thoughtfully selected for modern collectors, art lovers, and design-minded individuals.

Here you'll find artwork that embodies a balance between creativity and refinement — minimal, elegant, and crafted to live beautifully in contemporary spaces. Each piece is more than decoration; it is a story, a mood, or a moment captured in color, form, and light.

The gallery was created to provide an accessible yet elegant platform for art appreciation and collection. Whether you're a seasoned collector or new to art, the site welcomes you to explore, appreciate, and bring home pieces that speak to you.`,
    problem: `Artists and collectors need a platform that showcases artwork in a way that honors its aesthetic value. Many art websites are cluttered or don't provide the elegant, minimal presentation that allows artwork to shine. Collectors want to see high-quality images, understand the artistic vision, and easily access information about purchasing originals or prints.`,
    solution: `This art portfolio site provides a clean, minimal, gallery-driven layout that puts the artwork front and center. The site features curated quality pieces with high-quality images, organized galleries, and clear information about available originals and prints. The design emphasizes the art itself, creating an elegant browsing experience that matches the sophistication of the pieces.`,
    result: `The platform has created an elegant, accessible way for art lovers to discover and collect artwork. The minimal design allows each piece to be appreciated fully, while the organized structure makes it easy to browse, learn about the artistic vision, and make purchases. The site successfully bridges the gap between artists and collectors in a refined, professional manner.`,
    price: 'K7,500',
    liveLink: 'https://samuel04-png.github.io/art/index.html',
    images: [
      img('casestudy/Art/Screenshot 2025-11-27 124132.png'),
      img('casestudy/Art/Screenshot 2025-11-27 124159.png'),
      img('casestudy/Art/Screenshot 2025-11-27 124233.png')
    ],
    category: 'Portfolio',
    tags: ['Art', 'Gallery', 'E-commerce', 'Portfolio']
  },
  {
    id: 'buildbyte',
    title: 'BuildByte',
    shortDescription: 'Modern development and technology platform showcasing innovative solutions and technical expertise.',
    fullStory: `BuildByte represents a modern approach to technology development and innovation. The platform showcases cutting-edge solutions, technical expertise, and a commitment to building software that makes a difference.

Built with a focus on clean design and user experience, BuildByte demonstrates how technology can be both powerful and accessible. The platform serves as a showcase for development capabilities while providing valuable resources and insights.`,
    problem: `Technology companies need a platform that effectively showcases their capabilities, projects, and expertise. Many tech portfolio sites are either too technical for general audiences or too generic to stand out. There's a need for a platform that balances technical depth with accessible presentation.`,
    solution: `BuildByte provides a modern, clean platform that effectively communicates technical capabilities through elegant design. The site showcases projects, expertise, and solutions in a way that's both professional and approachable, making complex technology accessible to potential clients and partners.`,
    result: `The platform successfully positions the company as a modern, capable technology partner. The clean design and clear presentation help potential clients understand capabilities and see the quality of work, leading to increased inquiries and partnerships.`,
    price: 'K9,000',
    liveLink: 'https://samuel04-png.github.io/BuildByte/',
    images: [
      img('casestudy/BuildByte/Screenshot 2025-11-27 123426.png'),
      img('casestudy/BuildByte/Screenshot 2025-11-27 123641.png'),
      img('casestudy/BuildByte/Screenshot 2025-11-27 123815.png'),
      img('casestudy/BuildByte/Screenshot 2025-11-27 123912.png')
    ],
    category: 'Technology',
    tags: ['Development', 'Technology', 'Portfolio', 'Innovation']
  },
  {
    id: 'nexusflow',
    title: 'NexusFlow',
    shortDescription: 'Advanced workflow and process management platform designed to streamline business operations.',
    fullStory: `NexusFlow is an advanced platform designed to streamline business operations through intelligent workflow management. The platform helps organizations optimize processes, improve efficiency, and connect different aspects of their operations seamlessly.

Built with modern technology and user experience in mind, NexusFlow represents the future of business process management — intuitive, powerful, and designed to scale with growing organizations.`,
    problem: `Businesses struggle with disconnected processes and inefficient workflows. Many organizations use multiple tools that don't communicate well, leading to data silos, manual workarounds, and reduced productivity. There's a need for a unified platform that can streamline operations and improve efficiency.`,
    solution: `NexusFlow provides a unified platform that connects different business processes and workflows. The platform offers intelligent automation, seamless integrations, and intuitive interfaces that help organizations optimize their operations without the complexity of traditional enterprise software.`,
    result: `Organizations using NexusFlow experience improved efficiency, better process visibility, and reduced operational costs. The platform has helped businesses streamline their workflows, eliminate manual processes, and scale their operations more effectively.`,
    price: 'K24,000',
    liveLink: 'https://samuel04-png.github.io/NexusFlow/',
    images: [
      img('casestudy/nexusflow/Screenshot 2025-11-27 115955.png'),
      img('casestudy/nexusflow/Screenshot 2025-11-27 120102.png'),
      img('casestudy/nexusflow/Screenshot 2025-11-27 120141.png'),
      img('casestudy/nexusflow/Screenshot 2025-11-27 120214.png')
    ],
    category: 'Business Tools',
    tags: ['Workflow', 'Automation', 'Business Process', 'Enterprise']
  }
]

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id)
}

export function getOtherCaseStudies(currentId: string): CaseStudy[] {
  return caseStudies.filter(study => study.id !== currentId).slice(0, 3)
}

