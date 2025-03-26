'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

// Reviews data
const allReviews = [
  {
    id: 1,
    name: "Caspar Lobbrecht",
    review: "Ik kijk met een heel positief gevoel terug op Amsterdamse Verkeersopleidingen. Mijn instructeur Brahim heeft mij zeer zorgvuldig en professioneel voorbereid op zowel mijn tussentijdse toets als mijn praktijkexamen. Het gevolg was dat ik in een keer ben geslaagd! Ik beveel deze rijschool aan iedereen aan!",
    rating: 5,
    date: "Een maand geleden",
    source: "Google Reviews",
    category: "auto"
  },
  {
    id: 2,
    name: "Keri van Douwen",
    review: "Hele fijne rijschool! Jaren geleden haalde ik succesvol mijn autorijbewijs bij AVO. Genoeg reden dus om terug te komen voor motorlessen. Binnen een paar maanden is nu ook categorie A (in één keer) bijgeschreven. Dank aan Yüksel voor alle leuke lessen en het meestrijden in koud weer.",
    rating: 5,
    date: "Drie maanden geleden",
    source: "Google Reviews",
    category: "motor"
  },
  {
    id: 3,
    name: "Laura Bergema",
    review: "Ik ben erg tevreden met Amsterdamse Verkeersopleidingen. Na een slechte ervaring bij een andere rijschool ben ik overgestapt en dat was de beste beslissing! In relatief korte tijd ben ik door Chris klaargestoomd voor het CBR-examen en in één keer geslaagd!",
    rating: 5,
    date: "Twee maanden geleden",
    source: "Google Reviews",
    category: "auto"
  },
  {
    id: 4,
    name: "Stefan de Groot",
    review: "Dankzij de spoedcursus van Amsterdamse Verkeersopleidingen heb ik in slechts 3 weken mijn rijbewijs kunnen halen! De intensieve aanpak en de persoonlijke aandacht van mijn instructeur waren precies wat ik nodig had. Top service!",
    rating: 5,
    date: "Een maand geleden",
    source: "Google Reviews",
    category: "auto"
  },
  {
    id: 5,
    name: "Marleen Visser",
    review: "Na twee keer gezakt te zijn bij een andere rijschool, ben ik overgestapt naar AVO. Het verschil was meteen duidelijk. De instructie was veel gestructureerder en er werd echt gekeken waar mijn zwakke punten lagen. Het resultaat: in één keer geslaagd!",
    rating: 5,
    date: "Vijf maanden geleden",
    source: "Google Reviews",
    category: "auto"
  },
  {
    id: 6,
    name: "Dennis van Houten",
    review: "Ik had al een tijdje mijn autorijbewijs en besloot eindelijk mijn aanhangwagenrijbewijs (BE) te halen. De specialistische kennis van AVO op dit gebied was indrukwekkend. In vier lessen heb ik alles geleerd wat ik moest weten en ik ben meteen geslaagd.",
    rating: 5,
    date: "Zes maanden geleden",
    source: "Google Reviews",
    category: "aanhanger"
  }
];

// Functie voor het renderen van sterren
const RenderStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`full-${i}`} className="h-4 w-4 text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half-star" className="relative h-4 w-4">
        <StarIcon className="absolute inset-0 text-gray-300" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <StarIcon className="text-yellow-400" />
        </div>
      </div>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }

  return <div className="flex space-x-1">{stars}</div>;
};

// Review Card Component
const ReviewCard = ({ review, isActive }: { review: typeof allReviews[0], isActive: boolean }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`p-6 rounded-2xl border shadow-md h-full transition-all duration-300 ${
        isActive
          ? 'bg-blue-900/40 border-blue-500/30 shadow-blue-900/20'
          : 'bg-gray-900/60 border-gray-700/30'
      }`}
    >
      {/* Review Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-white text-lg">{review.name}</h3>
          <RenderStars rating={review.rating} />
        </div>
        <div className="text-xs text-gray-400 text-right">
          <p>{review.date}</p>
          <p>{review.source}</p>
        </div>
      </div>
      
      {/* Review content */}
      <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">{review.review}</p>
    </motion.div>
  );
};

// Reviews Row Component
const ReviewsRow = ({ reviews }: { reviews: typeof allReviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <ReviewCard key={review.id} review={review} isActive={index === 0} />
      ))}
    </div>
  );
};

interface ReviewsSectionProps {
  rijbewijsType?: string;
  titel?: string;
  ondertitel?: string;
  isFullWidth?: boolean;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rijbewijsType = "auto",
  titel = "Wat onze cursisten zeggen",
  ondertitel = "Ervaringen van leerlingen",
  isFullWidth = false
}) => {
  // Filter reviews per rijbewijstype of toon algemene reviews
  const filteredReviews = rijbewijsType 
    ? allReviews.filter(review => review.category === rijbewijsType)
    : allReviews;
  
  // Altijd 6 reviews tonen, aanvullen met algemene reviews indien nodig
  let reviewsToShow = [...filteredReviews];
  
  // Als er minder dan 6 reviews zijn voor dit type, vul aan met andere reviews
  if (reviewsToShow.length < 6) {
    // Eerst de algemene auto reviews toevoegen als die nog niet in de lijst zitten
    const autoReviews = allReviews.filter(r => 
      r.category === "auto" && !reviewsToShow.some(fr => fr.id === r.id)
    );
    
    // Vervolgens andere categorieën toevoegen indien nodig
    const otherReviews = allReviews.filter(r => 
      r.category !== rijbewijsType && r.category !== "auto" && 
      !reviewsToShow.some(fr => fr.id === r.id)
    );
    
    // Combineren en maximaal 6 reviews nemen
    reviewsToShow = [...reviewsToShow, ...autoReviews, ...otherReviews].slice(0, 6);
  } else if (reviewsToShow.length > 6) {
    // Als er meer dan 6 zijn, beperk tot 6
    reviewsToShow = reviewsToShow.slice(0, 6);
  }

  return (
    <section className="py-16 lg:py-24 w-full relative overflow-hidden">
      {/* Verwijder de achtergrond decoratie om de pagina-gradient beter te laten zien */}
      
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
            <h3 className="text-lg text-blue-400 font-semibold mb-2">{ondertitel}</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {titel}
            </h2>
            <p className="text-blue-100/80 max-w-2xl">
              Lees wat onze leerlingen te zeggen hebben over hun ervaringen met het behalen van hun {rijbewijsType.charAt(0).toUpperCase() + rijbewijsType.slice(1)}-rijbewijs bij Amsterdamse Verkeersopleidingen.
            </p>
          </motion.div>
          
          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <ReviewsRow reviews={reviewsToShow} />
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 text-left"
          >
            <p className="text-lg text-blue-100/80 mb-6">
              Wil jij ook bij ons je {rijbewijsType.charAt(0).toUpperCase() + rijbewijsType.slice(1)}-rijbewijs halen? Begin met een vrijblijvende proefles!
            </p>
            <Link href="/gratis-proefles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300"
              >
                Gratis Proefles Aanvragen
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 