'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, ArrowRightIcon, TruckIcon, PhoneIcon as TrainIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const RouteBeschrijving = () => {
  const transportOptions = [
    {
      id: 'auto',
      icon: <TruckIcon className="h-5 w-5" />,
      title: 'Met de auto',
      details: [
        'Via de A10 West, afslag S106 (Sloterdijk)',
        'Volg borden richting Sloterdijk',
        'Parkeren kan bij het gebouw of in de omliggende straten'
      ],
      color: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    },
    {
      id: 'ov',
      icon: <TrainIcon className="h-5 w-5" />,
      title: 'Met het OV',
      details: [
        'Station Sloterdijk op 10 minuten loopafstand',
        'Buslijn 15 en 22 stoppen voor de deur',
        'Tramhalte op 5 minuten loopafstand'
      ],
      color: 'bg-green-500/20',
      textColor: 'text-green-400'
    },
    {
      id: 'landmark',
      icon: <BuildingLibraryIcon className="h-5 w-5" />,
      title: 'Herkenningspunten',
      details: [
        'Tegenover het blauwe kantoorgebouw',
        'Naast restaurant "De Smakelijke Hap"',
        'Rode luifel bij de ingang'
      ],
      color: 'bg-amber-500/20',
      textColor: 'text-amber-400'
    }
  ];
  
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/80 to-blue-950/80 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/10">
          <MapPinIcon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Routebeschrijving
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-1"></div>
        </div>
      </div>
      
      {/* Adres + kaart link */}
      <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <p className="text-white font-medium">Ottho Heldringstraat 31-D</p>
          <p className="text-blue-200/80">1066 XT Amsterdam</p>
        </div>
        <Link 
          href="https://maps.google.com/?q=Ottho+Heldringstraat+31-D,+1066+XT+Amsterdam" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors duration-300"
        >
          <span>Open in Google Maps</span>
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      {/* Transportopties */}
      <div className="space-y-6">
        {transportOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-colors duration-300 border border-white/10"
          >
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 rounded-lg ${option.color} flex items-center justify-center mr-3 ${option.textColor}`}>
                {option.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{option.title}</h3>
            </div>
            
            <ul className="space-y-2 pl-11">
              {option.details.map((detail, detailIndex) => (
                <motion.li 
                  key={detailIndex}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + (detailIndex * 0.08) }}
                  className="text-blue-100/80 relative"
                >
                  <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      {/* Extra informatie */}
      <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
        <p className="text-sm text-blue-100/80">
          <span className="font-medium text-blue-200">Tip:</span> Navigatie kan soms naar een verkeerde locatie leiden. Zoek naar het gebouw met de rode luifel bij nummer 31-D.
        </p>
      </div>
    </motion.div>
  );
};

export default RouteBeschrijving; 