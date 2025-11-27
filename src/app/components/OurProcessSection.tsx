import Image from "next/image";

export function OurProcessSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE : TITLE + IMAGE */}
        <div>
          <p className="text-[14px] tracking-widest text-[#222222] uppercase mb-1 font-bold">
            Our Process
          </p>

          {/* Heading - Desktop same, mobile scaled */}
          <h2 className="text-[50px] md:text-4xl text-[#222222] font-[300] leading-tight mb-6 max-md:text-2xl">
            From Concept to Calibration – <br />
            <span className="text-[50px] text-[#222222] font-[700] max-md:text-2xl">
              Our Manufacturing Mastery
            </span>
          </h2>

          {/* IMAGE - Desktop same size, mobile auto */}
          <div className="relative overflow-hidden shadow-lg">
            <Image
              src="/home/image 126.png"
              alt="Manufacturing"
              width={700}
              height={500}
              className="object-cover w-full h-[500px] max-md:h-[260px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE : CONTENT */}
        <div>
          <p className="text-gray-600 font-[400] text-[16px] mb-8 max-w-xl max-md:text-sm max-md:max-w-full">
            Every microscope begins with a deep understanding of your needs and
            ends with a product that exceeds expectations. Our process is
            engineered to deliver consistent quality, fast turnaround, and
            tailored solutions.
          </p>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex gap-5 p-6 rounded-2xl transition
                max-md:flex-col max-md:gap-2
                ${num === 2 ? "bg-blue-600 text-white" : "bg-gray-50"}`}
              >
                {/* NUMBER */}
                <div
                  className={`text-[50px] font-bold leading-none
                  ${num === 2 ? "text-white" : "text-blue-600"}
                  max-md:text-3xl`}
                >
                  {String(num).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div>
                  <h4 className="font-semibold text-[20px] mb-1 max-md:text-base">
                    {num === 1 && "Infrastructure"}
                    {num === 2 && "Quality Assurance"}
                    {num === 3 && "Network"}
                    {num === 4 && "Competitive Rates"}
                  </h4>

                  <p
                    className={`text-[14px] font-[400] leading-relaxed max-md:text-sm
                    ${num === 2 ? "text-white/90" : "text-gray-600"}`}
                  >
                    We maintain strict standards and optimized processes to
                    ensure reliable, precise and globally competitive
                    microscopic solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
