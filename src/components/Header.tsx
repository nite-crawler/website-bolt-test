import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-light text-gray-900 tracking-wide">
            Henna Artist
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-light tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-8 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-gray-700 hover:text-amber-600 transition-colors font-light tracking-wide"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;