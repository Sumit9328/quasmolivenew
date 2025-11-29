"use client";

import Image from "next/image";

export default function MindsBehind() {
  return (
    <section className="relative w-full h-auto py-24">

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about/image.png"   // ⭐ apni background image yahan lagana
          alt="Team Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c1934]/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-white">

        <h2 className="text-[28px] md:text-[32px] pp-700">
          The Minds Behind the Microscopes
        </h2>

        <p className="mt-4 text-gray-200 text-[16px] leading-[26px] pp-300">
          At Quasmo, our greatest strength isn’t just our technology—it’s the people who build it.
          From optical engineers to product designers, every team member brings deep expertise
          in microscopy, imaging, and lab instrumentation. Together, they transform complex
          challenges into elegant, high-performance solutions.
        </p>

        <p className="mt-4 text-gray-200 text-[16px] leading-[26px] pp-300">
          Their precision powers our products. Their passion fuels our progress. Whether crafting
          a custom lens or refining a digital interface, our team works with one goal: to deliver
          clarity that empowers science.
        </p>

        <div className="border-l-4 border-blue-500 pl-4 mt-6">
          <p className="text-[15px] text-blue-300 italic leading-[24px] pp-300">
            “Innovation isn’t just what we do—it’s who we are. It’s the mindset that drives every lens
            we craft, every solution we design, and every challenge we turn into opportunity.
            At Quasmo, innovation is woven into our culture, our products, and our purpose.”
          </p>
        </div>

      </div>
    </section>
  );
}
