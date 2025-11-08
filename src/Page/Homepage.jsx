// App.jsx
// src/App.jsx
import WhyChoose from "../components/Homepage/WhyChoose";

import Hero from "../components/Homepage/Hero";
import Pricing from "../components/Homepage/Pricing";
import Reviews from "../components/Homepage/Reviews";

import FAQSection from "../components/Homepage/FAQSection";
import ContactSection from "../components/Homepage/ContactSection";
import TeamSection from "../components/Homepage/TeamSection";
import FindUs from "../components/Homepage/FindUs";
function Home() {
  return (
    <>

      <Hero />
      <WhyChoose />
      <Pricing />
      <TeamSection />
      <Reviews />
      <FAQSection />
      <ContactSection />
      <FindUs />
    
    </>
  );
}

export default Home;
