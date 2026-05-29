/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Shield, Calendar, BookOpen, UserCheck, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../data";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsAppUrl = (type: "measurement" | "catalogue" | "general" | "hours") => {
    let message = "";
    if (type === "measurement") {
      message = "Hi DPS Interiors! I would like to schedule a free site measurement of my house. I reside in Davangere. Please let me know how to proceed.";
    } else if (type === "catalogue") {
      message = "Hi DPS Interiors! I'm planning my interiors. Could you please send me your latest catalogue booklet, photos, and share some pricing details for my home?";
    } else if (type === "hours") {
      message = "Hello, are you open right now? I would like to visit your gallery/factory in Lokikere Road, Davangere today.";
    } else {
      message = "Hi DPS Interiors! I am browsing your official website and had a general query regarding kitchen/wardrobe/decorating designs.";
    }
    return `https://wa.me/${CONTACT_INFO.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden w-[330px] mb-4 origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-stone-900 to-slate-950 text-white p-4 flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <div className="bg-[#A37D56] p-1.5 rounded-full ring-2 ring-white/10 shrink-0">
                  <MessageCircle className="h-5 w-5 text-white fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">DPS Design Support</h4>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Online • Closes 8 PM
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5 text-stone-300 hover:text-white" />
              </button>
            </div>

            {/* Introductory Text */}
            <div className="bg-stone-50 p-4 border-b border-stone-100 flex gap-2">
              <span className="text-lg">👋</span>
              <p className="text-xs text-slate-600 leading-normal font-medium">
                Hello and welcome to DPS Interiors! Let us help you plan your dream home. Choose a pathway to chat directly:
              </p>
            </div>

            {/* Actions list */}
            <div className="p-3 space-y-2">
              <a
                href={getWhatsAppUrl("measurement")}
                className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/20 border border-amber-100 hover:bg-amber-50/50 hover:border-amber-300 transition-all text-left decoration-none group"
              >
                <div className="p-2 bg-[#A37D56]/10 text-[#A37D56] rounded-lg">
                  <Calendar className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800 tracking-tight">Free On-Site Measurement</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Book expert kitchen & wardrobe mapping</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl("catalogue")}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-stone-200 hover:bg-slate-100/50 hover:border-slate-355 transition-all text-left decoration-none group"
              >
                <div className="p-2 bg-stone-900/10 text-stone-900 rounded-lg">
                  <BookOpen className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800 tracking-tight">Get Catalogues & Quotations</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Download digital albums & sample finishes</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl("hours")}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-stone-200 hover:bg-slate-100/50 hover:border-slate-355 transition-all text-left decoration-none group"
              >
                <div className="p-2 bg-stone-900/10 text-stone-900 rounded-lg">
                  <UserCheck className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800 tracking-tight">Visit Our Showroom Today</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Confirm opening hours & locate on maps</p>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="p-3 bg-stone-50 border-t border-stone-100 text-center flex justify-center items-center gap-1.5 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              <Shield className="h-3 w-3 text-[#A37D56]" /> Official DPS Interiors Account
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Badge Button with Badge Indicator */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group relative flex justify-center items-center select-none outline-none ring-4 ring-[#25D366]/20"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/45 animate-ping opacity-75 -z-10"></span>
        <MessageSquare className="h-7 w-7 fill-white text-[#25D366]" />
        
        {/* Unread notification dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-extrabold text-white justify-center items-center">
            1
          </span>
        </span>
      </button>
    </div>
  );
};
