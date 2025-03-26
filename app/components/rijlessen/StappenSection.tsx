'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

interface StapInfo {
  id: number;
  titel: string;
  beschrijving: string;
  icon: string;
  details: string[];
  kleur: string;
}

interface StappenSectionProps {
  rijbewijsType?: string;
  isFullWidth?: boolean;
}

const StappenSection: React.FC<StappenSectionProps> = ({ 
  rijbewijsType = "auto",
  isFullWidth = false 
}) => {
  const [actieveStap, setActieveStap] = useState(0);

  // Herbruikbare stappen voor alle rijbewijstypen
  const stappen: StapInfo[] = [
    {
      id: 1,
      titel: "(Proef)les",
      beschrijving: "We stellen een persoonlijk leertraject voor je op",
      icon: "🚗",
      details: [
        "Op basis van een proefles stellen we een persoonlijk leertraject voor je op.",
        "Je instructeur maakt een inschatting van je mogelijkheden.",
        "Het persoonlijke lestraject geeft je de beste kans om in 1 keer te slagen.",
        "Je krijgt een goed beeld van de kosten die je kunt verwachten."
      ],
      kleur: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      titel: "Machtigen",
      beschrijving: "Machtigen bij het CBR voor je examen",
      icon: "🔑",
      details: [
        "Gaat het goed tijdens de rijlessen en ben je klaar voor het examen? Dan gaan we het examen aanvragen!",
        "Voordat wij het rijexamen of de tussentijdse toets voor je mogen aanvragen, moet je de rijschool eerst machtigen.",
        "Om ons te machtigen heb je je DigiD nodig. Je kunt ons machtigen op mijn.cbr.nl.",
        "Ons opleidernummer is 7525K9."
      ],
      kleur: "from-indigo-500 to-indigo-700"
    },
    {
      id: 3,
      titel: "Examens",
      beschrijving: "Tussentijdse toets en praktijkexamen",
      icon: "🎓",
      details: [
        "Alvorens naar examen te gaan doe je eerst een tussentijdse toets bij het CBR.",
        "Met een Tussentijdse Toets nemen jouw slagingskansen alleen maar toe en krijg je een goed beeld van je niveau.",
        "We bieden onze leerlingen een uniek proefexamen aan met een andere instructeur.",
        "Zo slaag jij in 1x voor je rijbewijs!"
      ],
      kleur: "from-red-500 to-red-700"
    }
  ];

  // Animatie varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden">
      {/* Verwijder de achtergrond decoratie en gebruik de pagina gradient */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              <span className="text-blue-400">
                In 3 stappen
              </span>{" "}
              naar je rijbewijs
            </h2>
            <p className="text-lg text-blue-100/80 max-w-2xl">
              Wij begeleiden je stappengewijs naar het behalen van je {rijbewijsType.charAt(0).toUpperCase() + rijbewijsType.slice(1)}-rijbewijs met een hoog slagingspercentage.
            </p>
          </motion.div>

          {/* Desktop weergave (vanaf md:) */}
          <div className="hidden md:block w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-6 lg:gap-8 w-full"
            >
              {stappen.map((stap, index) => (
                <motion.div
                  key={stap.id}
                  variants={itemVariants}
                  className={`p-1 rounded-2xl h-full ${actieveStap === index ? 'ring-2 ring-offset-4 ring-offset-gray-900 ring-blue-500/50' : ''}`}
                >
                  {/* Background card */}
                  <div className="bg-gray-900/60 backdrop-blur border border-white/10 rounded-2xl overflow-hidden h-full relative">
                    {/* Subtle card hover effect */}
                    <div className="absolute inset-0 opacity-5 bg-blue-500 pointer-events-none"></div>
                    
                    <div className="p-6 md:p-8">
                      {/* Card Header */}
                      <div className="flex items-start mb-6">
                        <div className={`w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl shadow-lg bg-${stap.kleur.split(' ')[1]}`}>
                          <span>{stap.icon}</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-white">Stap {stap.id}</h3>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">{stap.titel}</p>
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="space-y-4">
                        {stap.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                              <CheckIcon className="h-3 w-3 text-blue-400" />
                            </div>
                            <p className="ml-3 text-blue-100/90">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobiele weergave (tot md:) */}
          <div className="md:hidden w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 w-full"
            >
              {stappen.map((stap, index) => (
                <motion.div
                  key={stap.id}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden w-full"
                >
                  <div 
                    className={`p-4 bg-gray-900/80 border border-white/10 rounded-xl ${
                      actieveStap === index ? 'bg-gray-800/80 border-blue-500/30' : ''
                    }`}
                    onClick={() => setActieveStap(index)}
                  >
                    {/* Header met Stap nummer en titel */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg text-white flex items-center justify-center text-lg shadow-md bg-${stap.kleur.split(' ')[1]}`}>
                          <span>{stap.icon}</span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-300">Stap {stap.id}</p>
                          <h3 className="text-lg font-bold text-white">{stap.titel}</h3>
                        </div>
                      </div>
                      
                      {/* Dropdown indicator */}
                      <div 
                        className={`w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-300 
                          ${actieveStap === index ? 'rotate-180 bg-blue-500/20' : 'bg-white/10'}`}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Expandable details */}
                    {actieveStap === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10 space-y-3"
                      >
                        {stap.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                              <CheckIcon className="h-2.5 w-2.5 text-blue-400" />
                            </div>
                            <p className="ml-3 text-sm text-blue-100/80">{detail}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StappenSection; 