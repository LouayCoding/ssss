'use client';

import { motion, useInView, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sophie de Vries",
    role: "Cursist - Geslaagd in één keer",
    text: "Dankzij de persoonlijke aanpak van mijn instructeur heb ik mijn rijbewijs in één keer gehaald! Heel tevreden over de lessen.",
    avatar: "/avatar-placeholder.png" // Zal een placeholder gebruiken
  },
  {
    id: 2,
    name: "Thomas Jansen",
    role: "Cursist - Geslaagd na 25 lessen",
    text: "Goede rijschool met professionele instructeurs. Flexibele planning en duidelijke uitleg. Echt een aanrader!",
    avatar: "/avatar-placeholder.png"
  },
  {
    id: 3,
    name: "Emma Bakker",
    role: "Cursist - Geslaagd in één keer",
    text: "Perfecte begeleiding gehad tijdens mijn rijlessen. Ik voelde me goed voorbereid voor het examen en ben in één keer geslaagd.",
    avatar: "/avatar-placeholder.png"
  },
  {
    id: 4,
    name: "Lars van Dijk",
    role: "Cursist - Geslaagd na spoedcursus",
    text: "De spoedcursus was intensief maar zeer effectief. Heb veel geleerd in korte tijd en ben met vertrouwen op examen gegaan.",
    avatar: "/avatar-placeholder.png"
  }
];

// Functie voor het renderen van sterren - vervang deze functie
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 < 0.8;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Volle sterren
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`full-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  
  // Halve ster indien nodig - verbeterde versie
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 overflow-hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ clipPath: 'inset(0 50% 0 0)' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      </div>
    );
  }
  
  // Lege sterren
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  
  return stars;
};

// Random testimonial quote
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  return {
    text: testimonials[randomIndex].text,
    name: testimonials[randomIndex].name
  };
};

// Testimonials slider animatie varianten
const testimonialVariants: Variants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: { 
    opacity: 1, 
    height: 'auto', 
    y: 0,
    transition: {
      height: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      },
      opacity: { duration: 0.25, delay: 0.15 },
      y: { duration: 0.25, delay: 0.15 }
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    y: -10,
    transition: {
      height: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      },
      opacity: { duration: 0.2 },
      y: { duration: 0.2 }
    }
  }
};

// Voeg deze nieuwe animatie varianten toe aan de bestaande varianten in de Hero component
const buttonVariants = {
  initial: { 
    scale: 1, 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  }
};

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [randomQuote, setRandomQuote] = useState(() => getRandomQuote());
  const [showQuoteBubble, setShowQuoteBubble] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const ratingRef = useRef(null);
  const isInView = useInView(ratingRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      // Toon de quote bubble na een korte vertraging
      const timer = setTimeout(() => {
        setShowQuoteBubble(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView, controls]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const handleToggleTestimonials = () => {
    setShowTestimonials(!showTestimonials);
    if (!showTestimonials) {
      setSelectedTestimonial(1); // Selecteer de eerste testimonial bij openen
    } else {
      setSelectedTestimonial(null);
    }
  };

  return (
    <div className="relative text-white overflow-hidden min-h-[90vh] flex items-center pt-16 pb-12">
      {/* Achtergrond verwijderd - we gebruiken nu de gemeenschappelijke achtergrond op paginaniveau */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Rechter kolom: Afbeelding - verbeterde hoogte en positie voor mobiel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="relative order-1 md:order-2 mb-4 md:mb-0"
          >
            <div className="relative h-[220px] xs:h-[280px] sm:h-[320px] md:h-[420px] lg:h-[550px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] dark:shadow-[0_20px_50px_rgba(2,_18,_64,_0.5)]">
              {imageError ? (
                // Fallback wanneer de externe afbeelding niet kan worden geladen
                <div className="w-full h-full bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-blue-900 dark:via-gray-800 dark:to-gray-900 relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <motion.div 
                      className="relative flex items-center justify-center w-24 h-24 mb-4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    >
                      <div className="absolute inset-0 rounded-full bg-blue-600/30 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full bg-blue-600/30 animate-pulse"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </motion.div>
                    <motion.p 
                      className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      Professionele rijlessen
                    </motion.p>
                    <motion.p 
                      className="mt-3 text-sm sm:text-base leading-relaxed max-w-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      Leer autorijden in een ontspannen sfeer met een ervaren instructeur. 
                      Bij ons krijg je persoonlijke begeleiding op maat.
                    </motion.p>
                  </div>
                </div>
              ) : (
                // Probeer externe afbeelding te laden - geen overlays of gradiënten
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Rijlessen bij Rijschool Expert"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="rounded-2xl"
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
              
              {/* Floating badges - kleiner en compacter voor mobiel */}
              <motion.div 
                className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="bg-black/80 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] xs:text-xs font-medium flex items-center shadow-md">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    CBR
                  </div>
                  <div className="hidden sm:flex bg-red-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] xs:text-xs font-medium items-center shadow-md">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Vanaf €42,50
                  </div>
                </div>
              </motion.div>
              
              {/* Bottom info - vereenvoudigd voor mobiel */}
              <motion.div 
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex justify-between items-end">
                  <div>
                    {/* Slagingspercentage verborgen op kleinere schermen */}
                    <div className="hidden sm:block text-white text-sm font-medium mb-1 bg-black/70 px-3 py-1 rounded-lg inline-block">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="font-bold">98% slagingspercentage</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">Snel & Betrouwbaar</h3>
                  </div>
                  
                  <motion.div 
                    className="bg-blue-600 text-white py-1 sm:py-1.5 md:py-2 px-2.5 sm:px-3 md:px-4 rounded-full font-medium flex items-center text-xs sm:text-sm shadow-lg"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Direct starten</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Linker kolom: Tekst en CTA met verbeterde styling voor mobiel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 md:space-y-10 order-2 md:order-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 text-[10px] sm:text-xs font-medium text-blue-100 mb-2 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex items-center mr-1">
                  <svg className="w-3 h-3 mr-1 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CBR Erkend</span>
                </span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30 mx-1"></span>
                <span className="text-[10px] sm:text-xs">100% Slagingsgarantie</span>
              </motion.div>

              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
              >
                HAAL JE RIJBEWIJS
              </motion.h1>
              
              {/* Tekstregel met BESTE - compacter voor mobiel */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2, 
                  duration: 0.8, 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
              >
                <div className="inline-block relative">
                  <span className="relative z-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white" 
                    style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.2)" }}>
                    MET DE <motion.span 
                      className="inline-flex items-center relative z-10 text-white px-2 sm:px-3 py-0.5 sm:py-1 mx-1"
                      initial={{ scale: 0.8 }}
                      animate={{ 
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <span className="relative z-20">BESTE</span>
                      <motion.span 
                        className="absolute inset-0 bg-secondary rounded-md -skew-x-6 z-10" 
                        animate={{
                          boxShadow: ["0px 4px 12px rgba(220, 38, 38, 0.4)", "0px 8px 20px rgba(220, 38, 38, 0.6)", "0px 4px 12px rgba(220, 38, 38, 0.4)"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.span> INSTRUCTEURS
                  </span>
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-white/5 dark:bg-white/5 backdrop-blur-[2px] rounded-md -z-10"
                    style={{ 
                      transform: "translate(8px, 8px)",
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)"
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Descriptieve tekst - korter voor mobiel */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-blue-100 dark:text-gray-300 max-w-lg leading-relaxed border-l-4 sm:border-l-[6px] border-secondary pl-3 sm:pl-4 md:pl-5 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.1)" }}
            >
              <motion.span
                className="absolute top-0 left-0 w-1 h-full bg-secondary/60"
                animate={{
                  height: ["0%", "100%", "0%"],
                  top: ["0%", "0%", "100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              ></motion.span>
              Slaag in één keer met onze ervaren instructeurs. Persoonlijke begeleiding 
              en flexibele lespakketten voor jouw rijsucces.
            </motion.p>
            
            {/* CTA knoppen - geoptimaliseerd voor mobiel */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4 sm:pt-6 md:pt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} custom={0} className="w-full sm:w-auto">
                <motion.div
                  className="group relative"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Link 
                    href="/pakketten" 
                    className="relative z-10 flex items-center justify-center w-full sm:w-auto px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4.5 rounded-xl bg-blue-600 dark:bg-blue-700 text-white font-semibold transition-colors border-2 border-blue-500/80 dark:border-blue-600/80 shadow-md text-sm sm:text-base overflow-hidden group-hover:border-blue-400 dark:group-hover:border-blue-500"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    />
                    <span className="relative z-20 flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>Bekijk pakketten</span>
                    </span>
                  </Link>
                  <div className="absolute inset-0 rounded-xl bg-blue-400/20 dark:bg-blue-500/20 blur-md transform translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-200"></div>
                </motion.div>
              </motion.div>
              
              <motion.div variants={fadeInUp} custom={1} className="w-full sm:w-auto">
                <motion.div
                  className="group relative"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Link 
                    href="/gratis-proefles" 
                    className="relative z-10 flex items-center justify-center w-full sm:w-auto px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4.5 rounded-xl bg-secondary text-white font-semibold transition-colors border-2 border-secondary/80 shadow-md text-sm sm:text-base overflow-hidden group-hover:border-red-400"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-secondary dark:from-red-600 dark:to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    />
                    <span className="relative z-20 flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Gratis proefles</span>
                    </span>
                  </Link>
                  <div className="absolute inset-0 rounded-xl bg-red-400/20 dark:bg-red-500/20 blur-md transform translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-200"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 