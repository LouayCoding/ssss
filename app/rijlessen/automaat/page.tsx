'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/rijlessen/HeroSection';
import StappenSection from '../../components/rijlessen/StappenSection';
import ReviewsSection from '../../components/rijlessen/ReviewsSection';
import ExamenLocatieSection from '../../components/rijlessen/ExamenLocatieSection';
import PrijzenHighlightSection from '../../components/rijlessen/PrijzenHighlightSection';
import FAQSection from '../../components/rijlessen/FAQSection';

// Automaat rijles pagina
export default function AutomaatRijlesPage() {
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
          titel="Automaat rijlessen" 
          ondertitel="in Amsterdam"
          beschrijving={[
            "Behaal je rijbewijs voor automaat op een ontspannen en efficiënte manier bij Amsterdamse Verkeersopleidingen. Perfect voor in de stad en ideaal als je moeite hebt met schakelen."
          ]}
          rijbewijsType="Automaat"
          achtergrondAfbeelding=""
          isFullWidth={false}
          USPs={[
            { tekst: "Lager stresspunt", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.99995 8 8.5 11 8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8.5 15C8.5 15 9.23909 16 10.9999 16C13.9999 16 14.5 13 14.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 17V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M18.5 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14.5 7.5L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 19L9.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 19L14.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9.5 7.5L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> } ,
            { tekst: "Geen schakelen & koppeling", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/><path d="M5 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/></svg> },
            { tekst: "Vaak sneller slagen", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12.5L8.5 18L21 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Gemak in druk verkeer", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8V6C3 4.34315 4.34315 3 6 3H8M8 21H6C4.34315 21 3 19.6569 3 18V16M21 16V18C21 19.6569 19.6569 21 18 21H16M16 3H18C19.6569 3 21 4.34315 21 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17V12Z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> }
          ]}
        />
        
        <StappenSection 
          rijbewijsType="Automaat" 
          isFullWidth={false}
        />
        
        <ExamenLocatieSection 
          rijbewijsType="Automaat"
        />
        
        <PrijzenHighlightSection 
          rijbewijsType="Automaat"
        />
        
        <ReviewsSection 
          rijbewijsType="Automaat" 
          isFullWidth={false}
        />
        
        <FAQSection 
          rijbewijsType="Automaat"
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