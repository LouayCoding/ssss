import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const VersatilitySection = () => {
  const categories = [
    {
      id: 'auto',
      title: 'Autorijles (B)',
      icon: '🚗',
      description: 'De basis voor de meeste rijbewijzen. Leer autorijden van ervaren instructeurs met persoonlijke aandacht.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'motor',
      title: 'Motorrijles (A)',
      icon: '🏍️',
      description: 'Ervaar de vrijheid op twee wielen. Veilig motorrijden met aandacht voor verkeersinzicht en voertuigbeheersing.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'brommer',
      title: 'Bromfietsrijbewijs (AM)',
      icon: '🛵',
      description: 'Perfect voor jongeren vanaf 16 jaar. Leer veilig de weg op met een bromfiets of scooter.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'aanhangwagen',
      title: 'Aanhangwagen (BE)',
      icon: '🚚',
      description: 'Breid je rijbewijs uit en leer veilig rijden met een aanhangwagen. Ideaal voor vakanties of verhuizingen.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="relative py-24 w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Meer dan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Alleen Autorijles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100/90 text-lg"
          >
            Onze rijschool biedt een complete oplossing voor al je rijbewijs wensen. Of je nu wilt leren autorijden, 
            motorrijden, brommerrijden of met een aanhangwagen wilt rijden - wij hebben de expertise in huis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-blue-100/80 mb-4">{category.description}</p>
                  <Link 
                    href={`/rijbewijzen/${category.id}`} 
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Meer informatie <ArrowLongRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Waarom kiezen voor één rijschool voor alles?</h3>
            <p className="text-blue-100/80 mb-5">
              Kies voor het gemak van één vertrouwde rijschool voor al je rijopleidingen. 
              Dezelfde kwaliteit, dezelfde aandacht voor detail en dezelfde persoonlijke benadering.
            </p>
            <Link
              href="/contact"
              className="inline-block py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
            >
              Neem contact op voor advies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VersatilitySection; 