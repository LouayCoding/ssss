'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/rijlessen/HeroSection';
import StappenSection from '../../components/rijlessen/StappenSection';
import ReviewsSection from '../../components/rijlessen/ReviewsSection';
import ExamenLocatieSection from '../../components/rijlessen/ExamenLocatieSection';
import PrijzenHighlightSection from '../../components/rijlessen/PrijzenHighlightSection';
import FAQSection from '../../components/rijlessen/FAQSection';

// Aanhangwagen rijles pagina
export default function AanhangwagenRijlesPage() {
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
          titel="Aanhangwagen rijbewijs" 
          ondertitel="in één dag"
          beschrijving={[
            "Behaal in 1 dag je BE rijbewijs bij Amsterdamse Verkeersopleidingen. 's Ochtends starten met de rijopleiding en dezelfde dag examen afleggen bij het CBR voor jouw rijbewijs E achter B."
          ]}
          rijbewijsType="Aanhangwagen"
          achtergrondAfbeelding=""
          isFullWidth={false}
          USPs={[
            { tekst: "BE rijbewijs in 1 dag", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Direct examen doen", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M3 12C3 14.5 4 16.5 6 18M12 3C8.5 3 5.5 5 4 8.5M12 3C15.5 3 18.5 5 20 8.5M12 3V6M20 8.5C21 10 21.5 11 21.5 12M20 8.5C20 15 15 16.5 11 17M6 18C7.5 19 9.5 20 12 20C14 20 15.5 19.5 16.5 19M6 18L3 21M16.5 19L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Complete voorbereiding", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 14L11 16L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Rijbewijs B vereist", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8H8M16 8C18.2091 8 20 9.79086 20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12C4 9.79086 5.79086 8 8 8M16 8L14 4M8 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> }
          ]}
        />
        
        <StappenSection 
          rijbewijsType="Aanhangwagen" 
          isFullWidth={false}
        />
        
        <ExamenLocatieSection 
          rijbewijsType="Aanhangwagen"
        />
        
        <PrijzenHighlightSection 
          rijbewijsType="Aanhangwagen"
        />
        
        <ReviewsSection 
          rijbewijsType="Aanhangwagen" 
          isFullWidth={false}
        />
        
        <FAQSection 
          rijbewijsType="Aanhangwagen"
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