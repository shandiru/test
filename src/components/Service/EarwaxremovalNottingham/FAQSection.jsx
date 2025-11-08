"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is microsuction safe?",
      answer:
        "Yes. Microsuction is considered the safest and most effective method of ear wax removal. It is a dry procedure performed under direct visual guidance, minimizing risks of infection or injury.",
    },
    {
      question: "How often should I have wax removed?",
      answer:
        "This varies from person to person. Most patients benefit from a cleaning every 6 to 12 months, depending on earwax production and personal comfort.",
    },
    {
      question: "Can you remove wax from children's ears?",
      answer:
        "Yes, we can safely perform microsuction for children, provided they are able to remain still and calm during the short procedure. Our clinicians ensure comfort throughout.",
    },
    {
      question: "Do you charge extra for home visits?",
      answer:
        "No. All of our prices already include the cost of the home visit — there are no hidden fees or additional travel charges.",
    },
    {
      question: "How long does the appointment take?",
      answer:
        "A typical home visit takes around 30 minutes, including consultation and treatment, ensuring thorough care without feeling rushed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0E1C17]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="w-full divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-3 border-b border-gray-200">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#0E1C17] py-3 hover:underline transition-colors"
              >
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 text-[#4B5563] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#4B5563] text-base leading-relaxed px-1 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
