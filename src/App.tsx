/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChefHat,
  Layout,
  Layers,
  Home,
  Phone,
  MapPin,
  Clock,
  Mail,
  Youtube,
  Instagram,
  Facebook,
  ArrowRight,
  Star,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  CheckCircle,
  Award,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Map,
  ChevronRight,
  HelpCircle
} from "lucide-react";

import { BrandLogo } from "./components/BrandLogo";
import { Estimator } from "./components/Estimator";
import { MoodPlanner } from "./components/MoodPlanner";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import {
  PORTFOLIO_ITEMS,
  TESTIMONIALS,
  SERVICES,
  FAQ_ITEMS,
  CONTACT_INFO
} from "./data";

import heroBannerImg from "./assets/images/hero_banner_1780027736290.png";
import kitchenImg from "./assets/images/kitchen_portfolio_1780027659917.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"estimator" | "moodboard">("estimator");
  const [portfolioFilter, setPortfolioFilter] = useState<string>("all");
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filtered portfolio
  const filteredPortfolio = portfolioFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === portfolioFilter);

  // Quick consult for portfolio items
  const handlePortfolioConsult = (title: string) => {
    const text = `Hi DPS Interiors! I saw your stunning design online: *${title}*. I am in Davangere and would love to get a customization quote for my home. Please contact me back. Thank you!`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  return (
    <div id="app-container" className="min-h-screen bg-stone-50 font-sans text-slate-800 antialiased flex flex-col justify-between">
      {/* 1. Header & Navigation */}
      <header
        id="app-header"
        className="fixed top-0 inset-x-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <BrandLogo id="navbar-brand-logo" className="shrink-0 cursor-pointer" iconSize={55} />

          {/* Large Screen Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            <button
              id="nav-link-about"
              onClick={() => handleScrollTo("section-about")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              id="nav-link-services"
              onClick={() => handleScrollTo("section-services")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              id="nav-link-planner"
              onClick={() => handleScrollTo("section-planner")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-800 animate-pulse" /> Interactive Studio
            </button>
            <button
              id="nav-link-portfolio"
              onClick={() => handleScrollTo("section-portfolio")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              id="nav-link-testimonials"
              onClick={() => handleScrollTo("section-testimonials")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              id="nav-link-faqs"
              onClick={() => handleScrollTo("section-faqs")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleScrollTo("section-contact")}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Quick Contact Actions (Desktop only) */}
          <div id="desktop-header-actions" className="hidden lg:flex items-center gap-3">
            <a
              id="header-btn-call"
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-stone-100 hover:bg-stone-200 px-3.5 py-2.5 rounded-lg border border-stone-200 transition-all font-mono"
            >
              <Phone className="h-4 w-4 text-emerald-700" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a
              id="header-btn-whatsapp"
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=Hi%20SP%20Creative%20Alluminium%20Interiors!%20I'm%20visiting%20your%20website%20and%20looking%20for%20some%20interior%20consultancy.`}
              className="bg-[#A37D56] hover:bg-[#8F653E] text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-amber-900/10 cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 fill-white text-[#A37D56]" />
              <span>Free Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-drawer-overlay"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-stone-200 overflow-hidden shadow-xl"
            >
              <nav id="mobile-nav-links" className="flex flex-col px-4 py-5 space-y-3">
                <button
                  id="mobile-nav-about"
                  onClick={() => handleScrollTo("section-about")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  About us
                </button>
                <button
                  id="mobile-nav-services"
                  onClick={() => handleScrollTo("section-services")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  Core Services
                </button>
                <button
                  id="mobile-nav-planner"
                  onClick={() => handleScrollTo("section-planner")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-amber-800 animate-spin" /> Interactive Studio
                </button>
                <button
                  id="mobile-nav-portfolio"
                  onClick={() => handleScrollTo("section-portfolio")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  Real Portfolio
                </button>
                <button
                  id="mobile-nav-testimonials"
                  onClick={() => handleScrollTo("section-testimonials")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  Google reviews
                </button>
                <button
                  id="mobile-nav-faqs"
                  onClick={() => handleScrollTo("section-faqs")}
                  className="text-left py-2 border-b border-stone-100 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  FAQs
                </button>
                <button
                  id="mobile-nav-contact"
                  onClick={() => handleScrollTo("section-contact")}
                  className="text-left py-2 text-sm font-bold text-slate-700 uppercase tracking-wide hover:text-slate-900"
                >
                  Contact Info
                </button>

                {/* Mobile Button Actions */}
                <div id="mobile-drawer-buttons" className="pt-4 grid grid-cols-2 gap-2">
                  <a
                    id="mobile-btn-call"
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-center gap-2 py-3 border border-stone-200 rounded-lg text-xs font-bold text-slate-700 font-mono bg-stone-50"
                  >
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <span>Call Now</span>
                  </a>
                  <a
                    id="mobile-btn-coords"
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}`}
                    className="flex items-center justify-center gap-2 py-3 bg-[#A37D56] text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    <MessageSquare className="h-4 w-4 fill-white text-[#A37D56]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main app body wrapping sections inside top spacing to account for fixed header */}
      <main id="app-main-content" className="flex-1 pt-20">
        
        {/* 2. Cinematic Hero Section */}
        <section
          id="section-hero"
          className="relative min-h-[85vh] flex items-center justify-center bg-stone-900 overflow-hidden py-16"
        >
          {/* Background image container with premium dark overlays for text contrast */}
          <div id="hero-background-container" className="absolute inset-0 z-0">
            <img
              src={heroBannerImg}
              alt="DPS Interiors Showcase Banner"
              className="w-full h-full object-cover opacity-35 filter scale-105 animate-[pulse_12s_ease-internal_infinite]"
              referrerPolicy="no-referrer"
            />
            {/* Smooth linear gradient overlay masks */}
            <div id="hero-gradient-left" className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-transparent lg:w-3/4"></div>
            <div id="hero-gradient-bottom" className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
          </div>

          <div id="hero-content-wrapper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Catchy Left Heading details block */}
            <div id="hero-heading-block" className="lg:col-span-7 space-y-6 text-white text-left">
              {/* Premium credential badge */}
              <div id="hero-badge" className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.14em]">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>4.9 Star Rating</span>
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-stone-200">Davangere, Karnataka</span>
              </div>

              {/* Main title displaying serif and display elements */}
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white">
                Your Dream Home <br />
                <span className="text-[#A37D56] font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl mr-2">Starts Here.</span>
                Premium Aluminium Interiors
              </h1>

              {/* Description summary of offerings */}
              <p id="hero-desc" className="text-sm sm:text-base text-stone-300 leading-relaxed font-medium max-w-xl">
                Ditch termite-prone wood for water-proof, flame-retardant modular ACP materials. 
                Specialized in kitchen, wardrobes, TV wall panels, and stylish PVC ceilings 
                custom crafted in SS Layout, Davangere.
              </p>

              {/* Action Buttons */}
              <div id="hero-ctas" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-btn-primary"
                  onClick={() => handleScrollTo("section-planner")}
                  className="bg-[#A37D56] hover:bg-[#8F653E] text-white px-7 py-4 rounded-xl font-bold tracking-wider text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 transition-all cursor-pointer group"
                >
                  <span>Build Custom Estimate</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5px] group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-btn-secondary"
                  onClick={() => handleScrollTo("section-portfolio")}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/25 text-white px-7 py-4 rounded-xl font-bold tracking-wider text-xs uppercase flex items-center justify-center transition-all cursor-pointer"
                >
                  <span>View Our Crafts</span>
                </button>
              </div>

              {/* Key Bullet Highlights */}
              <div id="hero-highlights" className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-stone-300 font-medium">
                <div id="hero-highlight-1" className="flex items-center gap-2">
                  <span className="p-1 rounded bg-[#A37D56]/10 text-[#A37D56] text-xs font-bold">✓</span>
                  <span>Water & Termite Proof</span>
                </div>
                <div id="hero-highlight-2" className="flex items-center gap-2">
                  <span className="p-1 rounded bg-[#A37D56]/10 text-[#A37D56] text-xs font-bold">✓</span>
                  <span>10-Day Assemble</span>
                </div>
                <div id="hero-highlight-3" className="flex items-center gap-2">
                  <span className="p-1 rounded bg-[#A37D56]/10 text-[#A37D56] text-xs font-bold">✓</span>
                  <span>Premium Quality Specs</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Card mock representation */}
            <div id="hero-right-card" className="lg:col-span-5 hidden lg:block bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 p-6 text-white space-y-5 shadow-2xl">
              <span id="card-label" className="text-[10px] tracking-widest text-[#A37D56] font-bold uppercase block">Quick Blueprint Planner</span>
              <div id="card-content" className="space-y-4">
                <p id="card-title" className="text-lg font-bold">Try our Interactive Aluminium Design Studio</p>
                <p id="card-desc" className="text-xs text-stone-300 leading-relaxed font-normal">
                  Toggle sizes, choose premium ACP colors, select sleek handle profiles, and request accurate quote sheets directly over WhatsApp with ease!
                </p>
                <div id="card-sim-panel" className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-[#A37D56]/20 p-2 rounded text-[#A37D56]">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Modular Kitchen</p>
                      <p className="text-[10px] text-stone-400">12ft × 8ft Configured</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">Quote on WhatsApp</span>
                </div>
                <button
                  id="card-btn-go"
                  onClick={() => handleScrollTo("section-planner")}
                  className="w-full bg-white text-slate-900 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-all cursor-pointer flex justify-center items-center gap-2"
                >
                  <span>Launch Live Planner</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="section-about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Grid with Offset overlays */}
              <div id="about-visuals" className="lg:col-span-5 relative">
                <div id="about-image-shadow" className="absolute -inset-4 bg-[#A37D56]/5 rounded-3xl -rotate-1 transform pointer-events-none"></div>
                <div id="about-image-frame" className="relative rounded-2xl border border-stone-200 overflow-hidden shadow-xl aspect-4/3">
                  <img
                    src={kitchenImg}
                    alt="DPS Interiors custom modular production"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating credentials badge */}
                  <div id="about-floating-card" className="absolute bottom-6 left-6 right-6 bg-slate-950/95 backdrop-blur border border-white/10 p-5 rounded-xl text-white shadow-xl flex gap-3.5 items-center">
                    <div className="p-3 bg-[#A37D56]/10 text-[#A37D56] rounded-lg">
                      <Award className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">4.9 Star Verified Factory</p>
                      <p className="text-xs text-stone-400 mt-0.5 font-medium">Over 36 active high-quality reviews on Google & Social Media</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Textual About Core Details */}
              <div id="about-editorial-text" className="lg:col-span-7 space-y-6 text-left">
                <div id="about-head-labels">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline border border-amber-200/50">Our Brand Legacy</span>
                  <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mt-3">
                    Who Is DPS Interiors?
                  </h2>
                </div>

                <p id="about-editorial-desc-1" className="text-sm text-slate-600 leading-relaxed font-medium">
                  Located in the premier manufacturing hub at <strong>L-8 KSSIDC Industrial Area, Lokikere Road, Davangere, Karnataka - 577005</strong>, 
                  we are led by <strong>Sunil DP</strong> (Modular Interior Designer). DPS Interiors operates a state-of-the-art modular factory that 
                  translates your dream spaces into durable realities with factory-direct pricing.
                </p>

                <p id="about-editorial-desc-2" className="text-sm text-slate-600 leading-relaxed font-medium">
                  We specialize in all types of high-end home and commercial interior decoration projects. From custom modular kitchens, wardrobes, luxury TV cabinets, 
                  and false ceilings to customized bedside units, pooja partitions, and spectacular designer textures with flawless interior or exterior painting—we have you covered.
                </p>

                {/* Grid stats */}
                <div id="about-stats-grid" className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div id="about-stat-1" className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-center">
                    <span className="block text-xl font-extrabold text-slate-900 font-mono">4.9/5</span>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Google Star</span>
                  </div>
                  <div id="about-stat-2" className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-center">
                    <span className="block text-xl font-extrabold text-[#A37D56] font-mono">10-YR</span>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Stiff Warranty</span>
                  </div>
                  <div id="about-stat-3" className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-center">
                    <span className="block text-xl font-extrabold text-slate-900 font-mono">100%</span>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Rustproof</span>
                  </div>
                  <div id="about-stat-4" className="bg-stone-50 border border-stone-200 p-4 rounded-xl text-center">
                    <span className="block text-xl font-extrabold text-[#A37D56] font-mono">Fast</span>
                    <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Deliver Speed</span>
                  </div>
                </div>

                {/* Quick Directions link */}
                <div id="about-directions-link" className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    id="directions-google-maps"
                    href="https://maps.google.com/?q=DPS+Interiors+KSSIDC+Industrial+Area+Lokikere+Road+Davangere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A37D56] hover:text-[#8F653E] transition-all"
                  >
                    <span>L-8, KSSIDC Industrial Area, Lokikere Road, Davangere</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3B. What Makes Us Special & Why Choose Us Section */}
        <section id="section-why-choose-us" className="py-24 bg-stone-900 text-white relative overflow-hidden border-t border-b border-white/5">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Header info */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#A37D56] bg-[#A37D56]/10 px-3 py-1.5 rounded-full inline-block border border-[#A37D56]/20">
                Pillars of Excellence
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
                What Makes Us Special & Why Choose DPS Interiors?
              </h2>
              <div className="w-20 h-1 bg-[#A37D56] mx-auto rounded-full mt-2"></div>
              <p className="text-sm md:text-base text-stone-350 leading-relaxed font-normal pt-2">
                Davangere's premier home interior fabricators setting a new benchmark for structural durability, speed, and premium high-end aesthetics. Discover why standard carpenter plywood is a thing of the past.
              </p>
            </div>

            {/* Custom styled Grid with elaborate copy describing the 6 features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#A37D56]/10 text-[#A37D56] rounded-xl flex items-center justify-center border border-[#A37D56]/25 group-hover:scale-105 transition-all">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    100% Termite & Water Proof Guarantee
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Dampness, heavy seasonal rains, continuous moisture, and stubborn termite infestations are the ultimate silent killers of standard wood cabinets. Our entire framework is made with premium heavy structural aluminum and double-sided high-density ACP (Aluminium Composite Panels). You can literally submerge them in water, and there will be zero swelling, zero warping, and zero mold—for life.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#A37D56]/80 pt-2 border-t border-white/5">
                  Lifetime Structural Durability
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center border border-amber-500/25 group-hover:scale-105 transition-all">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Premium Italian-Style Screwless Finish
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Say goodbye to messy visible pop rivets and poorly aligned hinges. We utilize advanced German-inspired CNC cutting systems and concealed-bracket interlocking tracks. This ensures an extremely clean, modern, minimalist visual profile with perfectly flush cabinet frames, seamless handle profiles, and optional custom warm COB lighting integration.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-500/80 pt-2 border-t border-white/5">
                  Elegant European Craftsmanship
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#A37D56]/10 text-[#A37D56] rounded-xl flex items-center justify-center border border-[#A37D56]/25 group-hover:scale-105 transition-all">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Rapid 5-Day Installation, No Dust At Home
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Plywood carpenters take weeks of loud, messy cutting, filling your home with toxic sanding dust and causing continuous scheduling delays. DPS Interiors executes 90% of structural fabrication and framing in our clean workshop. We deliver prefabricated items directly to your residence, performing a quiet, dust-free final mock-up assembly in just 5-7 days.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#A37D56]/80 pt-2 border-t border-white/5">
                  Minimal Human Interference
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center border border-amber-500/25 group-hover:scale-105 transition-all">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Direct-to-Home Factory Pricing
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    We bypass commission agents, wholesale distributors, and heavy third-party dealer markups! By fabricating our aluminum fixtures natively under our own roof, we save over 25-30% on raw materials. These factory-direct margins are passed directly to our esteemed clients. You get top-tier, custom built-to-order hardware at local, transparent carpenter rates.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-500/80 pt-2 border-t border-white/5">
                  No Commissions, No Hidden Fees
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#A37D56]/10 text-[#A37D56] rounded-xl flex items-center justify-center border border-[#A37D56]/25 group-hover:scale-105 transition-all">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Premium Heavy-Duty Silent Hardware
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    An interior frame is only as reliable as its hinges. We load our systems with extra-tough, rust-attenuated soft-close telescopic slides, whisper-quiet dampening door runners, and commercial hydraulic hinges. Tested for 100,000 movements, every opening action feels incredibly premium, silent, and is backed by on-site hardware inspections.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#A37D56]/80 pt-2 border-t border-white/5">
                  Rigorous Movement Diagnostics
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-[#A37D56]/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center border border-amber-500/25 group-hover:scale-105 transition-all">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Davangere-Native Support Presence
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    We are not a distant online aggregator. We are DPS Interiors, based in Lokikere Road, Davangere. Our fully equipped experience factory/gallery is loaded with real finish samples (glossy and matte ACP, fluted wood profiles, high-strength hardware, custom textures). Our clients get continuous design advice, accurate measurements, and on-site physical support within 24 hours of any call.
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-amber-500/80 pt-2 border-t border-white/5">
                  Trust of the local community
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. Services Grid Section */}
        <section id="section-services" className="py-20 bg-stone-50 border-t border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            
            {/* Header info */}
            <div id="services-head-titles" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Core Solutions</span>
              <h2 id="services-main-heading" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Premium Fabrication & Design Handcrafted
              </h2>
              <p id="services-intro-paragraph" className="text-xs sm:text-sm text-slate-500 font-medium">
                We handle layouts from concept draft, precision fabrication at our local workshop, to dust-free installation at your venue.
              </p>
            </div>

            {/* Custom styled Grid services cards */}
            <div id="services-block-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((serv) => {
                // Selector for matching icons dynamically
                const IconComponent = serv.iconName === "Home" 
                  ? Home 
                  : serv.iconName === "ChefHat" 
                  ? ChefHat 
                  : serv.iconName === "Layout" 
                  ? Layout 
                  : Layers;

                return (
                  <div
                    key={serv.id}
                    id={`service-card-${serv.id}`}
                    className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Image header */}
                      <div className="h-44 overflow-hidden relative border-b border-stone-200">
                        <img
                          src={serv.image}
                          alt={serv.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 p-2 bg-slate-950/80 backdrop-blur text-[#A37D56] rounded-xl border border-white/15">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Info details */}
                      <div className="p-6 text-left space-y-4">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">{serv.title}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-normal font-medium">{serv.description}</p>
                        
                        {/* Features bullet list */}
                        <div className="pt-2 border-t border-stone-100">
                          <ul className="space-y-1.5 text-[10px] text-slate-600 font-medium">
                            {serv.features.slice(0, 3).map((feat, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <span className="text-[#A37D56] font-bold">✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Quick inquiry button inside card footer */}
                    <div className="p-4 bg-stone-50 border-t border-stone-100 text-center">
                      <button
                        onClick={() => handlePortfolioConsult(serv.title)}
                        className="w-full text-center text-xs font-bold text-[#A37D56] group-hover:text-[#8F653E] hover:underline flex justify-center items-center gap-1 cursor-pointer"
                      >
                        <span>Consult this Service</span>
                        <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. Interactive Studio / Budget & Color Palette Planner */}
        <section id="section-planner" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            
            {/* Context title block */}
            <div id="planner-headings" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Developer Masterwork</span>
              <h2 id="planner-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                DPS Interactive Design Studio
              </h2>
              <p id="planner-subtitle" className="text-xs sm:text-sm text-slate-500 font-medium">
                Design custom specifications instantly. Swap tabs to configure your dimensions and layout style, then query pricing over WhatsApp.
              </p>
            </div>

            {/* Custom Tab Toggles for planning tools */}
            <div id="planner-tabs" className="flex justify-center items-center gap-2 max-w-md mx-auto bg-stone-100 p-1.5 rounded-xl border border-stone-200">
              <button
                id="active-tab-estimator"
                onClick={() => setActiveTab("estimator")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === "estimator"
                    ? "bg-stone-900 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-stone-200/50"
                }`}
              >
                Design & Spec Planner
              </button>
              <button
                id="active-tab-moodboard"
                onClick={() => setActiveTab("moodboard")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === "moodboard"
                    ? "bg-stone-900 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-stone-200/50"
                }`}
              >
                Color & Handle Planner
              </button>
            </div>

            {/* Simulated tab screens rendering */}
            <div id="planner-tabs-container" className="pt-4 max-w-5xl mx-auto">
              {activeTab === "estimator" ? (
                <div key="tab-est" id="tab-estimator-rendering">
                  <Estimator />
                </div>
              ) : (
                <div key="tab-mood" id="tab-moodboard-rendering">
                  <MoodPlanner />
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 6. Portfolio Showcase */}
        <section id="section-portfolio" className="py-20 bg-stone-50 border-t border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            
            {/* Portfolio headings */}
            <div id="portfolio-headings" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Photo Gallery</span>
              <h2 id="portfolio-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Our Crafted Physical Spaces
              </h2>
              <p id="portfolio-subtitle" className="text-xs sm:text-sm text-slate-500 font-medium">
                Click category filters below to view actual high-contrast layouts structured using our modular aluminum composite systems.
              </p>
            </div>

            {/* Category selection bar */}
            <div id="portfolio-filters" className="flex flex-wrap justify-center items-center gap-1.5 border-b border-stone-200 pb-6">
              {[
                { id: "all", label: "View All Portfolio" },
                { id: "kitchen", label: "Modular Kitchen" },
                { id: "wardrobe", label: "Glass Wardrobes" },
                { id: "tv_unit", label: "TV Media Walls" },
                { id: "ceiling", label: "PVC Ceilings" }
              ].map((filt) => (
                <button
                  key={filt.id}
                  id={`filter-tab-${filt.id}`}
                  onClick={() => setPortfolioFilter(filt.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    portfolioFilter === filt.id
                      ? "bg-[#A37D56] text-white shadow shadow-amber-900/10"
                      : "bg-white border border-stone-200 text-slate-600 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  {filt.label}
                </button>
              ))}
            </div>

            {/* Grid item frames display */}
            <div id="portfolio-container-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <AnimatePresence mode="popLayout">
                {filteredPortfolio.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    id={`portfolio-item-card-${item.id}`}
                    className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden text-left flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image block container */}
                      <div className="aspect-16/10 overflow-hidden relative border-b border-stone-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest bg-slate-950/80 backdrop-blur border border-white/10 px-2.5 py-1 rounded-full text-stone-200">
                          {item.category === "kitchen" ? "Modular Kitchen" : item.category === "wardrobe" ? "Aluminium Wardrobe" : item.category === "tv_unit" ? "Media Unit" : "PVC False Ceiling"}
                        </span>
                      </div>

                      {/* Detail metadata info */}
                      <div className="p-6 md:p-8 space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.description}</p>
                        
                        {/* Bullet indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[10px] text-slate-600 font-bold tracking-tight">
                          {item.highlights.map((high, index) => (
                            <div key={index} className="flex items-center gap-1.5 bg-stone-50 p-2 rounded border border-stone-200/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A37D56]"></span>
                              <span>{high}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Consulting footer CTA */}
                    <div className="bg-stone-50 border-t border-stone-150 p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="text-left">
                        <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">Estimated Project Duration</span>
                        <span className="text-xs font-bold text-slate-700 font-mono">Ready in 6-10 Working Days</span>
                      </div>
                      <button
                        onClick={() => handlePortfolioConsult(item.title)}
                        className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex justify-center items-center gap-2 group cursor-pointer border border-stone-900 transition-all shadow hover:shadow-stone-900/15"
                      >
                        <MessageSquare className="h-4.5 w-4.5 fill-white text-stone-900" />
                        <span>Book Site Mapping</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 7. Client Testimonials (Google coordinates) */}
        <section id="section-testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            
            {/* Header reviews details */}
            <div id="testimonials-headings" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Client Appreciations</span>
              <h2 id="testimonials-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Google Verified Happy Homeowners
              </h2>
              <p id="testimonials-subtitle" className="text-xs sm:text-sm text-slate-500 font-medium">
                Our business holds a 4.9 Star Average Rating in Davangere on on-time modular installations.
              </p>
            </div>

            {/* Testimonials cards grid */}
            <div id="testimonials-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  id={`testimonial-item-${test.id}`}
                  className="bg-stone-50 border border-stone-200/80 p-6 rounded-2xl flex flex-col justify-between text-left space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    {/* Stars render */}
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    {/* Review quote body */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed italic font-medium">
                      "{test.text}"
                    </p>
                  </div>

                  {/* Author credits and verified tag */}
                  <div className="pt-3 border-t border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{test.author}</span>
                      <span className="block text-[10px] text-slate-400 font-medium font-mono lowercase">{test.date || "Verified Local"}</span>
                    </div>
                    <span className="text-[9px] font-mono tracking-widest font-bold uppercase bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-100">
                      {test.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to all google reviews */}
            <div id="google-reviews-external-link" className="pt-4">
              <a
                href="https://maps.google.com/?q=SP+creative+Alluminium+Interiors+SS+Layout+Davangere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-stone-100 hover:bg-stone-200 text-slate-700 px-5  py-3.5 rounded-xl border border-stone-200 transition-all cursor-pointer"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

          </div>
        </section>

        {/* 8. YouTube & Social Media showcase cards */}
        <section id="section-social-embeds" className="py-20 bg-stone-900 text-white border-t border-b border-white/5 relative overflow-hidden">
          {/* Subtle noise grid accent background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
            
            {/* Header visuals */}
            <div id="social-headings" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-500 bg-white/5 px-2.5 py-1 rounded inline-block border border-white/10">Showroom Transformation Portals</span>
              <h2 id="social-title" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                Watch Our Interior Transformation Stories
              </h2>
              <p id="social-subtitle" className="text-xs sm:text-sm text-stone-300 font-medium">
                We showcase site videos, structural makeovers, and customer client reactions on our channels. Explore them!
              </p>
            </div>

            {/* Core Social Platform Card Links */}
            <div id="social-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* YouTube Card */}
              <div id="social-card-youtube" className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex flex-col justify-between space-y-8 hover:bg-white/10 transition-all">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                      <Youtube className="h-6 w-6" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-stone-400 bg-white/5 px-2.5 py-1 rounded inline-block">@SPCreativeInteriors</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">YouTube Video Tours</h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal mt-1.5">
                      Explore detailed architectural video walkthroughs of modular kitchens, storage wardrobes, and PVC false panel setups fitted in Davangere houses.
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase flex justify-center items-center gap-2 group cursor-pointer"
                >
                  <span>Explore YouTube Channel</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Instagram Card */}
              <div id="social-card-instagram" className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex flex-col justify-between space-y-8 hover:bg-white/10 transition-all">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-pink-500/10 text-pink-500 rounded-xl">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-stone-400 bg-white/5 px-2.5 py-1 rounded inline-block">Instagram Portfolio</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Instagram Short Clips</h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal mt-1.5">
                      Check modern aesthetic reels, dynamic material test videos, color palette combinations, and on-site assembly snippets.
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase flex justify-center items-center gap-2 group cursor-pointer"
                >
                  <span>Verify Instagram Feed</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Facebook Card */}
              <div id="social-card-facebook" className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex flex-col justify-between space-y-8 hover:bg-white/10 transition-all">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                      <Facebook className="h-6 w-6 fill-blue-500 text-transparent" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-stone-400 bg-white/5 px-2.5 py-1 rounded inline-block">Facebook Official</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Facebook Social Page</h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-normal mt-1.5">
                      Connect with the Davangere local community, check ratings, check regular shop photo updates, and look at direct design recommendations.
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase flex justify-center items-center gap-2 group cursor-pointer"
                >
                  <span>Browse Facebook Community</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* 9. FAQs Section Accordion */}
        <section id="section-faqs" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
            
            {/* Context headings FAQ */}
            <div id="faqs-headings" className="space-y-3">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Common Questions</span>
              <h2 id="faqs-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Frequently Anticipated Answers
              </h2>
              <p id="faqs-subtitle" className="text-xs sm:text-sm text-slate-500 font-medium">
                Get clear details on how aluminum composite design compares with traditional carpentry works.
              </p>
            </div>

            {/* Accordion List */}
            <div id="faqs-accordion-elements" className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm text-left">
              {FAQ_ITEMS.map((faq, i) => {
                const open = faqOpenIndex === i;
                return (
                  <div
                    key={i}
                    id={`faq-item-row-${i}`}
                    className="border-b border-stone-200 last:border-b-0"
                  >
                    <button
                      onClick={() => setFaqOpenIndex(open ? null : i)}
                      className="w-full px-6 py-5 bg-stone-50 hover:bg-stone-100 flex justify-between items-center transition-all cursor-pointer text-left"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`h-4.5 w-4.5 text-slate-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#A37D56]" : ""}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`faq-item-content-${i}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-white overflow-hidden"
                        >
                          <div className="p-6 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium border-t border-stone-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 10. Ultimate Contact & Physical Location details */}
        <section id="section-contact" className="py-20 bg-stone-50 border-t border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            
            {/* Header contact */}
            <div id="contact-headings" className="space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200/50">Visit Showroom Suite</span>
              <h2 id="contact-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
                Locate Our Design Studio Gallery
              </h2>
              <p id="contact-subtitle" className="text-xs sm:text-sm text-slate-500 font-medium">
                We welcome visitors daily for raw material testing, hinge comparisons, and detailed 3D project mapping.
              </p>
            </div>

            <div id="contact-layout-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Detailed Physical Cards */}
              <div id="contact-detailed-panel" className="lg:col-span-5 space-y-4 flex flex-col justify-between text-left">
                
                {/* Physical address card */}
                <div id="contact-card-address" className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2.5">
                  <div className="flex gap-3 items-start">
                    <span className="bg-[#A37D56]/10 p-2.5 rounded-lg text-[#32231A]">
                      <MapPin className="h-5 w-5 fill-[#32231A]/10 text-[#32231A]" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Physical Address</span>
                      <p className="text-xs font-bold text-slate-900 mt-1 leading-normal">
                        {CONTACT_INFO.address}
                      </p>
                      <span className="text-[10px] text-amber-800 font-bold block mt-1.5 leading-none">
                        📍 Opposite Rishi Public School
                      </span>
                    </div>
                  </div>
                </div>

                {/* Telephone hotline card */}
                <div id="contact-card-phone" className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2.5">
                  <div className="flex gap-3 items-start">
                    <span className="bg-emerald-500/10 p-2.5 rounded-lg text-emerald-800">
                      <Phone className="h-5 w-5 fill-emerald-500/10 text-emerald-700" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Hotline Contact Phone</span>
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                        className="block text-sm font-bold text-slate-950 mt-1 font-mono hover:text-emerald-700 transition"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                      <span className="text-[10px] text-slate-500 font-medium block mt-1 leading-none">
                        📞 Dial directly to talk with founder
                      </span>
                    </div>
                  </div>
                </div>

                {/* Opening Hours card */}
                <div id="contact-card-hours" className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2.5">
                  <div className="flex gap-3 items-start">
                    <span className="bg-stone-100 p-2.5 rounded-lg text-slate-700">
                      <Clock className="h-5 w-5 text-slate-700" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Gallery Opening Hours</span>
                      <p className="text-xs font-bold text-slate-900 mt-1">
                        {CONTACT_INFO.hours}
                      </p>
                      <span className="text-[10px] text-emerald-600 font-bold block mt-1 leading-none">
                        ● Open Today
                      </span>
                    </div>
                  </div>
                </div>

                {/* Area served card */}
                <div id="contact-card-area" className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2.5">
                  <div className="flex gap-3 items-start">
                    <span className="bg-blue-500/5 p-2.5 rounded-lg text-blue-700">
                      <Home className="h-5 w-5 text-blue-700" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Sectors Served</span>
                      <p className="text-xs font-medium text-slate-800 mt-1">
                        {CONTACT_INFO.areaServed}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Simulated maps portal direction route */}
              <div id="contact-simulated-map" className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between text-left shadow-sm min-h-[400px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">GOOGLE MAP DIRECTIONS</span>
                      <h4 className="text-lg font-bold text-slate-900 mt-1">How to reach DPS Interiors</h4>
                    </div>
                    <span className="text-[10px] text-slate-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded font-mono font-medium">Davangere Factory</span>
                  </div>
                  
                  {/* Clean schematic layout guiding driving route */}
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex justify-center items-center shrink-0 mt-0.5">1</div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Head to <strong>Lokikere Road, Davangere</strong>. Use the **KSSIDC Industrial Area** estate entry.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex justify-center items-center shrink-0 mt-0.5">2</div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Look for <strong>Ground floor structural unit S N L - 08 / L-8 block</strong>.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex justify-center items-center shrink-0 mt-0.5">3</div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        You will spot our premium showroom and manufacturing factory rows. Spaciously open customer parking is freely available outside.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-150 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    id="route-btn-maps-deep-link"
                    href="https://maps.google.com/?q=SP+creative+Alluminium+Interiors+SS+Layout+Davangere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex justify-center items-center gap-2 group cursor-pointer"
                  >
                    <Map className="h-4.5 w-4.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>

                  <a
                    id="route-btn-whatsapp-measurement"
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=Hi%20SP%2520Creative!%20I%20am%20trying%20to%21find%20your%2520showroom%20in%20SS%2520Layout%20from%20maps.%2520Can%20you%20share%20your%20exact%20live%20location?`}
                    className="w-full sm:flex-1 bg-white border border-stone-200 hover:border-slate-355 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex justify-center items-center gap-2 text-slate-700 hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-slate-700 text-white" />
                    <span>Request Live Location</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 11. Elegant Bottom Footer */}
      <footer id="app-footer" className="bg-gradient-to-br from-stone-900 to-slate-950 text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative elements for branding depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:100%_12px] pointer-events-none opacity-30"></div>
        
        <div id="footer-core-wrapper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Top segment: Brand + Info bullets */}
          <div id="footer-top-row" className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 items-start">
            
            {/* Left Column Brand */}
            <div id="footer-brand" className="md:col-span-5 space-y-4">
              <BrandLogo id="footer-brand-logo" lightText={true} iconSize={65} />
              <p id="footer-brand-tagline" className="text-xs text-stone-300 leading-relaxed font-normal max-w-sm mt-4">
                "Your Dream Home Starts Here." High durability modulators substituting traditional carpenter wood 
                with high strength rustproof, waterproof aluminum interiors. Made locally in SS Layout, Davangere.
              </p>
            </div>

            {/* Middle: Short Links */}
            <div id="footer-links-col" className="md:col-span-3 space-y-4 text-left font-sans">
              <span className="text-[10px] tracking-widest uppercase font-bold text-stone-400 block pb-1">Shop Catalogues</span>
              <ul className="space-y-2 text-xs text-stone-300 font-medium">
                <li>
                  <button onClick={() => handleScrollTo("section-about")} className="hover:text-amber-500 transition cursor-pointer text-left">
                    About Our Brand
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("section-services")} className="hover:text-amber-500 transition cursor-pointer text-left">
                    Explore Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("section-planner")} className="hover:text-amber-500 transition cursor-pointer text-left">
                    Interactive Design Planner
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("section-portfolio")} className="hover:text-amber-500 transition cursor-pointer text-left">
                    Real Photo Portfolios
                  </button>
                </li>
              </ul>
            </div>

            {/* Right: Contact Guidelines */}
            <div id="footer-contact-col" className="md:col-span-4 space-y-4 text-left">
              <span className="text-[10px] tracking-widest uppercase font-bold text-stone-400 block pb-1">Factory Hotline</span>
              <div className="space-y-3 text-xs text-stone-300 font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4.5 w-4.5 text-[#A37D56] shrink-0 mt-0.5" />
                  <span className="text-stone-300 leading-normal">{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <Phone className="h-4 w-4 text-[#A37D56]" />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-500" />
                  <span className="text-stone-300">Mon - Sun: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom copyright segment */}
          <div id="footer-bottom-row" className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-medium">
            <div className="text-center sm:text-left space-y-1">
              <p>© {new Date().getFullYear()} DPS Interiors. All rights reserved.</p>
              <p className="text-[10px] text-stone-500">{CONTACT_INFO.address}</p>
            </div>

            {/* Social profiles links */}
            <div id="footer-social-icons-wrapper" className="flex items-center gap-4">
              <a
                href={CONTACT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="DPS Interiors Youtube transformation"
                className="hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="DPS Interiors Instagram updates"
                className="hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="DPS Interiors Facebook community"
                className="hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* 12. Floating Unread Indicator WhatsApp Interactive Widget */}
      <WhatsAppWidget />
    </div>
  );
}
