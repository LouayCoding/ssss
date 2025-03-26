'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// FAQ data met 4 categorieën - aangepast naar alleen blauw en rood
const faqData = [
  {
    category: 'Autorijschool Amsterdam',
    icon: '🚗',
    color: 'from-blue-500 to-indigo-600',
    questions: [
      {
        id: 'a1',
        question: 'In welke gebieden van Amsterdam geven jullie rijles?',
        answer: 'Wij geven rijles in heel Amsterdam en omgeving, inclusief Amsterdam-Noord, Zuid, Oost, West, Centrum, Zuidoost, Nieuw-West, en in randgemeenten zoals Amstelveen, Diemen en Zaandam. Onze instructeurs zijn bekend met alle examenroutes in de regio.'
      },
      {
        id: 'a2',
        question: 'Wat maakt jullie rijschool in Amsterdam uniek?',
        answer: 'Onze rijschool onderscheidt zich door een persoonlijke aanpak, instructeurs die de stad op hun duimpje kennen, flexibele lesmomenten die passen bij het drukke Amsterdamse leven, en een hoog slagingspercentage van 84%. We bieden ook lessen in het Engels voor internationale studenten en expats.'
      },
      {
        id: 'a3',
        question: 'Hebben jullie speciale ervaring met rijden in de drukke binnenstad?',
        answer: 'Absoluut! Onze instructeurs zijn specialisten in het navigeren door de unieke verkeerssituaties van Amsterdam, zoals smalle grachten, drukke fietsstraten, tramrails en toeristische gebieden. We besteden extra aandacht aan deze typisch Amsterdamse verkeerssituaties tijdens onze lessen.'
      },
      {
        id: 'a4',
        question: 'Kan ik op een vaste locatie in Amsterdam worden opgehaald?',
        answer: 'Ja, we halen je graag op bij een voor jou geschikte locatie in Amsterdam, zoals je huis, werk, school of een metrostation. Dit bespreken we tijdens het plannen van je lessen en kan per les verschillen indien gewenst.'
      },
      {
        id: 'a5',
        question: 'Geven jullie ook rijles in een automaat in Amsterdam?',
        answer: 'Ja, we bieden zowel lessen aan in een schakelauto als in een automaat. In de drukte van Amsterdam kiezen steeds meer leerlingen voor lessen in een automaat. We hebben moderne automatische lesauto\'s die zeer geschikt zijn voor het stadsverkeer. Je krijgt dan wel een rijbewijs met code 78, wat betekent dat je alleen in automaten mag rijden.'
      },
      {
        id: 'a6',
        question: 'Zijn jullie ook beschikbaar voor lessen in het weekend in Amsterdam?',
        answer: 'Zeker! We bieden lessen aan op zaterdag en zondag, ideaal voor studenten of werkenden die doordeweeks weinig tijd hebben. Weekend-lessen zijn erg populair, dus we raden aan deze tijdig te reserveren. Er geldt geen toeslag voor rijlessen in het weekend.'
      }
    ]
  },
  {
    category: 'CBR Examens',
    icon: '📝',
    color: 'from-blue-600 to-blue-800',
    questions: [
      {
        id: 'b1',
        question: 'Hoe lang duurt het voordat ik examen kan doen bij het CBR?',
        answer: 'De wachttijd voor een CBR praktijkexamen varieert, maar is momenteel ongeveer 6-8 weken. Wij kunnen echter gebruikmaken van voorrangsexamens voor onze leerlingen waardoor je vaak sneller aan de beurt bent. De exacte wachttijd bespreken we tijdens je lessen.'
      },
      {
        id: 'b2',
        question: 'Regelen jullie het CBR examen voor mij?',
        answer: 'Ja, wij verzorgen de complete aanvraag en planning van je theorie- en praktijkexamen bij het CBR. Je hoeft je hier geen zorgen over te maken. We plannen het examen wanneer jij en je instructeur er klaar voor zijn.'
      },
      {
        id: 'b3',
        question: 'Wat gebeurt er als ik zak voor mijn praktijkexamen?',
        answer: 'Als je niet slaagt voor je praktijkexamen, bespreken we direct met je wat er goed ging en waar verbetering nodig is. We plannen dan extra lessen om aan deze punten te werken en regelen een herexamen, meestal binnen 3-4 weken. We bieden ook speciale herexamenpakketten aan met korting.'
      },
      {
        id: 'b4',
        question: 'Bij welk CBR-locatie doe ik examen als ik in Amsterdam les heb?',
        answer: 'In de regio Amsterdam kan je examen doen bij CBR Amsterdam (Naritaweg) of CBR Zaandam. Wij bereiden je goed voor op de specifieke examenroutes van beide locaties. Bij het plannen van het examen kiezen we samen de meest geschikte locatie.'
      },
      {
        id: 'b5',
        question: 'Kan ik een faalangstexamen aanvragen bij het CBR?',
        answer: 'Ja, als je last hebt van examenstress of faalangst, kunnen we een faalangstexamen voor je aanvragen bij het CBR. Dit examen duurt 10 minuten langer en de examinator is speciaal opgeleid om met faalangst om te gaan. Je instructeur kan inschatten of dit voor jou een goede optie is en we helpen je met de aanvraag.'
      },
      {
        id: 'b6',
        question: 'Wat heb ik nodig om theorie-examen te doen bij het CBR?',
        answer: 'Voor het theorie-examen bij het CBR heb je een geldig legitimatiebewijs nodig (rijbewijs, ID-kaart of paspoort). Zorg dat je DigiD in orde is, want die heb je nodig voor de aanvraag. Wij regelen de aanmelding, maar jij moet zelf zorgen voor goede voorbereiding. Met ons theoriepakket bereiden we je optimaal voor op het examen.'
      },
      {
        id: 'b7',
        question: 'Hoe bereiden jullie mij voor op het CBR praktijkexamen?',
        answer: 'In de weken voorafgaand aan je examen zullen we specifiek oefenen met de examenroutes en situaties die je tijdens het examen kunt verwachten. We doen ook een proefexamen waarbij we de examensituatie zo realistisch mogelijk nabootsen. Zo weet je precies wat je kunt verwachten en vermindert de spanning op de examendag.'
      }
    ]
  },
  {
    category: 'Rijbewijs',
    icon: '🪪',
    color: 'from-red-500 to-red-700',
    questions: [
      {
        id: 'c1',
        question: 'Welke rijbewijscategorieën kan ik bij jullie halen?',
        answer: 'Bij onze rijschool kun je terecht voor de categorieën B (auto), A (motor), AM (brommer/scooter) en BE (auto met aanhangwagen). Voor elke categorie hebben we gespecialiseerde instructeurs en aangepaste lespakketten.'
      },
      {
        id: 'c2',
        question: 'Hoe snel kan ik mijn rijbewijs halen?',
        answer: 'De tijd die nodig is om je rijbewijs te halen varieert per persoon, maar gemiddeld hebben leerlingen 25-35 lessen nodig. We bieden ook spoedcursussen aan waarmee je in 2-3 weken je rijbewijs kunt halen door intensief te lessen. Tijdens je proefles maken we een persoonlijke inschatting.'
      },
      {
        id: 'c3',
        question: 'Wat heb ik nodig om te starten met rijlessen voor mijn rijbewijs?',
        answer: 'Om te starten met rijlessen heb je een geldig legitimatiebewijs nodig (ID-kaart of paspoort). Voor het behalen van rijbewijs B moet je minimaal 16,5 jaar zijn om te starten met lessen (examen vanaf 17 jaar). Voor theorie-examen moet je 16 jaar of ouder zijn. Er zijn geen vooropleidingseisen.'
      },
      {
        id: 'c4',
        question: 'Kan ik mijn buitenlandse rijbewijs omzetten naar een Nederlands rijbewijs?',
        answer: 'Dit hangt af van het land waar je rijbewijs is uitgegeven. Rijbewijzen uit EU/EVA-landen kunnen direct worden omgezet. Voor andere landen gelden verschillende regels. We kunnen een adviesgesprek en eventueel een opfriscursus aanbieden om je voor te bereiden op het Nederlandse verkeer. Neem contact met ons op voor persoonlijk advies.'
      },
      {
        id: 'c5',
        question: 'Wat is het 2toDrive programma voor 17-jarigen?',
        answer: 'Het 2toDrive programma stelt je in staat om al op 16,5-jarige leeftijd te beginnen met rijlessen en het praktijkexamen af te leggen als je 17 bent. Na het behalen van je rijbewijs mag je tot je 18e verjaardag alleen onder begeleiding van een ervaren bestuurder rijden. Deze begeleider moet aan bepaalde eisen voldoen en geregistreerd staan op je begeleiderspas.'
      },
      {
        id: 'c6',
        question: 'Hoe lang is mijn rijbewijs geldig?',
        answer: 'Een Nederlands rijbewijs is 10 jaar geldig vanaf de datum van afgifte. Voor bestuurders ouder dan 75 jaar geldt een kortere geldigheidsduur van 5 jaar. Het is belangrijk om je rijbewijs tijdig te verlengen, want rijden met een verlopen rijbewijs kan leiden tot een boete. Wij kunnen je eventueel helpen met opfrislessen als je na lange tijd weer gaat rijden.'
      },
      {
        id: 'c7',
        question: 'Wat is het verschil tussen rijbewijs B en BE?',
        answer: 'Met rijbewijs B mag je een auto besturen met een maximaal toegestaan gewicht van 3500 kg. Rijbewijs BE is een uitbreiding hierop waarmee je ook met een aanhangwagen mag rijden die zwaarder is dan 750 kg. Voor deze uitbreiding zijn gemiddeld 5-8 lessen nodig en moet je een apart praktijkexamen afleggen bij het CBR.'
      }
    ]
  },
  {
    category: 'Rijles',
    icon: '🕒',
    color: 'from-indigo-500 to-indigo-700',
    questions: [
      {
        id: 'd1',
        question: 'Hoe lang duurt een rijles?',
        answer: 'Een standaard rijles duurt 60 of 90 minuten, afhankelijk van je voorkeur en leerfase. Voor beginners raden we vaak 90 minuten aan zodat er voldoende tijd is om vaardigheden te oefenen. Gevorderde leerlingen kunnen kiezen voor kortere of langere lessen, geheel afhankelijk van wat voor jou het beste werkt.'
      },
      {
        id: 'd2',
        question: 'Hoe vaak per week kan ik lessen?',
        answer: 'Je kunt bij ons 1 tot 5 keer per week lessen, afhankelijk van je beschikbaarheid en hoe snel je wilt leren. De meeste leerlingen nemen 1-2 lessen per week. Voor spoedcursussen bieden we meerdere lessen per dag aan. We stellen samen een lesschema op dat past bij jouw tempo en beschikbaarheid.'
      },
      {
        id: 'd3',
        question: 'Kan ik een proefles nemen voordat ik een pakket kies?',
        answer: 'Zeker! We raden zelfs aan om eerst een proefles te nemen. Tijdens deze les van 60 minuten maak je kennis met de instructeur, onze leermethode en krijg je een eerste indruk van autorijden. Na afloop krijg je een persoonlijk advies over het aantal lessen dat je waarschijnlijk nodig hebt. De proefles kost €39,50 en dit bedrag wordt verrekend als je een pakket afneemt.'
      },
      {
        id: 'd4',
        question: 'Kan ik van instructeur wisselen als het niet klikt?',
        answer: 'Absoluut. De klik met je instructeur vinden wij heel belangrijk voor effectief leren. Als je niet tevreden bent, kun je kosteloos wisselen naar een andere instructeur. We bespreken dan wat je zoekt in een instructeur om de best passende match te vinden voor je leerstijl en persoonlijkheid.'
      },
      {
        id: 'd5',
        question: 'Wat als ik een rijles moet afzeggen?',
        answer: 'We begrijpen dat er soms onverwachte situaties kunnen ontstaan. Als je minimaal 48 uur van tevoren afzegt, brengen we geen kosten in rekening. Bij afzeggingen binnen 48 uur moeten we helaas de volledige lesprijs berekenen omdat de instructeur deze tijd voor je heeft gereserveerd. In geval van ziekte kijken we samen naar een passende oplossing.'
      },
      {
        id: 'd6',
        question: 'Welke auto\'s gebruiken jullie voor rijlessen?',
        answer: 'Wij geven les in moderne en goed onderhouden auto\'s van recente modellen (niet ouder dan 3 jaar). Voor de standaard rijlessen gebruiken we voornamelijk Volkswagen Polo\'s, Toyota Yaris en Peugeot 208 modellen. Deze auto\'s zijn uitgerust met dubbele bediening voor optimale veiligheid tijdens de lessen. Voor automaat-rijlessen hebben we o.a. Toyota Yaris Hybrid en Volkswagen Golf automaten.'
      },
      {
        id: 'd7',
        question: 'Bieden jullie ook speciale rijlessen aan voor mensen met autisme of ADHD?',
        answer: 'Ja, we hebben instructeurs die gespecialiseerd zijn in het lesgeven aan mensen met autisme, ADHD of andere leervariaties. Deze instructeurs passen hun lesmethode aan en houden rekening met jouw specifieke behoeften. We nemen extra tijd voor uitleg, structureren de lessen duidelijk en bouwen rustig op in complexiteit. Vermeld bij aanmelding je specifieke situatie zodat we je aan de juiste instructeur kunnen koppelen.'
      },
      {
        id: 'd8',
        question: 'Kan ik in termijnen betalen voor mijn rijlespakket?',
        answer: 'Zeker, we bieden verschillende betaalmogelijkheden aan. Je kunt ervoor kiezen om je lespakket in één keer te betalen met 3% korting, of in termijnen zonder extra kosten. Bij een standaardpakket kun je bijvoorbeeld in drie gelijke termijnen betalen. We bespreken graag de mogelijkheden die voor jou het beste werken tijdens het intakegesprek.'
      }
    ]
  }
];

// Individuele FAQ vraag component
const FAQItem = ({ question, answer, isOpen, toggleOpen, categoryColor }: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  toggleOpen: () => void,
  categoryColor: string
}) => {
  return (
    <div className="mb-3 overflow-hidden">
      <button
        onClick={toggleOpen}
        className={`w-full text-left px-5 py-4 rounded-xl flex justify-between items-center transition-all duration-300 ${
          isOpen 
            ? `bg-gradient-to-r ${categoryColor} bg-opacity-20 text-white shadow-lg` 
            : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white'
        } backdrop-blur-sm border border-white/10 group`}
      >
        <span className="font-medium pr-6 text-base sm:text-lg">{question}</span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? `bg-gradient-to-r ${categoryColor} shadow-inner` 
            : 'bg-white/10 group-hover:bg-white/20'
        }`}>
          <ChevronDownIcon 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-5 mt-2 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 text-blue-50/90 shadow-lg text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].category);
  const [openItemsByCategory, setOpenItemsByCategory] = useState<Record<string, Record<string, boolean>>>({});

  // Vind de huidige categorie data
  const currentCategory = faqData.find(c => c.category === activeTab) || faqData[0];

  // Toggle vraag open/dicht
  const toggleQuestion = (categoryName: string, questionId: string) => {
    setOpenItemsByCategory(prev => {
      // Initialiseer categorie als deze nog niet bestaat
      const categoryQuestions = prev[categoryName] || {};
      
      // Toggle de status van deze specifieke vraag
      return {
        ...prev,
        [categoryName]: {
          ...categoryQuestions,
          [questionId]: !categoryQuestions[questionId]
        }
      };
    });
  };

  // Controleer of een vraag open is
  const isQuestionOpen = (categoryName: string, questionId: string) => {
    return !!openItemsByCategory[categoryName]?.[questionId];
  };

  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Decoratieve elementen */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10 opacity-70"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-medium">
              Hulp nodig?
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Veelgestelde <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Vragen</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100/80 max-w-2xl mx-auto text-lg"
          >
            Antwoorden op de meest gestelde vragen over onze rijlessen, pakketten en het behalen van je rijbewijs.
          </motion.p>
        </div>

        {/* Moderne tabbladen */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
          {/* Zijkant categorietabs voor desktop */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-2 lg:pr-4">
              {faqData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(category.category)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 ${
                    activeTab === category.category
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white'
                  } backdrop-blur-sm border border-white/10`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                    activeTab === category.category
                      ? 'bg-white/20'
                      : 'bg-white/5'
                  }`}>
                    {category.icon}
                  </div>
                  <span className="font-medium text-base sm:text-lg">{category.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vragen en antwoorden */}
          <div className="lg:w-3/4">
            <div className="relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center mb-5">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-gradient-to-r ${currentCategory.color} mr-4`}>
                    {currentCategory.icon}
                  </div>
                  {currentCategory.category}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-7"></div>
              </div>
              
              {/* Vragen lijst */}
              <div>
                {currentCategory.questions.map((question) => (
                  <FAQItem
                    key={question.id}
                    question={question.question}
                    answer={question.answer}
                    isOpen={isQuestionOpen(currentCategory.category, question.id)}
                    toggleOpen={() => toggleQuestion(currentCategory.category, question.id)}
                    categoryColor={currentCategory.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="py-8 px-6 sm:px-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-lg border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Staat je vraag er niet tussen?</h3>
            <p className="text-blue-100/80 mb-6 max-w-3xl mx-auto">Neem gerust contact met ons op voor persoonlijk advies of meer informatie over onze rijlessen.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Contact Opnemen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 