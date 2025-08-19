import { useEffect } from 'react';
import MouseFollower from 'mouse-follower';
import gsap from 'gsap';
import 'mouse-follower/dist/mouse-follower.min.css';

const Cursor = () => {
  useEffect(() => {
    try {
      if (!document.querySelector('.mf-cursor')) {
        // Register GSAP with MouseFollower
        MouseFollower.registerGSAP(gsap);
        
        // Initialize cursor with options
        const cursor = new MouseFollower({
          container: document.body,
          speed: 0.7,
          ease: 'expo.out',
          skewing: 2,
          skewingText: 0,
          skewingIcon: 2,
          skewingMedia: 2,
          stateDetection: {
            '-pointer': 'a,button,input,textarea,[data-cursor="-pointer"]',
            '-hidden': 'iframe'
          }
        });

        // Cleanup on unmount
        return () => {
          if (cursor) cursor.destroy();
        };
      }
    } catch (error) {
      console.error('Error initializing cursor:', error);
    }
  }, []);

  return null;
};

export default Cursor;