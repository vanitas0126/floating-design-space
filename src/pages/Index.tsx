import { useEffect } from 'react';
import LiquidCursor from '@/components/LiquidCursor';
import ScrollHeader from '@/components/ScrollHeader';
import SkillsScroll from '@/components/SkillsScroll';
import ScrollMagic from '@/components/ScrollMagic';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted');
    console.log('Base path:', import.meta.env.PROD ? '/floating-design-space' : '');
    
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap');

      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
        height: 100%;
      }

      body {
        font-family: 'Arial Narrow', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        cursor: auto !important;
        margin: 0;
        padding: 0;
        font-stretch: condensed;
        font-weight: 400;
        letter-spacing: -0.02em;
        line-height: 1.6;
        background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fafc 100%);
        color: #1a1a1a;
        min-height: 100vh;
        overflow-x: hidden;
      }

      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .font-garamond {
        font-family: 'EB Garamond', 'Garamond', 'Times New Roman', serif !important;
        font-feature-settings: "liga", "kern" !important;
      }

      .header-font {
        font-family: 'Arial Narrow', Arial, sans-serif !important;
        font-stretch: condensed;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-8px) rotate(2deg); }
        66% { transform: translateY(-4px) rotate(-1deg); }
      }
      
      @keyframes scroll-skills {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      @keyframes smoothScroll {
        from { opacity: 0.8; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeInUp {
        from { 
          opacity: 0; 
          transform: translateY(30px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }

      .smooth-scroll-target {
        animation: smoothScroll 0.8s ease-out;
      }

      .scroll-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .scroll-reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .portfolio-container {
        width: 1920px;
        position: relative;
        margin: 0 auto;
        background: transparent;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 1920px) {
        .portfolio-container {
          transform: scale(0.9);
          transform-origin: top center;
        }
      }

      @media (max-width: 1919px) and (min-width: 1600px) {
        .portfolio-container {
          transform: scale(0.85);
          transform-origin: top center;
        }
      }

      @media (max-width: 1599px) and (min-width: 1400px) {
        .portfolio-container {
          transform: scale(0.75);
          transform-origin: top center;
        }
      }

      @media (max-width: 1399px) and (min-width: 1200px) {
        .portfolio-container {
          transform: scale(0.65);
          transform-origin: top center;
        }
      }

      @media (max-width: 1199px) and (min-width: 1024px) {
        .portfolio-container {
          transform: scale(0.55);
          transform-origin: top center;
        }
      }

      @media (max-width: 1023px) and (min-width: 768px) {
        .portfolio-container {
          transform: scale(0.45);
          transform-origin: top center;
        }
      }

      @media (max-width: 767px) and (min-width: 480px) {
        .portfolio-container {
          transform: scale(0.35);
          transform-origin: top center;
        }
      }

      @media (max-width: 479px) {
        .portfolio-container {
          transform: scale(0.25);
          transform-origin: top center;
        }
      }
    `;
    document.head.appendChild(style);

    // Scroll reveal functionality
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      const headerOffset = 100;
      
      window.scrollTo({
        top: elementTop - headerOffset,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        element.classList.add('smooth-scroll-target');
        setTimeout(() => {
          element.classList.remove('smooth-scroll-target');
        }, 800);
      }, 500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 flex flex-col">
      <LiquidCursor />
      <ScrollHeader />
      <ScrollMagic />
      
      <div className="portfolio-container relative flex-1">
        <MainHeader scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
        <HeroSection />
        <PhilosophySection />
        
        {/* Skills Section */}
        <div className="absolute top-[990px] left-0 w-full h-[120px] overflow-hidden skills-section">
          <div className="absolute -left-[72px] w-[2064px] h-full skills-scroll">
            <SkillsScroll />
          </div>
        </div>

        <WorkSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
