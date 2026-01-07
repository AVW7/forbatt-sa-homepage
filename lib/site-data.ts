export const siteData = {
  site: {
    brand: "Forbatt SA",
    tagline: "Power. Protect. Perform.",
    primaryCTA: "Talk to a Specialist",
    secondaryCTA: "Explore Products"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Training", href: "/training" },
    { label: "Connect", href: "/contact" }
  ],
  home: {
    hero: {
      headline: "Trusted Energy and Surveillance Solutions—Built for Mission-Critical Uptime",
      subheadline: "From backup power to enterprise-grade video, we design and supply systems that deliver reliability, scalability, and support—end to end.",
      ctas: [
        { label: "Explore Products", href: "/products", variant: "primary" },
        { label: "Talk to a Specialist", href: "/contact", variant: "secondary" }
      ]
    },
    valueProps: [
      {
        title: "Exclusive Agency. Official Distribution.",
        copy: "Direct access to KEDACOM, TVT, NUUO, Forbatt Batteries, Peak Power—and official FLIR thermal and Idemia access control. One portfolio, zero compromises."
      },
      {
        title: "Solution Design You Can Scale",
        copy: "We help distributors and integrators win projects with specification support, product selection, and post‑install technical assistance."
      },
      {
        title: "Reliability Proven in the Field",
        copy: "Global-leading brands, consistent supply, and devices tested for demanding environments—from residential sites to public protection."
      }
    ],
    solutionPanels: [
      {
        title: "Surveillance Technology",
        copy: "Recorders that set the benchmark, body‑worn and mobile systems for frontline teams, and intelligent NVR software for enterprise visibility.",
        cta: { label: "View Surveillance", href: "/products/surveillance" }
      },
      {
        title: "Backup Power",
        copy: "High‑performance gel and AGM solutions engineered for long life and dependable uptime—because your systems should never go dark.",
        cta: { label: "View Backup Power", href: "/products/backup-power" }
      },
      {
        title: "Holographic Screen",
        copy: "Premium holographic display films and turnkey installations—mount on glass, hang, or floor‑stand for immersive, attention‑grabbing visuals.",
        cta: { label: "View Holographic", href: "/products/holographic" }
      },
      {
        title: "Installation Accessories",
        copy: "Mounting and integration essentials that speed deployment and enhance long‑term performance across your sites.",
        cta: { label: "View Accessories", href: "/products/accessories" }
      }
    ],
    proofStrip: {
      headline: "Where We Excel",
      items: [
        { title: "Residential & Commercial", copy: "TVT recorders and cameras—trusted for clear footage and simple scalability." },
        { title: "Public Protection", copy: "KEDACOM mobile NVRs, body‑worn and vehicle cameras—built for frontline operations." },
        { title: "Retail & Enterprise", copy: "NUUO intelligent video—centralized management across multi‑site environments." }
      ]
    },
    brandStrip: {
      headline: "Our Brands",
      brands: ["KEDACOM", "TVT", "NUUO", "FLIR", "Idemia", "Forbatt Batteries", "Tiandy", "Sunell", "OUTDO"]
    },
    supportBanner: {
      title: "Need a Call Back?",
      copy: "Send us your requirements—we'll align the right products and a specialist to your project scope.",
      cta: { label: "Request a Call", href: "/contact#callback" }
    }
  },
  about: {
    hero: {
      headline: "Forbatt SA—Your Partner for Reliable Energy and Surveillance",
      subheadline: "We combine agency relationships, distribution strength, and technical expertise to deliver solutions that work on day one—and every day after."
    },
    mission: {
      title: "What Drives Us",
      copy: "Deliver innovation, quality, and reliability—creating value for distributors, integrators, and end‑users across the entire project lifecycle."
    },
    agency: {
      title: "Exclusive Agency",
      copy: "KEDACOM, TVT, NUUO, Forbatt Batteries, and Peak Power—imported exclusively for our distributor network."
    },
    distribution: {
      title: "Official Distribution",
      copy: "FLIR thermal imaging and Idemia access control—expanding capability for high‑security and industrial applications."
    },
    markets: [
      {
        title: "Residential & Commercial",
        copy: "From entry-level to high‑end, TVT delivers dependable recording and camera performance."
      },
      {
        title: "Public Protection & Guarding",
        copy: "KEDACOM mobile surveillance—body‑worn, vehicle, and mobile NVR solutions designed for field operations."
      },
      {
        title: "Retail & Enterprise",
        copy: "NUUO intelligent video scales across sectors: retail, industrial, transportation, education, government, banking, and hospitality."
      }
    ],
    approach: {
      title: "How We Help",
      bullets: [
        "Project scoping, specification, and bill of materials",
        "Product selection aligned to performance and budget",
        "Deployment guidance and post‑install technical support"
      ]
    },
    cta: { label: "Talk to Us", href: "/contact" }
  },
  products: {
    intro: {
      title: "Products",
      copy: "Browse by category or brand. If you're scoping a new project, we'll help match the right devices to your environment and budget."
    },
    categories: [
      {
        name: "Surveillance Technology",
        copy: "Recorders, bullet and dome cameras, fisheye, PTZ, covert, NVRs, and purpose‑built systems for mobile and fixed deployments.",
        href: "/products/surveillance",
        featured: ["Recorders", "Body‑worn & Mobile", "NVRs", "PTZ"]
      },
      {
        name: "Backup Power",
        copy: "Gel and AGM batteries optimized for long life, consistent discharge, and dependable uptime.",
        href: "/products/backup-power",
        featured: ["FB200‑12G Gel Battery", "Peak Power series"]
      },
      {
        name: "Holographic Screen",
        copy: "High‑clarity holographic films with mounting options for glass, hanging installs, and floor‑standing displays.",
        href: "/products/holographic",
        featured: ["Mounting on Glass", "Hanging", "Floor Standing"]
      },
      {
        name: "Installation Accessories",
        copy: "Mounting solutions, brackets, and integration essentials—including FLIR PT Series wall mounts.",
        href: "/products/accessories",
        featured: ["FLIR PT Series wall mount"]
      }
    ],
    brands: [
      "KEDACOM",
      "TVT",
      "NUUO",
      "FLIR",
      "Idemia",
      "Forbatt Batteries",
      "Tiandy",
      "Sunell",
      "OUTDO"
    ],
    helpLinks: [
      { label: "Project Registration", href: "/projects/register" },
      { label: "Technical Support", href: "/contact#support" }
    ]
  },
  brands: {
    intro: {
      title: "Brands We Trust",
      copy: "A curated portfolio of world‑class manufacturers chosen for performance, longevity, and supply continuity."
    },
    items: [
      {
        name: "KEDACOM",
        copy: "Mobile surveillance and niche security—body‑worn, vehicle cameras, and rugged mobile NVR.",
        href: "/brands/kedacom"
      },
      {
        name: "TVT",
        copy: "Comprehensive CCTV with standout recorders for clear footage and dependable operation.",
        href: "/brands/tvt"
      },
      {
        name: "NUUO",
        copy: "Intelligent surveillance software powering 94,000+ installations in 65 countries.",
        href: "/brands/nuuo"
      },
      {
        name: "FLIR",
        copy: "Thermal imaging systems for high‑security and industrial environments.",
        href: "/brands/flir"
      },
      {
        name: "Idemia",
        copy: "Access control and identity solutions for secure facility management.",
        href: "/brands/idemia"
      },
      {
        name: "Forbatt Batteries",
        copy: "Dependable backup power solutions designed for sustained performance.",
        href: "/brands/forbatt-batteries"
      },
      {
        name: "Tiandy",
        copy: "Innovative video surveillance systems across diverse environments.",
        href: "/brands/tiandy"
      },
      {
        name: "Sunell",
        copy: "Versatile cameras and surveillance solutions for varied use‑cases.",
        href: "/brands/sunell"
      },
      {
        name: "OUTDO",
        copy: "Performance batteries for motorcycles and specialized applications.",
        href: "/brands/outdo"
      }
    ]
  },
  contact: {
    intro: {
      title: "Talk to Us",
      copy: "Need help sourcing products or designing a solution? Share your requirements and we'll connect you to the right specialist."
    },
    callback: {
      title: "Need a Call Back?",
      copy: "Complete the form—we'll respond with recommendations and next steps.",
      fields: ["Name", "Company", "Email", "Phone", "Province", "Project Details"]
    },
    support: {
      title: "Need Technical Support?",
      copy: "Get assistance from our support team on configuration, compatibility, and troubleshooting.",
      cta: { label: "Get Support", href: "/contact#support" }
    },
    locations: [
      {
        city: "Johannesburg",
        address: "40 Falcon Lane, Lanseria Corporate Estate, Lanseria, Johannesburg, South Africa",
        phone: "+27 11 469 3598",
        email: "sales@forbatt.co"
      },
      {
        city: "Cape Town",
        address: "16 Bellray Business Park, 5 Ampere Street, Stikland, Cape Town, South Africa",
        phone: "+27 21 905 0095",
        email: "sales@forbatt.co"
      }
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/ForbattSA" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/forbatt-sa" },
      { label: "YouTube", href: "https://www.youtube.com/@ForbattSA" }
    ]
  },
  footer: {
    quickLinks: [
      { label: "Project Registration", href: "/projects/register" },
      { label: "Battery Application Summary", href: "/resources/battery-application-summary.pdf" },
      { label: "Articles", href: "/articles" }
    ],
    legal: "© 2026 Forbatt SA. All rights reserved."
  }
};
