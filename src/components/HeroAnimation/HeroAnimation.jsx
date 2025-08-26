import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/hero-circles.json';

const HeroAnimation = () => {
  const style = {
    position: 'absolute',
    top: '-100px',
    right: '-200px',
    width: '1000px',
    height: '1000px',
    opacity: 0.6
  };

  // Define colors to replace in the animation
  const colors = {
    // Map original colors to new colors
    "#000000": "#66E8FA", // Replace black with your primary color
    "#FFFFFF": "#4BA9B5"  // Replace white with your secondary color
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={style}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        colors={colors}
      />
    </div>
  );
};

export default HeroAnimation;