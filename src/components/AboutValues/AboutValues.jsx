import React from "react";
import { motion } from "framer-motion";

const valueCards = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Connect",
    description:
      "Success in the digital world is built on teamwork. We work hand-in-hand with our clients to fully understand their goals, challenges, and vision. By combining our expertise with their insights, we ensure every project delivers solutions tailored to their business needs.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Create",
    description:
      "Great design is more than just visuals—it’s about creating seamless, user-friendly experiences. We craft intuitive interfaces and engaging digital journeys that not only look stunning but also drive conversions and strengthen brand identity.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M15 9l-6 6" />
        <path d="M9 9l6 6" />
      </svg>
    ),
    title: "Grow",
    description:
      "Results matter. Every solution we deliver is optimized for performance, scalability, and measurable success — helping businesses grow and thrive in the digital era.",
  },
];

const AboutValues = () => {
  return (
    <div className="bg-[#22282A] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-lg sm:text-xl text-[#D5E1E7] mb-3">
            Our Values
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-serif text-[#D5E1E7] leading-tight">
            We <span className="font-outline-2">obsessively</span> value Growth
          </h1>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2A3133] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-[#66E8FA] mb-4">{card.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#D5E1E7] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
