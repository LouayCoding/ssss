'use client';

import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-6 md:mb-10 relative"
    >
      {/* Subtielere decoratieve elementen */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="inline-block relative mb-0 md:mb-1">
        <SparklesIcon className="h-4 w-4 md:h-6 md:w-6 text-blue-400 absolute -top-3 -left-3 md:-top-4 md:-left-4 animate-pulse hidden md:block" />
        <span className="text-xs md:text-sm uppercase tracking-wider font-medium bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
          Amsterdamse Verkeersopleidingen
        </span>
      </div>
      
      {/* Kleinere titel op mobiel */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-3 md:mb-5 leading-tight">
        Neem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Contact</span> Op
      </h1>
      
      <div className="relative">
        <p className="text-sm md:text-base lg:text-lg text-blue-200/90 max-w-md mx-auto leading-relaxed px-4 md:px-0">
          Wij staan klaar om al je vragen te beantwoorden en je te helpen met het vinden van de juiste rijopleiding.
        </p>
        <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent hidden md:block"></div>
      </div>
    </motion.div>
  );
};

export default ContactHeader; 