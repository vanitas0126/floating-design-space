
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
      const elementTop = element.offsetTop;
      const headerHeight = 60;
      const additionalOffset = 20;
      
      window.scrollTo({
        top: elementTop - headerHeight - additionalOffset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[10000] h-[60px] transition-all duration-700 ease-out ${
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
        `,
      }}
    >
      <div className="w-[1680px] mx-auto h-full flex items-center justify-between px-0">
        <button
          onClick={scrollToTop}
          className="header-font text-[32px] font-medium text-gray-900 hover:text-indigo-600 transition-all duration-500 hover:scale-110"
          style={{ 
            fontFamily: 'Arial Narrow, Arial, sans-serif', 
            fontStretch: 'condensed',
            textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[80px] text-[28px] font-medium text-gray-900" style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontStretch: 'condensed' }}>
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform"
            style={{
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform"
            style={{
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform"
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
  );
};

export default ScrollHeader;
