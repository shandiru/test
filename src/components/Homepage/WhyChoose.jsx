"use client";
import React, { useEffect, useState } from "react";
import {
  FiAward,
  FiClock,
  FiActivity,
  FiUsers,
  FiHome,
  FiCheckCircle,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png"; // same background floating icons as Hero

const items = [
  {
    title: "Over 10 Years’ Experience",
    short:
      "Unrivalled micro suction experience. Many patients visit us after unsatisfactory results elsewhere.",
    full: `With more than a decade of hands-on expertise, we’ve built a reputation for safe, professional, and effective earwax removal. Our founder, Rab, has spent years perfecting his techniques and supporting countless clients to restore their hearing clarity and comfort.

We pride ourselves on combining traditional care with modern best practices, ensuring every treatment is carried out to the highest standard. When you choose us, you’re choosing proven experience, trusted service, and genuine care for your wellbeing.`,
    img: "/dental.png",
    icon: <FiAward className="w-6 h-6 text-white" />,
  },
  {
    title: "Medical Grade Approved Equipment",
    short:
      "We use superior medical-grade equipment for safe, hygienic, and precise treatments.",
    full: `Your safety and comfort are our top priority. That’s why we only use medical grade, industry-approved equipment for every earwax removal procedure. This ensures treatments are not only highly effective but also safe, hygienic, and comfortable from start to finish.

By investing in the latest approved tools, we’re able to deliver precise results while giving you peace of mind that you’re in trusted hands.`,
    img: "/h1.jpg",
    icon: <FiActivity className="w-6 h-6 text-white" />,
  },
  {
    title: "Same Day Appointments",
    short: "No waiting weeks — we offer same-day relief when you need it most.",
    full: `No need to wait weeks to be seen — we offer same day appointments, so you can get relief quickly and safely. Using our medical grade approved equipment, we provide fast, effective treatments without long delays, helping you get back to clear and comfortable hearing as soon as possible.`,
    img: "/h2.jpg",
    icon: <FiClock className="w-6 h-6 text-white" />,
  },
  {
    title: "High Return Rate",
    short: "We’re proud to have a very high percentage of returning happy customers.",
    full: `Our customers don’t just visit once — they trust us time and time again. Thanks to our professional care, comfortable treatments, and lasting results, we’re proud to have a very high percentage of returning happy customers.

For us, it’s more than a service — it’s about building long-term relationships and becoming the go-to choice for safe and effective earwax removal.`,
    img: "/h3.jpg",
    icon: <FiUsers className="w-6 h-6 text-white" />,
  },
  {
    title: "Convenient Home or At Work",
    short:
      "Professional, friendly service at your home or workplace — stress-free care.",
    full: `We make earwax removal simple and stress-free by bringing our professional, friendly service directly to you. Whether it’s in the comfort of your own home or at your workplace, we ensure safe, effective treatment that fits around your schedule.`,
    img: "/h4.jpg",
    icon: <FiHome className="w-6 h-6 text-white" />,
  },
  {
    title: "Complete Care Package",
    short: "From consultation to aftercare — we’ve got you fully covered.",
    full: `We believe in providing more than just a one-off treatment — our Complete Care Package is designed to give you everything you need for lasting peace of mind. From your initial consultation to safe, effective earwax removal and clear aftercare guidance, we cover every step of the process.

With expert service, medical grade equipment, and flexible appointment options, you can be confident you’re receiving the very best care, all in one package.`,
    img: "/h5.jpg",
    icon: <FiCheckCircle className="w-6 h-6 text-white" />,
  },
];

export default function WhyChoose() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section
      id="whyus"
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

      {/* === linear Glow === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#9C79B3]/20 to-[#43AA8B]/20 blur-[160px]"></div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Why Choose EarWeGo?
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
            We've helped thousands of patients who couldn't get satisfactory
            results elsewhere. Our expertise and Medical Grade Equipment ensure
            you leave happy and hearing clearly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image */}
              <div className="w-full h-[280px] rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Box */}
              <div className="-mt-10 w-[90%] bg-[#43AA8B] text-white rounded-2xl shadow-md p-6 relative h-[200px] flex flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                      {item.short}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelected(item)}
                    className="w-10 h-10 rounded-full bg-white text-[#43AA8B] flex items-center justify-center shadow-md hover:scale-110 transition"
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Modal === */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <div
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl transform transition-all animate-slideUp">
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#9C79B3] flex items-center justify-center text-white">
                {selected.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0D1525]">
                {selected.title}
              </h3>
            </div>

            {/* Content */}
            <p className="text-[#4B5563] whitespace-pre-line leading-relaxed">
              {selected.full}
            </p>
          </div>
        </div>
      )}

      {/* === Floating Animations === */}
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
