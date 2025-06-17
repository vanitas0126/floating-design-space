
import { useEffect, useState } from 'react';

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      // 스크롤 완료 후 부드러운 애니메이션 효과
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
        element.style.transition = 'all 0.8s ease-out';
      }, 300);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(60px) saturate(200%) brightness(105%)',
        WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(105%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        boxShadow: `
          0 8px 32px rgba(31, 38, 135, 0.37),
          0 4px 16px rgba(31, 38, 135, 0.2),
          0 2px 8px rgba(255, 255, 255, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          inset 0 -1px 0 rgba(255, 255, 255, 0.2)
        `,
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto h-full relative flex items-center px-4">
        <button
          onClick={scrollToTop}
          className="header-font absolute left-[186px] transform -translate-x-1/2 text-[44px] font-medium text-gray-900 hover:text-indigo-600 transition-all duration-500 hover:scale-105"
          style={{ 
            fontFamily: 'Arial Narrow, Arial, sans-serif', 
            fontStretch: 'condensed',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.8))'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font absolute left-[calc(66.6667%+65px)] flex gap-[100px] text-4xl font-medium text-gray-900" style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontStretch: 'condensed' }}>
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-105 transform"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.8))'
            }}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-105 transform"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.8))'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-105 transform"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.8))'
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default ScrollHeader;
