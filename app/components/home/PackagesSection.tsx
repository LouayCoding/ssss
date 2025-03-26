"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

// Pakket gegevens
const packages = [
  {
    id: "auto",
    title: "Auto (B)",
    icon: "🚗",
    price: "vanaf €999",
    features: [
      "Complete rijopleiding op maat",
      "CBR theoriecursus inclusief",
      "Gratis proefexamen",
      "CBR praktijkexamen",
      "Persoonlijk lespakket"
    ],
    popular: true,
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "motor",
    title: "Motor (A)",
    icon: "🏍️",
    price: "vanaf €850",
    features: [
      "Flexibele rijopleiding",
      "CBR theoriecursus inclusief",
      "Voertuigbeheersing training",
      "CBR praktijkexamen",
      "Beschermende kleding te leen"
    ],
    popular: false,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "brommer",
    title: "Brommer (AM)",
    icon: "🛵",
    price: "vanaf €599",
    features: [
      "Efficiënte rijopleiding",
      "CBR theoriecursus inclusief",
      "Verkeersinzicht training",
      "CBR praktijkexamen",
      "Helm te leen tijdens lessen"
    ],
    popular: false,
    color: "from-red-500 to-red-700"
  },
  {
    id: "aanhangwagen",
    title: "Aanhangwagen (BE)",
    icon: "🚚",
    price: "vanaf €499",
    features: [
      "Specialistische rijopleiding",
      "Manoeuvreren op terrein",
      "Achteruitrijden training",
      "CBR praktijkexamen",
      "Voor bezitters rijbewijs B"
    ],
    popular: false,
    color: "from-indigo-500 to-indigo-700"
  }
];

const PackagesSection = () => {
  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Decoratieve elementen verwijderd voor page-level consistency */}
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 text-sm font-medium">
              Jouw rijbewijs
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Onze <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Rijlespakketten</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100/80 max-w-2xl mx-auto text-lg"
          >
            Kies het pakket dat bij jou past. Al onze pakketten bevatten lessen van hoge kwaliteit 
            door ervaren instructeurs. We bieden verschillende opties binnen elke categorie.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.popular 
                  ? 'ring-2 ring-blue-500 bg-gradient-to-b from-indigo-900/40 to-blue-900/40' 
                  : 'border border-white/10 bg-gradient-to-b from-gray-900/40 to-blue-950/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-lg">
                    Populair
                  </div>
                </div>
              )}
              
              <div className="p-6 backdrop-blur-sm">
                <div className={`flex items-center justify-center w-16 h-16 mb-5 rounded-xl text-3xl bg-gradient-to-br ${pkg.color} bg-opacity-20`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                
                <div className="mb-5">
                  <span className="text-2xl font-bold text-white">{pkg.price}</span>
                </div>
                
                <div className="border-t border-white/10 my-5 opacity-50"></div>
                
                <ul className="mb-6 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-start text-sm text-blue-100/90"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full mr-3 flex items-center justify-center bg-gradient-to-r ${pkg.color} bg-opacity-20`}>
                        <ChevronRightIcon className="h-3 w-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`
                  block w-full py-3.5 px-4 text-sm font-medium text-center rounded-xl transition-all 
                  ${pkg.popular 
                    ? `bg-gradient-to-r ${pkg.color} text-white hover:opacity-90` 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }
                `}>
                  Bekijk Pakketten
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection; 