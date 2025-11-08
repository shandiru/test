import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollWithOffset = (el) => {
    if (el) {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -100;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    }
  };

  const enhancedScroll = (el) => {
    if (el) {
      setTimeout(() => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      }, 100);
    }
  };

  // mark which ones are real routes vs in-page sections
  const links = [
    { label: "Home", href: "/", hash: false },
    { label: "Why Us", href: "/#whyus", hash: true },
    { label: "Pricing", href: "/#pricing", hash: true },
    { label: "Team", href: "/#team", hash: true },
    { label: "Reviews", href: "/#reviews", hash: true },
    { label: "FAQ", href: "/#faq", hash: true },
    { label: "Symptoms", href: "/symptoms", hash: false },
    { label: "Micro suction", href: "/Earwaxremovalpage", hash: false },
    { label: "Contact", href: "/#contact", hash: true },
  ];

  const renderLink = (link, closeMenu = false) => {
    const common =
      "text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base whitespace-nowrap";
    if (link.hash) {
      return (
        <HashLink
          key={link.label}
          to={link.href}
          scroll={enhancedScroll}
          className={common}
          onClick={closeMenu ? () => setOpen(false) : undefined}
        >
          {link.label}
        </HashLink>
      );
    }
    return (
      <Link
        key={link.label}
        to={link.href}
        className={common}
        onClick={closeMenu ? () => setOpen(false) : undefined}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo */}
          <div className="flex items-center">
            <img
              src="/LOGO2-removebg-preview.png"
              alt="EarWeGo Logo"
              className="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Desktop Navigation (≥1024px) */}
          <nav className="hidden lg:flex space-x-8">
            {links.map((link) => renderLink(link))}
          </nav>

          {/* Call Button (Desktop) */}
          <a
            href="tel:+448081371961"
            className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold shadow h-10 px-5 bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile / Tablet Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-800"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fadeIn overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => renderLink(link, true))}
            </nav>

            <a
              href="tel:+448081371961"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold h-10 px-4 bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
