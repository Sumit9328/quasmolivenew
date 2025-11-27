
import Image from "next/image";

export function AboutQuasmoSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-6 top-10 w-40 h-40 bg-blue-600 rounded-full"></div>
          <Image
            src="/assets/microscope-product.png"
            alt="Microscope"
            width={400}
            height={500}
            className="relative z-10"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            QUASMO – Quality Scientific and Mechanical Works
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The logical ideas and effective methods to handle the managerial
            activities, have assisted the company to acquire distinguished
            position amidst the dependable Industrial & Pathological
            Microscopes Manufacturers in India.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center gap-2">✅ High Quality Services</li>
            <li className="flex items-center gap-2">✅ Fast Working Process</li>
            <li className="flex items-center gap-2">✅ 24/7 Customer Support</li>
            <li className="flex items-center gap-2">✅ Expert Labtech Team</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
