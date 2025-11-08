"use client";
import React from "react";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E9F3EE] via-[#F9FBFA] to-[#E6F2EC]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1C17] mb-6">
            Ready to Hear Clearly Again
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#4B5563] mb-4 leading-relaxed">
            You don’t have to put up with blocked ears or muffled hearing when
            professional care is available locally.
          </p>
          <p className="text-lg md:text-xl text-[#4B5563] mb-10 leading-relaxed">
            Book your ear wax removal in Nottingham today and enjoy safe, expert
            treatment in the comfort of your own home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Call Us Now */}
            <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium bg-[#184937] text-white hover:bg-[#143B2C] h-10 px-6 transition-all w-full sm:w-auto text-sm">
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
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us Now
            </button>

            {/* Book Online */}
            <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium border border-[#D1D5DB] bg-white text-[#0E1C17] hover:bg-[#F4FAF8] h-10 px-6 transition-all w-full sm:w-auto text-sm">
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
                className="h-5 w-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Book Online
            </button>

            {/* Contact Us */}
            <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium border border-[#D1D5DB] bg-white text-[#0E1C17] hover:bg-[#F4FAF8] h-10 px-6 transition-all w-full sm:w-auto text-sm">
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
                className="h-5 w-5"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              Contact Us
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-[#4B5563] mt-8">
            Call us, book online, or contact our friendly team for advice on
            maintaining healthy ears.
          </p>
        </div>
      </div>
    </section>
  );
}
