"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhyChooseCarousel() {
  const benefits = [
    {
      icon: (
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
          className="text-emerald-900"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      ),
      title: "Professional expertise",
      description:
        "All treatments are carried out by trained, certified clinicians experienced in ear health and microsuction.",
    },
    {
      icon: (
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
          className="text-emerald-900"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      title: "Safe and gentle microsuction",
      description:
        "The modern, medically recommended alternative to ear syringing or ear suction. It is clean, precise, and water-free, reducing infection risk.",
    },
    {
      icon: (
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
          className="text-emerald-900"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      ),
      title: "Fully mobile service",
      description:
        "We bring everything to you. No travelling, no waiting rooms, no stress.",
    },
    {
      icon: (
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
          className="text-emerald-900"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Local and trusted",
      description:
        "Based in Nottingham, we're proud to serve our community with reliable, home-visit ear care.",
    },
    {
      icon: (
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
          className="text-emerald-900"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Clear results in minutes",
      description:
        "Most clients notice an immediate improvement in hearing and comfort after treatment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1C17] mb-4">
            Why Choose Earwego for Ear Wax Removal in Nottingham
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            We're not just another ear cleaning service. We're a small team of
            qualified hearing care professionals who care deeply about your
            comfort, safety, and confidence.
          </p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0E1C17]">
            What makes us different:
          </h3>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="max-w-2xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 flex flex-col items-center text-center min-h-[280px]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-xl md:text-2xl text-[#0E1C17] mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
