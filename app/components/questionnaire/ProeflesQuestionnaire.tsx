'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowRightIcon, CheckCircleIcon, ArrowLeftIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const rijlesTypes = [
  { id: 'auto-schakel', label: 'Auto - Schakel' },
  { id: 'auto-automaat', label: 'Auto - Automaat' },
  { id: 'spoedcursus', label: 'Spoed / Intensief' },
  { id: 'motor', label: 'Motorrijlessen' },
  { id: 'scooter', label: 'Scooter' },
  { id: 'aanhangwagen', label: 'Aanhangwagen (BE)' }
];

type FormData = {
  naam: string;
  telefoonnummer: string;
  email: string;
  rijlesType: string;
  opmerkingen: string;
};

type ProeflesQuestionnaireProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
};

const ProeflesQuestionnaire = ({ isOpen, onClose, onSubmit }: ProeflesQuestionnaireProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    telefoonnummer: '',
    email: '',
    rijlesType: '',
    opmerkingen: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Reset alles als de modal opent
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        naam: '',
        telefoonnummer: '',
        email: '',
        rijlesType: '',
        opmerkingen: ''
      });
      setIsSubmitting(false);
      setIsSubmitted(false);
      
      // Zorg dat de body niet kan scrollen
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      return newData;
    });
  };
  
  // Functie voor volgende stap - met baasicvalidatie maar altijd doorgaan
  const handleNextStep = () => {
    if (step < 5) {
      // Toon waarschuwing bij lege verplichte velden, maar ga wel door
      if (!isCurrentStepValid()) {
        alert("Let op: Dit veld is nog niet volledig ingevuld. Je kunt wel doorgaan maar vul het later wel in.");
      }
      
      setStep(step + 1);
    } else {
      // Bij laatste stap, alleen versturen als alles is ingevuld
      if (isFormComplete()) {
        handleSubmit();
      } else {
        alert("Vul eerst alle verplichte velden in voordat je het formulier verstuurt.");
      }
    }
  };
  
  // Functie voor vorige stap
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onClose();
    }
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simuleer een API call
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  // Check of het huidige veld valide is
  const isCurrentStepValid = () => {
    switch (step) {
      case 1:
        return formData.naam.trim() !== '';
      case 2:
        // Minimaal 8 cijfers voor telefoonnummer
        return formData.telefoonnummer.replace(/\D/g, '').length >= 8;
      case 3:
        // Simpele email check - bevat @ en .
        return formData.email.includes('@') && formData.email.includes('.');
      case 4:
        return formData.rijlesType !== '';
      case 5:
        return true; // Opmerkingen zijn optioneel
      default:
        return false;
    }
  };
  
  // Check of alle verplichte velden zijn ingevuld
  const isFormComplete = () => {
    return (
      formData.naam.trim() !== '' &&
      formData.telefoonnummer.replace(/\D/g, '').length >= 8 &&
      formData.email.includes('@') && formData.email.includes('.') &&
      formData.rijlesType !== ''
    );
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  
  const questionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.3 
      }
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Sluit knop */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 z-10"
        aria-label="Sluiten"
      >
        <XMarkIcon className="w-6 h-6 text-white" />
      </button>
      
      {/* Progress indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ width: `${(step - 1) * 20}%` }}
          animate={{ width: `${step * 20}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="h-full w-full flex flex-col justify-center items-center p-6">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              className="w-full max-w-xl text-center"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CheckCircleIcon className="w-24 h-24 mx-auto text-green-500 mb-8" />
              <h2 className="text-4xl font-bold text-white mb-6">Bedankt voor je aanmelding!</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-lg mx-auto">
                We nemen zo snel mogelijk contact met je op om je proefles in te plannen.
              </p>
              <button
                onClick={onClose}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Terug naar de website
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`question-${step}`}
              className="w-full max-w-4xl px-4"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Step indicator (small screens only) */}
              <div className="text-blue-300 text-sm font-medium mb-12 md:hidden uppercase tracking-wider">
                Stap {step} van 5
              </div>
              
              {step === 1 && (
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
                    Wat is je volledige naam?
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.naam}
                        onChange={(e) => handleInputChange('naam', e.target.value)}
                        placeholder="Voer je naam in"
                        className={`w-full py-4 px-6 bg-white/5 border-b-2 focus:outline-none transition-colors duration-300 text-white text-xl placeholder-white/30 ${
                          formData.naam.trim() === '' ? 'border-white/20 focus:border-blue-500' : 'border-green-500/50'
                        }`}
                        autoFocus
                      />
                      {formData.naam.trim() !== '' && (
                        <CheckCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                      )}
                    </div>
                    <div className="mt-2 text-xs text-blue-300 text-left flex items-center">
                      {formData.naam.trim() === '' ? (
                        <>
                          <ExclamationCircleIcon className="w-4 h-4 mr-1 text-yellow-500" />
                          Vul je naam in
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" />
                          Naam ingevuld
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
                    Wat is je telefoonnummer?
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.telefoonnummer}
                        onChange={(e) => handleInputChange('telefoonnummer', e.target.value)}
                        placeholder="Bijv. 06 12345678"
                        className={`w-full py-4 px-6 bg-white/5 border-b-2 focus:outline-none transition-colors duration-300 text-white text-xl placeholder-white/30 ${
                          formData.telefoonnummer.replace(/\D/g, '').length < 8 
                          ? 'border-white/20 focus:border-blue-500' 
                          : 'border-green-500/50'
                        }`}
                        autoFocus
                      />
                      {formData.telefoonnummer.replace(/\D/g, '').length >= 8 && (
                        <CheckCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                      )}
                    </div>
                    <div className="mt-2 text-xs text-blue-300 text-left flex items-center">
                      {formData.telefoonnummer.replace(/\D/g, '').length < 8 ? (
                        <>
                          <ExclamationCircleIcon className="w-4 h-4 mr-1 text-yellow-500" />
                          Vul een geldig telefoonnummer in
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" />
                          Telefoonnummer ingevuld
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
                    Wat is je e-mailadres?
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Bijv. naam@voorbeeld.nl"
                        className={`w-full py-4 px-6 bg-white/5 border-b-2 focus:outline-none transition-colors duration-300 text-white text-xl placeholder-white/30 ${
                          !formData.email.includes('@') || !formData.email.includes('.')
                          ? 'border-white/20 focus:border-blue-500' 
                          : 'border-green-500/50'
                        }`}
                        autoFocus
                      />
                      {formData.email.includes('@') && formData.email.includes('.') && (
                        <CheckCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                      )}
                    </div>
                    <div className="mt-2 text-xs text-blue-300 text-left flex items-center">
                      {!formData.email.includes('@') || !formData.email.includes('.') ? (
                        <>
                          <ExclamationCircleIcon className="w-4 h-4 mr-1 text-yellow-500" />
                          Vul een geldig e-mailadres in
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" />
                          E-mailadres ingevuld
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
                    Welk type rijles wil je volgen?
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <div className="grid gap-4">
                      {rijlesTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleInputChange('rijlesType', type.id)}
                          className={`py-4 px-5 text-center text-lg rounded-lg transition-all duration-300 ${
                            formData.rijlesType === type.id
                              ? 'bg-blue-600/40 border-2 border-blue-500/70 text-white scale-105'
                              : 'bg-white/5 border-2 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-blue-300 text-left flex items-center">
                      {formData.rijlesType === '' ? (
                        <>
                          <ExclamationCircleIcon className="w-4 h-4 mr-1 text-yellow-500" />
                          Kies een type rijles
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4 mr-1 text-green-500" />
                          Rijlestype geselecteerd: {rijlesTypes.find(t => t.id === formData.rijlesType)?.label}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {step === 5 && (
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
                    Eventuele opmerkingen?
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <textarea
                      value={formData.opmerkingen}
                      onChange={(e) => handleInputChange('opmerkingen', e.target.value)}
                      placeholder="Bijv. voorkeuren voor dagen/tijden of specifieke vragen (optioneel)"
                      rows={5}
                      className="w-full py-4 px-6 bg-white/5 border-2 border-white/20 rounded-lg focus:border-blue-500 text-white text-xl placeholder-white/30 focus:outline-none transition-colors duration-300 resize-none"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation buttons - SIMPLIFIED */}
        {!isSubmitted && (
          <div className="mt-16 max-w-lg w-full mx-auto flex justify-between items-center">
            {/* Vorige knop */}
            <button
              type="button"
              onClick={handlePrevStep}
              className="group relative flex items-center justify-center text-white/70 hover:text-white py-3 px-6 text-lg transition-colors duration-300 w-24 h-12"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              <span>{step === 1 ? 'Annuleren' : 'Vorige'}</span>
            </button>
            
            {/* Stap indicator */}
            <div className="hidden md:block text-blue-300 text-sm font-medium uppercase tracking-wider">
              STAP {step} VAN 5
            </div>
            
            {/* Volgende knop - NO VALIDATION en betere klikbaarheid */}
            <button
              type="button"
              onClick={handleNextStep}
              className="group relative flex items-center justify-center py-3 px-8 rounded-lg font-medium text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg w-40 h-12"
            >
              <div className="absolute inset-0 w-full h-full rounded-lg cursor-pointer"></div>
              <div className="relative flex items-center justify-center w-full">
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                <span className="whitespace-nowrap">{step === 5 ? 'Versturen' : 'Volgende'}</span>
                {!isSubmitting && step !== 5 && <ArrowRightIcon className="w-5 h-5 ml-2" />}
              </div>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProeflesQuestionnaire; 