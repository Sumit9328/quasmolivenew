
import Image from "next/image";


export function OurProcessSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/assets/process-microscope.jpg"
            alt="Manufacturing"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            From Concept to Calibration – <br />
            <span className="text-blue-600">Our Manufacturing Mastery</span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            Every microscope begins with a deep understanding of your needs and
            ends with a product that exceeds expectations. Our process is
            engineered to deliver consistent quality, fast turnaround, and
            tailored solutions.
          </p>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex gap-5 p-6 rounded-2xl transition ${
                  num === 2 ? "bg-blue-600 text-white" : "bg-gray-50"
                }`}
              >
                <div
                  className={`text-3xl font-bold ${
                    num === 2 ? "text-white" : "text-blue-600"
                  }`}
                >
                  {String(num).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {num === 1 && "Infrastructure"}
                    {num === 2 && "Quality Assurance"}
                    {num === 3 && "Network"}
                    {num === 4 && "Competitive Rates"}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      num === 2 ? "text-white/90" : "text-gray-600"
                    }`}
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