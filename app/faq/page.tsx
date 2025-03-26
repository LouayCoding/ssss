'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// FAQ pagina component
export default function FAQPage() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("algemeen");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  // Effect voor gradient animatie
  useEffect(() => {
    const handleScroll = () => {
      if (!gradientRef.current) return;
      
      const scrollY = window.scrollY;
      const scrollMax = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(20, (scrollY / scrollMax) * 20);
      
      gradientRef.current.style.backgroundPosition = `${scrollPercentage}% 50%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categorieën voor FAQ
  const categories = [
    { id: "algemeen", label: "Algemene vragen" },
    { id: "schakel", label: "Autorijlessen (schakel)" },
    { id: "automaat", label: "Autorijlessen (automaat)" },
    { id: "motor", label: "Motorrijlessen" },
    { id: "aanhangwagen", label: "Aanhangwagen (BE)" }
  ];

  // FAQ vragen
  const faqsByCategory = {
    algemeen: [
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
    ],
    schakel: [
      {
        vraag: "Is een schakelrijbewijs beter dan een automaat rijbewijs?",
        antwoord: "Met een schakelrijbewijs mag je zowel in een auto met versnellingsbak als in een automaat rijden. Met een automaat rijbewijs mag je alleen in een automaat rijden. Als je in de toekomst mogelijk ook in handgeschakelde auto's wilt rijden, is het verstandig om voor een schakelrijbewijs te kiezen."
      },
      {
        vraag: "Hoe moeilijk is het om te leren schakelen?",
        antwoord: "Het leren schakelen in een auto vraagt wat extra coördinatie en oefening, maar de meeste leerlingen pikken het na enkele lessen goed op. Onze ervaren instructeurs leren je stap voor stap de koppeling, het gas en de versnellingspook te bedienen. Na voldoende oefening wordt het een automatisme."
      }
    ],
    automaat: [
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
    ],
    motor: [
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
    ],
    aanhangwagen: [
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
    ]
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const activeFAQs = faqsByCategory[activeCategory as keyof typeof faqsByCategory];
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Achtergrond gradient */}
      <div ref={gradientRef} className="fixed inset-0 bg-animate-gradient"></div>
      
      {/* Background decoraties */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-20 w-60 h-60 bg-indigo-800/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-20 w-60 h-60 bg-red-900/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Hero sectie */}
          <div className="mb-12 lg:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            >
              Veelgestelde vragen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl text-blue-100/80 max-w-3xl"
            >
              Hier vind je antwoorden op de meest gestelde vragen over onze rijopleidingen. Staat jouw vraag er niet tussen? Neem dan gerust contact met ons op.
            </motion.p>
          </div>
          
          {/* Categorieën en FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Zijbalk met categorieën */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-900/40 border border-white/10 rounded-xl p-5 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Categorieën</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className={`w-full text-left flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                          activeCategory === category.id 
                            ? 'bg-blue-600/40 text-white font-medium'
                            : 'hover:bg-white/5 text-blue-100/80'
                        }`}
                      >
                        <ChevronRightIcon className={`h-4 w-4 mr-2 transition-transform ${activeCategory === category.id ? 'text-white rotate-90' : 'text-blue-300/50'}`} />
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-medium mb-3">Meer hulp nodig?</h4>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium shadow-md"
                    >
                      Contact opnemen
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* FAQ vragen en antwoorden */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {categories.find(c => c.id === activeCategory)?.label || "Algemene vragen"}
                </h2>
                
                <div className="space-y-4">
                  {activeFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className={`rounded-xl overflow-hidden transition-all duration-300 ${
                        openQuestion === index 
                          ? 'bg-blue-900/30 border border-blue-500/30' 
                          : 'bg-gray-800/30 border border-gray-700/30 hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full p-5 text-left flex justify-between items-center"
                      >
                        <h3 className={`font-medium text-lg ${openQuestion === index ? 'text-white' : 'text-blue-100'}`}>
                          {faq.vraag}
                        </h3>
                        <ChevronDownIcon 
                          className={`h-5 w-5 text-blue-300 transition-transform duration-300 ${
                            openQuestion === index ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {openQuestion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5"
                        >
                          <p className="text-blue-100/80">{faq.antwoord}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                
                {activeFAQs.length === 0 && (
                  <div className="py-6 text-center text-blue-100/60">
                    Geen vragen gevonden in deze categorie.
                  </div>
                )}
              </div>
              
              {/* CTA sectie onder vragen */}
              <div className="mt-8 text-center p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3">Nog steeds vragen?</h3>
                <p className="text-blue-100/80 mb-6">
                  Staat jouw vraag er niet tussen? Neem contact op met ons team of vraag een gratis proefles aan om direct met een instructeur te praten.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20"
                    >
                      Contact opnemen
                    </motion.button>
                  </Link>
                  <Link href="/gratis-proefles">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium shadow-md"
                    >
                      Gratis proefles aanvragen
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 