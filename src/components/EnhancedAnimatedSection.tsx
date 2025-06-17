
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EnhancedAnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationType?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate';
  duration?: number;
}

const EnhancedAnimatedSection = ({ 
  children, 
  delay = 0, 
  className = '', 
  animationType = 'fadeUp',
  duration = 1
}: EnhancedAnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const getInitialState = () => {
      switch (animationType) {
        case 'fadeUp':
          return { opacity: 0, y: 30 };
        case 'fadeDown':
          return { opacity: 0, y: -30 };
        case 'fadeLeft':
          return { opacity: 0, x: -30 };
        case 'fadeRight':
          return { opacity: 0, x: 30 };
        case 'scale':
          return { opacity: 0, scale: 0.9 };
        case 'rotate':
          return { opacity: 0, rotation: 5, scale: 0.95 };
        default:
          return { opacity: 0, y: 30 };
      }
    };

    const getFinalState = () => {
      switch (animationType) {
        case 'fadeUp':
        case 'fadeDown':
          return { opacity: 1, y: 0 };
        case 'fadeLeft':
        case 'fadeRight':
          return { opacity: 1, x: 0 };
        case 'scale':
          return { opacity: 1, scale: 1 };
        case 'rotate':
          return { opacity: 1, rotation: 0, scale: 1 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    gsap.set(element, getInitialState());

    const animation = gsap.to(element, {
      ...getFinalState(),
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, animationType, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default EnhancedAnimatedSection;
