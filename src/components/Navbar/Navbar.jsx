import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#22282A]/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Aligned */}
          <div className="text-[#66E8FA] text-2xl font-bold font-serif">
            <Link to="/">
              Axelera webTech
            </Link>
          </div>

          {/* Menu Items - Right Aligned */}
          <div className="flex items-center gap-4 text-xl">
            <Link to="/about-us" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              Projects
            </Link>
            <Link to="/testimonials" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
              Testimonials
            </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
