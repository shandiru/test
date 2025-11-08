"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png"; // Same floating icons image used in other sections

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="pricing"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#4B5563]">
            Home visits only – no hidden fees, no clinic charges
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Ear */}
          <div
            data-slot="card"
            className="bg-white flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-white hover:border-[#43AA8B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#43AA8B55]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="grid items-start gap-1.5 px-6 text-center pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Single Ear
                </div>
                <div className="text-4xl font-bold text-[#43AA8B] mt-4">£50</div>
                <p className="text-[#4B5563]">Per ear treatment</p>
              </div>

              <div className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#4B5563]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5 text-[#43AA8B] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 mt-auto">
              <a
                href="tel:+448081371961"
                className="inline-flex items-center justify-center w-full bg-[#43AA8B] hover:bg-[#318F6F] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Single Ear
              </a>
            </div>
          </div>

          {/* Both Ears */}
          <div
            data-slot="card"
            className="bg-white flex flex-col justify-between rounded-xl py-6 shadow-lg border-2 border-[#43AA8B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#43AA8B55] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute top-0 right-0 bg-[#43AA8B] text-white px-3 py-1 text-sm font-semibold">
              POPULAR
            </div>

            <div>
              <div className="grid items-start gap-1.5 px-6 text-center pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Both Ears
                </div>
                <div className="text-4xl font-bold text-[#43AA8B] mt-4">£60</div>
                <p className="text-[#4B5563]">Complete treatment</p>
                <p className="text-sm text-[#43AA8B] font-semibold">Save £40!</p>
              </div>

              <div className="px-6">
                <ul className="space-y-3 mb-6">
                  {[
                    "Professional micro suction",
                    "Medical Grade Equipment",
                    "Home visit included",
                    "Same day appointments",
                    "Complete ear health check",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#4B5563]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5 text-[#43AA8B] mr-3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 mt-auto">
              <a
                href="tel:+448081371961"
                className="inline-flex items-center justify-center w-full bg-[#43AA8B] hover:bg-[#318F6F] text-white rounded-md px-4 py-3 text-sm font-medium transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book Both Ears
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <p className="text-lg text-[#0D1525] mb-4 font-semibold">
            All prices include home visit – no additional travel charges
          </p>
          <p className="text-[#4B5563]">
            Covering Derby, Nottingham, Leicestershire, Lincolnshire, and
            Staffordshire
          </p>
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
}
