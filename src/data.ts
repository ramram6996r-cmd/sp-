/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Testimonial, ServiceDetail, FAQItem, DesignMood, MaterialOption } from "./types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Eco-Luxe ACP Modular Kitchen",
    category: "kitchen",
    image: "/src/assets/images/kitchen_portfolio_1780027659917.png",
    description: "Waterproof and fire-resistant aluminium composite panel kitchen in premium bronze-copper and matte charcoal finishes. Perfect for Indian cooking conditions with seamless cleaning surfaces.",
    highlights: ["100% Termite & Water Proof", "Soft-close Tandem Drawers", "Integrated Profile Handles", "Premium Quartz Inlay"]
  },
  {
    id: "p2",
    title: "Anodized Charcoal Glass Wardrobe",
    category: "wardrobe",
    image: "/src/assets/images/wardrobe_portfolio_1780027677114.png",
    description: "Sleek built-in bedroom wardrobe design utilizing lightweight aluminium frames loaded with tinted bronze glass sliding doors. Includes customizable interior shelving and LED sensor lighting.",
    highlights: ["Space-saving Sliding Track", "Anodized Rustproof Frame", "Built-in LED Sensor Rails", "Custom Modular Trays"]
  },
  {
    id: "p3",
    title: "Floating Minimalist TV Console",
    category: "tv_unit",
    image: "/src/assets/images/tv_unit_portfolio_1780027696086.png",
    description: "Refined living room media panel structured on black aluminium profile support framework with premium wood-texture accents, highlighted by warm indirect COB backlighting.",
    highlights: ["Concealed Cable Channels", "High Load-bearing Frame", "Acoustic Slatted Backdrop", "Soft Push-to-Open Cabinets"]
  },
  {
    id: "p4",
    title: "Dynamic Ambient PVC False Ceiling",
    category: "ceiling",
    image: "/src/assets/images/ceiling_portfolio_1780027714175.png",
    description: "Modern modular PVC ceiling design combining rich woodgrain finishes with stark white details. Engineered with integrated warm cove lighting and anti-sag durable brackets.",
    highlights: ["Moisture & Mildew Resistant", "Built-in COB Spotlighting", "Zero-Maintenance Paneled Surface", "Quick 2-Day Installation"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Shridhar Shridhara",
    text: "Best interior shop in Davangere and good quality and on time work best price. Loved the aluminum wardrobe and kitchen cabin structure. Very fast installation compared to traditional wood work.",
    rating: 5,
    source: "Google Review",
    date: "2 months ago"
  },
  {
    id: "t2",
    author: "Prakash K D",
    text: "Good service Budget Friendly Best Opportunity in Davanagere. Very cooperative team who completed our modular kitchen in SS Layout exactly on time. High quality ACP sheets were used.",
    rating: 5,
    source: "Google Review",
    date: "4 months ago"
  },
  {
    id: "t3",
    author: "Vishnu Allu",
    text: "Quality work, Experienced in Work Happy with them. After bad experiences with other carpenters who delayed my house work, SP Creative completed the entire modular TV unit and PVC ceiling in 10 days. Exceptional speed and precision.",
    rating: 5,
    source: "Google Review",
    date: "1 month ago"
  },
  {
    id: "t4",
    author: "Nithin Kumar",
    text: "The best place for Aluminium partition work and smart modular kitchen in Davangere. They gave us budget friendly rates for three wardrobes in our new flat at MCC Layout, with zero compromise on raw materials, hinges, or sliding runners.",
    rating: 5,
    source: "Facebook Recommend",
    date: "3 weeks ago"
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "s1",
    title: "Aluminium Composite Interiors",
    description: "Full-home interior framework substituting termite-vulnerable wood with highly durable, weather-proof anodized aluminium profiles.",
    features: [
      "Heavy-duty powder coated interior frames",
      "Rust, termite, and moisture resistant surfaces",
      "Ultra-modern premium matte and gloss color palettes",
      "Lifetime material structure guarantee"
    ],
    image: "/src/assets/images/hero_banner_1780027736290.png",
    iconName: "Home"
  },
  {
    id: "s2",
    title: "Modular Kitchen Designs",
    description: "Specially designed all-aluminum modular kitchens tailored for heavy Indian cooking, ensuring longevity, ease of cleaning, and high oil/smoke resistance.",
    features: [
      "Highly durable ACP (Aluminium Composite Panel) shutter panels",
      "Termite and water-proof marine grading",
      "Smooth pull-out drawers and corner carousel mechanisms",
      "Ventilated sink cabinets to prevent foul odors"
    ],
    image: "/src/assets/images/kitchen_portfolio_1780027659917.png",
    iconName: "ChefHat"
  },
  {
    id: "s3",
    title: "Wardrobe & Storage Units",
    description: "Elegantly constructed space-efficient wardrobes with sleek premium glass sliding doors and heavy frame security systems.",
    features: [
      "Custom wardrobe layout (shelves, lockers, tie racks)",
      "High quality slide rails for smooth whisper-quiet closing",
      "Premium glass / colored ACP finishing panels",
      "Anti-bacterial, dust-proof interior structural lining"
    ],
    image: "/src/assets/images/wardrobe_portfolio_1780027677114.png",
    iconName: "Layout"
  },
  {
    id: "s4",
    title: "Premium PVC False Ceilings",
    description: "Highly aesthetic light weight paneling that insulates bedrooms and living rooms from heat, while giving a five-star hotel layout finish.",
    features: [
      "High thermal insulation (keeps rooms cool)",
      "Intertwined wood-textured PVC accent planks",
      "Concealed wiring for ambient LED and COB drop lights",
      "Damp-proof and completely leak-resistant ceiling panels"
    ],
    image: "/src/assets/images/ceiling_portfolio_1780027714175.png",
    iconName: "Layers"
  }
];

export const DESIGN_MOODS: DesignMood[] = [
  {
    id: "m1",
    name: "Classic Copper & Clay",
    colorName: "Bronze / Terra Cotta",
    hex: "#A37D56",
    description: "Our signature logo-inspired theme. Perfect for warm, cozy homes, incorporating refined copper-toned ACP panels with soft ivory highlights."
  },
  {
    id: "m2",
    name: "Midnight Obsidian",
    colorName: "Charcoal Slate",
    hex: "#242424",
    description: "Stark, sophisticated, and incredibly modern. Anodized black profiles paired with tinted grey glass doors and concrete countertops."
  },
  {
    id: "m3",
    name: "Champagne Luxe",
    colorName: "Warm Gold / Sand",
    hex: "#D4AF37",
    description: "Exquisite champagne gold frame accents giving a premium hotel vibe. Pairs brilliantly with white marble and beige wood panels."
  },
  {
    id: "m4",
    name: "Eco-Woodland Fusion",
    colorName: "Oak / Moss Green",
    hex: "#8F653E",
    description: "Heavy wood-grain finish powder coating on super tough aluminium structural profiles, providing the warmth of wood with the strength of steel."
  }
];

export const MATERIAL_OPTIONS: MaterialOption[] = [
  {
    id: "mat_acp_gloss",
    name: "Double-Sided Premium Gloss ACP (1.2mm)",
    multiplier: 1.0,
    description: "Easy-to-clean super high gloss finishes. Most popular for modular kitchen shutters."
  },
  {
    id: "mat_acp_matte",
    name: "Super-Matte Metallic ACP (1.5mm)",
    multiplier: 1.1,
    description: "Sophisticated satin anti-fingerprint surface. Gives an ultra-premium luxury feel."
  },
  {
    id: "mat_fluted_glass",
    name: "Tinted Fluted Toughened Glass + Alum Profile",
    multiplier: 1.4,
    description: "Modern textured reeded glass with thin metal profiles. Ideal for luxury show cupboards."
  },
  {
    id: "mat_pvc_heavyduty",
    name: "Interlock Anti-UV Heavy PVC Paneling",
    multiplier: 0.9,
    description: "Extremely lightweight woodgrain PVC ceiling panels with high heat insulation rating."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why should I choose Aluminium Interiors over traditional MDF or Plywood?",
    answer: "Traditional wood is highly vulnerable to water damage, humidity, termites, and sagging. Our Aluminium and ACP interiors are 100% waterproof, termite-proof, rust-proof, and fire-resistant. They don't warp under damp conditions, making them perfect for kitchens, washrooms, and coastal/high-humidity locations. Furthermore, they are eco-friendly, fully recyclable, and have a lifetime structure rating.",
    category: "material"
  },
  {
    question: "Is SP Creative Alluminium brand budget-friendly?",
    answer: "Yes, we pride ourselves on being extremely 'Budget Friendly' in Davangere as reviewed by our clients. Because we manufacture and fabricate modular aluminum items in-house with direct sourcing, we bypass middleman charges. You get high-end, premium Italian-style modular interiors at a fraction of standard wooden carpenter costs, with a much longer lifespan.",
    category: "pricing"
  },
  {
    question: "How long does the installation take?",
    answer: "Since our systems are engineered modularly, we construct and pre-cut the frames at our workshop. The on-site installation for a standard 3BHK home modular kitchen and wardrobes takes only 5 to 7 days, which is 80% faster than carpenters who create sawdust and noise at your home for weeks.",
    category: "timeline"
  },
  {
    question: "Can we integrate chimneys, hobs, and steel baskets in the aluminum kitchen?",
    answer: "Absolutely! Our modular kitchens are built on standard global grid sizes. This allows complete integration of all leading brand built-in hobs, automated chimneys, pull-out steel cargo baskets, dish drainers, pantry pull-outs, and corner Carousel accessories seamlessly.",
    category: "general"
  },
  {
    question: "Do you provide on-site measurements and design consultations in Davangere?",
    answer: "Yes! We are based in SS Layout, Davangere and serve the entire Davangere district. We provide free on-site measurements and 3D architectural mock-ups for your review. Click the WhatsApp button on our page to book a slot directly.",
    category: "general"
  }
];

export const CONTACT_INFO = {
  phone: "092064 60019",
  whatsappNumber: "+919206460019", // Format for official WhatsApp links
  address: "2nd Main 2nd Cross Rd, opp. Rishi public school, SS Layout, Davangere, Karnataka 577006",
  hours: "Open · Closes 10:00 PM (Monday - Sunday)",
  email: "spcreativeinteriors@gmail.com",
  areaServed: "Davangere city and surrounding regions of Karnataka",
  socials: {
    youtube: "https://www.youtube.com/@SPCreativeInteriors",
    instagram: "https://www.instagram.com/p/DX9gvG-P4Yk/",
    facebook: "https://www.facebook.com/p/Sp-creative-interiors-Davanagere-61561549982065/"
  }
};
