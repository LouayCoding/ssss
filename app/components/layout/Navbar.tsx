'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { 
  TruckIcon,
  SparklesIcon,
  ClockIcon,
  ArrowRightIcon,
  MapPinIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  KeyIcon,
  BoltIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import ProeflesQuestionnaire from '../questionnaire/ProeflesQuestionnaire';

// Iconen voor rijlessen
const RijlesIcon = ({ type }: { type: string }) => {
  const className = "w-6 h-6";
  switch (type) {
    case 'auto-schakel':
      return <KeyIcon className={className} />;
    case 'auto-automaat':
      return <Cog6ToothIcon className={className} />;
    case 'spoedcursus':
      return <SparklesIcon className={className} />;
    case 'motor':
      return <BoltIcon className={className} />;
    case 'scooter':
      return <ClockIcon className={className} />;
    case 'aanhangwagen':
      return <TruckIcon className={className} />;
    default:
      return <KeyIcon className={className} />;
  }
};

// Navigatiestructuur met submenu's
const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    id: 'rijlessen',
    label: 'Rijlessen',
    href: '/rijlessen',
    hasDropdown: true,
    hasMegaMenu: true,
    dropdown: [
      { 
        id: 'auto-schakel',
        label: 'Auto - Schakel',
        href: '/rijlessen/auto-schakel',
        description: 'Leer rijden in een auto met handbediende versnellingsbak. De traditionele rijstijl voor volledige controle.',
        featured: true,
        color: 'from-blue-500 to-blue-700'
      },
      { 
        id: 'auto-automaat',
        label: 'Auto - Automaat',
        href: '/rijlessen/auto-automaat',
        description: 'Eenvoudiger leren rijden zonder schakelen. Ideaal voor stadsverkeer en nieuwe bestuurders.',
        featured: true,
        color: 'from-indigo-500 to-indigo-700'
      },
      { 
        id: 'spoedcursus',
        label: 'Spoed / Intensief',
        href: '/rijlessen/spoedcursus',
        description: 'In korte tijd je rijbewijs halen met onze intensieve spoedcursus. Snel en efficiënt leren.',
        featured: true,
        color: 'from-red-500 to-red-700'
      },
      { 
        id: 'motor',
        label: 'Motorrijlessen',
        href: '/rijlessen/motor',
        description: 'Word een ervaren motorrijder met onze gespecialiseerde motorrijlessen door professionele instructeurs.',
        color: 'from-purple-500 to-purple-700'
      },
      { 
        id: 'bromfiets',
        label: 'Bromfiets (AM)',
        href: '/rijlessen/bromfiets',
        description: 'Haal je bromfietsrijbewijs (AM) in slechts één dag. Ideaal voor jongeren vanaf 16 jaar.',
        color: 'from-cyan-500 to-cyan-700'
      },
      { 
        id: 'aanhangwagen',
        label: 'Aanhangwagen (BE)',
        href: '/rijlessen/aanhangwagen',
        description: 'Breid je rijbewijs uit met categorie BE. Leer veilig rijden met een aanhangwagen.',
        color: 'from-amber-500 to-amber-700'
      }
    ],
    features: [
      {
        title: '84% Slagingspercentage',
        description: 'Ruim boven het landelijk gemiddelde',
        icon: <ShieldCheckIcon className="w-5 h-5" />
      },
      {
        title: 'Ervaren Instructeurs',
        description: 'Meer dan 15 jaar ervaring',
        icon: <AcademicCapIcon className="w-5 h-5" />
      },
      {
        title: 'Lessen in Heel Rotterdam',
        description: 'We komen je ophalen waar je wilt',
        icon: <MapPinIcon className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'prijzen',
    label: 'Prijzen',
    href: '/prijzen',
    hasDropdown: true,
    dropdown: [
      { label: 'Lespakketten', href: '/prijzen/lespakketten' },
      { label: 'Losse lessen', href: '/prijzen/losse-lessen' },
      { label: 'Examenkosten', href: '/prijzen/examenkosten' },
      { label: 'Betalingsmogelijkheden', href: '/prijzen/betalingsmogelijkheden' }
    ]
  },
  {
    id: 'over-ons',
    label: 'Over Ons',
    href: '/over-ons',
    hasDropdown: false
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '/faq',
    hasDropdown: false
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    hasDropdown: false
  }
];

// Navlink component met megamenu functionaliteit
const NavLink = ({ 
  href, 
  isActive, 
  hasDropdown, 
  hasMegaMenu,
  isOpen,
  isScrolled,
  onClick,
  onMouseEnter,
  onMouseLeave, 
  children 
}: { 
  href: string;
  isActive: boolean;
  hasDropdown?: boolean;
  hasMegaMenu?: boolean;
  isOpen?: boolean;
  isScrolled: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
}) => {
  
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <motion.div
      className="relative"
      variants={linkVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.a
        href={href}
        className={`px-3 py-2 rounded-md text-sm font-medium relative group ${
          isActive 
            ? 'text-white' 
            : isScrolled 
              ? 'text-gray-200 hover:text-white' 
              : 'text-white/80 hover:text-white'
        } flex items-center space-x-1 transition-colors duration-300`}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <span>{children}</span>
        {hasDropdown && !hasMegaMenu && (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </motion.a>
      
      {isActive && (
        <motion.div 
          className="absolute h-1 w-full bg-gradient-to-r from-red-500 to-blue-500 -bottom-1 rounded-t-md"
          layoutId="navbar-active-indicator"
        ></motion.div>
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Bij scrollen de achtergrond tonen, anders transparant
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdown && 
        dropdownRefs.current[openDropdown] && 
        !dropdownRefs.current[openDropdown]?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
      
      if (openMegaMenu) {
        setOpenMegaMenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    // Direct controleren bij laden
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (megaMenuTimeout.current) {
        clearTimeout(megaMenuTimeout.current);
      }
      
      // Zorg ervoor dat de scroll wordt hersteld als component unmount
      document.body.style.overflow = '';
    };
  }, [openDropdown, openMegaMenu]);

  const toggleMobileMenu = () => {
    // Sluit eerst eventueel geopende dropdowns
    setOpenDropdown(null);
    setOpenMegaMenu(null);
    
    // Toggle mobile menu
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Voorkom scrollen van de pagina wanneer menu open is
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleDropdown = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  const handleNavItemMouseEnter = (itemId: string, hasMegaMenu: boolean) => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
    }
    
    if (hasMegaMenu) {
      setOpenMegaMenu(itemId);
    } else if (openDropdown !== itemId) {
      setOpenDropdown(itemId);
    }
  };
  
  const handleNavItemMouseLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setOpenMegaMenu(null);
      setOpenDropdown(null);
    }, 300);
  };
  
  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
    }
  };
  
  const handleMegaMenuMouseLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setOpenMegaMenu(null);
    }, 300);
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  
  const megaMenuVariants: Variants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  // Callback functie voor het instellen van refs
  const setDropdownRef = (id: string) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[id] = el;
  };

  const handleProeflesClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMegaMenu(null);
    setIsQuestionnaireOpen(true);
    
    // Herstel normale scrolling
    document.body.style.overflow = '';
  };
  
  const handleQuestionnaireSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Hier zou je normaal gesproken een API-call doen om de data te versturen
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-gradient-to-r from-gray-900/98 via-red-900/30 to-blue-950/98 shadow-2xl backdrop-blur-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.div 
              className="flex-shrink-0 font-bold text-xl sm:text-2xl"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/" className="text-white font-extrabold tracking-wider flex items-center">
                <motion.span 
                  className="text-white dark:text-white drop-shadow-md"
                  whileHover={{ 
                    textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  RIJSCHOOL
                </motion.span>
                <motion.span 
                  className={`${scrolled ? 'text-red-500' : 'text-red-400'} transition-colors duration-300`}
                  whileHover={{ 
                    textShadow: "0px 0px 8px rgba(239,68,68,0.6)",
                    transition: { duration: 0.2 }
                  }}
                >
                  AVO
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Desktop Menu met transparante achtergrond */}
            <div className="hidden md:block">
              <motion.div 
                className="ml-6 lg:ml-10 flex items-center space-x-1"
              >
                {navigationItems.map((item) => (
                  <div 
                    key={item.id}
                    ref={setDropdownRef(item.id)}
                    className="relative"
                    onMouseEnter={() => handleNavItemMouseEnter(item.id, !!item.hasMegaMenu)}
                    onMouseLeave={handleNavItemMouseLeave}
                  >
                    <NavLink 
                      href={item.href} 
                      isActive={activeItem === item.id} 
                      hasDropdown={item.hasDropdown}
                      hasMegaMenu={item.hasMegaMenu}
                      isOpen={openDropdown === item.id || openMegaMenu === item.id}
                      isScrolled={scrolled}
                      onClick={() => {
                        setActiveItem(item.id);
                        if (item.hasDropdown && !item.hasMegaMenu) {
                          toggleDropdown(item.id);
                        }
                      }}
                    >
                      {item.label}
                    </NavLink>

                    {/* Mega Menu voor Rijlessen */}
                    {item.hasMegaMenu && item.id === "rijlessen" && (
                      <AnimatePresence>
                        {openMegaMenu === item.id && (
                          <motion.div
                            className="fixed sm:absolute left-2 right-2 sm:left-auto sm:right-auto mt-2 w-[calc(100vw-16px)] sm:w-auto sm:min-w-[450px] md:min-w-[550px] max-w-2xl transform sm:translate-x-[-20%] px-2 sm:px-0 z-50"
                            style={{ 
                              top: "3.5rem"
                            }}
                            variants={megaMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onMouseEnter={handleMegaMenuMouseEnter}
                            onMouseLeave={handleMegaMenuMouseLeave}
                          >
                            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="bg-gradient-to-br from-gray-900/95 via-gray-900/95 to-blue-950/95 backdrop-blur-xl p-3 sm:p-4">
                                <div className="mb-2">
                                  <h3 className="text-base font-medium text-white">
                                    Onze Rijopleidingen
                                  </h3>
                                </div>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                                  {item.dropdown?.map((option) => (
                                    <motion.div 
                                      key={option.id}
                                      className="rounded-lg p-2 transition-all duration-300 hover:bg-white/10 border border-transparent hover:border-white/20"
                                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                    >
                                      <Link href={option.href} className="flex items-center">
                                        <div className={`flex-shrink-0 h-6 w-6 rounded-md bg-gradient-to-br ${option.color || 'from-blue-500 to-blue-700'} flex items-center justify-center shadow-md`}>
                                          <RijlesIcon type={option.id} />
                                        </div>
                                        <div className="ml-2">
                                          <h3 className="text-sm font-medium text-white">{option.label}</h3>
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Regular dropdown menu voor andere items */}
                    {item.hasDropdown && !item.hasMegaMenu && (
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            ref={setDropdownRef(item.id)}
                            className="absolute left-0 mt-1 w-56 bg-gradient-to-br from-gray-900/95 via-red-900/20 to-blue-950/95 backdrop-blur-lg rounded-md shadow-lg py-1 z-50"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {item.dropdown?.map((dropdownItem, index) => (
                              <motion.div
                                key={`dropdown-${item.id}-${index}`}
                                variants={{
                                  hidden: { opacity: 0, y: -10 },
                                  visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: {
                                      delay: index * 0.05,
                                      duration: 0.2
                                    }
                                  }
                                }}
                              >
                                <Link 
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-red-900/30 transition-colors"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setActiveItem(item.id);
                                  }}
                                >
                                  {dropdownItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                <div className="flex space-x-2 items-center ml-2">
                  <ThemeToggle />
                  
                  <motion.div
                    variants={navItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={handleProeflesClick}
                      className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-opacity-90 shadow-md"
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{
                          opacity: [1, 0.8, 1],
                          transition: { duration: 1, repeat: Infinity }
                        }}
                      >
                        Gratis Proefles
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              
              <motion.div 
                variants={navItemVariants}
              >
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
                >
                  <span className="sr-only">Open hoofdmenu</span>
                  {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide gebaseerd op menu state */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-[-1px] right-[-1px] bottom-[-1px] left-[-1px] bg-gradient-to-br from-gray-900 via-gray-900/99 to-blue-950/99 backdrop-blur-lg z-[100]"
              style={{ 
                height: 'calc(100vh + 2px)',
                width: 'calc(100vw + 2px)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Extra achtergrondlaag voor volledige dekking */}
              <div className="absolute inset-0 bg-gray-900/95"></div>
              
              {/* Close button in top corner */}
              <div className="absolute top-8 right-6 z-[101]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                  }}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Menu container with padding for logo and scrollable area */}
              <div className="h-full pt-24 pb-6 px-6 flex flex-col overflow-y-auto">
                {/* Logo at top */}
                <div className="fixed top-8 left-6 z-[101]">
                  <Link href="/" className="text-white font-extrabold tracking-wider flex items-center text-2xl" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-white">RIJSCHOOL</span>
                    <span className="text-red-400">AVO</span>
                  </Link>
                </div>
                
                {/* Navigation items */}
                <nav className="flex-grow flex flex-col space-y-2">
                  {navigationItems.map((item, idx) => (
                    <div key={item.id} className="flex flex-col">
                      {item.hasDropdown ? (
                        // Voor items met dropdown: alleen de dropdown togglen, geen navigatie
                        <button
                          className={`${
                            activeItem === item.id 
                              ? 'bg-blue-800 text-white font-medium' 
                              : 'text-white hover:bg-white/10'
                          } px-5 py-4 rounded-xl text-lg transition-colors flex items-center justify-between w-full text-left`}
                          onClick={() => {
                            setActiveItem(item.id);
                            toggleDropdown(item.id);
                          }}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180 text-blue-400' : 'text-gray-400'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        // Voor items zonder dropdown: normaal navigeren
                        <Link 
                          href={item.href}
                          className={`${
                            activeItem === item.id 
                              ? 'bg-blue-800 text-white font-medium' 
                              : 'text-white hover:bg-white/10'
                          } px-5 py-4 rounded-xl text-lg transition-colors flex items-center justify-between`}
                          onClick={() => {
                            setActiveItem(item.id);
                            setMobileMenuOpen(false);
                            // Herstel scrolling
                            document.body.style.overflow = '';
                          }}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}

                      {/* Mobile dropdown */}
                      {item.hasDropdown && (
                        <AnimatePresence>
                          {openDropdown === item.id && (
                            <motion.div
                              className="mt-1 mb-3 ml-5 pl-4 border-l-2 border-blue-500/50 space-y-0.5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdown?.map((dropdownItem, index) => (
                                <Link
                                  key={`mobile-dropdown-${item.id}-${index}`}
                                  href={dropdownItem.href}
                                  className="block px-4 py-3 rounded-lg text-base text-blue-100 hover:text-white hover:bg-blue-800/40 transition-colors"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                    // Herstel scrolling
                                    document.body.style.overflow = '';
                                  }}
                                >
                                  {typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>
                
                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      handleProeflesClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-5 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg transition-all duration-300"
                  >
                    Gratis Proefles
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Questionnaire overlay */}
      <AnimatePresence>
        {isQuestionnaireOpen && (
          <ProeflesQuestionnaire 
            isOpen={isQuestionnaireOpen}
            onClose={() => setIsQuestionnaireOpen(false)}
            onSubmit={handleQuestionnaireSubmit}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 