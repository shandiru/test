"use client";
import React from "react";

export default function PatientCareSection() {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#184937] w-8 h-8"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      title: "Patient-centred",
      text: "You're never rushed",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#184937] w-8 h-8"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      ),
      title: "Transparent",
      text: "Clear pricing and communication",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#184937] w-8 h-8"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      title: "Respectful",
      text: "Every appointment handled with professionalism",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4FAF8]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C17] mb-6">
            Expert, Local and Patient-Focused Care
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-lg text-[#4B5563] leading-relaxed">
            <p>
              At Earwego, we combine medical precision with genuine care. Our
              clinicians take the time to listen, explain, and make sure you
              feel completely at ease.
            </p>
            <p>
              We're passionate about hearing health, not just ear wax removal.
              Many of our specialists have worked in audiology and hearing
              clinics across the East Midlands, bringing years of experience
              directly to your home.
            </p>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mt-12">
          <p className="text-center text-xl font-semibold text-[#0E1C17] mb-8">
            Our approach is always:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#184937]/50 transition-colors shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#E9F3EE] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0E1C17] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#4B5563]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
