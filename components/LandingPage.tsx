"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PriceListSection from "./PriceListSection";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ScrollToTop from "./ScrollToTop";

const LandingPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 via-white to-blue-50 text-gray-900 font-sans">
      <Navbar />
      <HeroSection />
      <PriceListSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © 2025 <span className="text-white font-semibold">Kindy Padel</span>.
        All rights reserved.
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
