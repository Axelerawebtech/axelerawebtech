import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBGRef = useRef(null);
  const posRef = useRef({
    x: 0,
    y: 0,
    destX: 0,
    destY: 0
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBG = cursorBGRef.current;

    document.addEventListener('mousemove', (e) => {
      posRef.current.destX = e.clientX;
      posRef.current.destY = e.clientY;
    });

    const updateCursor = () => {
      const { x, y, destX, destY } = posRef.current;

      // Calculate spring movement
      posRef.current.x += (destX - x) * 0.08;
      posRef.current.y += (destY - y) * 0.08;

      cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      cursorBG.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scale(${calculateScale()})`;

      requestAnimationFrame(updateCursor);
    };

    const calculateScale = () => {
      const { x, y, destX, destY } = posRef.current;
      const distance = Math.sqrt(Math.pow(destX - x, 2) + Math.pow(destY - y, 2));
      const maxDistance = 100; // Adjust for more/less scaling
      const scale = Math.min(distance / maxDistance + 1, 2);
      return scale;
    };

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      <div className="fluid-cursor-container">
        <div ref={cursorRef} className="fluid-cursor" />
        <div ref={cursorBGRef} className="fluid-cursor-bg" />
      </div>
    </>
  );
};

export default CustomCursor;