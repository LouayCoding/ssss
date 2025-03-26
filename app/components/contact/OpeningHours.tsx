'use client';

import { motion } from 'framer-motion';
import { ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const OpeningHours = () => {
  const openingHours = [
    { day: 'Maandag', hours: '09:00 - 17:00', isCurrentDay: false },
    { day: 'Dinsdag', hours: '09:00 - 17:00', isCurrentDay: true },
    { day: 'Woensdag', hours: '09:00 - 17:00', isCurrentDay: false },
    { day: 'Donderdag', hours: '09:00 - 17:00', isCurrentDay: false },
    { day: 'Vrijdag', hours: '09:00 - 17:00', isCurrentDay: false },
    { day: 'Zaterdag', hours: '09:00 - 15:00', isCurrentDay: false },
    { day: 'Zondag', hours: 'Gesloten', isCurrentDay: false }
  ];

  // Dynamisch bepalen welke dag het vandaag is in de echte implementatie
  // Bijvoorbeeld door:
  // const today = new Date().getDay(); // 0 is zondag, 1 is maandag, etc.
  // En dan de isCurrentDay flag zetten op basis daarvan

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/80 to-blue-950/80 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/10">
          <ClockIcon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Onze Openingstijden
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-1"></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {openingHours.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`flex justify-between p-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
              item.isCurrentDay
                ? 'bg-blue-500/20 border border-blue-500/40'
                : item.day === 'Zondag'
                ? 'bg-red-500/10 border border-red-500/20'
                : index % 2 === 0
                ? 'bg-white/5 hover:bg-white/10'
                : 'bg-white/10 hover:bg-white/15'
            }`}
          >
            {/* Current day indicator */}
            {item.isCurrentDay && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-xs text-blue-300">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-1.5"></div>
                <span>Vandaag</span>
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              <span className={`font-medium 
                ${item.isCurrentDay ? 'text-blue-200' : 
                  item.day === 'Zondag' ? 'text-red-200' : 'text-white'}`}>
                {item.day}
              </span>
            </div>
            <span className={`pr-20
              ${item.isCurrentDay ? 'text-blue-300 font-medium' : 
                item.day === 'Zondag' ? 'text-red-200' : 'text-blue-200'}`}>
              {item.hours}
            </span>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
        <p className="text-sm text-blue-100/80">
          <span className="font-medium text-blue-200">Let op:</span> Op nationale feestdagen kunnen onze openingstijden afwijken. Neem contact met ons op voor actuele informatie.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <Link href="/gratis-proefles">
          <motion.button 
            className="py-3 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg inline-flex items-center group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-0 bottom-0 -left-[100%] w-1/3 h-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[25deg]"></div>
            </div>
            
            <span className="relative z-10">Plan direct je rijles in</span>
            <ChevronRightIcon className="relative z-10 h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes shine {
          from {
            left: -100%;
          }
          to {
            left: 100%;
          }
        }
        
        .animate-shine {
          animation: shine 1.2s forwards;
        }
      `}</style>
    </motion.div>
  );
};

export default OpeningHours; 