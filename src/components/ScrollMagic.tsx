
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMagic = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Very subtle hero background parallax
      gsap.to('.hero-background', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Minimal floating elements movement
      gsap.to('.floating-element', {
        y: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Hide hero text grid during scroll
      gsap.to('.philosophy-text', {
        opacity: 0,
        y: -30,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      // Simple header backdrop filter
      gsap.to('.scroll-header', {
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.08)',
        scrollTrigger: {
          trigger: 'body',
          start: 'top -50',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} />;
};

export default ScrollMagic;
