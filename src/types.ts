/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: "kitchen" | "wardrobe" | "tv_unit" | "ceiling" | "structural" | "all";
  image: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  text: string;
  rating: number;
  source: string;
  date?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "material" | "pricing" | "timeline" | "general";
}

export interface DesignMood {
  id: string;
  name: string;
  colorName: string;
  hex: string;
  description: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}
