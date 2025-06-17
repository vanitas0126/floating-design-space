
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
      {/* Trail effect with enhanced glassmorphism */}
      <div
        ref={trailRef}
        className="fixed w-12 h-12 pointer-events-none z-[10000] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(60px) saturate(200%) brightness(120%)',
          WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(120%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.6)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 8px 25px rgba(0, 0, 0, 0.08),
            inset 0 2px 4px rgba(255, 255, 255, 0.8),
            inset 0 -2px 4px rgba(255, 255, 255, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1)
          `,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 8px 32px rgba(99, 102, 241, 0.15))',
        }}
      />
      
      {/* Main cursor with liquid glass effect */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-[10001] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(80px) saturate(250%) brightness(130%)',
          WebkitBackdropFilter: 'blur(80px) saturate(250%) brightness(130%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderTop: '2px solid rgba(255, 255, 255, 0.8)',
          borderLeft: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          boxShadow: `
            0 15px 45px rgba(0, 0, 0, 0.2),
            0 5px 15px rgba(0, 0, 0, 0.1),
            inset 0 3px 6px rgba(255, 255, 255, 0.9),
            inset 0 -1px 2px rgba(255, 255, 255, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2)
          `,
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 4px 20px rgba(99, 102, 241, 0.25))',
        }}
      />
    </>
  );
};

export default LiquidCursor;
