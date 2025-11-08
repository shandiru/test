"use client";
import React from "react";

export default function AppointmentSteps() {
  const steps = [
    {
      id: 1,
      title: "Book Your Appointment",
      desc: "Book a time online or by phone at a time that suits you.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-10 h-10"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "We Come to You",
      desc: "Your clinician arrives with sterilised, medical-grade tools.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-10 h-10"
        >
          <path d="M11 2v2"></path>
          <path d="M5 2v2"></path>
          <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
          <circle cx="20" cy="10" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Inspection & Explanation",
      desc: "We inspect your ear canals using an otoscope and explain each step.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-10 h-10"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Gentle Treatment",
      desc: "Microsuction treatment gently removes excess wax, restoring clear hearing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-10 h-10"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Aftercare Advice",
      desc: "Aftercare advice helps you maintain healthy ears between appointments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-10 h-10"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#F4FAF8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C17] mb-4">
            What to Expect During Your Appointment
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Line connector */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#184937]/20 via-[#184937] to-[#184937]/20" />
          <div className="grid md:grid-cols-5 gap-10 relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#184937] flex items-center justify-center mb-6 shadow-md">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E9F3EE] text-[#184937] font-bold text-sm mb-2">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-lg text-[#0E1C17]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4B5563]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 p-8 rounded-2xl bg-[#EAF5F0] border border-[#DDEAE4] text-center">
          <p className="text-lg text-[#0E1C17] leading-relaxed">
            A typical home visit lasts around{" "}
            <span className="font-semibold text-[#184937]">30 minutes</span>, and
            most people notice{" "}
            <span className="font-semibold text-[#184937]">
              immediate results
            </span>{" "}
            with clearer hearing, balanced sound, and greater comfort.
          </p>
        </div>
      </div>
    </section>
  );
}
