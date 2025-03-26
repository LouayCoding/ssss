'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  IdentificationIcon, 
  CalculatorIcon, 
  BanknotesIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';

const CompanyInfo = () => {
  const companyData = [
    { 
      id: 'cbr', 
      icon: <ShieldCheckIcon className="h-5 w-5 text-red-400" />, 
      title: 'CBR Rijschoolnr.', 
      value: '7525K9',
      color: 'from-red-600/20 to-red-800/30'
    },
    { 
      id: 'kvk', 
      icon: <IdentificationIcon className="h-5 w-5 text-red-400" />, 
      title: 'KVK', 
      value: '5338429',
      color: 'from-red-600/20 to-red-800/30'
    },
    { 
      id: 'btw', 
      icon: <CalculatorIcon className="h-5 w-5 text-red-400" />, 
      title: 'BTW', 
      value: 'NL850862917B01',
      color: 'from-red-600/20 to-red-800/30'
    },
    { 
      id: 'bank', 
      icon: <BanknotesIcon className="h-5 w-5 text-red-400" />, 
      title: 'Bank', 
      value: (
        <>
          <p className="text-sm text-blue-100/80">ING Bank</p>
          <p className="text-sm text-blue-100/80">IBAN: NL22INGB0005469357</p>
        </>
      ),
      color: 'from-red-600/20 to-red-800/30'
    }
  ];

  return (
    <div className="border-t border-white/10 mt-8 pt-8">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
        <span>Bedrijfsgegevens</span>
        <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
        {companyData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="flex items-start group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + (index * 0.1) }}
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-3 group-hover:shadow-lg transition-shadow duration-300`}>
              {item.icon}
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-0.5">{item.title}</h4>
              {typeof item.value === 'string' ? (
                <p className="text-sm text-blue-100/80">{item.value}</p>
              ) : (
                item.value
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Badges */}
      <motion.div 
        className="mt-8 flex items-center justify-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm"></div>
          <span className="relative text-xs text-center font-semibold">CBR<br/>Erkend</span>
        </div>
        
        <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm"></div>
          <span className="relative text-xs text-center font-semibold">BOVAG<br/>Lid</span>
        </div>
        
        <div className="w-16 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm"></div>
          <span className="relative text-xs text-center font-semibold">iDeal<br/>Betaling</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyInfo; 