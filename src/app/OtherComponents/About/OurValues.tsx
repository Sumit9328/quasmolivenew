"use client";

import Image from "next/image";

export default function OurValues() {
  const values = [
    {
      title: "Innovation",
      desc: "We explore new technologies to elevate optical design and performance.",
      icon: "/about/Frame 105415.png", // Replace with your images
    },
    {
      title: "Excellence",
      desc: "We deliver uncompromising quality across every product and process.",
      icon: "/about/Frame 105416.png",
    },
    {
      title: "Collaboration",
      desc: "We work closely with clients and partners to achieve shared success.",
      icon: "/about/Frame 105417.png",
    },
    {
      title: "Integrity",
      desc: "Honesty and accountability shape everything we do.",
      icon: "/about/Frame 105418.png",
    },
  ];

  return (
    <section className="w-full bg-[#2F3038] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-white text-[28px] pp-700">
          Our Values
        </h2>

        <p className="text-center text-gray-300 text-[15px] mt-3 pp-300 max-w-2xl mx-auto leading-[22px]">
          At the heart of Quasmo are the principles that guide every microscope we build and every
          partnership we nurture.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">

          {values.map((item, i) => (
            <div key={i} className="text-center flex flex-col items-center">

              {/* Icon Circle */}
              <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500 flex items-center justify-center mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-[18px] pp-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-[14px] mt-3 leading-[22px] pp-300 max-w-[220px] mx-auto">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
