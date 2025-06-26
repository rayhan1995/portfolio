import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-gray-100/95 backdrop-blur-sm shadow-neumorphic-inset' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 shadow-neumorphic flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-blue-600 font-bold text-xl">JS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Rayhan's Portfolio</h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button className="bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-6 py-2 rounded-full text-gray-700 transition-all duration-300 flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {['About', 'Experience', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-6 py-2 rounded-full text-gray-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;