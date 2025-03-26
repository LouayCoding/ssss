'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ExamenLocatieSectionProps {
  rijbewijsType?: string;
}

const ExamenLocatieSection: React.FC<ExamenLocatieSectionProps> = ({
  rijbewijsType = "Auto"
}) => {
  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left mb-12 md:mb-16"
          >
            <h3 className="text-lg text-blue-400 font-semibold mb-2">CBR Examenlocatie</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Waar doe ik examen?
            </h2>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left column - Text content */}
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-blue-100/80"
              >
                De rijlessen vinden plaats in het examengebied van het CBR in Amsterdam. Hierdoor bereiden we je goed voor op het rijexamen: je bent dan immers al bekend met de examen-routes, waardoor je slagingskans aanzienlijk toeneemt.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-blue-100/80"
              >
                Naast onze reguliere autorijlessen die gericht zijn op het rij-examen bij het CBR, kun je bij Amsterdamse Verkeersopleidingen ook terecht voor een spoedcursus of een kortlopende opfriscursus. De opfriscursus is bedoeld voor wie al een rijbewijs heeft, maar nog eens onder begeleiding wil wennen aan de verkeersdrukte in Amsterdam. Of voor wie al een rijbewijs heeft maar lange tijd niet heeft gereden. Met onze opfriscursus zit je weer zelfstandig en met veel zelfvertrouwen achter het stuur.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-blue-100/80"
              >
                Ben je nog geen 18 maar wil je wel al beginnen met autorijlessen, kijk dan eens naar ons 2toDrive programma. Hiermee is het mogelijk om al met 16 jaar te starten met de theorielessen, met 16,5 met de autorijlessen zodat je op je 17e verjaardag examen kan af te leggen bij het CBR.
              </motion.p>
            </div>
            
            {/* Right column - Features */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Onze voordelen</h3>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Examengebied training</h4>
                    <p className="text-blue-100/80 mt-1">Je rijdt tijdens de lessen al in het examengebied, waardoor je veel beter bent voorbereid op je examen.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-700 flex items-center justify-center">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Specialistische cursussen</h4>
                    <p className="text-blue-100/80 mt-1">Van spoedcursussen tot opfriscursussen, we hebben programma's voor ieders behoefte.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-700 flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">2toDrive</h4>
                    <p className="text-blue-100/80 mt-1">Begin al op 16-jarige leeftijd met je rijopleiding zodat je zodra je 17 wordt, examen kunt doen.</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all duration-300"
                  >
                    Meer informatie
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExamenLocatieSection; 