
import { useEffect, useState } from 'react';

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    
    // 각 섹션의 제목 요소를 직접 찾기
    let targetSelector = '';
    switch(sectionId) {
      case 'work':
        targetSelector = '[id="work"] h2, [id="work"] h1, [id="work"] .section-title';
        break;
      case 'about':
        targetSelector = '[id="about"] h2, [id="about"] h1, [id="about"] .section-title';
        break;
      case 'contact':
        targetSelector = '[id="contact"] h2, [id="contact"] h1, [id="contact"] .section-title';
        break;
      default:
        targetSelector = `#${sectionId}`;
    }
    
    const element = document.querySelector(targetSelector) as HTMLElement;
    if (element) {
      console.log('Title element found, offsetTop:', element.offsetTop);
      const elementTop = element.offsetTop;
      const headerHeight = 60; // 헤더 높이
      
      // 제목 요소로 직접 스크롤하므로 추가 오프셋 불필요
      const additionalOffset = 0;
      
      const scrollTarget = elementTop - headerHeight - additionalOffset;
      console.log('Scroll target:', scrollTarget, 'for section:', sectionId);
      
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });

      // 스크롤 후 해당 섹션의 애니메이션 트리거
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const animatedElements = section.querySelectorAll('[class*="opacity-0"], [class*="translate-y"]');
          console.log('Found animated elements:', animatedElements.length);
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, index * 100);
          });
        }
      }, 500);
    } else {
      console.log('Title element not found for section:', sectionId);
      // 폴백: 섹션 자체로 스크롤
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const elementTop = sectionElement.offsetTop;
        const headerHeight = 60;
        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1단계: 전체 화면을 덮는 고정 헤더 컨테이너 */}
      <div className="fixed top-0 left-0 w-full z-[10000] flex justify-center">
        <header 
          className={`h-[60px] w-[1680px] transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(80px) saturate(200%) brightness(110%)',
            WebkitBackdropFilter: 'blur(80px) saturate(200%) brightness(110%)',
            border: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.08),
              0 2px 16px rgba(0, 0, 0, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05)
            `
          }}
        >
          <div className="w-full mx-auto flex justify-between items-center px-0 h-full">
            <button 
              onClick={scrollToTop} 
              className="header-font text-[32px] font-medium text-gray-900 hover:text-indigo-600 transition-all duration-500 hover:scale-110 cursor-pointer"
              style={{
                fontFamily: 'Arial Narrow, Arial, sans-serif',
                fontStretch: 'condensed',
                textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
              }}
            >
              UX.Song
            </button>
            
            <nav 
              className="header-font flex gap-[80px] text-[28px] font-medium text-gray-900"
              style={{
                fontFamily: 'Arial Narrow, Arial, sans-serif',
                fontStretch: 'condensed'
              }}
            >
              <button 
                onClick={() => scrollToSection('work')} 
                className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95"
                style={{
                  textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95"
                style={{
                  textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95"
                style={{
                  textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                }}
              >
                Contact
              </button>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default ScrollHeader;
