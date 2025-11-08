"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png"; // Decorative background icons

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="find-us"
      className="relative py-16 px-4 bg-linear-to-br from-[#F8FAFC] via-white to-[#EAF7F3] overflow-hidden"
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
      <div className="absolute inset-0 bg-linear-to-br from-[#9C79B3]/20 to-[#43AA8B]/20 blur-[160px]" />

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-10"
          data-aos="fade-up"
        >
          Find Us
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg w-full h-[400px] border border-gray-200"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <iframe
            title="Google Map - EarWeGo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.5093705817058!2d-1.491566!3d52.921259299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f13060e4201f%3A0x1d06502f6f1e422c!2sGreat%20Northern%20Rd%2C%20Derby%2C%20UK!5e0!3m2!1sen!2slk!4v1759292526907!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Get Directions button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://maps.app.goo.gl/9UQ4DpVbSdYuN5Fz7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#43AA8B] hover:bg-[#318F6F] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get Directions
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
}
