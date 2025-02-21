import React from "react";
import "../sass/main.scss";
import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { SixFeatures } from "../components/SixFeatures";
import { CTA } from "../components/CTA";
import { FourFeatures } from "../components/FourFeatures";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { Faq } from "../components/Faq";
import { CTA2 } from "../components/CTA2";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <SixFeatures />
      <CTA />
      <FourFeatures />
      <Testimonials />
      <Pricing />
      <Faq />
      <CTA2 />
      <Footer />
    </div>
  );
}

export default Home;
