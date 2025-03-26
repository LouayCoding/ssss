'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../../components/rijlessen/HeroSection';
import StappenSection from '../../components/rijlessen/StappenSection';
import ReviewsSection from '../../components/rijlessen/ReviewsSection';
import ExamenLocatieSection from '../../components/rijlessen/ExamenLocatieSection';
import PrijzenHighlightSection from '../../components/rijlessen/PrijzenHighlightSection';
import FAQSection from '../../components/rijlessen/FAQSection';

// Motor rijles pagina
export default function MotorRijlesPage() {
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
          titel="Motorrijlessen" 
          ondertitel="in Amsterdam"
          beschrijving={[
            "Behaal je motorrijbewijs op een veilige en efficiënte manier bij Amsterdamse Verkeersopleidingen. Onze ervaren instructeurs begeleiden je naar een vrijheid op twee wielen."
          ]}
          rijbewijsType="Motor"
          achtergrondAfbeelding=""
          isFullWidth={false}
          USPs={[
            { tekst: "Ervaren motorinstructeurs", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Voertuigbeheersing (AVB)", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H9M15 5V3C15 2.44772 14.5523 2 14 2H10C9.44772 2 9 2.44772 9 3V5M15 5H9M8 12H16M8 16H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            { tekst: "Verkeersdeelname (AVD)", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 8H13C14.1046 8 15 8.89543 15 10V14C15 15.1046 14.1046 16 13 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { tekst: "Verschillende rijbewijzen", icon: <svg className="h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M12 15V3M12 3L16 7M12 3L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> }
          ]}
        />
        
        <StappenSection 
          rijbewijsType="Motor" 
          isFullWidth={false}
        />
        
        <ExamenLocatieSection 
          rijbewijsType="Motor"
        />
        
        <PrijzenHighlightSection 
          rijbewijsType="Motor"
        />
        
        <ReviewsSection 
          rijbewijsType="Motor" 
          isFullWidth={false}
        />
        
        <FAQSection 
          rijbewijsType="Motor"
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