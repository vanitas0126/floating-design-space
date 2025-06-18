
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
      {/* Trail effect - 완전히 클릭 차단 */}
      <div
        ref={trailRef}
        className="fixed w-12 h-12 z-[10000] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(40px) saturate(200%) brightness(120%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(120%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.6)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          boxShadow: `
            0 4px 12px rgba(0, 0, 0, 0.08),
            inset 0 1px 4px rgba(255, 255, 255, 0.6)
          `,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Main cursor - 완전히 클릭 차단 */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 z-[10001] opacity-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 100%)',
          backdropFilter: 'blur(50px) saturate(250%) brightness(130%)',
          WebkitBackdropFilter: 'blur(50px) saturate(250%) brightness(130%)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderTop: '1px solid rgba(255, 255, 255, 0.7)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          boxShadow: `
            0 3px 8px rgba(0, 0, 0, 0.06),
            inset 0 1px 4px rgba(255, 255, 255, 0.7)
          `,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default LiquidCursor;
