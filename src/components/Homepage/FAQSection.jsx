"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png"; // Decorative floating icons background

const FAQSection = () => {
  const faqs = [
    {
      question: "Can ear wax cause tinnitus?",
      answer: "The nearer to the eardrum the more likely this is.",
    },
    {
      question: "Why do GP's no longer do ear wax removal?",
      answer:
        "This is because the government legislate it as a non-essential service.",
    },
    {
      question: "Is micro-suction safer than traditional syringing?",
      answer:
        "It is safer, with fewer complications and reduced potential for damage.",
    },
    {
      question: "Do you treat children?",
      answer:
        "The answer depends on the child — if they are confident and able to sit still, then yes. Infants are not recommended.",
    },
    {
      question: "I have a perforation — is micro-suction safe?",
      answer:
        "Micro-suction is the only safe procedure for perforated or previously perforated eardrums.",
    },
    {
      question: "Do you only do home or work visits?",
      answer:
        "Yes, we only provide home or workplace visit appointments for your convenience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="faq"
      className="relative py-20 bg-linear-to-br from-[#F8FAFC] via-white to-[#EAF7F3] overflow-hidden"
    >
      {/* === Floating Background Icons === */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[8%] left-[10%] w-16 sm:w-20 animate-float-slow"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[35%] left-[35%] w-20 sm:w-24 animate-float-fast"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[25%] right-[25%] w-16 sm:w-20 animate-float-medium"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[10%] left-[30%] w-16 sm:w-20 animate-float-slow"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[25%] right-[10%] w-20 sm:w-24 animate-float-medium"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[15%] right-[5%] w-20 sm:w-24 animate-float-fast"
        />
      </div>

      {/* === Soft linear Glow === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#9C79B3]/20 to-[#43AA8B]/20 blur-[160px]"></div>

      {/* === Content === */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto">
            Get answers to common questions about our ear wax removal services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#F8FAFC] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#0D1525] pr-4">
                  {faq.question}
                </h3>
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
                  className={`h-5 w-5 text-[#43AA8B] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-slate-100">
                  <p className="text-[#334155] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p className="text-[#334155] mb-4">
            Have more questions? We're here to help!
          </p>
          <a
            href="tel:08081371961"
            className="inline-flex items-center px-6 py-3 bg-[#43AA8B] text-white font-semibold rounded-lg hover:bg-[#318F6F] transition-colors"
          >
            Call Us: 0808 137 1961
          </a>
        </div>
      </div>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-3deg);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(5deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
