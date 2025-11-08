"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png"; // Floating icons background image

const team = [
  {
    name: "Rab",
    role: "Founder",
    avatar: "/img-right.jpeg",
    bio: `With over a decade of experience in professional earwax removal, Rab has built a reputation for his steady hands, expert knowledge, and friendly approach. His dedication ensures every client receives safe, effective treatment in a comfortable environment.`,
  },
  {
    name: "Rhegan",
    role: "Digital & Operations Support",
    avatar: "/img-left.jpeg",
    bio: `Rhegan plays a key role in running the business day to day, from managing our social media presence to helping clients connect with us online. He brings a modern digital perspective, making sure our family business is easy to reach and continues to grow in today’s world.`,
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="team"
      className="relative bg-linear-to-br from-[#F8FAFC] via-white to-[#EAF7F3] overflow-hidden py-20"
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header
          className="mx-auto mb-12 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-serif font-bold tracking-tight text-[#0d1525] sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4b5563] sm:text-lg">
            Get to know the people at the heart of our family business. Together,
            we blend years of hands-on experience with a fresh digital approach
            to deliver trusted, professional care.
          </p>
        </header>

        {/* Team Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((m, idx) => (
            <article
              key={m.name}
              className="flex flex-col justify-start rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_0_25px_rgba(67,170,139,0.25)] sm:p-8 min-h-[420px]"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={idx * 200}
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <img
                    src={m.avatar}
                    alt={`${m.name} headshot`}
                    className="h-full w-full rounded-full object-cover ring-4 ring-white"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#43AA8B]/30" />
                </div>
              </div>

              {/* Name + Role */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-semibold text-[#0d1525]">
                  {m.name}
                </h3>
                <p className="mt-1 text-[#43AA8B] font-medium">{m.role}</p>
              </div>

              {/* Bio */}
              <p className="mx-auto mt-4 max-w-prose text-sm leading-6 text-[#4b5563] sm:text-base">
                {m.bio}
              </p>
            </article>
          ))}
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
