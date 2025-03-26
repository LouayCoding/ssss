'use client';

import { motion } from 'framer-motion';

interface ContactTabsProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ContactTabs = ({ activeSection, setActiveSection }: ContactTabsProps) => {
  const tabs = [
    { id: 'contact', label: 'Contactgegevens' },
    { id: 'hours', label: 'Openingstijden' },
    { id: 'route', label: 'Routebeschrijving' }
  ];

  return (
    <div className="mb-8 md:mb-12 mx-auto max-w-md">
      {/* Verticale stapel op mobiel, horizontale rij op desktop */}
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`
              relative px-4 py-3 rounded-lg text-sm md:text-base 
              transition-all duration-300
              ${activeSection === tab.id 
                ? 'bg-blue-600 text-white font-medium' 
                : 'hover:bg-black/10 text-white/80 hover:text-white border border-white/10'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactTabs; 