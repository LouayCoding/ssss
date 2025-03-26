'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

// Reviews data - Echte reviews van klanten
const testimonials = [
  {
    id: 1,
    name: "Caspar Lobbrecht",
    review: "Ik kijk met een heel positief gevoel terug op Amsterdamse Verkeersopleidingen. Mijn instructeur Brahim heeft mij zeer zorgvuldig en professioneel voorbereid op zowel mijn tussentijdse toets als mijn praktijkexamen. Het gevolg was dat ik in een keer ben geslaagd! Ik beveel deze rijschool aan iedereen aan!",
    rating: 5,
    date: "Een maand geleden",
    source: "Google Reviews"
  },
  {
    id: 2,
    name: "Keri van Douwen",
    review: "Hele fijne rijschool! Jaren geleden haalde ik succesvol mijn autorijbewijs bij AVO. Genoeg reden dus om terug te komen voor motorlessen. Binnen een paar maanden is nu ook categorie A (in één keer) bijgeschreven. Dank aan Yüksel voor alle leuke lessen en het meestrijden in koud weer.",
    rating: 5,
    date: "Twee maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 3,
    name: "Rik de Jong",
    review: "Ik schrijf niet snel reviews maar soms zijn er bedrijven en mensen die het echt verdienen. Ik kan met volle overtuiging zeggen dat AVO de titel 'beste rijschool' verdient. De persoonlijke aandacht en toewijding die ik tijdens de lessen maar ook daarbuiten kreeg, zouden de standaard moeten zijn bij elke rijschool.",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 4,
    name: "bk1910",
    review: "Ontzettend fijne rijschool met ervaren en vriendelijke instructeurs! Ik heb hier een spoedcursus voor autorijbewijs gevolgd bij Yuksel, zeker een aanrader! Hij komt altijd zijn afspraken na, communiceert duidelijk, en is altijd gezellig. Ondanks lange wachttijden bij het CBR heb ik binnen 2 maanden mijn rijbewijs gehaald.",
    rating: 5,
    date: "Twee maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 5,
    name: "Luuk James",
    review: "De AVO raad ik iedereen aan; 1) wegens de flexibiliteit van mijn rijinstructeur kon ik de lessen combineren met werk, 2) dankzij de 2-urige lessen kon ik binnen een paar maanden al afrijden en 3) omdat de instructeurs ervaren en professioneel zijn word je als leerling erg goed voorbereid op het praktijkexamen.",
    rating: 5,
    date: "Een maand geleden",
    source: "Google Reviews"
  },
  {
    id: 6,
    name: "Ihlara Bouwman",
    review: "Ik ben erg tevreden over mijn ervaring met deze rijschool! Vanaf het eerste moment voelde ik me op mijn gemak door de professionele en vriendelijke aanpak van mijn instructeur. Er werd niet alleen gefocust op het halen van het examen, maar ook op veilig en verantwoordelijk rijden in het algemeen.",
    rating: 5,
    date: "Vijf maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 7,
    name: "Tijn Vunderink",
    review: "Ik kom van een andere rijschool waar ik twee keer ben gezakt. Bij AVO zijn de instructeurs goed betrokken bij de lessen en zetten er alles op alles dat jij klaar bent voor je examen. Ik had Feyza als instructeur, ze geeft de juiste uitleg en sturing. Ik ben dan ook net bij mijn eerste poging bij AVO geslaagd!",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 8,
    name: "Iris Gombert",
    review: "Ik kan natuurlijk niet voor alle AVO instructeurs spreken, maar Iheb is in ieder geval een goede (lees: strenge doch gezellige) instructeur! Hij ziet ALLES dus je hoeft in ieder geval niet bang te zijn om onvoorbereid je examen in te gaan. Heb altijd plezierige en uitdagende rijlessen gehad! Zelf in één keer geslaagd.",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 9,
    name: "Kseniya Ieremenko",
    review: "I can highly recommend this school and Mo as the best instructor! With his help, I passed my exam on the first try and have been a happy driver for six months now. Mo is professional, skilled, supportive and truly the best. The supportive environment made all the difference.",
    rating: 5,
    date: "Vijf maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 10,
    name: "David Vossen",
    review: "Uitzonderlijk goede rijschool! De instructeurs zijn enorm betrokken, kundig, professioneel, vriendelijk en flexibel. Geen focus op zomaar pakketten verkopen, maar gecommitteerd aan hun leerlingen te doen slagen. Dit is de reden dat ze al jaren een van de hoogste slagingspercentages van Amsterdam hebben.",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 11,
    name: "Robin",
    review: "Mijn ervaring met AVO is erg goed! Stuk voor stuk hele fijne mensen, geduldige instructeurs en ze nemen goed de tijd om het uit te leggen op een manier die voor jou werkt. Allebei hele goede instructeurs die met je meedenken om ervoor te zorgen dat je je examen haalt en vooral dat je daarna veilig de weg op kan.",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 12,
    name: "Lucas",
    review: "Mijn beste vriend had deze rijschool aanbevolen aan mij en ik heb geen spijt! Het is een fijne rijschool waar ze weten hoe ze les moeten geven. Elk onderdeel wordt stap voor stap uitgelegd en niet alles in één les. Dit zorgt ervoor dat je alle leerstof beter in je opneemt en zo de kans vergroot op slagen.",
    rating: 5,
    date: "Vier maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 13,
    name: "Joey Cheung",
    review: "Heb veel geleerd van rij-instructeur Yassine die me goed begeleidde, situaties uitlegde en altijd open stond voor mijn vragen. Heel erg bedankt Yassine en collega's voor de begeleiding! Afgelopen week mijn rijbewijs gehaald!",
    rating: 5,
    date: "Een maand geleden",
    source: "Google Reviews"
  },
  {
    id: 14,
    name: "Vanessa Botha",
    review: "Een uitstekende rijschool! Hier word je niet alleen goed voorbereid op het examen, maar ook op het autorijden daarna. Je oefent op allerlei verschillende (examen)routes en tegen het einde doe je proefexamens waarbij je van instructeur wisselt binnen AVO. Uiteindelijk ben ik in één keer geslaagd!",
    rating: 5,
    date: "Zes maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 15,
    name: "Charlotte Quintiens",
    review: "Met veel vreugde deel ik mijn onwijs positieve ervaring met rijschool AVO. Maar wat de ervaring top maakte is het geluk de beste instructeur te krijgen, Yuksel. Je bent attent, scherp, tactisch en weet hoe je een leerling moet begeleiden. Door jou ben ik in 1 keer geslaagd! 🥳 Bedankt voor je coaching, ik zal je missen 😉",
    rating: 5,
    date: "Drie jaar geleden",
    source: "Google Reviews"
  },
  {
    id: 16,
    name: "Luc de Vries",
    review: "Heb hier met Yaser gereden voor mijn rijbewijs B. Examen in 1 keer gehaald, na vele leerzame lessen en duidelijke communicatie met mijn rijinstructeur. Je merkt aan alles dat het hele team van AVO gedreven is om hun studenten in 1 keer te laten slagen, en dat doen ze met effectieve, intensieve lesmethodes.",
    rating: 5,
    date: "Acht maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 17,
    name: "Anna",
    review: "Na een vervelende ervaring bij een andere rijschool besloot ik om de draad toch maar weer eens op te pakken. De instructeurs zijn erg professioneel, geduldig, gezellig en ook echt deskundig. De lat werd hoog gelegd waardoor ik goed heb leren rijden en anticiperen in het verkeer.",
    rating: 5,
    date: "Acht maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 18,
    name: "Jasmijn Vd",
    review: "Ik heb rijlessen gehad bij AVO en een top ervaring gehad! Met 45 lesuren ben ik in 1 keer geslaagd voor mijn praktijk examen. Omdat je van te voren al onderling wisselt met andere rij-instructeurs wen je aan een ander persoon die naast je zit en haalt het wat zenuwen van het praktijk examen weg.",
    rating: 5,
    date: "Een jaar geleden",
    source: "Google Reviews"
  },
  {
    id: 19,
    name: "Severine de Zwaan",
    review: "Na vijf jaar pauze en vijf mislukte examens in 2018 begon ik in oktober 2023 opnieuw. Dit keer bij AVO met Yassine als rijinstructeur. Yassine heeft mij in een korte tijd het vertrouwen en de vaardigheden gegeven die ik nodig had om te slagen. Vanaf de eerste les voelde ik me op mijn gemak.",
    rating: 5,
    date: "Negen maanden geleden",
    source: "Google Reviews"
  },
  {
    id: 20,
    name: "jenmy Tse",
    review: "Deze rijschool is erg professioneel en alle instructeurs zijn erg vriendelijk. Mijn rijinstructeur was Yassine, hij weet altijd op een eenvoudige manier complexe vaardigheden over te brengen, waardoor studenten gemakkelijk de essentie van het autorijden onder de knie krijgen.",
    rating: 5,
    date: "Elf maanden geleden",
    source: "Google Reviews"
  }
];

// Review Card Component
const ReviewCard = ({ review, isActive }: { review: typeof testimonials[0], isActive: boolean }) => {
  return (
    <div 
      className={`relative rounded-2xl p-6 transition-all duration-500 h-full ${
        isActive ? 'bg-gradient-to-br from-blue-900/60 to-indigo-900/60 shadow-xl border border-blue-500/20' : 'bg-gray-900/50 border border-white/10'
      }`}
    >
      {/* Gloed effect voor actieve kaart */}
      {isActive && (
        <div className="absolute inset-0 -z-10 bg-blue-500/20 blur-xl rounded-2xl"></div>
      )}
      
      {/* Rating sterren */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
          />
        ))}
      </div>
      
      {/* Review tekst */}
      <p className="text-blue-100/90 text-sm md:text-base relative z-10 mb-6 line-clamp-4">
        {review.review}
      </p>
      
      {/* Reviewer info */}
      <div className="flex items-center mt-auto">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-bold text-white text-sm">{review.name}</h4>
          <div className="flex items-center text-xs text-blue-200/70">
            <span>{review.date}</span>
            <span className="mx-2">•</span>
            <span>{review.source}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// StaticReviewsRow Component - Volledig statische weergave die gegarandeerd gevuld is van rand tot rand
const StaticReviewsRow = ({ 
  reviews, 
  activeIndex, 
  direction = 'left'
}: { 
  reviews: typeof testimonials, 
  activeIndex: number,
  direction?: 'left' | 'right'
}) => {
  // Bereken hoeveel reviews we nodig hebben om het scherm te vullen
  const duplicatedReviews = Array(10).fill(reviews).flat();
  
  return (
    <div 
      className={`flex gap-4 w-full ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} hover:pause-animation`}
      style={{ animationDuration: '60s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
    >
      {duplicatedReviews.map((review, index) => (
        <div key={`${review.id}-${index}`} className="w-[320px] flex-shrink-0">
          <ReviewCard 
            review={review} 
            isActive={(activeIndex % reviews.length) === (index % reviews.length)}
          />
        </div>
      ))}
    </div>
  );
};

// Hoofdcomponent
const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(0);
  
  // Verdeel de reviews in twee groepen
  const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));
  
  // Auto-activeer reviews voor visuele focus
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(prev => (prev + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Decoratieve elementen */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
      
      <div className="relative z-10">
        {/* Section heading - centraal in een container */}
        <div className="px-4 lg:px-8 text-center mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-medium">
              Reviews van onze leerlingen
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Wat onze <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">leerlingen</span> zeggen
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-blue-100/80 text-lg"
          >
            Lees de ervaringen van onze geslaagde leerlingen en ontdek waarom zij gekozen hebben voor onze rijschool.
          </motion.p>
        </div>
        
        {/* NIEUWE AANPAK: Volledig statische reviews die altijd gevuld zijn */}
        <div className="hidden md:block">
          {/* Rij 1 - schuift naar links */}
          <div className="mb-8 overflow-hidden">
            <StaticReviewsRow reviews={firstHalf} activeIndex={activeReview} direction="left" />
          </div>
          
          {/* Rij 2 - schuift naar rechts */}
          <div className="overflow-hidden">
            <StaticReviewsRow reviews={secondHalf} activeIndex={activeReview} direction="right" />
          </div>
          
          {/* Hover instructie */}
          <div className="text-center mt-8 text-blue-200/60 text-sm">
            <span>Hover over de reviews om te pauzeren</span>
          </div>
        </div>
        
        {/* Mobile review carousel */}
        <div className="md:hidden overflow-x-auto pb-6">
          <div className="flex gap-4 snap-x snap-mandatory w-full max-w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="w-[85vw] flex-shrink-0 snap-center"
              >
                <ReviewCard 
                  review={testimonial} 
                  isActive={activeReview === index}
                />
              </div>
            ))}
          </div>
          
          {/* Carousel dots */}
          <div className="flex justify-center mt-8 space-x-2 overflow-x-auto py-2">
            {testimonials.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeReview === index ? 'bg-blue-500 scale-125' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Ga naar review ${index + 1}`}
              />
            ))}
            <span className="text-white/50 text-xs px-2">...</span>
          </div>
        </div>
        
        {/* Google Reviews button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 px-4"
        >
          <a 
            href="https://www.google.com/search?q=rijschool+willem+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium border border-white/10 transition-all hover:bg-white/15 hover:border-white/20"
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.2,11.1c0-0.8-0.1-1.6-0.2-2.4H12v4.5h5.7c-0.2,1.4-1,2.6-2.1,3.4v2.8h3.4C20.9,17.3,22.2,14.4,22.2,11.1z" fill="#4285F4"/>
                <path d="M12,23c3.2,0,5.8-1,7.7-2.7l-3.4-2.8c-0.9,0.6-2.2,1-3.7,1c-2.8,0-5.3-1.9-6.1-4.6H3v2.9C4.9,20.3,8.2,23,12,23z" fill="#34A853"/>
                <path d="M5.9,13.9c-0.2-0.7-0.4-1.4-0.4-2.2s0.1-1.5,0.4-2.2V6.7H2.9C2.3,8.3,2,10.1,2,12s0.3,3.7,0.9,5.3L5.9,13.9z" fill="#FBBC05"/>
                <path d="M12,5.4c1.6,0,3,0.6,4.1,1.6L19,3.5C17.1,1.7,14.8,0.6,12,0.6C8.2,0.6,4.9,3.3,3,6.7l3,2.3C6.7,7.3,9.2,5.4,12,5.4z" fill="#EA4335"/>
              </svg>
              <span>Bekijk al onze Google Reviews</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection; 