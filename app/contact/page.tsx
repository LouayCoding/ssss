'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

// Components
import ContactHeader from '../components/contact/ContactHeader';
import ContactTabs from '../components/contact/ContactTabs';
import ContactInfoCard from '../components/contact/ContactInfoCard';
import ProeflesCTA from '../components/contact/ProeflesCTA';
import WhyChooseUs from '../components/contact/WhyChooseUs';
import OpeningHours from '../components/contact/OpeningHours';
import RouteBeschrijving from '../components/contact/RouteBeschrijving';

const ContactPage = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('contact');
  const gradientRef = useRef<HTMLDivElement>(null);
  
  // Check URL parameters for active tab
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['contact', 'hours', 'route'].includes(tab)) {
      setActiveSection(tab);
    }
  }, [searchParams]);
  
  // Achtergrond animatie, exact zoals op de homepage
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
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Duidelijk zichtbare maar subtiele geanimeerde gradient - precies zoals homepage */}
      <div ref={gradientRef} className="fixed inset-0 bg-animate-gradient"></div>
      
      {/* Background decoration - zonder blur effecten */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Pattern alleen behouden, geen wazige elementen */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>
      
      {/* Content - verkleinde padding boven, vooral op mobiel */}
      <div className="relative z-10 text-white w-full pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header sectie */}
          <ContactHeader />
          
          {/* Tabs navigatie */}
          <ContactTabs activeSection={activeSection} setActiveSection={setActiveSection} />
          
          {/* Content secties op basis van actieve tab */}
          <div className="max-w-7xl mx-auto">
            {activeSection === 'contact' && (
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
                {/* Linker kolom: ContactInfoCard met CompanyInfo */}
                <div className="xl:col-span-7">
                  <ContactInfoCard />
                </div>
                
                {/* Rechter kolom: CTA en statistieken */}
                <div className="xl:col-span-5 space-y-6 lg:space-y-8">
                  <ProeflesCTA />
                  <WhyChooseUs />
                </div>
              </div>
            )}
            
            {activeSection === 'hours' && (
              <div className="max-w-3xl mx-auto">
                <OpeningHours />
              </div>
            )}
            
            {activeSection === 'route' && (
              <div className="max-w-3xl mx-auto">
                <RouteBeschrijving />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 