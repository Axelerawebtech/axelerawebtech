import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for section to scroll to after navigation
    const hash = window.location.hash;
    if (hash && location.pathname === '/') {
      // Remove the # from the hash
      const sectionId = hash.replace('#', '');
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, just scroll
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#22282A]/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Aligned */}
          <div>
            <Link to="/" className="flex flex-col">
              <span 
                className="text-[24px] md:text-[28px] text-[#66E8FA]"
                style={{ 
                  fontFamily: 'Syncopate, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  lineHeight: '1.2'
                }}
              >
                AXELERA
              </span>
              <span 
                className="text-[10px] md:text-[12px] text-[#D5E1E7]"
                style={{ 
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  fontWeight: '300'
                }}
              >
                webtech
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#D5E1E7] p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 text-xl font-outfit">
            <Link to="/about-us" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              Services
            </Link>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, 'testimonials')}
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
            >
              Testimonials
            </a>
            <Link 
              to="/contact-us" 
              className="relative px-6 py-3 text-[#D5E1E7] font-medium transition-all duration-300
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full 
                before:bg-gradient-to-b before:from-[#66E8FA] before:to-[#4BA9B5] before:rounded-l-lg
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-1 after:h-full 
                after:bg-gradient-to-b after:from-[#66E8FA] after:to-[#4BA9B5] after:rounded-r-lg
                hover:bg-[#2A3133] group"
            >
              <span className="relative z-10">Let's Collaborate</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/about-us" 
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="block py-2 text-[#D5E1E7] hover:text-[#66E8FA]"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, 'testimonials')}
              className="block py-2 text-[#D5E1E7] hover:text-[#66E8FA]"
            >
              Testimonials
            </a>
            <Link 
              to="/contact-us" 
              className="inline-block px-6 py-3 text-[#D5E1E7] bg-[#2A3133] rounded-lg hover:bg-[#66E8FA] hover:text-[#22282A] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
