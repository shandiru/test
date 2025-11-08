"use client";
import React from "react";

export default function MicrosuctionComparison() {
  return (
    <section className="py-16 md:py-24 bg-[#F4FAF8]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C17] mb-4">
            Microsuction: The Modern Alternative to Ear Syringing
          </h2>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left – Traditional Ear Syringing */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FDE8E8] flex items-center justify-center">
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
                  className="w-6 h-6 text-[#D12C2C]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">
                Traditional Ear Syringing
              </h3>
            </div>

            <ul className="space-y-3 text-[#4B5563]">
              {[
                "Uses water to flush out wax",
                "Can cause dizziness and discomfort",
                "Risk of infection from water",
                "Less precise and controlled",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#D12C2C] mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – Modern Microsuction */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#184937] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#184937] flex items-center justify-center">
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
                  className="w-6 h-6 text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0E1C17]">
                Modern Microsuction
              </h3>
            </div>

            <ul className="space-y-3 text-[#0E1C17]">
              {[
                "Gentle medical suction device",
                "Precise removal under visual guidance",
                "Water-free, reducing infection risk",
                "Cleaner, faster, more comfortable",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#184937] mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="bg-[#184937] rounded-2xl p-10 text-center text-[#E8F5F0]">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#0E1C17] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#E8F5F0]"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            It is the{" "}
            <strong> safest and most effective ear wax removal technique </strong>{" "}
            recommended by the NHS and audiology professionals. Whether you've
            tried ear suction in Nottingham before or it’s your first time seeking
            help, microsuction offers a cleaner, faster, and more comfortable
            solution.
          </p>
        </div>
      </div>
    </section>
  );
}
