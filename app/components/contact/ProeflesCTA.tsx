'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProeflesCTA = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-red-600/20 to-red-800/30 p-8 rounded-2xl border border-red-500/20 shadow-xl backdrop-blur-sm relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Dynamische achtergrond effecten */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Animated sparkles */}
      <motion.div 
        className="absolute top-4 right-4 opacity-70"
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 5, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <SparklesIcon className="h-6 w-6 text-yellow-400" />
      </motion.div>
      
      <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-red-500/5 blur-2xl animate-pulse"></div>
      
      <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
        <span className="relative">
          Wil je een rijbewijs halen?
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500/80 to-transparent rounded-full"></div>
        </span>
      </h3>
      <p className="text-blue-100/80 mb-6">
        Begin je rijervaring met een gratis proefles en ontdek hoe wij je kunnen helpen met het behalen van je rijbewijs.
      </p>
      
      <Link href="/gratis-proefles">
        <motion.div 
          className="w-full relative group/button overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 group-hover/button:from-red-700 group-hover/button:to-red-800 transition-all duration-500"></div>
          
          {/* Moving light effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-y-0 -left-[100%] group-hover/button:left-[100%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-700 ease-in-out"></div>
          </div>
          
          <button className="w-full py-4 px-6 bg-transparent relative rounded-xl font-medium text-white flex items-center justify-center">
            <span>Proefles Aanvragen</span>
            <ChevronRightIcon className="h-5 w-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </Link>
      
      <div className="mt-4 pt-4 border-t border-red-500/20">
        <div className="flex items-center text-xs text-blue-100/70">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <span>Gratis en vrijblijvend</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProeflesCTA; 