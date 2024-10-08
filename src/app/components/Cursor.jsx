import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        delay: 0,
        ease: "power4.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="md:fixed md:top-0 md:left-0 md:w-5 md:h-5 md:bg-colors-green-main md:rounded-full md:pointer-events-none md:z-50"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default Cursor;