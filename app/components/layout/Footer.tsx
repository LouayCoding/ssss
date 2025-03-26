'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

// Social media iconen in stijl van de afbeelding
const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2.5 rounded-full bg-gray-900/80 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-red-900/60 transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-red-500/40 shadow-lg group"
  >
    <div className="text-gray-300 group-hover:text-blue-100 transition-colors duration-300">
      {children}
    </div>
  </Link>
);

// Navigatie links met blauwe hover
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0.8 }}
    whileHover={{ 
      opacity: 1,
      scale: 1.03,
      transition: { duration: 0.2 }
    }}
  >
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </motion.div>
);

// Contact info item met blauwe accenten
const ContactItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-start space-x-3 group">
    <div className="mt-0.5 p-2 rounded-full bg-gray-900/80 border border-white/5 group-hover:border-red-500/30 transition-all duration-300">
      <div className="text-gray-400 group-hover:text-blue-300 transition-colors w-5 h-5">
        {icon}
      </div>
    </div>
    <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {children}
    </div>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-[#0c1423] overflow-hidden border-t border-white/5">
      {/* Decoratieve rode gradient accent aan bovenkant */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
      
      {/* Subtiele rode glow effecten */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-red-700/5 blur-3xl"></div>
      <div className="absolute top-40 right-10 w-60 h-60 rounded-full bg-blue-700/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo en Bedrijfsinfo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-blue-500">AVO</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">Rijschool</span>
              </h2>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Professionele en persoonlijke rijlessen voor iedereen. Wij helpen je met het behalen van je rijbewijs in een prettige leeromgeving.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Navigatie Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Navigatie
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-red-500"></span>
            </h3>
            <nav className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/over-ons">Over Ons</FooterLink>
              <FooterLink href="/rijlessen">Rijlessen</FooterLink>
              <FooterLink href="/tarieven">Tarieven</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Contact Informatie */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-red-500"></span>
            </h3>
            <div className="space-y-4">
              <ContactItem icon={<MapPinIcon />}>
                <p>Stationsplein 1<br/>1234 AB Rotterdam</p>
              </ContactItem>
              <ContactItem icon={<PhoneIcon />}>
                <p>010 - 123 45 67</p>
              </ContactItem>
              <ContactItem icon={<EnvelopeIcon />}>
                <p>info@avorijschool.nl</p>
              </ContactItem>
              <ContactItem icon={<ClockIcon />}>
                <p>Maandag - Vrijdag: 9:00 - 18:00<br/>Zaterdag: 10:00 - 14:00</p>
              </ContactItem>
            </div>
          </div>

          {/* Nieuwsbrief Aanmelding */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block">
              Nieuwsbrief
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-red-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">Blijf op de hoogte van onze acties en nieuws.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mailadres"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-900/80 text-white border border-white/5 focus:border-blue-500/50 focus:ring-1 focus:ring-red-500/30 focus:outline-none placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-red-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-white/5 hover:border-red-500/30"
              >
                Aanmelden
              </button>
            </form>
            
            {/* Kwaliteitskeurmerken */}
            <div className="mt-6">
              <div className="flex items-center justify-between mt-3">
                <img src="/cbr-logo.png" alt="CBR Keurmerk" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100" />
                <img src="/bovag-logo.png" alt="BOVAG Keurmerk" className="h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100" />
                <img src="/visa-mastercard.png" alt="Visa & Mastercard" className="h-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Rode accentlijn voor scheiding */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} AVO Rijschool. Alle rechten voorbehouden.</p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/voorwaarden" className="hover:text-blue-400 transition-colors">Algemene Voorwaarden</Link>
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 