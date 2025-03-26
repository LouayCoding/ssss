'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

// Confetti component voor de feestelijk effect bij de laatste stap
const Confetti = ({ active }: { active: boolean }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    rotation: number;
    vx: number;
    vy: number;
    vr: number;
    opacity: number;
  }>>([]);
  
  // Confetti kleuren
  const colors = ['#1d4ed8', '#3b82f6', '#60a5fa', '#f87171', '#ef4444', '#fcd34d', '#10b981'];
  
  // Genereer confetti deeltjes wanneer actief
  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }
    
    // Maak 150 confetti deeltjes
    const newParticles = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random positie in % van container breedte
      y: -10 - Math.random() * 20, // start boven scherm
      size: 5 + Math.random() * 15, // random grootte
      color: colors[Math.floor(Math.random() * colors.length)], // random kleur
      rotation: Math.random() * 360, // random rotatie
      vx: -3 + Math.random() * 6, // random x velocity (links/rechts)
      vy: 3 + Math.random() * 5, // random y velocity (altijd naar beneden)
      vr: -3 + Math.random() * 6, // random rotatie snelheid
      opacity: 0.8 + Math.random() * 0.2, // random transparantie
    }));
    
    setParticles(newParticles);
    
    return () => {
      setParticles([]);
    };
  }, [active]);
  
  // Animeer de deeltjes
  useEffect(() => {
    if (particles.length === 0) return;
    
    const interval = setInterval(() => {
      setParticles(prev => {
        // Verplaats alle deeltjes volgens hun snelheid
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx * 0.2,
          y: p.y + p.vy * 0.2,
          rotation: (p.rotation + p.vr) % 360,
          opacity: p.y < 70 ? p.opacity : p.opacity - 0.01, // fade out naarmate ze naar beneden vallen
          vy: p.vy + 0.05, // versnelling door zwaartekracht
        }));
        
        // Verwijder deeltjes die buiten beeld zijn of bijna onzichtbaar
        return updated.filter(p => p.y < 110 && p.opacity > 0.1);
      });
    }, 16); // ongeveer 60fps
    
    return () => {
      clearInterval(interval);
    };
  }, [particles]);
  
  if (!active || particles.length === 0) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            borderRadius: '1px',
            zIndex: 50,
          }}
        />
      ))}
    </div>
  );
};

// Stappen in het proces
const processSteps = [
  {
    id: 1,
    title: 'Aanmelding & Intake',
    description: 'Begin met een vrijblijvende intake. Wij beoordelen je startniveau en stellen een persoonlijk lesplan op.',
    icon: '👋',
    features: [
      'Gratis proefles',
      'Persoonlijk adviesgesprek',
      'Lesplan op maat'
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'rgba(59, 130, 246, 0.03)'
  },
  {
    id: 2,
    title: 'Theorieles & Examen',
    description: 'Leer alle verkeersregels en bereid je voor op het theorie-examen met onze complete theoriecursus.',
    icon: '📚',
    features: [
      'Online theorieoefeningen',
      'Praktijkgerichte uitleg',
      'Examengarantie'
    ],
    color: 'from-blue-600 to-blue-800',
    bgColor: 'rgba(30, 64, 175, 0.03)'
  },
  {
    id: 3,
    title: 'Praktijklessen',
    description: 'Ontwikkel je rijvaardigheid met onze ervaren instructeurs die stap voor stap alle vaardigheden trainen.',
    icon: '🚗',
    features: [
      'Rijlessen van 60 of 90 minuten',
      'Objectieve voortgangsregistratie',
      'Rijles in jouw tempo'
    ],
    color: 'from-red-500 to-red-700',
    bgColor: 'rgba(239, 68, 68, 0.03)'
  },
  {
    id: 4,
    title: 'Tussentijdse Toets',
    description: 'Test je voortgang vrijblijvend met een officiële CBR tussentijdse toets om je examenkansen te vergroten.',
    icon: '📋',
    features: [
      'Officiële CBR-examinator',
      'Vrijstellingen mogelijk',
      'Gerichte feedback'
    ],
    color: 'from-indigo-500 to-indigo-700',
    bgColor: 'rgba(99, 102, 241, 0.03)'
  },
  {
    id: 5,
    title: 'Praktijkexamen & Geslaagd',
    description: 'Je doet praktijkexamen als je er klaar voor bent. Na het behalen ontvang je direct je rijbewijs!',
    icon: '🎉',
    features: [
      'Examentraining vooraf',
      'Gebruik lesauto tijdens examen',
      'Directe aanvraag rijbewijs'
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'rgba(59, 130, 246, 0.03)'
  }
];

// Animatie varianten
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

// Mobile Step Card (nieuwe component speciaal voor mobiel)
const MobileStepCard = ({ step, index, isActive, setActiveStep }: {
  step: typeof processSteps[0],
  index: number,
  isActive: boolean,
  setActiveStep: (index: number) => void
}) => {
  // Alternerende gloed-kleuren (blauw/rood)
  const glowColor = index % 2 === 0 ? 'blue' : 'red';
  
  return (
    <motion.div
      className="relative mb-2"
      variants={itemVariants}
      onClick={() => setActiveStep(index)}
    >
      <div className={`rounded-2xl overflow-hidden backdrop-blur-sm border border-white/15 
        transition-all duration-300 ${isActive ? 'bg-white/10 shadow-lg border-white/20' : 'bg-gray-900/80'}`}>
        
        {/* Hoofdkaart met nummer, icoon, titel */}
        <div className="relative p-4 flex items-center gap-3">
          {/* Grote nummer links */}
          <div className={`relative flex-shrink-0 h-12 w-12 rounded-xl overflow-hidden 
            flex items-center justify-center shadow-md ${isActive 
              ? `bg-gradient-to-br ${glowColor === 'blue' ? 'from-blue-500 to-indigo-600' : 'from-red-500 to-red-700'}` 
              : 'bg-white/5'}`}>
            <span className="text-white text-xl font-bold">{step.id}</span>
            
            {/* Subtiele gloed onder het nummer - nu voor alle stappen */}
            <motion.div 
              className={`absolute inset-0 ${
                  glowColor === 'blue' ? 'bg-blue-400/40' : 'bg-red-400/40'
              } blur-xl -z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? [0.5, 0.8, 0.5] : [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          {/* Icoon en titel */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{step.icon}</span>
              <h3 className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-white/80'}`}>
                {step.title}
              </h3>
            </div>
          </div>
          
          {/* Pijl om aan te geven of het uitgeklapt is */}
          <div className={`w-6 h-6 flex items-center justify-center rounded-full 
            transition-transform duration-300 ${isActive ? 'rotate-180 bg-white/20' : 'bg-white/5'}`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        {/* Uitgeklapte inhoud */}
        {isActive && (
          <div className="px-4 pb-4 pt-1">
            <div className="h-px w-full bg-white/10 mb-3"></div>
            
            <p className="text-blue-100/80 text-sm mb-4">
              {step.description}
            </p>
            
            <ul className="space-y-2">
              {step.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <div className={`p-0.5 rounded-full bg-gradient-to-br ${step.color} flex-shrink-0 mt-1`}>
                    <CheckCircleIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Desktop Step Card
const DesktopStepCard = ({ step, index, isActive, setActiveStep }: { 
  step: typeof processSteps[0], 
  index: number, 
  isActive: boolean,
  setActiveStep: (index: number) => void
}) => {
  // Alternerende gloed-kleuren (blauw/rood)
  const glowColor = index % 2 === 0 ? 'blue' : 'red';
  const glowRgb = glowColor === 'blue' ? '59, 130, 246' : '239, 68, 68';
  
  return (
    <motion.div
      className="relative"
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
      onClick={() => setActiveStep(index)}
    >
      <div 
        className={`cursor-pointer rounded-2xl transition-all duration-500 relative overflow-hidden group`}
      >
        {/* Moderne glasmorphism card */}
        <div className={`absolute inset-0 ${
          isActive 
            ? 'bg-gradient-to-br from-gray-900/70 via-blue-900/40 to-indigo-900/40 backdrop-blur-lg' 
            : 'bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm'
        } transition-all duration-500 z-0`}></div>
        
        {/* Animated borders */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300`} 
          style={{ 
            maskImage: 'linear-gradient(black, black) padding-box, linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            maskClip: 'padding-box, border-box',
            padding: '1px',
          }}>
        </div>
        
        {/* Card content */}
        <div className="p-10 relative z-20">
          {/* Card Background Effects - voor ALLE kaarten, niet alleen actieve */}
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {/* Colorful gradient blobs */}
            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${glowColor === 'blue' ? 'bg-blue-600/10' : 'bg-red-600/10'} blur-[64px]`}></div>
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${glowColor === 'blue' ? 'bg-indigo-600/10' : 'bg-red-600/10'} blur-[64px]`}></div>
            
            {/* Dynamic particles */}
            <div className={`absolute top-10 right-20 w-4 h-4 rounded-full ${glowColor === 'blue' ? 'bg-blue-500/30' : 'bg-red-500/30'} blur-sm animate-float-slow`}></div>
            <div className={`absolute bottom-20 left-10 w-6 h-6 rounded-full ${glowColor === 'blue' ? 'bg-indigo-500/20' : 'bg-red-500/20'} blur-sm animate-float-medium`}></div>
            <div className={`absolute top-1/2 left-1/3 w-3 h-3 rounded-full ${glowColor === 'blue' ? 'bg-blue-400/20' : 'bg-red-400/20'} blur-sm animate-float-fast`}></div>
          </motion.div>
          
          <div className="relative flex items-start gap-8">
            {/* Step number circle - bigger, with animation */}
            <motion.div 
              className={`relative flex-shrink-0 flex items-center justify-center`}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className={`absolute w-28 h-28 rounded-full bg-gradient-to-br ${glowColor === 'blue' ? 'from-blue-500 to-indigo-600' : 'from-red-500 to-red-700'} opacity-10 blur-xl
                transform scale-75 group-hover:scale-100 transition-transform duration-500`}></div>
              
              <div className={`relative w-24 h-24 flex items-center justify-center rounded-full
                border-2 ${isActive ? 'border-white/20' : 'border-white/5'} overflow-hidden
                shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(${glowRgb},0.3)]`}>
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`}></div>
                
                {/* Icon */}
                <span className="text-4xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </span>
                
                {/* Animated ring effect - nu voor alle stappen */}
                <motion.div 
                  className={`absolute inset-0 border-8 border-white/5 rounded-full ${isActive ? 'opacity-100' : 'opacity-30'}`}
                  initial={{ scale: 0.5, opacity: isActive ? 0.8 : 0.2 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Cool shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 
                group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
              </div>
              
              {/* Step number badge - VEEL GROTER EN INTERACTIEVER */}
              <motion.div 
                className={`absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center
                  shadow-lg z-10 transition-all duration-300 ${isActive 
                    ? `bg-gradient-to-br ${glowColor === 'blue' ? 'from-blue-500 to-indigo-600' : 'from-red-500 to-red-700'}` 
                    : 'bg-white'}`}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5, rotate: { duration: 0.3, repeat: 0 } }
                }}
              >
                <span className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                  {step.id}
                </span>
                
                {/* Pulserende ring voor alle stappen, sterker voor actieve */}
                <motion.div 
                  className={`absolute inset-0 rounded-full border-2 ${glowColor === 'blue' ? 'border-blue-400' : 'border-red-400'}`}
                  initial={{ scale: 1, opacity: isActive ? 0.8 : 0.3 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
            
            <div className="space-y-6 flex-1 pt-2">
              {/* Title with animated underline */}
              <div className="relative">
                <h3 className={`text-2xl font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                  {step.title}
                </h3>
                <motion.div 
                  className={`h-[2px] bg-gradient-to-r ${step.color} mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  style={{ width: '40%' }}
                />
              </div>
              
              <p className="text-blue-100/80 text-base">
                {step.description}
              </p>
              
              {/* Features lijst met verbeterde checkmarks */}
              <ul className="space-y-4 pt-2">
                {step.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-start gap-3 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                  >
                    <div className={`p-1.5 rounded-full bg-gradient-to-br ${step.color} flex-shrink-0 mt-0.5
                      transition-all duration-300 transform ${isActive ? 'opacity-100' : 'opacity-70'} group-hover/item:scale-110`}>
                      <CheckCircleIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className={`text-blue-50 transition-all duration-300 
                      ${isActive ? 'text-white' : 'text-blue-100/90'} group-hover/item:translate-x-1`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Discreted "learn more" on hover */}
              <div className="mt-4 overflow-hidden h-6">
                <motion.div
                  className="flex items-center text-blue-400 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <span>Klik voor meer info</span>
                  <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reflection effect under card */}
      {isActive && (
        <div className="absolute left-1/2 -bottom-6 -z-10 w-3/4 h-16 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent rounded-full blur-xl transform -translate-x-1/2"></div>
      )}
    </motion.div>
  );
};

// Hoofdcomponent
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Effect voor confetti bij laatste stap
  useEffect(() => {
    // Check of de laatste stap actief is (index 4 = stap 5)
    if (activeStep === 4) {
      setShowConfetti(true);
      // Verberg confetti na 5 seconden
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);
  
  // Verbeterde scroll-detectie
  React.useEffect(() => {
    // Functie om te bepalen welke stap in beeld is
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;
      const stepElements = sectionRef.current.querySelectorAll('.step-indicator');
      
      // Zorg dat we eerst zichtbaar zijn in de viewport
      if (sectionRect.top > windowHeight || sectionRect.bottom < 0) return;
      
      // Bereken welke stap het meest in beeld is
      let closestStep = 0;
      let smallestDistance = Infinity;
      
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Afstand tot het midden van het scherm
        const distance = Math.abs(rect.top + rect.height/2 - windowHeight/2);
        
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestStep = index;
        }
      });
      
      // Stel de actieve stap in
      setActiveStep(closestStep);
    };
    
    // Voeg scroll event listener toe
    window.addEventListener('scroll', handleScroll);
    
    // Trigger direct om de eerste stap te bepalen
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 w-full overflow-hidden">
      {/* Confetti effect */}
      <Confetti active={showConfetti} />
      
      {/* Decoratieve elementen */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-red-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>
      
      {/* Extra animated elements for desktop */}
      <div className="hidden md:block">
        <div className="absolute top-1/4 left-20 w-2 h-2 rounded-full bg-blue-400 blur-sm animate-float-slow"></div>
        <div className="absolute top-1/3 right-40 w-3 h-3 rounded-full bg-indigo-400 blur-sm animate-float-medium"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-blue-500 blur-sm animate-float-fast"></div>
      </div>
      
      {/* Achtergrond patronen */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-medium
              shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              In 5 stappen
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Zo haal je je <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Rijbewijs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100/80 max-w-2xl mx-auto text-lg"
          >
            Ons stappenplan voor een vlotte en effectieve rijopleiding. Van aanmelding tot het behalen van je rijbewijs.
          </motion.p>
        </div>

        {/* MOBILE VERSION - Stappenkaarten voor kleine schermen */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mb-12"
          >
            {processSteps.map((step, index) => (
              <MobileStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                setActiveStep={setActiveStep}
              />
            ))}
          </motion.div>
        </div>

        {/* DESKTOP VERSION - Interactieve tijdlijn met zigzag layout */}
        <div className="hidden md:block mb-16 mt-24 relative">
          {/* Centrale verbindingslijn met verbeterde styling */}
          <div className="absolute top-12 bottom-12 left-1/2 transform -translate-x-1/2 w-1.5 
            bg-gradient-to-b from-blue-600/0 via-blue-500/50 to-blue-600/0 z-0"></div>
          
          {/* Animated dots along the line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Meer en grotere stippen langs de lijn */}
            {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((position, i) => (
              <motion.div 
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-glow-sm -translate-x-1/2"
                style={{ top: `${position * 100}%` }}
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </motion.div>
          
          {/* Interactieve stappenlijst */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full flex flex-col space-y-28 relative z-10"
          >
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Stapindicators op de centrale lijn met verbetering */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[10px] z-20">
                  <motion.div 
                    className={`step-indicator w-16 h-16 rounded-full border-4 ${
                      activeStep === index 
                        ? `border-${index % 2 === 0 ? 'blue-500' : 'red-500'}`
                        : 'border-gray-900'
                      } flex items-center justify-center
                      transition-all duration-500 shadow-2xl cursor-pointer ${
                      activeStep === index 
                        ? `bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-indigo-600' : 'from-red-500 to-red-700'} shadow-[0_0_30px_rgba(${
                          index % 2 === 0 ? '59,130,246' : '239,68,68'
                        },0.6)]` 
                        : 'bg-white/10 hover:bg-white/20'}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5, rotate: { duration: 0.3, repeat: 0 } }
                    }}
                    viewport={{ once: true }}
                    onClick={() => setActiveStep(index)}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-2xl">{step.id}</span>
                    
                    {/* Pulsating ring effect for all steps */}
                    <motion.div 
                      className={`absolute inset-0 rounded-full border-2 ${index % 2 === 0 ? 'border-blue-400' : 'border-red-400'}`}
                      initial={{ scale: 1, opacity: activeStep === index ? 0.8 : 0.3 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    {activeStep === index && (
                      <motion.div 
                        className={`absolute inset-0 rounded-full border-2 ${index % 2 === 0 ? 'border-blue-400' : 'border-red-400'}`}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    )}
                  </motion.div>
                </div>
                
                {/* Desktop zigzag layout with improved spacing */}
                <div className={`grid grid-cols-12 gap-8 ${index % 2 === 1 ? 'grid-flow-dense' : ''}`}>
                  <div className={`col-span-6 ${index % 2 === 1 ? 'col-start-7' : 'col-start-1'}`}>
                    <DesktopStepCard 
                      step={step} 
                      index={index} 
                      isActive={activeStep === index}
                      setActiveStep={setActiveStep}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA onderaan de sectie - met verbeteringen */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <div className="relative inline-block">
            {/* Decoratieve elementen rond de knop */}
            <div className="absolute -left-8 -top-6 w-4 h-4 rounded-full bg-blue-500/30 blur-sm"></div>
            <div className="absolute -right-10 -bottom-8 w-6 h-6 rounded-full bg-indigo-500/20 blur-sm"></div>
            
            <motion.a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 
                text-white font-medium text-lg shadow-[0_8px_25px_-8px_rgba(59,130,246,0.5)]
                relative overflow-hidden group z-10"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 8px 35px -5px rgba(59,130,246,0.6)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animerende glans-effect bij hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Vandaag Nog</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 