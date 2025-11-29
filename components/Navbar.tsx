import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { smoothScrollTo } from '../utils/scroll';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    smoothScrollTo(e, href);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-2' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            {/* Increased height for Logo visibility */}
            <Logo className="h-24 w-auto md:h-32" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pl-2 border-l border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="primary" 
                size="sm" 
                onClick={onOpenModal}
              >
                Start Project
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
             <Button 
               fullWidth 
               variant="primary" 
               onClick={() => {
                 setIsOpen(false);
                 onOpenModal();
               }}
             >
              Start Project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;