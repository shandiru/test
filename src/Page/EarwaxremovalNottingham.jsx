// src/App.jsx

import { Helmet } from "react-helmet";
import EarWaxHero from "../components/Service/EarwaxremovalNottingham/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalNottingham/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalNottingham/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalNottingham/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalNottingham/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalNottingham/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalNottingham/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalNottingham/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalNottingham/FinalCTASection";

function EarwaxremovalNottingham() {
  return (
    <>
      <Helmet>
        {/* 🔹 Basic SEO */}
        <title>Ear Wax Removal Nottingham | Microsuction Ear Cleaning | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Nottingham. Safe, gentle microsuction by qualified specialists. Book your home visit with EarWeGo today."
        />
        <meta
          name="keywords"
          content="ear wax removal Nottingham, ear cleaning, microsuction, home visit ear care"
        />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Canonical */}
        <link rel="canonical" href="https://earwego.co.uk/earwaxremovalpage" />

        {/* 🔹 Open Graph (Facebook / WhatsApp) */}
        <meta property="og:title" content="EarWeGo | Ear Wax Removal Nottingham" />
        <meta
          property="og:description"
          content="Safe, gentle, and professional ear wax removal in Nottingham. Microsuction by experts — book your appointment today!"
        />
        <meta property="og:image" content="https://earwego.co.uk/og-image.jpg" />
        <meta property="og:url" content="https://earwego.co.uk/earwaxremovalpage" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarWeGo | Professional Ear Wax Removal" />
        <meta
          name="twitter:description"
          content="Safe and professional microsuction ear cleaning in Nottingham. Home visits available — book today!"
        />
        <meta name="twitter:image" content="https://earwego.co.uk/og-image.jpg" />

        {/* 🔹 Favicon / Brand Info */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* === Page Sections === */}
      <EarWaxHero />
      <ServingAreasSection />
      <WhyChooseSection />
      <MicrosuctionComparison />
      <AppointmentSteps />
      <PricingSection />
      <PatientCareSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

export default EarwaxremovalNottingham;
