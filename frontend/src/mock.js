// Mock data for IDK Interiors Landing Page

export const mockData = {
  hero: {
    headline: "3D Interior Designs That Sell and Inspire",
    subheadline: "We design photorealistic 3D interiors that help developers, investors, and homeowners visualize, market, and sell spaces before they're built.",
    ctaPrimary: "Request a Consultation",
    ctaSecondary: "Contact on WhatsApp",
    caption: "From empty room to finished vision — see how we transform spaces before they exist.",
    offer: "Free Room Design: Get a complimentary 3D design of one room when you book your first consultation (limited-time offer)."
  },
  
  trustSignals: {
    stats: [
      { value: "15+", label: "Years Experience", icon: "building" },
      { value: "UK & EU", label: "Clients", icon: "globe" },
      { value: "Fast", label: "48-72h Turnaround", icon: "zap" },
      { value: "ROI", label: "Improved ROI per m²", icon: "star" }
    ],
    clientLogos: [
      { name: "Property Developers", id: 1 },
      { name: "Real Estate", id: 2 },
      { name: "Investment Firms", id: 3 },
      { name: "Architects", id: 4 },
      { name: "Homeowners", id: 5 }
    ]
  },
  
  services: [
    {
      id: 1,
      title: "3D Visualization & Design Concepts",
      description: "Photorealistic renders that turn imagination into reality. Perfect for developers, realtors, and investors looking to pre-sell or present their spaces before completion.",
      features: ["Interior & exterior 3D renders", "Multiple styles & lighting options", "Furniture staging & textures", "High-res images for marketing"],
      idealFor: "Developers · Agencies · Investors"
    },
    {
      id: 2,
      title: "Full Interior Design",
      description: "Functional, aesthetic, and investment-smart interiors. We design spaces that not only look beautiful — they perform financially.",
      features: ["Space planning & layout optimization", "Color palettes & moodboards", "Material and furniture selection", "Technical drawings for contractors"],
      idealFor: "Homeowners · Boutique developers"
    },
    {
      id: 3,
      title: "Online Design Consultation",
      description: "Get expert design guidance remotely. Ideal for clients who want clarity, direction, and professional insight before starting a project.",
      features: ["1:1 video consultation", "Style & layout recommendations", "Moodboard & visual direction PDF", "Follow-up design proposal"],
      idealFor: "Remote clients · Early-stage renovators"
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Residential Visualization – Warsaw",
      category: "Residential",
      description: "Complete 3D concept for a 120m² apartment. Scandinavian simplicity meets warm Southern textures. Delivered within 72 hours.",
      image: "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/9nf7te5r_enhanced-enscape_2025-05-13-11-14-16-high-2rt9al.webp",
      results: {
        metric1: "Helped client pre-sell before renovation began",
        metric2: "72-hour delivery"
      }
    },
    {
      id: 2,
      title: "Boutique Office Design – London",
      category: "Residential",
      description: "Functional workspace visualization for a tech startup. Optimized collaboration zones with clean, modern aesthetic.",
      image: "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/ilwz4x3j_enhanced-enscape_2025-05-14-12-01-26-high-0glxdk.webp",
      results: {
        metric1: "Increased investor confidence",
        metric2: "Boosted lease interest"
      }
    },
    {
      id: 3,
      title: "Luxury Villa Interiors – Costa del Sol",
      category: "Luxury Residential",
      description: "High-end residential render package for a Mediterranean villa. From 3D visuals to material references, ready for builders.",
      image: "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/y5q1zv31_enhanced-enscape_2025-05-13-11-34-46-high-ye8t11.webp",
      results: {
        metric1: "Used in pre-sale campaigns",
        metric2: "3x faster conversions"
      }
    },
    {
      id: 4,
      title: "Modern Living Space",
      category: "Residential",
      description: "Open-plan living concept with premium finishes and smart space utilization for maximum appeal.",
      image: "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/8422lgj5_enscape_2025-05-22-14-59-55-high-zxfrtv.webp",
      results: {
        metric1: "Enhanced property value by 30%",
        metric2: "Sold within 2 weeks"
      }
    }
  ],
  
  whyIDK: [
    {
      id: 1,
      title: "Visual Clarity That Sells",
      description: "We help buyers, investors, and clients see potential. Our renders make your ideas market-ready before construction even begins."
    },
    {
      id: 2,
      title: "Fast & Reliable Delivery",
      description: "Get high-quality renders in 48–72 hours. Every project is organized, communicated, and delivered on time."
    },
    {
      id: 3,
      title: "European Perspective, Global Standards",
      description: "Polish craftsmanship, Northern precision, and Southern creativity — a unique mix that makes every design timeless and practical."
    },
    {
      id: 4,
      title: "Personalized Approach",
      description: "We start by listening. Every client, space, and story is different — and our process reflects that."
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Discovery & Consultation",
      description: "We start with your goals, floor plans, and preferences. You can share references or inspiration directly in our briefing form."
    },
    {
      step: 2,
      title: "Design & Visualization",
      description: "We create photorealistic 3D renders showing your concept in multiple styles and angles."
    },
    {
      step: 3,
      title: "Review & Delivery",
      description: "You review and approve the designs. We deliver final high-res files ready for marketing, presentations, or client handover."
    }
  ],
  
  results: {
    headline: "Our Designs Deliver Real Results",
    description: "Our clients have used IDK's visualizations to pre-sell properties before completion, increase property value, and secure investor confidence — all through the power of realistic design.",
    stats: [
      { value: "3x", label: "Faster property pre-sales" },
      { value: "30%", label: "Average value increase" },
      { value: "98%", label: "Client satisfaction" }
    ]
  },
  
  contact: {
    whatsapp: "447438462734",
    email: "info@idkinteriors.com",
    phone: "+44 7438 462 734",
    address: "UK & EU",
    tagline: "Smart design, seamless execution.",
    social: {
      linkedin: "https://www.linkedin.com/in/idkinteriordesign",
      instagram: "https://instagram.com/idkinterior_design/"
    }
  },
  
  formFields: {
    serviceTypes: [
      "3D Visualization",
      "Full Interior Design", 
      "Online Consultation"
    ],
    projectTypes: ["Residential", "Commercial", "Other"],
    spaceSizes: ["< 50m²", "50-100m²", "100-200m²", "200m²+"],
    budgetRanges: ["< £5k", "£5-15k", "£15-30k", "£30k+"],
    timelines: ["Immediate", "1-3 months", "3-6 months", "6+ months"]
  }
};