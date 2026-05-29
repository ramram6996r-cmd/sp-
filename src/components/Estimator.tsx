/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, MessageSquare, ArrowRight, Sparkles, Check, HelpCircle } from "lucide-react";
import { MATERIAL_OPTIONS, CONTACT_INFO } from "../data";

type ServiceType = "kitchen" | "wardrobe" | "tv_unit" | "ceiling";

interface EstimateOption {
  id: string;
  name: string;
  price: number;
}

export const Estimator: React.FC = () => {
  const [service, setService] = useState<ServiceType>("kitchen");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [material, setMaterial] = useState<string>("mat_acp_gloss");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [installationTimeline, setInstallationTimeline] = useState<number>(5);

  // Helper arrays for extras
  const extraOptions: Record<ServiceType, EstimateOption[]> = {
    kitchen: [
      { id: "soft_close", name: "Premium Soft-Close Telescopic Slides", price: 8500 },
      { id: "corner_carousel", name: "Corner Carousel Organisers", price: 12500 },
      { id: "led_profile", name: "Under-cabinet COB Profile Lighting", price: 4500 },
      { id: "tall_pantry", name: "Premium 6-Layer Pantry Pullout", price: 22000 },
    ],
    wardrobe: [
      { id: "sensor_led", name: "Automatic Open-Sensor LED Rails", price: 3800 },
      { id: "internal_lockers", name: "Double Reinforced Internal Locker", price: 6500 },
      { id: "soft_slide", name: "Premium Silent Sliding Tracks", price: 9000 },
      { id: "mirror_door", name: "Integrated Dresser Mirror Inlay", price: 5000 },
    ],
    tv_unit: [
      { id: "diffused_backlight", name: "Ambient RGB+Warm Backlit Strips", price: 4000 },
      { id: "extra_shelves", name: "Custom Floating Aluminium Display Pods", price: 5500 },
      { id: "acoustics", name: "HD Wood-Composite Slat Acoustic Panels", price: 11000 },
    ],
    ceiling: [
      { id: "spotlights", name: "Pre-fitted Warm Philips Spotlights (x6)", price: 4800 },
      { id: "dual_cove", name: "Multi-step Floating Cove Frame", price: 8000 },
      { id: "insulation", name: "Glasswool Acoustic & Heat Insulation layer", price: 6000 },
    ]
  };

  // Standard rates per sqft for the base aluminum systems
  const getBaseRate = (type: ServiceType): number => {
    switch (type) {
      case "kitchen":
        return 280; // base running rate for modern aluminum framework
      case "wardrobe":
        return 320;
      case "tv_unit":
        return 250;
      case "ceiling":
        return 120; // competitive PVC / Aluminium frame ceilings
    }
  };

  useEffect(() => {
    const area = width * height;
    const baseRate = getBaseRate(service);
    const matObj = MATERIAL_OPTIONS.find((m) => m.id === material);
    const matMultiplier = matObj ? matObj.multiplier : 1;

    // Base structural estimate
    let priceEstimate = area * baseRate * matMultiplier * 15; // Realistic multiplier for finish & depth installation

    // Add selected extras
    const selectedExtras = extraOptions[service].filter((opt) => accessories.includes(opt.id));
    const extrasTotal = selectedExtras.reduce((sum, item) => sum + item.price, 0);

    priceEstimate += extrasTotal;

    // Floor numbers beautifully
    setCalculatedPrice(Math.round(priceEstimate / 500) * 500);

    // Calculate realistic delivery / installation speed
    let days = 4;
    if (area > 150) days += 3;
    if (accessories.length > 2) days += 1;
    setInstallationTimeline(days);
  }, [service, width, height, material, accessories]);

  const handleAccessoryToggle = (id: string) => {
    if (accessories.includes(id)) {
      setAccessories(accessories.filter((a) => a !== id));
    } else {
      setAccessories([...accessories, id]);
    }
  };

  const handleServiceChange = (type: ServiceType) => {
    setService(type);
    setAccessories([]);
    // Adjust standard sizes relative to service
    if (type === "kitchen") {
      setWidth(12);
      setHeight(8);
    } else if (type === "wardrobe") {
      setWidth(8);
      setHeight(9);
    } else if (type === "tv_unit") {
      setWidth(8);
      setHeight(6);
    } else {
      setWidth(15);
      setHeight(10);
    }
  };

  const selectedMaterialObj = MATERIAL_OPTIONS.find((m) => m.id === material);

  // Deep-linked WhatsApp message generator
  const sendWhatsAppEstimate = () => {
    const serviceName = service === "kitchen" ? "Modular Kitchen" : service === "wardrobe" ? "Aluminium Wardrobe" : service === "tv_unit" ? "Custom TV Unit" : "PVC False Ceiling";
    const selectedMatName = selectedMaterialObj?.name || "Premium Finish";
    
    const extraLabels = extraOptions[service]
      .filter((opt) => accessories.includes(opt.id))
      .map((opt) => `  * + ${opt.name}`)
      .join("\n");

    const message = `*DPS Interiors* 📊
*New Website Design & Price Details Query*
---------------------------------------
👷 *Project Category:* ${serviceName}
📐 *Size / Dimensions:* ${width}ft (Width) x ${height}ft (Height) = *${width * height} sq.ft*
🧱 *Chosen Material Finish:* ${selectedMatName}
🔧 *Selected Premium Features:* 
${extraLabels || "  * (None - Standard Specs)"}

---------------------------------------
💬 *Pricing Request:* Please share the customized pricing details for this layout.
⏱️ *Expected Installation Speed:* ${installationTimeline} Days

_Hi DPS Interiors team, I checked your website design planner and configured this specific layout. I reside in Davangere and would love to get a transparent price quote and details over WhatsApp._`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=${encodedText}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {/* Configuration Controls (Left panel) */}
      <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-stone-100 rounded-lg text-amber-800">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Project Spec & Design Planner</h3>
            <p className="text-xs text-slate-500 font-medium">Fine-tune your layout custom specifications and dimensions.</p>
          </div>
        </div>

        {/* Step 1: Service Type Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-800 tracking-wider uppercase flex items-center gap-2">
            <span className="text-amber-800">01.</span> Select Service Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(["kitchen", "wardrobe", "tv_unit", "ceiling"] as ServiceType[]).map((type) => {
              const label = type === "kitchen" ? "Kitchen" : type === "wardrobe" ? "Wardrobe" : type === "tv_unit" ? "TV Unit" : "PVC Ceiling";
              return (
                <button
                  key={type}
                  onClick={() => handleServiceChange(type)}
                  className={`px-3 py-3 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 border ${
                    service === type
                      ? "bg-stone-900 border-stone-900 text-white shadow-md shadow-stone-900/10"
                      : "bg-stone-50 border-stone-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Dimensions Slider */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-800 tracking-wider uppercase flex justify-between items-center">
            <span><span className="text-amber-800">02.</span> Size Dimensions (Feet)</span>
            <span className="font-mono text-amber-800 lowercase text-[11px] bg-amber-50 px-2 py-0.5 rounded border border-amber-100 italic">
              {width}′ width × {height}′ height = {width * height} sq.ft
            </span>
          </label>
          <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-200/50">
            {/* Width */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
                <span>Wall Width:</span>
                <span className="font-bold font-mono text-slate-800">{width} feet</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800"
              />
            </div>
            {/* Height */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
                <span>Wall Height:</span>
                <span className="font-bold font-mono text-slate-800">{height} feet</span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Material finish selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-800 tracking-wider uppercase flex items-center gap-2">
            <span className="text-amber-800">03.</span> Select Premium Material Finish
          </label>
          <div className="space-y-2">
            {MATERIAL_OPTIONS.map((mat) => (
              <label
                key={mat.id}
                onClick={() => setMaterial(mat.id)}
                className={`flex gap-3 items-start p-3 rounded-xl border cursor-pointer hover:bg-stone-50/50 transition-all ${
                  material === mat.id
                    ? "border-amber-700 bg-amber-50/20"
                    : "border-stone-250 bg-white"
                }`}
              >
                <div className="mt-1">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    material === mat.id ? "border-amber-700 bg-amber-700" : "border-slate-300"
                  }`}>
                    {material === mat.id && <Check className="h-2.5 w-2.5 text-white stroke-[3px]" />}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-800">{mat.name}</span>
                    {mat.multiplier !== 1.0 && (
                      <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded text-right">
                        {mat.multiplier > 1.0 ? `+${Math.round((mat.multiplier - 1) * 100)}% premium` : `-${Math.round((1 - mat.multiplier) * 100)}% budget`}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{mat.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Step 4: Premium Accessories */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-800 tracking-wider uppercase flex justify-between items-center">
            <span><span className="text-amber-800">04.</span> Choose Premium Accessories (Optional)</span>
            <span className="text-[10px] text-slate-500 font-medium">Add to custom layout</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {extraOptions[service].map((opt) => {
              const selected = accessories.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => handleAccessoryToggle(opt.id)}
                  type="button"
                  className={`p-3 rounded-lg border text-left transition-all duration-200 flex justify-between items-center ${
                    selected
                      ? "bg-amber-50/35 border-amber-600/80 text-amber-900"
                      : "bg-white border-stone-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="max-w-[75%]">
                    <p className="text-xs font-bold leading-tight">{opt.name}</p>
                    <p className="text-[10px] text-[#A37D56] font-medium mt-0.5">Premium Feature</p>
                  </div>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                    selected ? "bg-amber-700 border-amber-700 text-white" : "border-slate-300"
                  }`}>
                    {selected && <Check className="h-2.5 w-2.5 stroke-[3px]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary Output Screen (Right panel) */}
      <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-slate-950 text-white p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden">
        {/* Subtle geometric grid panel accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>
        
        <div className="relative space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-xs tracking-widest uppercase font-bold text-stone-400">Concept Blueprint Summary</span>
            <span className="flex items-center gap-1.5 text-[10px] tracking-wide bg-stone-800 px-2 py-0.5 rounded-full border border-white/10 font-medium text-amber-500">
              <Sparkles className="h-3 w-3 animate-pulse" /> Davangere Verified
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
              <span className="text-[10px] tracking-widest uppercase text-stone-400 font-bold block">Pricing Details</span>
              <div className="space-y-1">
                <span className="text-xl md:text-2xl font-extrabold text-white leading-tight block">
                  Get Free Price Quote on WhatsApp
                </span>
                <span className="text-xs text-stone-400 font-medium block">Instant customized rate details</span>
              </div>
              <p className="text-[11px] text-stone-300 leading-normal">
                Click below to send your configured blueprint to DPS Interiors on WhatsApp. We will reply instantly with detailed itemized pricing covering premium high-grade modular profiles, custom fittings and professional installation in Davangere and nearby areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="text-stone-400 block text-[9px] uppercase tracking-wider font-bold">Fabrication Speed</span>
                <span className="text-stone-100 font-bold text-sm mt-0.5 block">{installationTimeline} Working Days</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="text-stone-400 block text-[9px] uppercase tracking-wider font-bold">On-Site Warranty</span>
                <span className="text-stone-100 font-bold text-sm mt-0.5 block">10-Year Rustproof</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3 pt-4 border-t border-white/10">
            <span className="text-[10px] tracking-widest uppercase text-stone-400 font-bold block">Included Service Benefits</span>
            <ul className="space-y-2 text-[11px] text-stone-300">
              <li className="flex items-start gap-2">
                <span className="bg-[#A37D56]/20 p-0.5 rounded text-[#A37D56] text-xs font-bold leading-none">✓</span>
                <span>Complete on-site measurement & 3D planning design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#A37D56]/20 p-0.5 rounded text-[#A37D56] text-xs font-bold leading-none">✓</span>
                <span>Dust-free clean installations in SS Layout, MCC, Davangere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#A37D56]/20 p-0.5 rounded text-[#A37D56] text-xs font-bold leading-none">✓</span>
                <span>High strength rustproof aluminum framework structure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Interactive WhatsApp deep link CTA */}
        <div className="mt-8 relative pt-4">
          <button
            onClick={sendWhatsAppEstimate}
            className="w-full bg-[#A37D56] hover:bg-[#8F653E] text-white py-4 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-amber-900/40 flex items-center justify-center gap-2.5 group cursor-pointer text-sm"
          >
            <MessageSquare className="h-5 w-5 fill-white text-[#A37D56] group-hover:scale-110 transition-transform" />
            <span>Get Pricing Details on WhatsApp</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5px] ml-1 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <div className="flex justify-center items-center gap-1.5 mt-3 text-[10px] text-stone-400">
            <HelpCircle className="h-3.5 w-3.5 text-stone-500" />
            <span>Clicking redirects automatically to official WhatsApp chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};
