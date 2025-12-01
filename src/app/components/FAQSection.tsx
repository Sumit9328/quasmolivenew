'use client'

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "1. Who are we?",
      answer:
        "We are one of India's leading and most advanced microscope manufacturers, offering premium-quality microscopes for research, education, industry, and medical applications. We also export to several countries worldwide.",
    },
    {
      question: "2. What types of microscopes do you manufacture?",
      answer:
        "We manufacture a complete range of microscopes, including: • Biological Microscopes • Inverted Microscopes • Metallurgical Microscopes • Stereo & Zoom Microscopes • Phase Contrast & Fluorescence Microscopes • Digital & Wi-Fi Microscopes • Customized OEM Microscopes",
    },
    {
      question: "3. Do you offer customization?",
      answer:
        "Yes. We provide custom-built microscopes based on client requirements, including optics, illumination, digital imaging systems, and mechanical design.",
    },
    {
      question: "4. What makes your microscopes premium or different?",
      answer:
        "• Infinity-corrected optics • High-precision mechanical parts • Long-life LED illumination • Rigid body construction for durability • International quality standards • In-house R&D and quality control • Competitive pricing compared to global brands",
    },
    {
      question: "5. Do you provide warranty?",
      answer:
        "Yes, all our microscopes come with 1–3 years warranty depending on the model. Extended warranty can also be provided on request.",
    },
    {
      question: "6. Do you offer after-sales service and technical support?",
      answer:
        "Absolutely. We offer onsite service, remote assistance, replacement parts, and preventive maintenance support across India. International clients receive online support & parts shipment.",
    },
    {
      question: "7. Can I get a demo of the microscope before purchase?",
      answer:
        "Yes. We provide live online demos, video demonstrations, and physical demos (subject to location and product availability).",
    },
    {
      question: "8. Do you export microscopes?",
      answer:
        "Yes, we export to 25+ countries including Africa, Middle East, Southeast Asia, and Europe.",
    },
    {
      question: "9. What is your delivery time?",
      answer:
        "Standard models are dispatched within 3–7 days. Customized or bulk orders typically take 2–4 weeks depending on specifications.",
    },
    {
      question: "10. Do your microscopes come with digital cameras or software?",
      answer:
        "Yes. We offer: • HD/4K cameras • Wi-Fi cameras • Image analysis software • Measurement & documentation software. These can be bundled with your microscope or purchased separately.",
    },
    {
      question: "11. Are spare parts easily available?",
      answer:
        "Yes. We stock all major spares—objectives, eyepieces, condensers, stages, lamps, digital accessories—ensuring fast replacements.",
    },
    {
      question: "12. How can we place an order?",
      answer:
        "You can place an order via: • Email • Website inquiry form • WhatsApp • Purchase order from institution/industry • GEM Portal (for government buyers) • Indiamart",
    },
    {
      question: "13. Do you provide training?",
      answer:
        "Yes. We offer installation & training for institutions, laboratories, and industries to ensure correct use and maintenance of the microscope.",
    },
    {
      question: "14. Do you manufacture microscopes under OEM / private label?",
      answer:
        "Yes, OEM manufacturing is available. We can design, assemble, and brand microscopes for your company.",
    },
    {
      question: "15. How do I select the right microscope for my application?",
      answer:
        "Share your application, sample type, and magnification requirement, and our technical team will suggest the best model with a comparison.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading - desktop same, mobile scaled */}
        <h2 className="text-2xl md:text-[37px] pp-700 text-center mb-10 max-md:text-xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white rounded-xl shadow-sm p-5 cursor-pointer max-md:p-4"
            >
              <div className="flex justify-between items-center gap-3">
                <h4 className="font-[500] inter text-black text-[18px] max-md:text-sm">
                  {faq.question}
                </h4>

                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 max-md:w-4 max-md:h-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 max-md:w-4 max-md:h-4" />
                )}
              </div>

              {activeIndex === index && (
                <p className="font-[400] inter text-[#59595f] text-[18px] mt-3 leading-relaxed max-md:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
