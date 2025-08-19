import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#22282A] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu Items - Left Aligned */}
        <div className="flex space-x-6">
          <Link to="/about-us" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
            Services
          </Link>
          <Link to="/templates" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
            Templates
          </Link>
          <Link to="/testimonials" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
            Testimonials
          </Link>
          <Link to="/contact-us" className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors">
            Let's Collaborate
          </Link>
        </div>

        {/* Logo - Right Aligned */}
        <div className="text-[#66E8FA] text-2xl font-bold font-serif">
          <Link to="/">
            Axelera webTech
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
