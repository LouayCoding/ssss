'use client';
import { useEffect, useRef } from 'react';
import Hero from "./components/home/Hero";
import USPSection from "./components/home/USPSection";
import ProcessSection from "./components/home/ProcessSection";
import PackagesSection from "./components/home/PackagesSection";
import FAQSection from "./components/home/FAQSection";
import ReviewsSection from "./components/home/ReviewsSection";

export default function Home() {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!gradientRef.current) return;
      
      const scrollY = window.scrollY;
      const scrollMax = document.body.scrollHeight - window.innerHeight;
      // Bereken een percentage van 0-20 gebaseerd op scroll positie
      const scrollPercentage = Math.min(20, (scrollY / scrollMax) * 20);
      
      // Pas de gradient positie soepel aan gebaseerd op scroll
      gradientRef.current.style.backgroundPosition = `${scrollPercentage}% 50%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Duidelijk zichtbare maar subtiele geanimeerde gradient */}
      <div ref={gradientRef} className="fixed inset-0 bg-animate-gradient"></div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtielere radial gradients met rode accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-20 w-60 h-60 bg-indigo-800/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-20 w-60 h-60 bg-red-900/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white w-full">
        <Hero />
        <USPSection />
        <ProcessSection />
        <PackagesSection />
        <FAQSection />
        <ReviewsSection />
        {/* Andere secties worden later toegevoegd */}
      </div>
    </div>
  );
}
