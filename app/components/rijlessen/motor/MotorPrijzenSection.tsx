'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const MotorPrijzenSection: React.FC = () => {
  // Prijzen met examen inbegrepen
  const inclusivePackages = [
    { hours: 13, price: "€ 1.275,-" },
    { hours: 17, price: "€ 1.510,-" },
    { hours: 21, price: "€ 1.750,-" },
    { hours: 25, price: "€ 1.990,-" },
    { hours: 29, price: "€ 2.230,-" },
    { hours: 33, price: "€ 2.475,-" }
  ];

  // Algemene tarieven
  const algemeneTarieven = [
    { description: "Intake van 90 minuten", price: "€ 90,-" },
    { description: "Rijles van 60 minuten", price: "€ 60,-" },
    { description: "6 rittenkaart", price: "€ 350,-" },
    { description: "Examen voertuigbeheersing (AVB)", price: "€ 199,-" },
    { description: "Examen verkeersdeelname (AVD)", price: "€ 300,-" },
    { description: "Opfriscursus", price: "€ 150,-" }
  ];

  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden" id="prijzen">
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
            <h3 className="text-lg text-blue-400 font-semibold mb-2">Onze tarieven</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Motorrijles Pakketten
            </h2>
            <p className="text-blue-100/80 max-w-2xl">
              Bij Amsterdamse Verkeersopleidingen bieden we verschillende motorrijles pakketten aan, afgestemd op jouw niveau en wensen. Alle pakketten zijn inclusief examens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Linker kolom - Pakketten inclusief examen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                  <CheckIcon className="h-4 w-4 text-purple-400" />
                </span>
                Inclusief EXAMEN
              </h3>
              
              <p className="text-blue-100/80 mb-6">
                <span className="font-semibold text-white">INSCHRIJFGELD: GRATIS</span>
              </p>
              
              <div className="space-y-4 mb-8">
                {inclusivePackages.map((pkg, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <div className="text-blue-100/90">
                      Lespakket van {pkg.hours} uur + AVB + AVD
                    </div>
                    <div className="font-semibold text-white">{pkg.price}</div>
                  </div>
                ))}
              </div>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium shadow-lg transition-all duration-300"
                >
                  <span>Vraag jouw pakket aan!</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Rechter kolom - Algemene tarieven */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
                Algemene tarieven Motorrijlessen
              </h3>
              
              <p className="text-blue-100/80 mb-6">
                <span className="font-semibold text-white">INSCHRIJFGELD: GRATIS</span>
              </p>
              
              <div className="space-y-4 mb-8">
                {algemeneTarieven.map((tarief, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <div className="text-blue-100/90">
                      {tarief.description}
                    </div>
                    <div className="font-semibold text-white">{tarief.price}</div>
                  </div>
                ))}
              </div>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium transition-all duration-300"
                >
                  <span>Vraag jouw pakket aan!</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-blue-100/80 mb-6">
              Twijfel je welk pakket het beste bij jou past? Neem contact met ons op voor persoonlijk advies.
            </p>
            <Link href="/gratis-proefles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300"
              >
                Intake aanvragen
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotorPrijzenSection; 