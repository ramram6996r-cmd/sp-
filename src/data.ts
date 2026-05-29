/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Testimonial, ServiceDetail, FAQItem, DesignMood, MaterialOption } from "./types";

import kitchenImg from "./assets/images/kitchen_portfolio_1780027659917.png";
import wardrobeImg from "./assets/images/wardrobe_portfolio_1780027677114.png";
import tvUnitImg from "./assets/images/tv_unit_portfolio_1780027696086.png";
import ceilingImg from "./assets/images/ceiling_portfolio_1780027714175.png";
import heroBannerImg from "./assets/images/hero_banner_1780027736290.png";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Eco-Luxe ACP Modular Kitchen",
    category: "kitchen",
    image: kitchenImg,
    description: "Waterproof and fire-resistant aluminium composite panel kitchen in premium bronze-copper and matte charcoal finishes. Perfect for Indian cooking conditions with seamless cleaning surfaces.",
    highlights: ["100% Termite & Water Proof", "Soft-close Tandem Drawers", "Integrated Profile Handles", "Premium Quartz Inlay"]
  },
  {
    id: "p2",
    title: "Anodized Charcoal Glass Wardrobe",
    category: "wardrobe",
    image: wardrobeImg,
    description: "Sleek built-in bedroom wardrobe design utilizing lightweight aluminium frames loaded with tinted bronze glass sliding doors. Includes customizable interior shelving and LED sensor lighting.",
    highlights: ["Space-saving Sliding Track", "Anodized Rustproof Frame", "Built-in LED Sensor Rails", "Custom Modular Trays"]
  },
  {
    id: "p3",
    title: "Floating Minimalist TV Console",
    category: "tv_unit",
    image: tvUnitImg,
    description: "Refined living room media panel structured on black aluminium profile support framework with premium wood-texture accents, highlighted by warm indirect COB backlighting.",
    highlights: ["Concealed Cable Channels", "High Load-bearing Frame", "Acoustic Slatted Backdrop", "Soft Push-to-Open Cabinets"]
  },
  {
    id: "p4",
    title: "Dynamic Ambient PVC False Ceiling",
    category: "ceiling",
    image: ceilingImg,
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
    text: "Quality work, Experienced in Work Happy with them. After bad experiences with other carpenters who delayed my house work, DPS Interiors completed the entire modular TV unit and PVC ceiling in 10 days. Exceptional speed and precision.",
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
    title: "Wardrobe Design",
    description: "Sleek and highly functional modular wardrobes featuring customized internal layout shelves, integrated lockers, and soft push-to-open or silent sliding shutters.",
    features: [
      "Custom internal drawer & locker configurations",
      "Soft sliding tracks and automated LED sensor rails",
      "High Gloss ACP or clear glass shutter profile designs",
      "Completely dust-insulated protective structure"
    ],
    image: wardrobeImg,
    iconName: "Layout"
  },
  {
    id: "s2",
    title: "Interior Decorating",
    description: "Full-scale custom space styling, material palette configurations, and designer consultation to turn empty walls into modern architectural marvels.",
    features: [
      "Ergonomic floorplan optimization drafts",
      "High-contrast ambient lighting layouts",
      "Selection advice on materials, textures and accents",
      "Complete design execution in premium finishes"
    ],
    image: heroBannerImg,
    iconName: "Sparkles"
  },
  {
    id: "s3",
    title: "Bedroom Design",
    description: "Bespoke bed backdrops, custom side-niches, wall dressings, and integrated modular wardrobes made to create a luxury five-star hotel layout.",
    features: [
      "Sophisticated sound-absorbing acoustic headboards",
      "Floating bed frames with indirect warm bottom lighting",
      "Tailor-made bedside drawers & modern study desks",
      "Damp-resistant frameworks for superior safety"
    ],
    image: ceilingImg,
    iconName: "Home"
  },
  {
    id: "s4",
    title: "Kitchen Design",
    description: "Premium modular kitchen assemblies built with water, rust, and oil-proof materials. Integrated with smart cutlery pull-outs and corner carousel shelves.",
    features: [
      "Highly durable ACP shutter panels in standard grids",
      "Seamless soft-close dual-wall tandem runners",
      "Completely washable, odor-free and sink-vented systems",
      "High thermal stability matching heavy Indian cooking"
    ],
    image: kitchenImg,
    iconName: "ChefHat"
  },
  {
    id: "s5",
    title: "Living Room Design",
    description: "Elegant entertainment zones featuring floating TV units, custom Pooja cabinets, premium entrance foyer units, and acoustic clatted slat partitions.",
    features: [
      "Concealed smart wiring channels for a clean profile",
      "Custom wooden-textured pooja and display doors",
      "Heavy load-bearing steel-reinforced panels",
      "Modular divider frames to separate living & dining"
    ],
    image: tvUnitImg,
    iconName: "Layers"
  },
  {
    id: "s6",
    title: "Painting & Wall Textures",
    description: "Flawless interior and exterior painting services coupled with beautiful custom designer wall panels and exquisite modern texture finishes.",
    features: [
      "Premium moisture-insulating base coat layers",
      "Designer custom texturing for signature TV accent backdrops",
      "Super heavy-duty and weatherproof external coats",
      "Exquisite matte, satin, or premium metallic paint finishes"
    ],
    image: heroBannerImg,
    iconName: "CheckCircle"
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
    question: "Why should I choose Aluminium and Modular Interiors over traditional MDF or Plywood?",
    answer: "Traditional wood is highly vulnerable to water damage, humidity, termites, and sagging. Our Aluminium, ACP, and customized structural designs are 100% waterproof, termite-proof, rust-proof, and fire-resistant. They don't warp under damp conditions, making them perfect for kitchens, washrooms, and all high-humidity home layouts. Furthermore, they are eco-friendly, fully recyclable, and have an exceptional lifetime rating.",
    category: "material"
  },
  {
    question: "Is DPS Interiors budget-friendly?",
    answer: "Yes, we pride ourselves on being extremely 'Budget Friendly' in Davangere. Because we manufacture and fabricate modular aluminum setups and custom custom wall elements in-house in our KSSIDC Industrial Area factory, we bypass middleman charges. You get high-end, premium Italian-style modular interiors and designer textures at a fraction of standard carpenter costs, with a much longer lifespan.",
    category: "pricing"
  },
  {
    question: "How long does the installation take?",
    answer: "Since our systems are engineered modularly, we construct and pre-fabricate the frames at our local factory in Lokikere Road. The on-site installation for a standard home modular kitchen, wardrobes, or TV units takes only 5 to 7 days, which is 80% faster than carpenters who produce continuous noise and dust in your living room for weeks.",
    category: "timeline"
  },
  {
    question: "Can we integrate chimneys, hobs, and steel baskets in the modular kitchen?",
    answer: "Absolutely! Our modular kitchens are built on standard global grid sizes. This allows complete integration of all leading brand built-in hobs, automated chimneys, pull-out steel cargo baskets, dish drainers, pantry pull-outs, and corner Carousel accessories seamlessly.",
    category: "general"
  },
  {
    question: "Do you provide on-site measurements and design consultations in Davangere?",
    answer: "Yes! We are based in the KSSIDC Industrial Area, Lokikere Road, Davangere, and professionally serve Davangere and all surrounding regions of Karnataka. We provide free on-site measurements and detailed material consultations. Click the WhatsApp button on our page to book a slot directly.",
    category: "general"
  }
];

export const CONTACT_INFO = {
  phone: "096325 96810",
  whatsappNumber: "+919632596810", // Format for official WhatsApp links
  address: "S N L -08 Ground floor, KSSIDC Industrial estate, Lokikere road, Davangere, Karnataka - 577005",
  hours: "Open · Closes 8:00 PM (Monday - Sunday)",
  email: "dpsinteriors.dvg@gmail.com",
  areaServed: "Davangere and nearby areas",
  socials: {
    youtube: "https://www.youtube.com/@dps_interiors",
    instagram: "https://www.instagram.com/dps_interiors/?hl=en",
    facebook: "https://www.facebook.com/people/DPS-Interiors-Davangere/"
  }
};
