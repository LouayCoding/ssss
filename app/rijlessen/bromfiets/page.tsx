'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/rijlessen/HeroSection';
import StappenSection from '../../components/rijlessen/StappenSection';
import ExamenLocatieSection from '../../components/rijlessen/ExamenLocatieSection';
import PrijzenHighlightSection from '../../components/rijlessen/PrijzenHighlightSection';
import FAQSection from '../../components/rijlessen/FAQSection';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BromfietsRijlesPage() {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  // Effect voor gradient animatie
  useEffect(() => {
    const handleScroll = () => {
      if (!gradientRef.current) return;
      
      const scrollY = window.scrollY;
      const scrollMax = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(20, (scrollY / scrollMax) * 20);
      
      gradientRef.current.style.backgroundPosition = `${scrollPercentage}% 50%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Achtergrond gradient */}
      <div ref={gradientRef} className="fixed inset-0 bg-animate-gradient"></div>
      
      {/* Background decoraties - Verplaatst van HeroSection naar paginaniveau */}
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
      <div className="relative z-10 w-full text-white">
        {/* Hero Sectie */}
        <HeroSection
          titel="bromfiets rijlessen"
          ondertitel="haal snel je am rijbewijs"
          beschrijving={[
            "Leer veilig en zelfverzekerd op een bromfiets rijden met onze professionele lessen.",
            "Wij leren je alle vaardigheden die je nodig hebt om veilig door het verkeer te navigeren."
          ]}
          rijbewijsType="Bromfiets"
          isFullWidth={false}
          USPs={[
            { tekst: "Al vanaf 16 jaar", icon: <span className="font-bold">16+</span> },
            { tekst: "Praktische lessen", icon: <span className="font-bold">👌</span> },
            { tekst: "Kleine groepen", icon: <span className="font-bold">👥</span> },
            { tekst: "Hoge slagingskans", icon: <span className="font-bold">✅</span> }
          ]}
        />

        {/* Stappen Sectie */}
        <StappenSection
          rijbewijsType="Bromfiets"
          isFullWidth={false}
        />

        {/* Examen Locatie Sectie */}
        <ExamenLocatieSection
          rijbewijsType="Bromfiets"
        />

        {/* Prijzen Highlight Sectie */}
        <PrijzenHighlightSection rijbewijsType="Bromfiets" />

        {/* FAQ Sectie */}
        <FAQSection rijbewijsType="Bromfiets" />

        {/* Scroll-naar-top knop */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

// Scroll-naar-top knop component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all ${
        isVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-label="Scroll naar boven"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </motion.button>
  );
}; 