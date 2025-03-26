'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/rijlessen/HeroSection';
import StappenSection from '../../components/rijlessen/StappenSection';
import ReviewsSection from '../../components/rijlessen/ReviewsSection';
import ExamenLocatieSection from '../../components/rijlessen/ExamenLocatieSection';
import PrijzenHighlightSection from '../../components/rijlessen/PrijzenHighlightSection';
import FAQSection from '../../components/rijlessen/FAQSection';

// Autorijles pagina met dezelfde gradient als de homepagina
export default function AutoRijlesPage() {
  // Ref voor de gradient animatie
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
    // Direct controleren bij laden
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Duidelijk zichtbare maar subtiele geanimeerde gradient - identiek aan homepagina */}
      <div ref={gradientRef} className="fixed inset-0 bg-animate-gradient"></div>
      
      {/* Background decoration - identiek aan homepagina */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtielere radial gradients met rode accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-20 w-60 h-60 bg-indigo-800/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-20 w-60 h-60 bg-red-900/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>
      
      {/* Scroll naar boven knop */}
      <ScrollToTopButton />
      
      {/* Content secties */}
      <div className="relative z-10 text-white w-full">
        <HeroSection 
          titel="Auto rijlessen" 
          ondertitel="in Amsterdam"
          beschrijving={[
            "Behaal je rijbewijs voor handgeschakelde auto's op een ontspannen en efficiënte manier bij Amsterdamse Verkeersopleidingen. Met ons hoge slagingspercentage en persoonlijke aanpak ben je snel en veilig op weg."
          ]}
          rijbewijsType="Schakel"
          achtergrondAfbeelding=""
          isFullWidth={false}
        />
        
        <StappenSection 
          rijbewijsType="Auto" 
          isFullWidth={false}
        />
        
        <ExamenLocatieSection 
          rijbewijsType="Auto"
        />
        
        <PrijzenHighlightSection 
          rijbewijsType="Auto"
        />
        
        <ReviewsSection 
          rijbewijsType="Auto" 
          isFullWidth={false}
        />
        
        <FAQSection 
          rijbewijsType="Auto"
        />
      </div>
    </div>
  );
}

// Scroll naar boven knop component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
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
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </motion.button>
  );
}; 