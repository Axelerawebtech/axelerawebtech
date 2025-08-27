import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Projects from '../../components/Projects/Projects'
import HomeContent3 from '../../components/HomeContent3/HomeContent3'
import Testimonials from '../Testimonials/Testimonials'
import HeroAnimation from '../../components/HeroAnimation/HeroAnimation'
import FloatingCircles from '../../components/FloatingCircles/FloatingCircles'
import { scrollToSection } from '../../utils/scroll'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Check for hash in URL on component mount
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.replace('#', '')
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }, [location])

  return (
    <>
      <div className="min-h-screen bg-[#22282A] px-4 md:px-10">
        <FloatingCircles />

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 md:pt-32">
          <div className="max-w-4xl">
            <h1 className="text-8xl md:text-9xl lg:text-9xl font-serif text-[#D5E1E7] leading-tight">
              Build your <span className="text-[#66E8FA]">Next Era</span> of Web
              <br />
              with <span className="font-outline-2"> us</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D5E1E7] mt-6"></p>
          </div>
        </div>
      </div>

      <div id="projects">
        {' '}
        {/* Changed from projects-section to match navbar href */}
        <Projects />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
    </>
  )
}

export default Home
