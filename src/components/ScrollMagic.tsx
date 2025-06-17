
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMagic = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero section parallax effect
      gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Floating elements enhanced movement
      gsap.to('.floating-element', {
        y: -100,
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Philosophy text reveal
      gsap.fromTo('.philosophy-text', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills scroll speed variation
      gsap.to('.skills-scroll', {
        x: '-200%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // Work projects scale and fade
      gsap.fromTo('.work-project',
        { scale: 0.8, opacity: 0.3 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.work-section',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // About section image parallax
      gsap.to('.about-image', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Contact section dramatic entrance
      gsap.fromTo('.contact-title',
        { scale: 0.5, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Header blur effect on scroll
      gsap.to('.scroll-header', {
        backdropFilter: 'blur(20px)',
        background: 'rgba(255, 255, 255, 0.1)',
        scrollTrigger: {
          trigger: 'body',
          start: 'top -100',
          end: 'bottom bottom',
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} />;
};

export default ScrollMagic;
