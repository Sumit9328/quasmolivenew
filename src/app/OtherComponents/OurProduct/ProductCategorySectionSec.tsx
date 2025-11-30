"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCategorySectionSec() {
  const section1Products = [
    "Dissecting Microscope PZ-2",
    "Dissecting Microscope PZ-2 with BULL LENS",
    "Student Microscope SP-5",
    "Student Microscope SP-7",
    "Compound Student Microscope PZ-5",
    "Compound Student Microscope PZ-6",
    "Compound Student Microscope PZ-7",
    "Medical Student Microscope PZ-9",
    "Medical Student Microscope PZ-9S",
    "Medical Student Microscope PZ-9 Advance",
  ];

  const section2Products = [
    "Pathological Monocular Microscope SP-20",
    "Pathological Binocular Microscope SP-22",
    "Pathological Monocular Microscope STAR-2",
    "Pathological Binocular Microscope STAR-2",
    "Pathological Monocular Microscope STAR PLUS-2",
    "Pathological Binocular Microscope STAR PLUS-2",
    "Monocular Microscope ECO STAR-M",
    "Binocular Microscope ECO STAR-B",
    "Monocular Microscope ECO STAR PLUS-M",
    "Monocular Microscope ECO STAR PLUS-B",
    "Binocular Microscope ECO STAR PLUS-PREMIA",
  ];

  return (
    <div className="w-full">

      {/* ====================== SECTION 1 ====================== */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* TOP ROW (IMAGE LEFT + TEXT RIGHT) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/product1.jpg"
                alt="Microscope"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-4">
              <h2 className="text-[34px] font-bold text-[#1C2C64] leading-tight">
                Dissecting & Educational Microscopes
              </h2>

              <p className="text-gray-600 leading-[26px] text-[16px]">
                Quasmo's Dissecting and Educational Microscopes are crafted to spark
                curiosity and deliver clarity in classrooms, labs, and training centers.
                With robust construction, intuitive controls, and precision optics, these
                instruments make scientific exploration accessible and engaging for
                learners at every level.
              </p>
            </div>
          </div>

          {/* GRID OF PRODUCTS BELOW BOTH */}
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section1Products.map((name, i) => (
              <button
                key={i}
                className={`flex items-center justify-between w-full border rounded-lg text-[13px] px-3 py-2 shadow-sm
                ${i === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"}
              `}
              >
                {name}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* ====================== SECTION 2 ====================== */}
      <section className="w-full py-20 bg-[#F6F7FF]">
        <div className="max-w-7xl mx-auto px-4">

          {/* TOP ROW (TEXT LEFT + IMAGE RIGHT) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-4">
              <h2 className="text-[34px] font-bold text-[#1C2C64] leading-tight">
                Laboratory Microscopes
              </h2>

              <p className="text-gray-600 leading-[26px] text-[16px]">
                Built for professionals who demand uncompromising clarity, our
                laboratory microscopes combine advanced optics, ergonomic design,
                and rugged reliability. Whether you're conducting clinical diagnostics,
                academic research, or industrial analysis, each instrument is engineered
                to deliver sharp imaging, smooth operation, and consistent performance.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/product2.jpg"
                alt="Laboratory Microscope"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* GRID OF PRODUCTS BELOW BOTH */}
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section2Products.map((name, i) => (
              <button
                key={i}
                className={`flex items-center justify-between w-full border rounded-lg text-[13px] px-3 py-2 shadow-sm
                ${i === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"}
              `}
              >
                {name}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
