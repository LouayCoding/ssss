'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// USP data
const usps = [
  {
    id: 1,
    title: '84% Slagingspercentage',
    description: 'Ruim boven het landelijk gemiddelde dankzij onze effectieve methode',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    id: 2,
    title: 'Geen Wachttijden',
    description: "Direct starten zonder lange wachtlijsten bij één van onze instructeurs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-800',
    accentColor: 'from-blue-600/20 to-blue-800/20',
  },
  {
    id: 3,
    title: 'Geen Inschrijfgeld',
    description: "Tijdelijke actie: schrijf je nu in zonder inschrijfkosten en bespaar direct",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-red-500 to-red-700',
    accentColor: 'from-red-500/20 to-red-700/20',
  },
  {
    id: 4,
    title: 'Diverse Rijopleidingen',
    description: "Auto, motor, bromfiets of aanhangwagen: complete opleidingen voor elk rijbewijs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    color: 'from-indigo-500 to-indigo-700',
    accentColor: 'from-indigo-500/20 to-indigo-700/20',
  },
  {
    id: 5,
    title: 'Flexibele Lesmomenten',
    description: "Lessen in het weekend, 's avonds of overdag - wij passen ons aan jouw schema aan",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'from-blue-500/20 to-indigo-600/20',
  },
];

const USPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Verwijder alle achtergrond-gerelateerde stijlen */}
      <div className="container mx-auto px-6 lg:px-8">
        {/* Moderne titel sectie - consistent met andere secties */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-medium">
              Onze voordelen
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Waarom kiezen <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">voor ons?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100/80 max-w-2xl mx-auto text-lg"
          >
            Leer autorijden bij een rijschool die zich onderscheidt door kwaliteit, 
            flexibiliteit en een hoog slagingspercentage.
          </motion.p>
        </div>

        {/* Moderne USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8" ref={ref}>
          {usps.map((usp, index) => (
            <motion.div
              key={usp.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.2,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              {/* Glassmorphism card - aangepast voor donkere achtergrond */}
              <div className="relative backdrop-blur-md bg-white/10 rounded-2xl p-6 h-full border border-white/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                {/* Animated glow effect */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${usp.accentColor} blur-xl opacity-70 -z-10 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out`}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-2xl -z-10 group-hover:scale-125 transition-all duration-700 ease-out"></div>

                {/* Content */}
                <div className="flex items-start space-x-5 relative z-10">
                  {/* Modern icon in gradient circle */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${usp.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {usp.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {usp.title}
                    </h3>
                    <p className="text-blue-100/90 text-sm leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </div>

                {/* Bottom line animation on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                  <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${usp.color} transition-all duration-300 ease-out`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Moderne en subtiele CTA sectie - aangepast voor donkere achtergrond */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a 
            href="/rijlessen" 
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/10"
          >
            <span>Ontdek al onze rijlessen</span>
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection; 