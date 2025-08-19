import React from 'react'
import Projects from '../../components/Projects/Projects'
import HomeContent3 from '../../components/HomeContent3/HomeContent3'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-[#22282A]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl">
          <h1 className="text-9xl font-serif text-[#D5E1E7] leading-tight">
            Build your <span className="text-[#66E8FA]">Next Era</span> of Web
            <br />
             with <span className="font-outline-2"> us</span>
          </h1>
          <p className="text-2xl text-[#D5E1E7] mt-6">
               
          </p>
        </div>
      </div>
    </div>
    <Projects />
    <HomeContent3 />
    <Testimonials />
    </>
  )
}

export default Home
