
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMagic = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero section subtle parallax effect
      gsap.to('.hero-background', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Floating elements gentle movement
      gsap.to('.floating-element', {
        y: -30,
        rotation: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Philosophy text subtle reveal
      gsap.fromTo('.philosophy-text', 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills scroll smooth movement
      gsap.to('.skills-scroll', {
        x: '-100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Work projects gentle scale
      gsap.fromTo('.work-project',
        { scale: 0.95, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.work-section',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // About section image subtle parallax
      gsap.to('.about-image', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Contact section gentle entrance
      gsap.fromTo('.contact-title',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Header subtle blur effect
      gsap.to('.scroll-header', {
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.08)',
        scrollTrigger: {
          trigger: 'body',
          start: 'top -50',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} />;
};

export default ScrollMagic;
