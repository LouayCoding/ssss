'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PrijzenHighlightSectionProps {
  rijbewijsType?: string;
}

const PrijzenHighlightSection: React.FC<PrijzenHighlightSectionProps> = ({
  rijbewijsType = "Auto"
}) => {
  const [activeTab, setActiveTab] = useState<'starter' | 'populair' | 'compleet'>('populair');

  // Basispakketten voor schakel rijlessen
  const schakelPakketten = {
    starter: {
      naam: "Starter",
      prijs: "€1.250",
      lessen: "20 lessen",
      features: [
        "Gratis proefles",
        "20 rijlessen van 60 minuten",
        "Theoriecursus online",
        "1 Praktijkexamen CBR",
      ],
      color: "from-blue-500 to-blue-700"
    },
    populair: {
      naam: "Populair",
      prijs: "€1.850",
      lessen: "30 lessen",
      features: [
        "Gratis proefles",
        "30 rijlessen van 60 minuten",
        "Theoriecursus online",
        "Tussentijdse toets",
        "1 Praktijkexamen CBR",
        "Garantiepakket bij zakken"
      ],
      color: "from-red-500 to-red-700"
    },
    compleet: {
      naam: "Compleet",
      prijs: "€2.250",
      lessen: "40 lessen",
      features: [
        "Gratis proefles",
        "40 rijlessen van 60 minuten",
        "Theoriecursus online",
        "Theorie-examen inbegrepen",
        "Tussentijdse toets",
        "1 Praktijkexamen CBR",
        "Garantiepakket bij zakken"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  };

  // Pakketten voor automaat rijlessen (iets goedkoper en minder lessen)
  const automaatPakketten = {
    starter: {
      naam: "Starter",
      prijs: "€1.150",
      lessen: "18 lessen",
      features: [
        "Gratis proefles",
        "18 rijlessen van 60 minuten",
        "Theoriecursus online",
        "1 Praktijkexamen CBR"
      ],
      color: "from-green-500 to-green-700"
    },
    populair: {
      naam: "Populair",
      prijs: "€1.650",
      lessen: "26 lessen",
      features: [
        "Gratis proefles",
        "26 rijlessen van 60 minuten",
        "Theoriecursus online",
        "Tussentijdse toets",
        "1 Praktijkexamen CBR",
        "Garantiepakket bij zakken"
      ],
      color: "from-red-500 to-red-700"
    },
    compleet: {
      naam: "Compleet",
      prijs: "€1.950",
      lessen: "35 lessen",
      features: [
        "Gratis proefles",
        "35 rijlessen van 60 minuten",
        "Theoriecursus online",
        "Theorie-examen inbegrepen",
        "Tussentijdse toets",
        "1 Praktijkexamen CBR",
        "Garantiepakket bij zakken"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  };

  // Pakketten voor motorrijlessen
  const motorPakketten = {
    starter: {
      naam: "Basis",
      prijs: "€1.275",
      lessen: "13 uur",
      features: [
        "Gratis inschrijving",
        "13 uur motorrijles",
        "Examen voertuigbeheersing (AVB)",
        "Examen verkeersdeelname (AVD)"
      ],
      color: "from-purple-500 to-purple-700"
    },
    populair: {
      naam: "Populair",
      prijs: "€1.750",
      lessen: "21 uur",
      features: [
        "Gratis inschrijving",
        "21 uur motorrijles",
        "Examen voertuigbeheersing (AVB)",
        "Examen verkeersdeelname (AVD)",
        "Persoonlijke begeleiding"
      ],
      color: "from-red-500 to-red-700"
    },
    compleet: {
      naam: "Uitgebreid",
      prijs: "€2.230",
      lessen: "29 uur",
      features: [
        "Gratis inschrijving",
        "29 uur motorrijles",
        "Examen voertuigbeheersing (AVB)",
        "Examen verkeersdeelname (AVD)",
        "Extra oefentijd op het terrein",
        "Persoonlijke begeleiding"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  };

  // Pakketten voor aanhangwagen rijlessen (BE)
  const aanhangwagenPakketten = {
    starter: {
      naam: "Basis",
      prijs: "€550",
      lessen: "4 uur",
      features: [
        "B rijbewijs vereist",
        "4 uur praktijkles",
        "Examen inbegrepen",
        "Training draaien en achteruitrijden"
      ],
      color: "from-amber-500 to-amber-700"
    },
    populair: {
      naam: "Populair",
      prijs: "€700",
      lessen: "6 uur",
      features: [
        "B rijbewijs vereist",
        "6 uur praktijkles",
        "Examen inbegrepen",
        "Extra oefening aan- en afkoppelen",
        "Uitgebreide verkeersdeelname"
      ],
      color: "from-red-500 to-red-700"
    },
    compleet: {
      naam: "Uitgebreid",
      prijs: "€860",
      lessen: "8 uur",
      features: [
        "B rijbewijs vereist",
        "8 uur praktijkles",
        "Examen inbegrepen",
        "Uitgebreide theorie uitleg",
        "Extra oefentijd voor het examen",
        "Volledige voorbereiding op alle onderdelen"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  };

  // Pakketten voor bromfietslessen (AM)
  const bromfietsPakketten = {
    starter: {
      naam: "Compact",
      prijs: "€310",
      lessen: "3 uur",
      features: [
        "Gratis inschrijving",
        "3 uur praktijkles",
        "Praktijkexamen inbegrepen",
        "Lesmateriaal"
      ],
      color: "from-cyan-500 to-cyan-700"
    },
    populair: {
      naam: "Basis",
      prijs: "€390",
      lessen: "5 uur",
      features: [
        "Gratis inschrijving",
        "5 uur praktijkles",
        "Praktijkexamen inbegrepen",
        "Lesmateriaal",
        "Extra verkeersdeelname"
      ],
      color: "from-red-500 to-red-700"
    },
    compleet: {
      naam: "Uitgebreid",
      prijs: "€470",
      lessen: "8 uur",
      features: [
        "Gratis inschrijving",
        "8 uur praktijkles",
        "Praktijkexamen inbegrepen", 
        "Lesmateriaal",
        "Uitgebreide verkeersdeelname",
        "Extra oefenen op het examengebied"
      ],
      color: "from-indigo-500 to-indigo-700"
    }
  };

  // Selecteer de juiste pakketten op basis van het rijbewijsType
  const pakketten = rijbewijsType === "Automaat" 
    ? automaatPakketten 
    : rijbewijsType === "Motor" 
      ? motorPakketten 
      : rijbewijsType === "Aanhangwagen"
        ? aanhangwagenPakketten
        : rijbewijsType === "Bromfiets"
          ? bromfietsPakketten
          : schakelPakketten;

  const activePakket = pakketten[activeTab];

  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden">
      {/* Verwijder decoratieve elementen voor consistentie met hoofdgradient */}
      
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
            <h3 className="text-lg text-blue-400 font-semibold mb-2">Onze pakketten</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transparante prijzen
            </h2>
            <p className="text-blue-100/80 max-w-2xl">
              Wij bieden verschillende lespakketten aan die passen bij jouw behoefte en rijervaring. Of je nu een beginner bent of al wat ervaring hebt, wij hebben het perfecte pakket voor jou.
            </p>
          </motion.div>
          
          {/* Tab selectie */}
          <div className="mb-8 flex flex-wrap justify-center sm:justify-start gap-4">
            {(['starter', 'populair', 'compleet'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                    : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {pakketten[tab].naam} Pakket
                {tab === 'populair' && activeTab !== 'populair' && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                    Populair
                  </span>
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Pakket details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Content details - 3 kolommen */}
            <div className="md:col-span-3 bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${activePakket.color} flex items-center justify-center`}>
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activePakket.naam} Pakket</h3>
                  <p className="text-blue-200 text-lg">{activePakket.lessen}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {activePakket.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-blue-400" />
                    </div>
                    <p className="text-blue-100/90">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-sm text-blue-100/70">
                <p>* Alle prijzen zijn inclusief BTW</p>
                <p>* Het CBR-praktijkexamen wordt door ons gepland en gereserveerd</p>
              </div>
            </div>
            
            {/* Prijs en CTA - 2 kolommen */}
            <div className="md:col-span-2 space-y-6">
              <motion.div 
                className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 text-center md:text-left"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <p className="text-lg text-blue-200 mb-2">Pakketprijs</p>
                <div className="flex flex-col md:flex-row md:items-end gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">{activePakket.prijs}</span>
                  <span className="text-blue-200/80">alles inbegrepen</span>
                </div>
                <p className="text-blue-100/80 text-sm mb-6">
                  Geen verborgen kosten. Prijs inclusief inschrijfkosten, lesmateriaal en examenkosten.
                </p>
                <Link href="/prijzen">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300"
                  >
                    Bekijk alle prijzen
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 lg:p-8"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-xl font-bold text-white mb-4">Liever eerst proberen?</h4>
                <p className="text-blue-100/80 mb-6">
                  Boek een gratis proefles en krijg een eerlijk advies over hoeveel lessen jij nodig hebt.
                </p>
                <Link href="/gratis-proefles">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all duration-300"
                  >
                    <span>Gratis proefles aanvragen</span>
                    <ArrowRightIcon className="w-4 h-4" />
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

export default PrijzenHighlightSection; 