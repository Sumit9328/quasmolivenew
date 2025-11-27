import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="relative w-full py-20 flex justify-center items-center overflow-hidden">

      {/* Background Map Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/Component 139.svg"
          alt="Map Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-4 text-center">

        <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
          Our Client Say
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-12 max-md:text-xl">
          What our <span className="font-bold">satisfied clients</span> are saying
        </h2>

        {/* GRID - Desktop same, mobile stacked */}
        <div className="grid md:grid-cols-2 gap-12 max-md:gap-8">

          {/* ================= CARD 1 ================= */}
          <div className="text-left">

            <div className="relative bg-[#f5f6ff] rounded-xl p-6 max-md:p-4">

              <Image
                src="/home/Group (1).svg"
                alt="Comma"
                width={30}
                height={30}
                className="mb-3"
              />

              <p className="text-gray-700 inter font-[400] text-[24px] max-md:text-base">
                "I choose to learn from the best" I got great help from QUASMO during my research project. Their products were like awesome.”
              </p>

              <Image
                src="/home/Chevron.svg"
                alt="Triangle"
                width={40}
                height={25}
                className="absolute -bottom-4 left-6 max-md:left-4"
              />
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/home/Rectangle 14.png"
                alt="User"
                width={50}
                height={50}
                className="rounded-[12px]"
              />
              <div>
                <p className="font-semibold inter text-[19px] max-md:text-base">
                  Kritika Mahajan
                </p>
                <p className="text-sm text-gray-500 inter text-[17px] max-md:text-sm">
                  Student - IIT Delhi
                </p>
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="text-left">

            <div className="relative bg-[#f5f6ff] rounded-xl p-6 max-md:p-4">

              <Image
                src="/home/Group (1).svg"
                alt="Comma"
                width={30}
                height={30}
                className="mb-3"
              />

              <p className="text-gray-700 inter font-[400] text-[24px] max-md:text-base">
                “When it comes to Quality Assurance and good service support. QUASMO is my #1 choice go. If you want no compromise in quality, Then you need to use QUASMO Microscope”
              </p>

              <Image
                src="/home/Chevron.svg"
                alt="Triangle"
                width={40}
                height={25}
                className="absolute -bottom-4 left-6 max-md:left-4"
              />
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/home/Rectangle 14 (1).png"
                alt="User"
                width={50}
                height={50}
                className="rounded-[12px]"
              />
              <div>
                <p className="font-semibold inter text-[19px] max-md:text-base">
                  Dr. Rakesh Chadha
                </p>
                <p className="text-sm text-gray-500 inter text-[17px] max-md:text-sm">
                  Sr. Surgeon - AIIMS
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center max-md:w-8 max-md:h-8">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center max-md:w-8 max-md:h-8">
            →
          </button>
        </div>

      </div>
    </section>
  );
}
