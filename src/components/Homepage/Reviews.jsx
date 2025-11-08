"use client";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ICONS_IMG = "icons.png";
const PHONE = "0808 137 1961";

const REVIEWS = [
  {
    name: "Marina Gimeno",
    role: "Verified Customer",
    text:
      '“After 8 hours in A&E to end up being prescribed antibiotic drops and no solution to not being able to hear at all on my right ear, I called Earwego and I was given an appointment for the same day. It was great that they could provide home service as the pressure in my ear was making me dizzy and I was advise not to drive. Within seconds, Rab fixed it all. Pressure was gone, I could hear perfectly again and no need for antibiotics at all! I would 100% recommend it! Thank you so much, Rab.”',
  },
  {
    name: "William Swann",
    role: "Verified Customer",
    text:
      "“After a brief phone call Rab had me booked in for treatment the same day. A great service brought to your door. Professional and punctual, highly recommend!”",
  },
  {
    name: "Debbie Dunne",
    role: "Verified Customer",
    text:
      "“I've used Earwego 3 times over the past years & the gentleman always comes out the same day, is very professional & manages to clear my ears. I'm very pleased with the service 😊”",
  },
  {
    name: "David Roome",
    role: "Verified Customer",
    text:
      "“Brilliant service. Unblocked my left ear and was completely painless. Rab is a very honest and polite bloke. I would highly recommend”",
  },
  {
    name: "Nicola Woods",
    role: "Verified Customer",
    text:
      "“Excellent service! Rab was highly professional, polite and efficient. All done in 15 minutes. Hearing back - what a blessing! Would highly recommend and definitely use again. Many thanks Rab.”",
  },
  {
    name: "S Turner",
    role: "Verified Customer",
    text:
      "“Contacted Rab after GP confirmed wax in both ears. Rab arrived promptly, really nice guy. All done in 10 minutes and wax removed. No hesitation in recommending Rab. Steve”",
  },
  {
    name: "Ainmaker Gimmick",
    role: "Verified Customer",
    text:
      "“Booked appointment same day, came and did the work efficiently and quickly. Well priced and professional. If you call and no one picks up, try their email address, they are very good at replying. If their website doesn't open on Chrome (which it doesn't for me), try Microsoft Edge.”",
  },
];

function Star({ className = "w-5 h-5" }) {
  return (
    <svg
      className={`${className} fill-[#FFD700] text-[#FFD700]`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 text-[#43AA8B] flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function ReviewCard({ review, idx }) {
  return (
    <div
      className="flex flex-col justify-between text-[#334155] rounded-xl py-6 flex-none w-80 md:w-96 bg-white shadow-md hover:shadow-lg transition-all duration-300 snap-start border border-slate-100"
      data-aos="fade-up"
      data-aos-delay={idx * 150}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <QuoteIcon />
          <div className="flex ml-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4" />
            ))}
          </div>
        </div>

        <p className="text-[#334155] mb-6 leading-relaxed text-sm line-clamp-6 flex-grow">
          {review.text}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-200">
          <p className="font-semibold text-[#0D1525] text-base leading-tight">{review.name}</p>
          <p className="text-sm text-[#43AA8B] font-medium leading-tight">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const scrollByWidth = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth, 420);
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="relative py-20 bg-linear-to-br from-[#F8FAFC] via-white to-[#EAF7F3] overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img src={ICONS_IMG} alt="Decor" className="absolute top-[8%] left-[10%] w-16 sm:w-20 animate-float-slow" />
        <img src={ICONS_IMG} alt="Decor" className="absolute top-[35%] left-[35%] w-20 sm:w-24 animate-float-fast" />
        <img src={ICONS_IMG} alt="Decor" className="absolute bottom-[25%] right-[25%] w-16 sm:w-20 animate-float-medium" />
      </div>

      {/* linear Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#9C79B3]/20 to-[#43AA8B]/20 blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-[#334155] mb-6">
            Real reviews from real customers across the Midlands
          </p>

          <div className="flex justify-center items-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <span className="ml-3 text-lg font-semibold text-[#0D1525]">5.0 out of 5</span>
            <span className="ml-2 text-[#334155]">• 7 reviews</span>
          </div>
        </div>

        {/* Scroller - All reviews now show here */}
        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          {/* Left Arrow */}
          <button
            onClick={() => scrollByWidth(-1)}
            className="hidden md:flex absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 hover:shadow-md"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            className="flex overflow-x-auto gap-6 pb-6 px-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {REVIEWS.map((r, idx) => (
              <ReviewCard key={idx} review={r} idx={idx} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByWidth(1)}
            className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 hover:shadow-md"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-linear-to-r from-[#43AA8B] to-[#9C79B3] rounded-xl p-8 max-w-4xl mx-auto text-white shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-4">Join Our Happy Customers</h3>
            <p className="text-lg text-white/80 mb-6">
              Experience professional ear wax removal with same-day appointments and home visits
              across the Midlands.
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-block bg-white text-[#0D1525] font-semibold px-8 py-3 rounded-lg hover:bg-[#F8FAFC] transition-colors duration-200"
            >
              Call Now: {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4.5s ease-in-out infinite; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .line-clamp-6 { display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
}
