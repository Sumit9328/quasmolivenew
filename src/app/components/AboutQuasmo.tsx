import Image from "next/image";

export function AboutQuasmo() {
  return (
    <section className="w-full bg-white py-2 px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div className="relative flex justify-center lg:justify-start">

          {/* Blue Circle - Desktop same, mobile auto center */}
          <div
            className="
              absolute left-[-80px] top-[190px] 
              w-[312px] h-[312px] bg-blue-600 rounded-full

              max-md:left-1/2
              max-md:top-[120px]
              max-md:-translate-x-1/2
              max-md:w-[220px]
              max-md:h-[220px]
            "
          ></div>

          <Image
            src="/home/man standing.png"
            alt="Microscope"
            width={400}
            height={400}
            className="relative z-10 max-md:w-[260px]"
          />
        </div>

        {/* Content */}
        <div className="max-md:text-center px-4 lg:px-0">
          <h2 className="text-[36px] md:text-4xl pp-700 text-gray-900 mb-4 max-md:text-2xl">
            QUASMO – Quality Scientific and Mechanical Works
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-[19px] pp-400 max-md:text-sm">
            The logical ideas and effective methods to handle the managerial
            activities, have assisted the company to acquire distinguished
            position amidst the dependable Industrial & Pathological
            Microscopes Manufacturers in India.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 max-md:text-left">
            <li className="flex items-center gap-2 text-[19px] pp-700 max-md:text-base">
              ✅ High Quality Services
            </li>
            <li className="flex items-center gap-2 text-[19px] pp-700 max-md:text-base">
              ✅ Fast Working Process
            </li>
            <li className="flex items-center gap-2 text-[19px] pp-700 max-md:text-base">
              ✅ 24/7 Customer Support
            </li>
            <li className="flex items-center gap-2 text-[19px] pp-700 max-md:text-base">
              ✅ Expert Labtech Team
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
