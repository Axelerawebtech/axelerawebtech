import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Zest & Bite",
      description: "Modern Thai restaurant established in Toronto.",
      image: "/project-1.png",
      link: "https://zest-and-bite.netlify.app/"
    },
    {
      id: 2,
      name: "Phoenix Tours",
      description: "Tours and Travels in India.",
      image: "/project-2.png",
      link: "https://www.phoenixtoursandtravels.com/"
    },
    {
      id: 3,
      name: "Orgstack Technologies",
      description: "Human Resource Management solution based in India.",
      image: "/project-3.png",
      link: "https://orgzstack.com/"
    },
    {
      id: 4,
      name: "IPS Technologies",
      description: "premier IT staffing company in India.",
      image: "/project-4.png",
      link: "https://ipstechinc.com/"
    },
    {
      id: 5,
      name: "Neithal Fish Trading",
      description: "Fish Trading company in India.",
      image: "/project-5.png",
      link: "https://neithalfishtrading.com/"
    },
    {
      id: 6,
      name: "Axelera WebTech",
      description: "Tech Company of us based in Srilanka.",
      image: "/project-6.png",
      link: "https://axelerawebtech.com"
    }
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      return nextIndex >= projects.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 3;
      return nextIndex < 0 ? Math.max(0, projects.length - 3) : nextIndex;
    });
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div 
      className="bg-[#92A6B0] py-10 md:py-20 overflow-hidden"
      style={{
        borderRadius: '32px',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-[#D5E1E7] mb-8 md:mb-16">
          Projects
        </h2>
        
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex flex-col lg:flex-row transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-2 lg:px-4 mb-8 lg:mb-0"
                >
                  <div className="group relative overflow-hidden">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#22282A]">
                        {project.name}
                      </h3>
                      <p className="text-sm md:text-base text-[#171717] mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - Hide on smaller screens */}
          <div className="hidden lg:flex justify-end mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
              disabled={currentIndex === 0}
            >
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path 
                  d="M60 12H2M2 12L13 1M2 12L13 23" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="text-[#D5E1E7] hover:text-[#66E8FA] transition-colors"
              disabled={currentIndex + 3 >= projects.length}
            >
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path 
                  d="M0 12H58M58 12L47 1M58 12L47 23" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* View All button */}
        <div className="mt-8 text-center lg:text-left">
          <button className="w-full lg:w-auto px-6 py-2 border border-[#D5E1E7] text-[#D5E1E7]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;