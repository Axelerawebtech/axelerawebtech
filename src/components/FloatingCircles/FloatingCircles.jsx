import React from 'react';
import { motion } from 'framer-motion';

const FloatingCircles = () => {
  const circles = [
    { size: { mobile: 80, tablet: 120, desktop: 150 }, color: '#66E8FA', delay: 0, duration: 20 },
    { size: { mobile: 60, tablet: 100, desktop: 120 }, color: '#4BA9B5', delay: 2, duration: 15 },
    { size: { mobile: 50, tablet: 80, desktop: 100 }, color: '#66E8FA', delay: 4, duration: 25 },
    { size: { mobile: 90, tablet: 140, desktop: 180 }, color: '#4BA9B5', delay: 1, duration: 18 },
    { size: { mobile: 40, tablet: 60, desktop: 80 }, color: '#66E8FA', delay: 3, duration: 22 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `clamp(${circle.size.mobile}px, 
              ${circle.size.tablet}px, 
              ${circle.size.desktop}px)`,
            height: `clamp(${circle.size.mobile}px, 
              ${circle.size.tablet}px, 
              ${circle.size.desktop}px)`,
            backgroundColor: circle.color,
            filter: 'blur(clamp(30px, 45px, 60px))',
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