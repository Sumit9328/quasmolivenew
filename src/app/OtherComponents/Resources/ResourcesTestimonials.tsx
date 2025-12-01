"use client";
import Image from "next/image";

const testimonials = [
  {
    company: "Quality Scientific & Mechanical Works",
    quote: "Exceptional quality and precision!",
    text: "We have been using microscopes from Quality Scientific & Mechanical Works for our research laboratory, and the performance has been outstanding. The optics are crystal clear, and the build quality is at par with international brands. Highly recommended for serious scientific work.",
    author: "Dr. Meenakshi Sharma",
    title: "Research Scientist",
    location: "Delhi University"
  },
  {
    company: "",
    quote: "Reliable products with great service",
    text: "Their metallurgical microscope has enhanced our quality inspection process tremendously. The after-sales support team is responsive and well-trained. It's rare to find a company that stands by its product the way QUASMO does.",
    author: "Rajesh Kumar",
    title: "Production Manager",
    location: "Precision Auto Components Pvt. Ltd."
  },
  {
    company: "",
    quote: "Best value for money in the industry",
    text: "We compared multiple brands before purchasing. QUASMO microscope offered superior features at a competitive price. The digital imaging system is user-friendly and works flawlessly.",
    author: "Dr. Aditi Nair",
    title: "Pathology Lab Owner",
    location: "Bengaluru"
  },
  {
    company: "",
    quote: "Premium feel and professional results",
    text: "The ECO Series microscope we purchased for our biotechnology department has been a huge success. Students love the clarity and ease of use. The microscope feels premium and rugged—exactly what we needed for intensive academic use.",
    author: "Prof. Arvind Rao",
    title: "HOD Biotechnology",
    location: "Ahmedabad Institute of Science"
  },
  {
    company: "",
    quote: "Outstanding export-quality instruments",
    text: "As an overseas distributor, we are extremely satisfied with the consistency and finishing of their export models. The packaging, documentation, and support have always been timely and professional.",
    author: "Fernando",
    title: "Scientific Equipment Distributor",
    location: "Spain"
  },
  {
    company: "",
    quote: "Customized solution delivered perfectly",
    text: "We required a customized inverted microscope for our tissue culture facility. The team understood our application and delivered a perfectly calibrated system. Their technical guidance was extremely valuable.",
    author: "Dr. Vishal",
    title: "Biotech Startup Founder",
    location: "Pune"
  },
  {
    company: "",
    quote: "Durable and dependable—built to last",
    text: "We have been using their microscopes for more than five years with zero performance issues. These instruments are solid, stable, and offer long-term reliability. Truly made with craftsmanship.",
    author: "Suresh Verma",
    title: "Laboratory In-Charge",
    location: "Government Medical College Bhopal"
  },
  {
    company: "",
    quote: "Exceptional clarity with modern features",
    text: "The digital Wi-Fi microscope has made our documentation process effortless. Images are sharp, measurements are accurate, and the connectivity is smooth. Our lab workflow has improved significantly.",
    author: "Dr. Shivani",
    title: "Clinical Microbiologist",
    location: "Hyderabad"
  }
];

export default function ResourcesTestimonials() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Customer <span className="font-bold">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers have to say about our products and services
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f6ff] rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* COMPANY NAME (if exists) */}
              {testimonial.company && (
                <p className="text-blue-600 font-semibold text-sm mb-3">
                  {testimonial.company}
                </p>
              )}

              {/* QUOTE */}
              <div className="mb-4">
                <Image
                  src="/home/Group (1).svg"
                  alt="Quote"
                  width={30}
                  height={30}
                  className="mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  "{testimonial.quote}"
                </h3>
              </div>

              {/* TESTIMONIAL TEXT */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                {testimonial.text}
              </p>

              {/* AUTHOR INFO */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {testimonial.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

