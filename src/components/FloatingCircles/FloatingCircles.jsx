import React from 'react';
import { motion } from 'framer-motion';

const FloatingCircles = () => {
  const circles = [
    { size: 150, color: '#66E8FA', delay: 0, duration: 20 },
    { size: 120, color: '#4BA9B5', delay: 2, duration: 15 },
    { size: 100, color: '#66E8FA', delay: 4, duration: 25 },
    { size: 180, color: '#4BA9B5', delay: 1, duration: 18 },
    { size: 80, color: '#66E8FA', delay: 3, duration: 22 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            filter: 'blur(60px)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCircles;