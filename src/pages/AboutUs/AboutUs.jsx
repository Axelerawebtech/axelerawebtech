import React from 'react'
import { motion } from 'framer-motion'
import AboutValues from '../../components/AboutValues/AboutValues'

const AboutUs = () => {
    return (
        <>
        <div className="min-h-screen bg-[#22282A] relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="container mx-auto px-4 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Title */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#D5E1E7] leading-tight mb-6">
                            Engineering <br />
                            The <br />
                            <span className="text-[#66E8FA]">Future of</span> <br />
                            Digital World
                        </h1>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-gray-400 space-y-6 text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                        <p className="bg-[#2A3133] p-6 rounded-lg shadow-lg hover:bg-[#313739] transition-colors duration-300">
                            At Axelera Web Tech, we blend creativity with cutting-edge technology to deliver solutions that truly transform businesses. Our team partners closely with clients to understand their goals, craft tailored strategies, and build scalable digital products.
                        </p>
                        
                        <p className="bg-[#2A3133] p-6 rounded-lg shadow-lg hover:bg-[#313739] transition-colors duration-300">
                            From intuitive websites to complex digital platforms, we ensure every project is executed with precision, speed, and innovation — helping our clients accelerate their growth in the ever-evolving digital world.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
        <AboutValues />
        </>
    )
}

export default AboutUs