import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What Services does Quasmo Offer?",
      answer:
        "Quasmo offers microscope manufacturing, repair, customization, and imaging solutions—serving labs, research institutes, and industrial clients across India and globally.",
    },
    {
      question: "How can Quasmo help my business with microscopes?",
      answer:
        "We provide tailored microscope solutions that improve accuracy, efficiency, and productivity in your research or industrial workflows.",
    },
    {
      question: "What industries does Quasmo serve?",
      answer:
        "Quasmo serves healthcare, education, pharmaceuticals, research laboratories, and industrial quality control sectors.",
    },
    {
      question: "How many products categories does Quasmo has?",
      answer:
        "Quasmo offers a wide range of microscope categories including biological, pathological, stereo, and industrial microscopes.",
    },
    {
      question: "How is after sales services at Quasmo?",
      answer:
        "Our after-sales support includes maintenance, calibration, repair services, and dedicated technical assistance for all clients.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">
                  {faq.question}
                </h4>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>

              {activeIndex === index && (
                <p className="text-gray-600 mt-3 leading-relaxed">
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