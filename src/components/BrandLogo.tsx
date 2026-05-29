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

        {/* Elegant "S" in Charcoal */}
        <text
          x="100"
          y="340"
          fontFamily="Georgia, serif"
          fontSize="240"
          fontWeight="bold"
          fill="#334155"
          className="font-serif font-bold text-slate-700"
        >
          S
        </text>

        {/* Aluminum Window-pane Styled "P" */}
        {/* Main stem */}
        <rect x="285" y="110" width="18" height="230" fill="#242424" />
        {/* Outer loop profile */}
        <path
          d="M295 110 H380 V265 H295"
          stroke="#242424"
          strokeWidth="18"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Window inner partition lines */}
        <line
          x1="340"
          y1="110"
          x2="340"
          y2="265"
          stroke="#242424"
          strokeWidth="10"
        />
        <line
          x1="295"
          y1="250"
          x2="380"
          y2="250"
          stroke="#242424"
          strokeWidth="10"
        />
      </svg>

      {showText && (
        <div className="flex flex-col tracking-wider font-sans leading-none">
          <span
            className={`text-xl font-bold tracking-widest ${
              lightText ? "text-white" : "text-slate-900"
            }`}
          >
            SP CREATIVE
          </span>
          <span
            className="text-sm font-semibold tracking-[0.27em] text-[#A37D56]"
          >
            ALUMINIUM
          </span>
          <span
            className={`text-xs font-medium tracking-[0.41em] ${
              lightText ? "text-slate-300" : "text-slate-600"
            }`}
          >
            INTERIORS
          </span>
        </div>
      )}
    </div>
  );
};
