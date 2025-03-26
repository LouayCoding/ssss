'use client';

import { motion } from 'framer-motion';
import { UserGroupIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const stats = [
    {
      id: 'students',
      icon: <UserGroupIcon className="h-5 w-5 text-green-400" />,
      title: 'Ruim 1.000+ tevreden studenten',
      description: 'Jaarlijks behalen honderden cursisten hun rijbewijs',
      color: 'bg-green-500/20'
    },
    {
      id: 'success-rate',
      icon: <ShieldCheckIcon className="h-5 w-5 text-blue-400" />,
      title: '84% slagingspercentage',
      description: 'Ruim boven het landelijk gemiddelde',
      color: 'bg-blue-500/20'
    },
    {
      id: 'courses',
      icon: <TruckIcon className="h-5 w-5 text-purple-400" />,
      title: 'Diverse rijopleidingen',
      description: 'Van auto tot motor en aanhangwagen',
      color: 'bg-purple-500/20'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-gradient-to-br from-gray-900/80 to-blue-950/80 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent"></div>
      
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <span className="relative">
          Waarom kiezen voor ons?
          <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-500"></div>
        </span>
      </h3>
      
      <div className="space-y-4">
        {stats.map((stat) => (
          <motion.div 
            key={stat.id}
            variants={item}
            className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors duration-300 group relative overflow-hidden"
          >
            {/* Background shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="absolute -inset-y-full left-0 w-1/2 h-[300%] bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12 group-hover:animate-shine"></div>
            </div>
            
            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <div>
              <motion.div 
                className="font-medium text-white"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.title}
              </motion.div>
              <div className="text-sm text-blue-100/70">{stat.description}</div>
            </div>
            
            {/* Highlight indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-gradient-to-b group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Testimonial teaser */}
      <motion.div 
        className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden"
        variants={item}
      >
        <div className="absolute -right-2 -top-2 w-12 h-12 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="text-sm text-blue-100/90 italic relative">
          "Dankzij Amsterdamse Verkeersopleidingen heb ik in één keer mijn rijbewijs gehaald! De instructeurs zijn professioneel en nemen echt de tijd voor je."
        </div>
        <div className="mt-2 text-xs text-blue-200/70 flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500/50 mr-2"></div>
          <span>Jaap, geslaagd in Maart 2023</span>
        </div>
      </motion.div>
      
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
          animation: shine 1.5s ease-in-out;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </motion.div>
  );
};

export default WhyChooseUs; 