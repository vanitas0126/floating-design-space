
import { useEffect, useRef } from 'react';

const LiquidCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const trailX = useRef(0);
  const trailY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animateCursor = () => {
      const speed = 0.15;
      const trailSpeed = 0.06;
      
      cursorX.current += (mouseX.current - cursorX.current) * speed;
      cursorY.current += (mouseY.current - cursorY.current) * speed;
      
      trailX.current += (mouseX.current - trailX.current) * trailSpeed;
      trailY.current += (mouseY.current - trailY.current) * trailSpeed;

      cursor.style.left = `${cursorX.current}px`;
      cursor.style.top = `${cursorY.current}px`;
      
      trail.style.left = `${trailX.current}px`;
      trail.style.top = `${trailY.current}px`;

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      trail.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Trail effect with stronger glassmorphism */}
      <div
        ref={trailRef}
        className="fixed w-12 h-12 pointer-events-none z-[10000] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(100px) saturate(300%) brightness(140%) contrast(120%)',
          WebkitBackdropFilter: 'blur(100px) saturate(300%) brightness(140%) contrast(120%)',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderTop: '3px solid rgba(255, 255, 255, 0.8)',
          borderLeft: '3px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          boxShadow: `
            0 30px 80px rgba(0, 0, 0, 0.25),
            0 15px 40px rgba(0, 0, 0, 0.15),
            inset 0 4px 8px rgba(255, 255, 255, 0.9),
            inset 0 -4px 8px rgba(255, 255, 255, 0.5),
            0 0 0 2px rgba(255, 255, 255, 0.2),
            0 0 40px rgba(99, 102, 241, 0.3)
          `,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 12px 40px rgba(99, 102, 241, 0.25)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))',
        }}
      />
      
      {/* Main cursor with enhanced liquid glass effect */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-[10001] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)',
          backdropFilter: 'blur(120px) saturate(400%) brightness(150%) contrast(130%)',
          WebkitBackdropFilter: 'blur(120px) saturate(400%) brightness(150%) contrast(130%)',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderTop: '3px solid rgba(255, 255, 255, 0.9)',
          borderLeft: '3px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.15),
            inset 0 4px 8px rgba(255, 255, 255, 0.95),
            inset 0 -2px 4px rgba(255, 255, 255, 0.6),
            0 0 0 2px rgba(255, 255, 255, 0.3),
            0 0 30px rgba(99, 102, 241, 0.4),
            0 0 15px rgba(255, 255, 255, 0.9)
          `,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 6px 25px rgba(99, 102, 241, 0.35)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))',
        }}
      />
    </>
  );
};

export default LiquidCursor;
