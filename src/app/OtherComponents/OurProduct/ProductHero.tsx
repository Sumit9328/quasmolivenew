"use client";

export default function ProductHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/ourproduct/image 129.png"
        alt="Microscope"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
            e.currentTarget.src = "/assets/default.png";
        }}
      />

      {/* Blue Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/80 via-[#0052CC]/60 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl px-6 lg:px-10">
        
        {/* Breadcrumb */}
        <p className="text-white/70 text-sm mb-3">
          Home <span className="mx-1">•</span> Our Products
        </p>

        {/* Heading */}
        <h1 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
          Our Products –{" "}
          <span className="font-bold">
            Trusted Across Pathology, Research & Industry
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-white/80 mt-4 max-w-3xl text-base lg:text-lg leading-relaxed">
          At Quasmo, we craft precision instruments for pathology, metallurgy,
          fluorescence, and education—trusted by labs and institutions across India.
          With over 60 years of manufacturing excellence, our products combine clarity,
          durability, and ergonomic design to meet the evolving demands of diagnostics
          and research.
        </p>

      </div>

      {/* Dots Indicator (Optional Slider UI) */}
      <div className="absolute bottom-6 flex items-center gap-2 z-10">
        <span className="w-3 h-3 bg-white/70 rounded-full"></span>
        <span className="w-3 h-3 bg-white/40 rounded-full"></span>
        <span className="w-3 h-3 bg-white/40 rounded-full"></span>
        <span className="w-3 h-3 bg-white/40 rounded-full"></span>
      </div>

      {/* Enquire Button (Side Floating) */}
      <button className="absolute right-[-37px] top-1/2 -translate-y-1/2 bg-[#0052CC] text-white px-4 py-2 text-sm font-medium rotate-90 rounded-b-lg shadow-lg">
        Enquire Now
      </button>
    </section>
  );
}
