
import { useEffect } from 'react';
import LiquidCursor from '@/components/LiquidCursor';
import ScrollHeader from '@/components/ScrollHeader';
import FloatingElement from '@/components/FloatingElement';
import SkillsScroll from '@/components/SkillsScroll';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap');

      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
        overflow-x: hidden;
      }

      body {
        font-family: 'Arial Narrow', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        cursor: auto !important;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-stretch: condensed;
        font-weight: 400;
        letter-spacing: -0.02em;
        line-height: 1.6;
        background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fafc 100%);
        color: #1a1a1a;
      }

      .font-garamond {
        font-family: 'EB Garamond', 'Garamond', 'Times New Roman', serif !important;
        font-feature-settings: "liga", "kern" !important;
      }

      /* Header font styling */
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

      .smooth-scroll-target {
        animation: smoothScroll 0.8s ease-out;
      }

      .portfolio-container {
        width: 1920px;
        height: 6500px;
        position: relative;
        margin: 0 auto;
        background: transparent;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
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

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 부드러운 스크롤 효과 추가
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      // 스크롤 완료 후 애니메이션 효과
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

  const openEmail = () => {
    window.location.href = 'mailto:allivanitas@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-x-hidden">
      <LiquidCursor />
      <ScrollHeader />
      
      <div className="portfolio-container">
        {/* Fixed Header */}
        <div className="absolute top-[60px] left-0 w-full z-10 opacity-100">
          <button
            onClick={scrollToTop}
            className="header-font absolute left-[186px] transform -translate-x-1/2 text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
          >
            UX.Song
          </button>
          
          <nav className="header-font absolute left-[calc(66.6667%+65px)] flex gap-[100px] text-4xl font-medium text-gray-900">
            <button
              onClick={() => scrollToSection('work')}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="absolute top-[300px] left-[120px] w-[1678px] h-[642px] rounded-[20px]">
          {/* Hero Background */}
          <div className="absolute inset-0 w-full h-full">
            <img src="/images/heroimg.png" alt="Hero Background" className="w-full h-full object-cover rounded-[20px]" />
          </div>

          {/* Floating Elements with children */}
          <FloatingElement className="absolute top-[2px] left-[calc(75%+42px)] w-[158px] h-[154px]" delay={0.8}>
            <img src="/images/cheese.png" alt="Floating cheese" className="w-full h-full object-contain" style={{ transform: 'rotate(30deg)' }} />
          </FloatingElement>
          
          <FloatingElement className="absolute -top-[62px] left-[calc(83.3333%-61px)] w-[102px] h-[91px]" delay={1.6}>
            <img src="/images/elipse.png" alt="Floating ellipse" className="w-full h-full object-contain" style={{ transform: 'rotate(259deg) scaleY(-1)' }} />
          </FloatingElement>
          
          <FloatingElement className="absolute -top-[82px] left-[calc(75%-60px)] w-[159px] h-[152px]" delay={2.4}>
            <img src="/images/ball.png" alt="Floating ball" className="w-full h-full object-contain" style={{ transform: 'rotate(339deg)' }} />
          </FloatingElement>
          
          <FloatingElement className="absolute -top-[62px] left-[calc(66.6667%-41px)] w-[358px] h-[300px]" delay={0.4}>
            <img src="/images/glass.png" alt="Floating glass" className="w-full h-full object-contain" />
          </FloatingElement>

          {/* Hero Text */}
          <AnimatedSection delay={300} className="absolute -top-[53px] left-[calc(16.6667%+138px)] w-[397px] leading-relaxed">
            <p className="text-lg text-gray-900 mb-2">Design is more than just a few tricks to the eye.</p>
            <h1 className="font-garamond font-medium italic text-[28px] text-gray-900">
              It's a few tricks to the brain
            </h1>
          </AnimatedSection>
        </section>

        {/* Philosophy Section */}
        <section className="absolute top-[889px] left-[120px] w-[1680px]">
          <div className="flex gap-[50px] text-2xl leading-[1.75] text-gray-900 text-justify">
            <AnimatedSection delay={100} className="flex-1 w-[520px]">
              <p>I believe good design aligns structure with perception. It should not only work, but feel right. A clear flow, supported by intentional visuals and language, helps users act without hesitation. To me, aesthetics are part of how we communicate</p>
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex-1 w-[520px]">
              <p>clarity not <span className="bg-white px-1">just decoration. That's why I value</span> purposeful layout, readable <span className="bg-white px-1">hierarchy, and design systems</span> that scale. Design isn't about <span className="bg-white px-1">finishing fast. It's about</span> reducing friction through decisions that make sense and visuals that speak clearly.</p>
            </AnimatedSection>
            <AnimatedSection delay={300} className="flex-1 w-[520px]">
              <p>I don't separate function and form — I design them together, so users don't have to think twice. Every detail, from spacing to wording, exists to support a single goal: clarity. Good design earns trust by being clear, calm, and out of the way.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <AnimatedSection className="absolute top-[1225px] -left-[72px] w-[2064px] h-[70px] overflow-hidden">
          <SkillsScroll />
        </AnimatedSection>

        {/* Work Section */}
        <section id="work" className="absolute top-[1400px] left-0 w-full">
          <div className="absolute left-[calc(4.16667%+40px)]">
            <AnimatedSection>
              <h2 className="text-5xl font-medium text-gray-900 leading-tight mb-[80px]">Work</h2>
            </AnimatedSection>
          </div>

          {/* Project Row 1 */}
          <div className="absolute top-[180px] left-[120px] flex gap-[50px] w-[calc(100%-240px)]">
            <AnimatedSection delay={100} className="w-[821px]">
              <div className="w-full h-[887px] rounded-none overflow-hidden mb-[40px] relative">
                <img 
                  src="/images/hopeposter.png" 
                  alt="HOPE Project" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">HOPE</h3>
            </AnimatedSection>

            <AnimatedSection delay={200} className="w-[821px]">
              <div className="w-full h-[887px] rounded-none overflow-hidden mb-[40px] relative">
                <img 
                  src="/images/madmax.png" 
                  alt="MAD MAX Project" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">MAD MAX</h3>
            </AnimatedSection>
          </div>

          {/* Project Row 2 */}
          <div className="absolute top-[1301px] left-[120px] flex gap-[50px] w-[calc(100%-240px)]">
            <AnimatedSection delay={100} className="w-[821px]">
              <div className="w-full h-[887px] rounded-none overflow-hidden mb-[40px] relative">
                <img 
                  src="/images/musicplayer.png" 
                  alt="PIXEL MUSIC PLAYER Project" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">PIXEL MUSIC PLAYER</h3>
            </AnimatedSection>

            <AnimatedSection delay={200} className="w-[821px]">
              <div className="w-full h-[887px] rounded-none overflow-hidden mb-[40px] relative">
                <img 
                  src="/images/nigeria.png" 
                  alt="NIGERIA RAILWAY Project" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <h3 className="text-[28px] font-medium text-gray-900 leading-tight">NIGERIA RAILWAY DEPARTMENT WEBSITE REDESIGN</h3>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="absolute top-[3900px] left-0 w-full">
          <div className="absolute left-[calc(4.16667%+40px)]">
            <AnimatedSection>
              <h2 className="text-5xl font-medium text-gray-900 leading-tight">About</h2>
            </AnimatedSection>
          </div>

          <div className="absolute top-[121px] left-[120px] flex gap-[120px] w-[calc(100%-240px)]">
            <AnimatedSection delay={100} className="w-[821px] h-[887px] overflow-hidden flex-shrink-0">
              <img src="/images/face.png" alt="Songhee's Profile" className="w-full h-full object-cover" />
            </AnimatedSection>

            <div className="flex-1 flex flex-col">
              <AnimatedSection delay={200} className="mb-[40px]">
                <h3 className="font-garamond font-light italic text-[110px] leading-tight text-gray-900 whitespace-nowrap">
                  Hi, I'm Songhee
                </h3>
              </AnimatedSection>

              <AnimatedSection delay={300} className="mb-[60px]">
                <p className="text-2xl leading-[200%] text-gray-900 text-justify max-w-[805px]">
                  I'm a UX designer who starts with structure — not surface. I focus on identifying hesitation points in a user's journey and turning them into seamless, intuitive flows. My process values logic, clarity, and repeatable decisions that scale. To me, design is about removing friction, not adding noise. Whether through research, flow mapping, or UI refinement, I aim to create interactions that feel natural — not because they explain themselves, but because they don't need to.
                </p>
              </AnimatedSection>

              {/* Experience Section */}
              <div className="w-[805px] h-[400px] flex flex-col justify-center">
                <AnimatedSection delay={400} className="py-[40px] flex justify-between items-center border-t border-gray-700">
                  <h4 className="text-[28px] font-medium text-gray-900 leading-tight">Visual Communication Design</h4>
                  <div className="flex items-center">
                    <span className="font-mono text-lg text-gray-500">Korean Polytechnic @ 24-26</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={500} className="py-[40px] flex justify-between items-center border-t border-gray-700">
                  <h4 className="text-[28px] font-medium text-gray-900 leading-tight">UX/UI Designer</h4>
                  <div className="flex items-center">
                    <span className="font-mono text-lg text-gray-500">RoopreKorea @ 21.4-22.1</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={600} className="py-[40px] flex justify-between items-center border-t border-gray-700">
                  <h4 className="text-[28px] font-medium text-gray-900 leading-tight">Product Design Certification</h4>
                  <div className="flex items-center">
                    <span className="font-mono text-lg text-gray-500">Blossom UX School @ 22.7-23.2</span>
                  </div>
                </AnimatedSection>

                <div className="border-t border-gray-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative top-[5200px] left-0 w-full">
          <div className="absolute left-[calc(4.16667%+40px)]">
            <AnimatedSection delay={100}>
              <h2 className="text-5xl font-medium text-gray-900 leading-tight">Contact</h2>
            </AnimatedSection>
          </div>

          <div className="absolute top-[415px] left-1/2 transform -translate-x-1/2 text-center z-10">
            <AnimatedSection delay={200}>
              <h3 
                className="text-[130px] font-medium text-gray-900 leading-tight mb-[40px] cursor-pointer transition-transform duration-500 hover:scale-105"
                onClick={openEmail}
                style={{
                  textShadow: '0 2px 4px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
                }}
              >
                EMAIL... ME!
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-4xl leading-[1.75] text-gray-900" style={{
                textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)'
              }}>
                For project inquiries or portfolio access,<br />
                contact me directly at{' '}
                <span 
                  className="font-garamond font-medium italic text-indigo-600 cursor-pointer transition-colors duration-500 hover:text-purple-600 underline decoration-2 underline-offset-4"
                  onClick={openEmail}
                  style={{
                    textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)'
                  }}
                >
                  allivanitas@gmail.com
                </span>
              </p>
            </AnimatedSection>

            <div className="flex justify-between items-center gap-20 mt-[280px] w-full">
              <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Dribbble</a>
              <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Behance</a>
              <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Portfolio</a>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute top-[132px] left-[182px] w-[1557px] h-[796px] z-0">
            <AnimatedSection delay={100}>
              <img src="/images/emailme.png" alt="Contact Background" className="w-full h-full object-cover rounded-[20px]" />
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-50 p-0 border-t-2 border-gray-700 static mt-auto flex flex-col items-center bottom-0">
          <div className="w-full flex flex-col items-center justify-center pt-[60px] pb-0">
            <div className="w-full flex justify-between items-center px-10 pb-5 text-[28px]">
              <p className="text-gray-900">Songhee Park © 2025</p>
              <a href="#" className="text-gray-900 no-underline transition-colors duration-500 hover:text-indigo-600">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
