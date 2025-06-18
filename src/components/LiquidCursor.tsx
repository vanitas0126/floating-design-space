
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
      {/* 부드러운 글래스모피즘 메인 커서 */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full z-[99999] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 100%)
          `,
          backdropFilter: 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: 'blur(12px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `
            0 0 15px rgba(255, 255, 255, 0.2),
            0 4px 20px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.4)
          `,
          transition: 'opacity 0.3s ease, transform 0.1s ease',
          opacity: 0,
        }}
      />
      
      {/* 부드러운 글래스모피즘 팔로워 커서 */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full z-[99998] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)
          `,
          backdropFilter: 'blur(20px) saturate(120%)',
          WebkitBackdropFilter: 'blur(20px) saturate(120%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: `
            0 0 25px rgba(255, 255, 255, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.08),
            inset 0 1px 2px rgba(255, 255, 255, 0.3)
          `,
          transition: 'opacity 0.3s ease',
          opacity: 0,
        }}
      />
    </>
  );
};

export default LiquidCursor;
