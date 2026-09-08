/* ===== Shared project data (used by project.html) ===== */
const PROJECTS = [
  {
    id: 'teman-konten',
    title: 'Teman Konten',
    company: 'Teman Konten',
    role: 'Founder',
    period: 'Aug 2026 – Present',
    category: 'Founder',
    summary: 'Founded an AI-assisted content studio for local brands — planning, producing, and publishing short-form content across Instagram, TikTok, and Facebook, with a production pipeline that cut batch turnaround by ~50%.',
    overview: [
      'Founded a content studio helping local brands plan, produce, and publish social media content across Instagram, TikTok, and Facebook.',
      'Built an AI-assisted production pipeline for scripting, captioning, and short-form video editing — cutting turnaround time per content batch by ~50%.',
      'Manage content calendars and performance reporting for multiple SME clients through a custom dashboard.',
      'Handle client acquisition, onboarding, and a small remote team of creators and editors.'
    ],
    tags: ['Content', 'AI Video', 'Social Media'],
    iconSvg: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M10 9l5 3-5 3z"/>'
  },
  {
    id: 'kelolaku',
    title: 'Kelolaku',
    company: 'Kelolaku',
    role: 'Founder',
    period: 'Jun 2026 – Present',
    category: 'Founder',
    summary: 'Mobile-first business management app for small merchants — sales, stock, and cash flow in one place, with AI-powered daily summaries pushed to owners over WhatsApp. Shipped the MVP as a solo founder.',
    overview: [
      'Building Kelolaku, a mobile-first app that helps small merchants manage sales, stock, and cash flow in one place.',
      'Designed the product and shipped the MVP — a Flutter app backed by a Node.js API with automated daily business reports.',
      'Added AI-powered daily summaries delivered via WhatsApp, flagging low stock and unusual sales for owners.',
      'Lead product, engineering, and early go-to-market as a solo founder.'
    ],
    tags: ['Flutter', 'SaaS', 'MSME'],
    iconSvg: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 14v3M12 10v7M16 12v5"/>'
  },
  {
    id: 'b2b-invoicing-platform',
    title: 'B2B Invoicing Platform (Mobile)',
    company: 'Paper.id',
    role: 'Software Engineer II',
    period: 'Mar 2023 – Oct 2025',
    category: 'Fintech',
    image: 'assets/project/paper.png',
    summary: 'Built mobile modules for Indonesia\'s leading B2B invoicing platform serving 100K+ SMEs; led virtual account, e-wallet, and QRIS payment integrations, improving transaction success rate by 25%.',
    overview: [
      'Spearheaded development of multiple mobile modules for the platform.',
      'Led integration of virtual accounts, e-wallets, and QRIS payments — improved transaction success rate by 25%.',
      'Achieved 30% faster load time and reduced crash rate by 40%.',
      'Enhanced invoice creation flow — reduced user drop-off by 18%, increasing retention.',
      'Maintained crash-free rate above 98%.'
    ],
    tags: ['Flutter', 'QRIS', 'Payments'],
    iconSvg: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'
  },
  {
    id: 'flutter-migration-loyalty',
    title: 'Flutter Migration & Loyalty System',
    company: 'Otoraja',
    role: 'Senior Mobile Engineer',
    period: 'Mar 2023 – Oct 2025',
    category: 'Mobile App',
    image: 'assets/project/otoraja.png',
    summary: 'Migrated a legacy Android app to Flutter, cutting feature development time by 40%, and built a customer reward & referral system that lifted MAU by 15%.',
    overview: [
      'Migrated legacy Android app to Flutter — cut development time for new features by 40%.',
      'Implemented customer reward and referral systems — achieved 15% higher MAU.',
      'Collaborated with QA and UI/UX teams to reduce post-release bugs by 35%.'
    ],
    tags: ['Flutter', 'Migration', 'Retention'],
    iconSvg: '<path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 12l4-2M3 12l4 2"/>'
  },
  {
    id: 'fintech-microloan-app',
    title: 'Fintech Microloan App',
    company: 'Ekuid',
    role: 'Mobile Engineer',
    period: 'Dec 2021 – Sep 2022',
    category: 'Fintech',
    image: 'assets/project/ekuid.png',
    summary: 'Built fintech solutions enabling MSMEs to access microloans and manage digital payments; optimized API calls and caching for 20% faster dashboard load times.',
    overview: [
      'Developed fintech solutions enabling MSMEs to access microloans and manage digital payments.',
      'Optimized API calls and data caching — improved dashboard load times by 20%.',
      'Integrated GraphQL for API and analytics to track user financial behavior.'
    ],
    tags: ['GraphQL', 'Fintech', 'Performance'],
    iconSvg: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
  },
  {
    id: 'fmcg-multi-app-suite',
    title: 'FMCG Multi-App Suite',
    company: 'Klikdaily',
    role: 'Mobile Engineer',
    period: 'Dec 2019 – Dec 2022',
    category: 'Mobile App',
    image: 'assets/project/klikdaily.png',
    summary: 'Developed and maintained 3 FMCG apps (Seller, B2B, B2C) for SMEs; improved the Play Store rating from 3.8 to 4.5 through UI/UX enhancements.',
    overview: [
      'Developed and maintained FMCG business apps for SMEs — 3 apps (Seller, B2B, B2C).',
      'Enhanced UI/UX components — improved app rating from 3.8 to 4.5 on Google Play.',
      'Collaborated with backend team using Node.js and Firebase for seamless integration.'
    ],
    tags: ['Node.js', 'Firebase', 'UI/UX'],
    iconSvg: '<path d="M3 9l9-6 9 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21V12h6v9"/>'
  },
  {
    id: 'mawpay',
    title: 'Mawpay',
    company: 'Mawpay',
    role: 'Founder',
    period: 'Jul 2019 – Feb 2022',
    category: 'Founder',
    image: 'assets/project/mawpay.png',
    summary: 'Designed and built a payment app from scratch, reaching 100+ active users and 30+ daily transactions, driven by targeted Facebook Ads acquisition campaigns.',
    overview: [
      'Designed and developed the Mawpay payment app from scratch — 100+ active users, 30+ daily transactions.',
      'Executed Facebook Ads campaigns to drive user acquisition and increase visibility.'
    ],
    tags: ['Founder', 'Payments', 'Growth'],
    iconSvg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h4a2 2 0 0 1 0 4H9"/>'
  },
  {
    id: 'hris-attendance-system',
    title: 'HRIS & Attendance System',
    company: 'PT Cyber Blitz Nusantara',
    role: 'Founder',
    period: 'Mar 2019 – Dec 2019',
    category: 'Enterprise Tools',
    image: 'assets/project/hris.png',
    summary: 'Built internal attendance and HRIS apps for Jasamarga and Pertamina using Flutter and Laravel REST APIs, cutting manual HR processing time by 50%.',
    overview: [
      'Built internal attendance and HRIS apps for Jasamarga and Pertamina using Flutter and Laravel REST APIs.',
      'Reduced manual HR processing time by 50%.'
    ],
    tags: ['Flutter', 'Laravel', 'REST API'],
    iconSvg: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/>'
  }
];
