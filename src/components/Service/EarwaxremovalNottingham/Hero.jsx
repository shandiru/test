"use client";
import React from "react";

export default function EarWaxHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-healthcare-ear-examination-medical-eq.jpg"
          alt="Professional ear care"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ear Wax Removal in Nottingham
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              Safe, professional ear care in the comfort of your own home
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
              Blocked ears can make life uncomfortable, from muffled hearing and ringing to that
              frustrating feeling of fullness. At <strong>Earwego</strong>, our ear wax removal in
              Nottingham service restores clear hearing quickly and safely without you having to
              visit a clinic. Our trained clinicians come directly to your home, bringing
              medical-grade microsuction equipment and a calm, friendly approach.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md h-12 px-8 transition-all">
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
                  className="mr-2 h-5 w-5"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Book Appointment
              </button>

              <button className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-md h-12 px-8 transition-all">
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
                  className="mr-2 h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us Now
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Safe &amp; Professional
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Home</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Service Available
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Trained Clinicians
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
