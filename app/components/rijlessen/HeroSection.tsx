'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheckIcon, ClockIcon, SparklesIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';

interface RijlesHeroProps {
  titel: string;
  ondertitel: string;
  beschrijving: string[];
  rijbewijsType: string;
  achtergrondAfbeelding?: string;
  isFullWidth?: boolean;
  USPs?: { tekst: string; icon: React.ReactNode }[];
}

const RijlesHero: React.FC<RijlesHeroProps> = ({
  titel,
  ondertitel,
  beschrijving,
  rijbewijsType,
  achtergrondAfbeelding,
  isFullWidth = false,
  USPs = [
    { tekst: "CBR erkende rijschool", icon: <ShieldCheckIcon className="h-4 w-4" /> },
    { tekst: "84% slagingspercentage", icon: <SparklesIcon className="h-4 w-4" /> },
    { tekst: "Flexibele lestijden", icon: <ClockIcon className="h-4 w-4" /> },
    { tekst: "Betaalbare pakketten", icon: <CurrencyEuroIcon className="h-4 w-4" /> }
  ]
}) => {
  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-24 lg:pb-40 relative">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 ${isFullWidth ? 'w-full max-w-none' : ''}`}>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Linker kolom - Tekst inhoud */}
            <div className="text-left">
              {/* Badges bovenaan */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-start gap-2 mb-4 relative z-30"
              >
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/30 text-blue-200 border border-blue-500/40">
                  {rijbewijsType.charAt(0).toUpperCase() + rijbewijsType.slice(1)}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-700/50 text-gray-200 border border-gray-600/40">
                  Rijbewijs B
                </span>
                {rijbewijsType === "Schakel" && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-200 border border-red-500/40">
                    Handgeschakeld
                  </span>
                )}
                {rijbewijsType === "Automaat" && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-600/30 text-green-200 border border-green-500/40">
                    Automatisch
                  </span>
                )}
                {rijbewijsType === "Motor" && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/30 text-purple-200 border border-purple-500/40">
                    A1/A2/A
                  </span>
                )}
                {rijbewijsType === "Aanhangwagen" && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/30 text-amber-200 border border-amber-500/40">
                    Rijbewijs BE
                  </span>
                )}
                {rijbewijsType === "Bromfiets" && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-600/30 text-cyan-200 border border-cyan-500/40">
                    Rijbewijs AM
                  </span>
                )}
              </motion.div>
              
              {/* Hoofdtitel */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight relative z-30"
              >
                {titel}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  {" "}
                  {ondertitel}
                </span>
              </motion.h1>
              
              {/* Beschrijving */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-blue-100/80 max-w-3xl mb-8 relative z-30"
              >
                {beschrijving.map((paragraaf, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraaf}
                  </p>
                ))}
              </motion.div>
              
              {/* CTA knoppen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-start gap-4 mb-8 relative z-30"
              >
                <Link href="/gratis-proefles">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Gratis Proefles
                    </span>
                  </motion.button>
                </Link>
                
                <Link href="#prijzen">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 shadow-lg transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    Bekijk Tarieven
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* USPs in horizontale layout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-4 relative z-30"
              >
                {USPs.map((usp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2 text-white/80"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                      {usp.icon}
                    </div>
                    <span className="text-sm font-medium">{usp.tekst.charAt(0).toUpperCase() + usp.tekst.slice(1)}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Rechter kolom - Visueel element */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex justify-center items-center relative z-30"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Decoratieve cirkel animatie */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    transition: { duration: 40, repeat: Infinity, ease: 'linear' }
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
                ></motion.div>
                
                <motion.div 
                  animate={{ 
                    rotate: -360,
                    transition: { duration: 30, repeat: Infinity, ease: 'linear' }
                  }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-red-500/30"
                ></motion.div>
                
                {/* Centrale element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-900/40 backdrop-blur-sm flex flex-col items-center justify-center border border-white/20 shadow-lg text-center p-4"
                  >
                    {rijbewijsType === "Schakel" ? (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">84%</div>
                        <div className="text-blue-200 text-sm">Slagingspercentage</div>
                        <div className="mt-1 text-xs text-blue-200/70">Voor handgeschakelde auto's</div>
                        <div className="mt-2 text-[10px] text-blue-200/50">Ver boven landelijk gemiddelde</div>
                      </>
                    ) : rijbewijsType === "Automaat" ? (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">88%</div>
                        <div className="text-blue-200 text-sm">Slagingspercentage</div>
                        <div className="mt-1 text-xs text-blue-200/70">Voor automaat rijbewijs</div>
                        <div className="mt-2 text-[10px] text-blue-200/50">Eenvoudiger & sneller slagen</div>
                      </>
                    ) : rijbewijsType === "Motor" ? (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">82%</div>
                        <div className="text-blue-200 text-sm">Slagingspercentage</div>
                        <div className="mt-1 text-xs text-blue-200/70">Voor motorrijbewijs</div>
                        <div className="mt-2 text-[10px] text-blue-200/50">Voor AVB en AVD samen</div>
                      </>
                    ) : rijbewijsType === "Aanhangwagen" ? (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">1 dag</div>
                        <div className="text-blue-200 text-sm">Complete opleiding</div>
                        <div className="mt-1 text-xs text-blue-200/70">BE rijbewijs in één dag</div>
                        <div className="mt-2 text-[10px] text-blue-200/50">Van training tot examen</div>
                      </>
                    ) : rijbewijsType === "Bromfiets" ? (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">1 dag</div>
                        <div className="text-blue-200 text-sm">Complete opleiding</div>
                        <div className="mt-1 text-xs text-blue-200/70">AM rijbewijs in één dag</div>
                        <div className="mt-2 text-[10px] text-blue-200/50">Van training tot examen</div>
                      </>
                    ) : (
                      <>
                        <div className="font-bold text-5xl text-white mb-2">84%</div>
                        <div className="text-blue-200 text-sm">Slagingspercentage</div>
                        <div className="mt-2 text-xs text-blue-200/70">Ver boven landelijk gemiddelde</div>
                      </>
                    )}
                  </motion.div>
                </div>
                
                {/* Zwevende elementen - Maak ze wat opvallender */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, 10, 0],
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                  className="absolute bottom-10 right-20 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/30 to-red-600/30 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  className="absolute top-32 left-10 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-700/30 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center"
                >
                  {rijbewijsType === "Schakel" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ) : rijbewijsType === "Automaat" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ) : rijbewijsType === "Motor" ? (
                   <svg className="h-6 w-6 text-purple-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H9M15 5V3C15 2.44772 14.5523 2 14 2H10C9.44772 2 9 2.44772 9 3V5M15 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                   </svg>
                  ) : rijbewijsType === "Aanhangwagen" ? (
                   <svg className="h-6 w-6 text-purple-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18 8L19.25 11M10 8L8.75 11M10 8H18M10 8H5M18 8H19.4C19.7314 8 20 8.26863 20 8.6V10.4C20 10.7314 19.7314 11 19.4 11H4.6C4.26863 11 4 10.7314 4 10.4V8.6C4 8.26863 4.26863 8 4.6 8H5M8.75 11H15.25M8.75 11L7.72361 12.5528C7.55521 12.8343 7.47101 12.975 7.42051 13.1321C7.37001 13.2893 7.3514 13.458 7.36558 13.7953C7.37976 14.1325 7.43024 14.464 7.53121 15.1269L7.84869 17.0254C7.97779 17.9153 8.04234 18.3602 8.32089 18.6841C8.59944 19.008 9.00554 19.1402 9.81775 19.4045L12 20M15.25 11L16.2764 12.5528C16.4448 12.8343 16.529 12.975 16.5795 13.1321C16.63 13.2893 16.6486 13.458 16.6344 13.7953C16.6202 14.1325 16.5698 14.464 16.4688 15.1269L16.1513 17.0254C16.0222 17.9153 15.9577 18.3602 15.6791 18.6841C15.4006 19.008 14.9945 19.1402 14.1822 19.4045L12 20M9 14H10M14 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                   </svg>
                  ) : rijbewijsType === "Bromfiets" ? (
                   <svg className="h-6 w-6 text-purple-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 4V20M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M5 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                     <path d="M5 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                   </svg>
                  ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                   </svg>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RijlesHero; 