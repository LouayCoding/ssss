'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FAQSectionProps {
  rijbewijsType?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  rijbewijsType = "Auto"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Basisfaqs die voor alle rijbewijstypen worden gebruikt
  const baseFaqs = [
    {
      vraag: "Hoeveel rijlessen heb ik nodig?",
      antwoord: "Het aantal rijlessen dat je nodig hebt hangt af van je leervermogen en eventuele eerdere rijervaring. Gemiddeld hebben de meeste leerlingen tussen de 30 en 40 lessen nodig om het rijbewijs te halen. Na een proefles kunnen onze instructeurs je een beter persoonlijk advies geven."
    },
    {
      vraag: "Hoe lang duurt een rijles?",
      antwoord: "Onze standaard rijlessen duren 60 minuten. We bieden ook dubbele lessen aan van 120 minuten als je wat meer aaneen wilt oefenen, bijvoorbeeld voor langere verkeersituaties of routes."
    },
    {
      vraag: "Waar word ik opgehaald voor de rijles?",
      antwoord: "Onze instructeurs halen je op waar jij wilt, bijvoorbeeld thuis, op school of op je werk. We zijn flexibel en stemmen de ophaallocatie met je af. De meeste rijlessen vinden plaats in het examengebied van het CBR in Amsterdam."
    },
    {
      vraag: "Hoe snel kan ik mijn rijbewijs halen?",
      antwoord: "Met onze spoedcursus kun je in korte tijd, soms al binnen enkele weken, je rijbewijs halen. Dit is intensief en vereist dat je meerdere dagen per week beschikbaar bent voor lessen. Voor een regulier traject is 3-6 maanden gebruikelijk, afhankelijk van hoe vaak je les hebt."
    },
    {
      vraag: "Wat als ik zak voor mijn examen?",
      antwoord: "Geen zorgen! Bij Amsterdamse Verkeersopleidingen bieden we een herexamengarantie bij de meeste pakketten. Hierbij krijg je extra lessen tegen gereduceerd tarief en assistentie bij het plannen van een nieuw examen. We analyseren waarom je gezakt bent en werken gericht aan die punten."
    }
  ];

  // Specifieke FAQs voor schakel rijlessen
  const schakelFaqs = [
    {
      vraag: "Is een schakelrijbewijs beter dan een automaat rijbewijs?",
      antwoord: "Met een schakelrijbewijs mag je zowel in een auto met versnellingsbak als in een automaat rijden. Met een automaat rijbewijs mag je alleen in een automaat rijden. Als je in de toekomst mogelijk ook in handgeschakelde auto's wilt rijden, is het verstandig om voor een schakelrijbewijs te kiezen."
    },
    {
      vraag: "Hoe moeilijk is het om te leren schakelen?",
      antwoord: "Het leren schakelen in een auto vraagt wat extra coördinatie en oefening, maar de meeste leerlingen pikken het na enkele lessen goed op. Onze ervaren instructeurs leren je stap voor stap de koppeling, het gas en de versnellingspook te bedienen. Na voldoende oefening wordt het een automatisme."
    }
  ];

  // Specifieke FAQs voor automaat rijlessen
  const automaatFaqs = [
    {
      vraag: "Wat is het verschil tussen een automaat en schakelbak rijbewijs?",
      antwoord: "Met een schakelrijbewijs mag je in alle personenauto's rijden, zowel met handgeschakelde versnellingsbak als met automaat. Met een automaat rijbewijs mag je alleen in auto's met een automatische transmissie rijden. Het is belangrijk om deze beperking te overwegen bij je keuze."
    },
    {
      vraag: "Is een automaat rijbewijs makkelijker te halen?",
      antwoord: "Veel leerlingen vinden lessen in een automaat eenvoudiger omdat je niet hoeft te schakelen en geen koppeling hoeft te bedienen. Hierdoor kun je je beter concentreren op het verkeer en de verkeersregels. Dit kan leiden tot een hoger slagingspercentage en mogelijk minder lessen."
    },
    {
      vraag: "Kan ik later alsnog mijn schakelrijbewijs halen?",
      antwoord: "Ja, als je eerst een automaat rijbewijs haalt, kun je later alsnog lessen nemen voor een volledig (schakel) rijbewijs. Je hoeft dan alleen het praktijkexamen opnieuw af te leggen in een auto met handgeschakelde versnellingsbak. Het theoriecertificaat blijft geldig."
    }
  ];

  // Specifieke FAQs voor motorrijlessen
  const motorFaqs = [
    {
      vraag: "Wat zijn AVB en AVD examens?",
      antwoord: "AVB staat voor Algemene Voertuig Beheersing. Dit is het eerste examen waarin je laat zien dat je de motorfiets goed kunt beheersen met diverse oefeningen op een afgesloten terrein. AVD staat voor Algemene Verkeers Deelname, waarbij je in het verkeer moet laten zien dat je veilig kunt rijden. Je moet eerst voor AVB slagen voordat je AVD mag doen."
    },
    {
      vraag: "Wat zijn de verschillende categorieën motorrijbewijzen?",
      antwoord: "Er zijn drie categorieën: A1 (lichte motoren tot 125cc), A2 (middelzware motoren tot 35kW) en A (onbeperkt). De minimumleeftijd verschilt: 18 jaar voor A1, 20 jaar voor A2 en 22 jaar voor A. Voor elke opvolgende categorie moet je twee jaar rijervaring hebben in de vorige categorie, of een apart examen afleggen."
    },
    {
      vraag: "Hoeveel motorrijlessen heb ik nodig?",
      antwoord: "Dit hangt af van je ervaring en aanleg. Zonder enige ervaring hebben de meeste leerlingen ongeveer 20-25 lessen nodig voor zowel het AVB als AVD examen. Met eerdere ervaring op een brommer of scooter kan dit minder zijn. Na een intake kunnen we je een persoonlijk advies geven."
    },
    {
      vraag: "Moet ik zelf beschermende kleding aanschaffen voor de lessen?",
      antwoord: "Voor de eerste lessen kun je een helm van ons lenen. Voor het examen en verdere lessen raden we aan eigen beschermende kleding aan te schaffen: een goedgekeurde helm, motorjas, -broek, -handschoenen en -laarzen. Dit is verplicht voor het examen en belangrijk voor je veiligheid."
    }
  ];

  // Specifieke FAQs voor aanhangwagen rijlessen
  const aanhangwagenFaqs = [
    {
      vraag: "Kan ik echt in één dag mijn BE rijbewijs halen?",
      antwoord: "Ja, in de meeste gevallen is het mogelijk om in één dag je BE rijbewijs te halen. We starten 's ochtends met de training en eindigen de dag met het examen. Voorwaarde is wel dat je al over voldoende basisvaardigheden beschikt en in het bezit bent van een geldig B-rijbewijs."
    },
    {
      vraag: "Wat houdt het BE rijbewijs precies in?",
      antwoord: "Met een BE rijbewijs mag je met je auto (categorie B) een aanhangwagen of caravan trekken die zwaarder is dan 750 kg en waarbij de combinatie auto en aanhanger samen meer dan 3500 kg weegt. Zonder BE rijbewijs mag je alleen lichtere aanhangwagens trekken."
    },
    {
      vraag: "Wat moet ik meenemen naar de cursus?",
      antwoord: "Je dient het volgende mee te nemen: een geldig rijbewijs B, een geldig legitimatiebewijs, comfortabele kleding en schoenen geschikt voor het besturen van een voertuig. Voorafgaand aan de cursus moet je ook een Gezondheidsverklaring hebben ingevuld bij het CBR."
    },
    {
      vraag: "Hoe verloopt het examen voor het BE rijbewijs?",
      antwoord: "Het examen duurt in totaal 55 minuten, waarvan ongeveer 35 minuten rijden in het verkeer. Daarnaast wordt er gelet op het aan- en afkoppelen van de aanhanger en manoeuvreren, zoals achteruitrijden en draaien. Aan het begin is er een oogtest en worden enkele vragen gesteld over de aanhangwagen en verkeersregels."
    }
  ];

  // Specifieke FAQs voor bromfiets rijlessen
  const bromfietsFaqs = [
    {
      vraag: "Vanaf welke leeftijd mag ik bromfietsrijles nemen?",
      antwoord: "Je mag vanaf 16 jaar beginnen met bromfietsrijlessen en examen doen voor het AM rijbewijs. Hiermee kun je op een bromfiets (maximaal 45 km/uur) of snorfiets (maximaal 25 km/uur) rijden."
    },
    {
      vraag: "Moet ik theorie-examen doen voor een bromfietsrijbewijs?",
      antwoord: "Ja, voor het AM rijbewijs moet je eerst slagen voor het theorie-examen voordat je praktijkexamen mag doen. Het theorie-examen bestaat uit 50 vragen over verkeersregels, verkeersinzicht en gevaarherkenning specifiek voor bromfietsers."
    },
    {
      vraag: "Hoe lang duurt het praktijkexamen voor bromfiets?",
      antwoord: "Het praktijkexamen voor het AM rijbewijs duurt ongeveer 30 minuten. Tijdens dit examen toets je je beheersing van het voertuig en je deelname aan het verkeer. De examinator rijdt in een auto achter je aan en geeft instructies via een oortje."
    },
    {
      vraag: "Hoeveel lessen heb ik nodig voor een bromfietsrijbewijs?",
      antwoord: "Dit hangt af van je ervaring en aanleg. De meeste leerlingen hebben tussen de 3 en 8 uur les nodig. Als je al ervaring hebt met fietsen in het verkeer, heb je mogelijk minder lessen nodig. Tijdens een intake of proefles kunnen we je een persoonlijk advies geven."
    },
    {
      vraag: "Moet ik zelf een bromfiets of beschermende kleding meenemen?",
      antwoord: "Nee, tijdens de lessen zorgen wij voor een bromfiets en een helm. Voor je eigen veiligheid raden we aan om stevige schoenen en beschermende kleding te dragen. Tijdens het examen is een goedgekeurde helm verplicht, die wij ook kunnen verzorgen."
    }
  ];

  // Selecteer de juiste FAQs op basis van het rijbewijsType
  let faqs = baseFaqs;
  if (rijbewijsType === "Schakel") {
    faqs = [...schakelFaqs, ...baseFaqs];
  } else if (rijbewijsType === "Automaat") {
    faqs = [...automaatFaqs, ...baseFaqs];
  } else if (rijbewijsType === "Motor") {
    faqs = [...motorFaqs, ...baseFaqs];
  } else if (rijbewijsType === "Aanhangwagen") {
    faqs = [...aanhangwagenFaqs, ...baseFaqs];
  } else if (rijbewijsType === "Bromfiets") {
    faqs = [...bromfietsFaqs, ...baseFaqs];
  }

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <h3 className="text-lg text-blue-400 font-semibold mb-2">Veelgestelde vragen</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Alles wat je wilt weten
            </h2>
            <p className="text-blue-100/80 max-w-2xl">
              Hier vind je antwoorden op de meest gestelde vragen over {rijbewijsType}-rijlessen bij Amsterdamse Verkeersopleidingen. Staat jouw vraag er niet tussen? Neem dan gerust contact met ons op.
            </p>
          </motion.div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-4 overflow-hidden rounded-xl ${
                  openIndex === index 
                    ? 'bg-blue-900/40 border border-blue-500/30' 
                    : 'bg-gray-900/40 border border-gray-700/30'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                >
                  <h3 className={`text-lg md:text-xl font-semibold ${openIndex === index ? 'text-white' : 'text-blue-100'}`}>
                    {faq.vraag}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-blue-300 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-blue-100/80">{faq.antwoord}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 text-left"
          >
            <p className="text-lg text-blue-100/80 mb-6">
              Heb je nog andere vragen? Wij helpen je graag verder!
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all duration-300"
                >
                  Neem contact op
                </motion.button>
              </Link>
              <Link href="/gratis-proefles">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300"
                >
                  Gratis proefles aanvragen
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 