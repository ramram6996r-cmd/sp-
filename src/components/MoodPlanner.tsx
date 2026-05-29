/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Armchair, HelpCircle, Palette, MessageCircleCode } from "lucide-react";
import { DESIGN_MOODS, CONTACT_INFO } from "../data";

const HANDLE_STYLES = [
  { id: "slat_channel", name: "Integrated G-Section Profile Channel", style: "Deep structural strip" },
  { id: "brass_gold", name: "Solid Brass Champagne Gold T-Bar", style: "Elegantly contrasting handle" },
  { id: "recessed_cut", name: "Minimalist CNC Recessed Finger-Grip", style: "No-protrusion sleek look" },
  { id: "matte_black", name: "Slim Anodized Matte Black Pull", style: "Bold modern minimalist" }
];

export const MoodPlanner: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("m1");
  const [selectedHandle, setSelectedHandle] = useState<string>("slat_channel");

  const currentMoodObj = DESIGN_MOODS.find((m) => m.id === selectedMood) || DESIGN_MOODS[0];
  const currentHandleObj = HANDLE_STYLES.find((h) => h.id === selectedHandle) || HANDLE_STYLES[0];

  const handleConsult = () => {
    const message = `*DPS Interiors* 🎨
*Moodboard Customisation Request*
---------------------------------------
✨ *Selected Color Theme:* ${currentMoodObj.name} (${currentMoodObj.colorName})
💎 *Selected Handle Style:* ${currentHandleObj.name}
🔍 *Inspiration Details:* ${currentMoodObj.description}

---------------------------------------
_Hi DPS Interiors team, I picked this color configuration on your web palette planner. I would love to see real samples or catalogue booklets of this finish during our design consultation. Please let me know when you are free!_`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=${encodedText}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="bg-stone-50 border border-stone-250 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5 mb-6">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/50">Studio Interactive Room</span>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-2 flex items-center gap-2">
            <Palette className="h-5 w-5 text-amber-800" /> Color Finishing & Handle Customizer
          </h3>
          <p className="text-xs text-slate-500 mt-1">Simulate premium anodized metal textures and handle pairings.</p>
        </div>
        <div className="flex gap-1.5 items-center text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-sm md:self-end">
          <Sparkles className="h-4 w-4 text-amber-700 animate-spin" /> Live Simulation
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Style selection controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Theme Palette Choice */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 tracking-wider uppercase block">
              💡 Choose Designer Theme Palette
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DESIGN_MOODS.map((mood) => {
                const active = mood.id === selectedMood;
                return (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`p-4 rounded-xl border text-left transition-all relative ${
                      active
                        ? "border-slate-900 bg-white ring-2 ring-slate-900/10 shadow-md"
                        : "border-stone-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg shadow-inner shrink-0 border border-white/20"
                        style={{ backgroundColor: mood.hex }}
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{mood.name}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{mood.colorName}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-3 leading-normal">{mood.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Handle Styling Choice */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 tracking-wider uppercase block">
              🚪 Choose Cabinet Handgrip / Handle Profile
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HANDLE_STYLES.map((handle) => {
                const active = handle.id === selectedHandle;
                return (
                  <button
                    key={handle.id}
                    onClick={() => setSelectedHandle(handle.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      active
                        ? "border-slate-900 bg-white ring-1 ring-slate-900/5 shadow-sm"
                        : "border-stone-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="text-xs font-bold text-slate-900">{handle.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{handle.style}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3D-Like Preview Board (Right Side) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-xl border border-stone-200 p-6 shadow-md relative overflow-hidden min-h-[350px]">
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-4">MOCKUP SIMULATION PREVIEW</span>
            
            {/* Architectural cabinet mock rendering in HTML/CSS */}
            <div className="w-full h-44 rounded-lg shadow-inner relative border border-stone-200 bg-stone-100 flex items-center justify-center overflow-hidden">
              {/* Back panel shading */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-200/50 to-white/20 pointer-events-none"></div>

              {/* simulated modular cabinet shutter 1 */}
              <div 
                className="w-2/3 h-32 rounded-lg border-2 border-white/50 shadow-lg relative flex flex-col justify-between p-4 transition-all duration-500 overflow-hidden"
                style={{ backgroundColor: currentMoodObj.hex }}
              >
                {/* Woodgrain texture accent representation if fusion theme */}
                {currentMoodObj.id === "m4" && (
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:8px_100%] opacity-70"></div>
                )}
                {/* Glass sheen representation if obsidian theme */}
                {currentMoodObj.id === "m2" && (
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent skew-y-6 transform scale-150 origin-top-left"></div>
                )}

                <div className="flex justify-between items-start">
                  {/* Subtle cabinet grooves to look rich and real */}
                  <div className="w-1.5 h-12 bg-white/25 rounded-full"></div>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/25 text-white/90">
                    ACP Panel
                  </span>
                </div>

                {/* Simulated handle mounting depending on type */}
                <div className="flex justify-center">
                  {selectedHandle === "slat_channel" && (
                    <div className="w-full h-2.5 bg-slate-800 border-t border-b border-black/40 shadow-inner flex justify-center items-center">
                      <div className="w-24 h-0.5 bg-silver/30"></div>
                    </div>
                  )}
                  {selectedHandle === "brass_gold" && (
                    <div className="w-16 h-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 rounded border border-amber-600 shadow-md transform translate-y-2"></div>
                  )}
                  {selectedHandle === "recessed_cut" && (
                    <div className="w-14 h-4 rounded-full bg-black/30 border border-black/40 shadow-inner flex items-center justify-center">
                      <div className="w-10 h-1 bg-stone-900/60 rounded"></div>
                    </div>
                  )}
                  {selectedHandle === "matte_black" && (
                    <div className="w-16 h-1.5 bg-zinc-900 rounded border border-black shadow"></div>
                  )}
                </div>

                <div className="text-white/80 text-[10px] tracking-wide font-mono">
                  DPS CABINETRY
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs font-bold text-slate-800">
                Selected: <span className="text-[#A37D56]">{currentMoodObj.name} + {currentHandleObj.name}</span>
              </p>
              <p className="text-[11px] text-slate-500 leading-normal">
                This material configuration utilizes our zero-sag structural engineering profiles.
                The handle is flush-mounted or channel-pressed by hand to prevent panel looseness or wobble over time.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleConsult}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-lg text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-slate-900"
            >
              <MessageCircleCode className="h-4.5 w-4.5 group-hover:scale-110 transition-transform" />
              <span>Inquire This Palette Combo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
