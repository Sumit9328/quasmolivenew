"use client";

import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-center text-[42px] font-semibold text-gray-800 pp-700">
          Vision and Mission
        </h2>

        <p className="text-center text-gray-500 mt-3 text-[18px] max-w-3xl mx-auto pp-300 leading-[26px]">
          To be the most trusted provider of precision microscopes and imaging solutions—crafted in India, trusted worldwide.
        </p>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-[20px] font-semibold pp-700">
              A Vision to Empower
            </h3>

            <p className="text-gray-600 mt-4 text-[16px] leading-[26px] pp-400">
              To lead India’s transformation in scientific instrumentation by
              making world-class technology accessible, reliable, and future-ready.
            </p>

            <p className="text-gray-600 mt-4 text-[16px] leading-[26px] pp-400">
              We aspire to be the
              <span className="text-blue-600 font-medium cursor-pointer"> driving force </span>
              behind innovation in microscopy—bridging global standards with local expertise.
            </p>

            <div className="border-l-4 border-blue-600 pl-4 mt-6">
              <p className="text-[14px] text-blue-600 italic pp-300 leading-[22px]">
                “We believe that empowering researchers and institutions
                with the right tools unlocks breakthroughs that shape the future.”
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/about/16736629_5803446 1.png"
              alt="Vision Illustration"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/about/12704338_5064482 1.png"
              alt="Mission Illustration"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-[20px] font-semibold pp-700">
              A Mission to Deliver
            </h3>

            <p className="text-gray-600 mt-4 text-[16px] leading-[26px] pp-400">
              To manufacture and innovate under one roof—offering
              high-performance microscopes, seamless service, and global reach
              with unmatched value.
            </p>

            <p className="text-gray-600 mt-4 text-[16px] leading-[26px] pp-400">
              We aim to support every lab, clinic, and classroom with
              instruments that deliver
              <span className="text-blue-600 font-medium cursor-pointer"> clarity, consistency, and confidence.</span>
            </p>

            <div className="border-l-4 border-blue-600 pl-4 mt-6">
              <p className="text-[14px] text-blue-600 italic pp-300 leading-[22px]">
                “When precision meets purpose, great teams deliver exceptional
                results—every microscope we build reflects that belief.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
