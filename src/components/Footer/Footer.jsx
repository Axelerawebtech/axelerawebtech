import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Contact",
      links: [
        { name: "info@axelerawebtech.com" },
        { name: "+94 740 989 297" }
      ]
    },
    {
      title: "Useful Links",
      links: [
        { name: "About", path: "/about-us" },
        { name: "Contact", path: "/contact-us" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" }
      ]
    },
   
  
    {
      title: "Legals",
      links: [
        { name: "COOKIE POLICY", path: "/cookie-policy" },
        { name: "PRIVACY POLICY", path: "/privacy-policy" },
        { name: "TERMS OF USE", path: "/terms-of-use" }
      ]
    }
  ];

  return (
    <footer className="bg-[#22282A] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-16 max-w-full">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32 mb-20">
          {/* First Column */}
          <div className="w-full">
            <h3 className="text-[#D5E1E7] text-xl font-medium mb-8">{footerSections[0].title}</h3>
            <ul className="space-y-4">
              {footerSections[0].links.map((link) => (
                <li key={link.name}>
                  <span className="text-[#556575]">{link.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-full">
            <h3 className="text-[#D5E1E7] text-xl font-medium mb-8">{footerSections[1].title}</h3>
            <ul className="space-y-4">
              {footerSections[1].links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#556575] hover:text-[#66E8FA] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column */}
          <div className="w-full flex flex-col justify-between">
            <div>
              <h3 className="text-[#D5E1E7] text-xl font-medium mb-8">{footerSections[2].title}</h3>
              <ul className="space-y-4">
                {footerSections[2].links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[#556575] hover:text-[#66E8FA] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2A3133] pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-full">
            {/* Brand Text */}
            <h2 className="text-5xl md:text-6xl text-[#D5E1E7] font-serif mb-8 md:mb-0">
              Your Vision.<br />Our Innovation.
            </h2>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-[#2A3133] flex items-center justify-center rounded-sm hover:bg-[#66E8FA] transition-colors"
              >
                <svg className="w-5 h-5 text-[#D5E1E7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-[#2A3133] flex items-center justify-center rounded-sm hover:bg-[#66E8FA] transition-colors"
              >
                <svg className="w-5 h-5 text-[#D5E1E7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-[#2A3133] flex items-center justify-center rounded-sm hover:bg-[#66E8FA] transition-colors"
              >
                <svg className="w-5 h-5 text-[#D5E1E7]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="flex justify-end mt-8">
            <p className="text-[#556575] text-sm">
              Dev by <span className="text-[#D5E1E7]">Axelera webTech</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;