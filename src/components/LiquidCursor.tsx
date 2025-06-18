
import { useEffect, useRef } from 'react';

const LiquidCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
    };

    const animateFollower = () => {
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;
      
      followerX += dx * 0.08;
      followerY += dy * 0.08;

      follower.style.transform = `translate(${followerX - 24}px, ${followerY - 24}px)`;
      
      requestAnimationFrame(animateFollower);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animateFollower();

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* High-quality glassmorphism main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full z-[99999] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.1) 100%)
          `,
          backdropFilter: 'blur(25px) saturate(200%) brightness(120%) contrast(120%)',
          WebkitBackdropFilter: 'blur(25px) saturate(200%) brightness(120%) contrast(120%)',
          border: '1.5px solid rgba(255, 255, 255, 0.6)',
          borderTop: '2px solid rgba(255, 255, 255, 0.9)',
          borderLeft: '1.5px solid rgba(255, 255, 255, 0.8)',
          boxShadow: `
            0 0 20px rgba(255, 255, 255, 0.4),
            0 8px 32px rgba(0, 0, 0, 0.15),
            inset 0 2px 0 rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(0, 0, 0, 0.1),
            0 0 60px rgba(255, 255, 255, 0.2)
          `,
          transition: 'opacity 0.3s ease, transform 0.1s ease',
          opacity: 0,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Enhanced glassmorphism follower cursor */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full z-[99998] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.03) 100%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)
          `,
          backdropFilter: 'blur(50px) saturate(220%) brightness(115%) contrast(110%) hue-rotate(5deg)',
          WebkitBackdropFilter: 'blur(50px) saturate(220%) brightness(115%) contrast(110%) hue-rotate(5deg)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderTop: '2px solid rgba(255, 255, 255, 0.6)',
          borderLeft: '1.5px solid rgba(255, 255, 255, 0.5)',
          borderRight: '0.5px solid rgba(255, 255, 255, 0.2)',
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0 0 40px rgba(255, 255, 255, 0.3),
            0 16px 60px rgba(0, 0, 0, 0.12),
            inset 0 2px 4px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.05),
            inset 2px 0 4px rgba(255, 255, 255, 0.4),
            inset -2px 0 4px rgba(0, 0, 0, 0.03),
            0 0 120px rgba(255, 255, 255, 0.15)
          `,
          transition: 'opacity 0.3s ease',
          opacity: 0,
          mixBlendMode: 'soft-light',
          filter: 'brightness(1.1) contrast(1.05)'
        }}
      />
    </>
  );
};

export default LiquidCursor;
