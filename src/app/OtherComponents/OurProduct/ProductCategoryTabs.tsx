"use client";

import { useState } from "react";

export default function ProductCategoryTabs() {
  const categories = [
    "Dissecting & Educational Microscopes",
    "Fluorescent Microscopes",
    "Projection Microscopes",
    "Custom Manufacturing Solution",
    "Custom Manufacturing Solution",
    "Custom Manufacturing Solution",
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center py-0">
      
      {/* Purplish background only around the tabs */}
      <div className="bg-[#F6F7FF] px-8 py-10 shadow-sm">

        <div className="flex items-center gap-10">
          {categories.map((item, index) => (
            <button
              key={index}
              className={`relative text-[13px] pp-500 font-medium transition-all
                ${active === index ? "text-blue-600" : "text-gray-700 hover:text-black"}`}
              onClick={() => setActive(index)}
            >
              {item}

              {active === index && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
