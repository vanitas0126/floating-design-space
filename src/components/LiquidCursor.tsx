
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
      const speed = 0.2;
      const trailSpeed = 0.08;
      
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
      {/* Trail effect */}
      <div
        ref={trailRef}
        className="fixed w-10 h-10 pointer-events-none z-40 opacity-0 transition-opacity duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          boxShadow: `
            0 8px 32px rgba(31, 38, 135, 0.37),
            0 2px 16px rgba(31, 38, 135, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2)
          `,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 pointer-events-none z-50 opacity-0 transition-opacity duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(50px) saturate(180%) brightness(110%)',
          WebkitBackdropFilter: 'blur(50px) saturate(180%) brightness(110%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          boxShadow: `
            0 8px 32px rgba(31, 38, 135, 0.4),
            0 4px 16px rgba(31, 38, 135, 0.3),
            0 2px 8px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -1px 0 rgba(255, 255, 255, 0.3)
          `,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default LiquidCursor;
