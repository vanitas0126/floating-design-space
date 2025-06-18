
import { useEffect } from 'react';
import ScrollHeader from '@/components/ScrollHeader';
import LiquidCursor from '@/components/LiquidCursor';
import ScrollMagic from '@/components/ScrollMagic';
import FloatingElement from '@/components/FloatingElement';
import SkillsScroll from '@/components/SkillsScroll';
import GlassMorphCard from '@/components/GlassMorphCard';
import EnhancedAnimatedSection from '@/components/EnhancedAnimatedSection';

const Index = () => {
  useEffect(() => {
    // html과 body 스타일 설정으로 스크롤바 문제 해결
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // html 높이 설정
    htmlElement.style.height = '100%';
    
    // body 스타일 설정 - min-height를 100vh에서 100%로 변경
    bodyElement.style.minHeight = '100%';
    bodyElement.style.height = '5000px';
    bodyElement.style.display = 'flex';
    bodyElement.style.flexDirection = 'column';
    bodyElement.style.overflowX = 'hidden';
    
    // box-sizing 전역 적용
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      <LiquidCursor />
      <ScrollHeader />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="w-[1680px] mx-auto px-8 text-center">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              UX.Song
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Creating Digital Experiences Through Design
            </p>
          </div>
          <FloatingElement />
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <div className="w-[1680px] mx-auto px-8">
            <EnhancedAnimatedSection>
              <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GlassMorphCard
                  title="Design System"
                  description="Comprehensive design system for modern applications"
                  imageUrl="/images/glass.png"
                />
                <GlassMorphCard
                  title="Mobile App"
                  description="User-centered mobile application design"
                  imageUrl="/images/glass2.png"
                />
                <GlassMorphCard
                  title="Web Platform"
                  description="Enterprise web platform with complex workflows"
                  imageUrl="/images/heroimg.png"
                />
              </div>
            </EnhancedAnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="w-[1680px] mx-auto px-8">
            <EnhancedAnimatedSection>
              <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Skills</h2>
              <SkillsScroll />
            </EnhancedAnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="w-[1680px] mx-auto px-8">
            <EnhancedAnimatedSection>
              <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">About</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  I'm a passionate UX designer with over 5 years of experience creating 
                  user-centered digital experiences. I believe in the power of design to 
                  solve complex problems and improve people's lives.
                </p>
                <p className="text-lg text-gray-500">
                  When I'm not designing, you can find me exploring new technologies, 
                  sketching ideas, or enjoying a good cup of coffee.
                </p>
              </div>
            </EnhancedAnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="w-[1680px] mx-auto px-8">
            <EnhancedAnimatedSection>
              <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Contact</h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-xl text-gray-600 mb-8">
                  Let's work together to create something amazing.
                </p>
                <a 
                  href="mailto:hello@uxsong.com"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </EnhancedAnimatedSection>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="w-[1680px] mx-auto px-8">
          <div className="text-center">
            <p className="text-gray-600">Songhee Park © 2025</p>
            <p className="text-gray-500 mt-2">Instagram</p>
          </div>
        </div>
      </footer>

      <ScrollMagic />
    </div>
  );
};

export default Index;
