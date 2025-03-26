'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CompanyInfo from './CompanyInfo';

interface ContactInfoProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  color: string;
  textColor: string;
}

const ContactInfoCard = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const contactInfo: ContactInfoProps[] = [
    { 
      id: 'location', 
      icon: <MapPinIcon className="h-6 w-6" />, 
      title: 'Adres', 
      content: (
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p>Ottho Heldringstraat 31-D</p>
          <p>1066 XT Amsterdam</p>
          <Link href="/contact?tab=route" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center mt-1 transition-colors">
            <span>Bekijk op kaart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      ),
      color: 'from-blue-600/20 to-blue-800/30',
      textColor: 'text-blue-400'
    },
    { 
      id: 'phone', 
      icon: <PhoneIcon className="h-6 w-6" />, 
      title: 'Telefoon', 
      content: (
        <a href="tel:0202601300" className="group transition-all duration-300 hover:text-blue-300">
          <span className="relative">
            020 260 1300
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>
      ),
      color: 'from-indigo-600/20 to-indigo-800/30',
      textColor: 'text-indigo-400'
    },
    { 
      id: 'email', 
      icon: <EnvelopeIcon className="h-6 w-6" />, 
      title: 'E-mail', 
      content: (
        <a href="mailto:info@avoweb.nl" className="group transition-all duration-300 hover:text-blue-300">
          <span className="relative">
            info@avoweb.nl
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>
      ),
      color: 'from-violet-600/20 to-violet-800/30',
      textColor: 'text-violet-400'
    }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/80 to-blue-950/80 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover={{ boxShadow: "0 20px 30px -10px rgba(2, 6, 23, 0.8), 0 0 15px 0 rgba(59, 130, 246, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Decoratieve elementen */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center mr-4 shadow-inner shadow-blue-800/10">
          <BuildingOfficeIcon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Amsterdamse Verkeersopleidingen
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-1"></div>
        </div>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {contactInfo.map((item) => (
          <motion.div 
            key={item.id}
            variants={fadeInUp}
            className="flex items-start group"
          >
            <motion.div 
              className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-5 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/40 group-hover:scale-110 transition-all duration-300`}
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`${item.textColor}`}>
                {item.icon}
              </div>
            </motion.div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1.5">{item.title}</h3>
              <div className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Bedrijfsgegevens sectie */}
      <CompanyInfo />
    </motion.div>
  );
};

export default ContactInfoCard; 