import React, { useEffect, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingElement from '@/components/FloatingElement';
import LiquidCursor from '@/components/LiquidCursor';
import ScrollHeader from '@/components/ScrollHeader';
import SkillsScroll from '@/components/SkillsScroll';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      <LiquidCursor />
      <ScrollHeader />
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl md:text-3xl font-light cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('hero')}
          >
            UX.Song
          </div>
          <nav className="hidden md:flex space-x-8">
            {['work', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-lg font-light transition-all duration-300 hover:scale-105 ${
                  activeSection === item ? 'text-gray-600' : 'text-gray-900'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/heroimg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Floating Images */}
        <FloatingElement className="absolute top-1/4 left-1/4 w-20 h-20 z-10" delay={0}>
          <img src="/images/cheese.png" alt="Floating element" className="w-full h-full object-contain" />
        </FloatingElement>
        
        <FloatingElement className="absolute top-1/3 right-1/4 w-16 h-16 z-10" delay={1.5}>
          <img src="/images/elipse.png" alt="Floating element" className="w-full h-full object-contain" />
        </FloatingElement>
        
        <FloatingElement className="absolute bottom-1/3 left-1/3 w-24 h-24 z-10" delay={3}>
          <img src="/images/ball.png" alt="Floating element" className="w-full h-full object-contain" />
        </FloatingElement>
        
        <FloatingElement className="absolute bottom-1/4 right-1/3 w-18 h-18 z-10" delay={4.5}>
          <img src="/images/glass.png" alt="Floating element" className="w-full h-full object-contain" />
        </FloatingElement>

        {/* Hero Text */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <AnimatedSection delay={500}>
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">
              Design is more than just a few tricks to the eye.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={800}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
              It's a few tricks to the brain
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <AnimatedSection delay={0}>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              I believe good design aligns structure with perception. It should not only work, but feel right. A clear flow, supported by intentional visuals and language, helps users act without hesitation. To me, aesthetics are part of how we communicate
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              clarity not just decoration. That's why I value purposeful layout, readable hierarchy, and design systems that scale. Design isn't about finishing fast. It's about reducing friction through decisions that make sense and visuals that speak clearly.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              I don't separate function and form — I design them together, so users don't have to think twice. Every detail, from spacing to wording, exists to support a single goal: clarity. Good design earns trust by being clear, calm, and out of the way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsScroll />

      {/* Work Section */}
      <section id="work" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-6xl font-light mb-16 md:mb-24">Work</h2>
        </AnimatedSection>

        {/* Project Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          <AnimatedSection delay={0}>
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="/images/hopeposter.png" 
                  alt="HOPE Project" 
                  className="w-full h-full object-cover"
                />
                {/* HOPE project floating elements */}
                <FloatingElement className="absolute top-[316px] right-[120px] w-[51px] h-[59px]" delay={0}>
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded-[26px]" />
                </FloatingElement>
                <FloatingElement className="absolute top-[131px] right-[122px] w-[105px] h-[133px]" delay={1.5}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-[26px]" />
                </FloatingElement>
                <FloatingElement className="absolute bottom-[96px] left-[44px] w-[107px] h-[136px]" delay={3}>
                  <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-[26px]" />
                </FloatingElement>
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">HOPE</h3>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="/images/madmax.png" 
                  alt="MAD MAX Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">MAD MAX</h3>
            </div>
          </AnimatedSection>
        </div>

        {/* Project Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection delay={0}>
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="/images/musicplayer.png" 
                  alt="PIXEL MUSIC PLAYER Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">PIXEL MUSIC PLAYER</h3>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="/images/nigeria.png" 
                  alt="NIGERIA RAILWAY Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">NIGERIA RAILWAY DEPARTMENT WEBSITE REDESIGN</h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimatedSection delay={0}>
          <h2 className="text-4xl md:text-6xl font-light mb-16 md:mb-24">About</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection delay={100}>
            <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img 
                src="/images/face.png" 
                alt="Songhee's Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={250}>
              <h3 className="text-3xl md:text-4xl font-light mb-6">Hi, I'm Songhee</h3>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
                I'm a UX designer who starts with structure — not surface. I focus on identifying hesitation points in a user's journey and turning them into seamless, intuitive flows. My process values logic, clarity, and repeatable decisions that scale. To me, design is about removing friction, not adding noise. Whether through research, flow mapping, or UI refinement, I aim to create interactions that feel natural — not because they explain themselves, but because they don't need to.
              </p>
            </AnimatedSection>

            {/* Experience Timeline */}
            <div className="space-y-6 mt-12">
              {[
                { title: "Visual Communication Design", company: "Korean Polytechnic", date: "24-26", delay: 500 },
                { title: "UX/UI Designer", company: "RoopreKorea", date: "21.4-22.1", delay: 600 },
                { title: "Product Design Certification", company: "Blossom UX School", date: "22.7-23.2", delay: 700 }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={item.delay}>
                  <div className="flex items-start space-x-4">
                    <div className="w-px h-12 bg-gray-300 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                      <div className="flex justify-between items-center text-gray-600">
                        <span>{item.company}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-6xl font-light mb-16 md:mb-24">Contact</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <AnimatedSection delay={200}>
              <h3 
                className="text-3xl md:text-4xl font-light cursor-pointer hover:text-gray-600 transition-colors duration-300"
                onClick={() => window.open('mailto:allivanitas@gmail.com')}
              >
                EMAIL... ME!
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
                For project inquiries or portfolio access,<br />
                contact me directly at{' '}
                <span 
                  className="cursor-pointer hover:text-gray-900 transition-colors duration-300 underline"
                  onClick={() => window.open('mailto:allivanitas@gmail.com')}
                >
                  allivanitas@gmail.com
                </span>
              </p>
            </AnimatedSection>

            <div className="flex space-x-6 mt-8">
              {['Dribbble', 'Behance', 'Portfolio'].map((link, index) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-lg font-light hover:text-gray-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <AnimatedSection delay={100}>
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/images/emailme.png" 
                alt="Contact Background" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-light">Songhee Park © 2025</p>
            <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
