"use client";
import React from "react";

export default function PricingSection() {
  const plans = [
    {
      title: "Single Ear",
      price: "£50",
      subtitle: "Per ear treatment",
      button: "Book Single Ear",
      features: [
        "Professional micro suction",
        "Medical Grade Equipment",
        "Home visit included",
        "Same day appointments",
      ],
      popular: false,
    },
    {
      title: "Both Ears",
      price: "£60",
      subtitle: "Complete treatment",
      button: "Book Both Ears",
      highlight: "Save £40!",
      features: [
        "Professional micro suction",
        "Medical Grade Equipment",
        "Home visit included",
        "Same day appointments",
        "Complete ear health check",
      ],
      popular: true,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F4FAF8] to-[#F9FBFA] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-12 left-12 w-24 h-24 opacity-10 text-[#184937]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z"></path>
        </svg>
      </div>
      <div className="absolute top-1/2 right-12 w-32 h-32 opacity-10 text-[#184937]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z"></path>
        </svg>
      </div>
      <div className="absolute bottom-12 right-1/4 w-28 h-28 opacity-10 text-[#184937]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1C17] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#4B5563]">
            Home visits only – no hidden fees, no clinic charges
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.popular
                  ? "border-2 border-[#184937] shadow-xl hover:shadow-2xl"
                  : "border-[#E5E7EB] shadow-md hover:shadow-lg"
              } transition-shadow duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-[#184937] text-white px-6 py-2 rounded-full font-semibold text-sm">
                  POPULAR
                </div>
              )}

              {/* Title */}
              <h3 className="text-3xl font-bold text-center mb-4 text-[#0E1C17]">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#184937] mb-2">
                  {plan.price}
                </div>
                <p className="text-[#4B5563]">{plan.subtitle}</p>
                {plan.highlight && (
                  <p className="text-[#184937] font-semibold mt-1">
                    {plan.highlight}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 text-[#0E1C17]">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                      className="w-5 h-5 text-[#184937] mt-0.5 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium w-full h-12 text-lg bg-[#184937] hover:bg-[#143B2C] text-white transition-all duration-200 shadow-sm">
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
                  className="w-5 h-5 mr-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-[#0E1C17]">
            All prices include home visit – no additional travel charges
          </p>
          <p className="text-[#4B5563]">
            Covering Derby, Nottingham, Leicestershire, Lincolnshire, and
            Staffordshire
          </p>
        </div>
      </div>
    </section>
  );
}
