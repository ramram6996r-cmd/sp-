/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
  iconSize?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  showText = true,
  lightText = false,
  iconSize = 80,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact replica of the user-provided logo as a pristine vector SVG */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* House Roof Line in Copper/Bronze */}
        <path
          d="M150 200 L320 60 L490 200 M490 200 V340"
          stroke="#A37D56"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hanging Industrial Lamp */}
        {/* Cord */}
        <line
          x1="410"
          y1="135"
          x2="410"
          y2="245"
          stroke="#242424"
          strokeWidth="8"
        />
        {/* Lamp Shade */}
        <path
          d="M385 245 C385 220, 435 220, 435 245 H385Z"
          fill="#242424"
        />
        <path
          d="M380 245 C380 248, 440 248, 440 245 H380Z"
          fill="#242424"
        />
        {/* Glow / Bulb */}
        <circle cx="410" cy="254" r="10" fill="#A37D56" />

        {/* Elegant "D", "P", "S" in Charcoal */}
        <text
          x="110"
          y="310"
          fontFamily="Georgia, serif"
          fontSize="170"
          fontWeight="black"
          fill="#334155"
        >
          D
        </text>
        <text
          x="230"
          y="310"
          fontFamily="Georgia, serif"
          fontSize="170"
          fontWeight="black"
          fill="#A37D56"
        >
          P
        </text>
        <text
          x="330"
          y="310"
          fontFamily="Georgia, serif"
          fontSize="170"
          fontWeight="black"
          fill="#242424"
        >
          S
        </text>

      </svg>
 
      {showText && (
        <div className="flex flex-col tracking-wider font-sans leading-none whitespace-nowrap min-w-0">
          <span
            className={`text-xl font-extrabold tracking-widest ${
              lightText ? "text-white" : "text-stone-900"
            }`}
          >
            DPS INTERIORS
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.2em] text-[#A37D56] mt-0.5"
          >
            DESIGN STUDIO & FACTORY
          </span>
          <span
            className={`text-[9px] font-medium tracking-[0.3em] mt-0.5 ${
              lightText ? "text-stone-300" : "text-stone-500"
            }`}
          >
            MODULAR MASTERPIECES
          </span>
        </div>
      )}
    </div>
  );
};
