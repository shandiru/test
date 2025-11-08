// src/App.jsx

import { Helmet } from "react-helmet";
import HeroMicroSuction from "../components/Service/Earwaxremovalpage/HeroMicroSuction";
import MicroSuctionInfo from "../components/Service/Earwaxremovalpage/MicroSuctionInfo";
import WaxBuildUpReasons from "../components/Service/Earwaxremovalpage/WaxBuildUpReasons";
import ProcessSection from "../components/Service/Earwaxremovalpage/ProcessSection";
import SafetySection from "../components/Service/Earwaxremovalpage/SafetySection";
import AppointmentExpectations from "../components/Service/Earwaxremovalpage/AppointmentExpectations";

function Earwax() {
  return (
    <>
      <Helmet>
        {/* 🔹 Basic SEO */}
        <title>Micro Suction Ear Wax Removal | Safe & Professional | EarWeGo</title>
        <meta
          name="description"
          content="Experience safe and professional ear wax removal using micro suction. Performed by qualified specialists at EarWeGo with quick relief and precision care."
        />
        <meta
          name="keywords"
          content="micro suction ear wax removal, ear cleaning, safe ear care, ear wax removal UK, EarWeGo"
        />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Canonical */}
        <link rel="canonical" href="https://earwego.co.uk/Earwaxremovalpage" />

        {/* 🔹 Open Graph (Facebook / WhatsApp) */}
        <meta property="og:title" content="EarWeGo | Micro Suction Ear Wax Removal" />
        <meta
          property="og:description"
          content="Professional ear wax removal using safe micro suction techniques. Gentle, quick, and effective care from EarWeGo specialists."
        />
        <meta property="og:image" content="https://earwego.co.uk/og-image.jpg" />
        <meta property="og:url" content="https://earwego.co.uk/Earwaxremovalpage" />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EarWeGo | Micro Suction Ear Wax Removal"
        />
        <meta
          name="twitter:description"
          content="Safe and gentle ear wax removal using micro suction by trained professionals. Quick, comfortable, and precise treatment."
        />
        <meta name="twitter:image" content="https://earwego.co.uk/og-image.jpg" />

        {/* 🔹 Additional Info */}
        <meta name="author" content="EarWeGo Clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* === Page Sections === */}
      <HeroMicroSuction />
      <MicroSuctionInfo />
      <WaxBuildUpReasons />
      <ProcessSection />
      <SafetySection />
      <AppointmentExpectations />
    </>
  );
}

export default Earwax;
