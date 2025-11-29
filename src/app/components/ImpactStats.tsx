"use client";

import { useEffect, useRef } from "react";

export default function ImpactStats() {
  const stats = [
    { value: "60+", title: "Years of Expertise", desc: "Since 1951 delivering reliability & innovation." },
    { value: "100%", title: "In-House Manufacturing", desc: "From lens crafting to CNC machining." },
    { value: "30+", title: "Product Categories", desc: "Pathology, metallurgy, digital imaging & more." },
    { value: "5,000+", title: "Institutions Served", desc: "IITs, AIIMS, leading diagnostic labs and dealers." },
    { value: "25+", title: "Countries", desc: "Export to 25+ research and healthcare institutions." },
  ];

  // Correct TypeScript-safe ref
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;

      const finalNumber = parseInt(stats[i].value.replace(/[^0-9]/g, ""));
      let current = 0;
      const duration = 1500;
      const increment = finalNumber / (duration / 20);

      const counter = setInterval(() => {
        current += increment;

        if (current >= finalNumber) {
          clearInterval(counter);
          el.innerText = stats[i].value; // Show full value (e.g. "60+")
        } else {
          el.innerText = Math.floor(current).toString();
        }
      }, 20);
    });
  }, []);

  return (
    <section className="w-full bg-[#F4F4FF] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-[49.9px] pp-300 leading-[54px] max-md:text-3xl max-md:leading-tight">
          Our Impact in Number
        </p>

        <p className="text-[39px] font-bold mt-2 pp-700 max-md:text-2xl">
          Trusted by Innovators. Built for Discovery.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="px-4 max-md:border max-md:bg-white max-md:rounded-lg max-md:py-6"
            >
              <p
                ref={(el) => { refs.current[i] = el; }} // Type-safe ref
                className="text-[42px] pp-600 text-[#316CE6] max-md:text-3xl"
              >
                {s.value}
              </p>

              <h4 className="pp-700 text-[16px] mt-2 max-md:text-sm">{s.title}</h4>

              <p className="text-sm text-gray-500 mt-2 inter max-md:text-xs">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
