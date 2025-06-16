
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-xl bg-white/80 border-b border-white/20 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        boxShadow: '0 1px 20px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="w-full max-w-[1920px] mx-auto h-full relative flex items-center px-4">
        <button
          onClick={scrollToTop}
          className="absolute left-[186px] transform -translate-x-1/2 text-[44px] font-medium text-gray-900 hover:text-indigo-600 transition-all duration-300 hover:scale-105"
        >
          UX.Song
        </button>
        
        <nav className="absolute left-[calc(66.6667%+65px)] flex gap-[100px] text-4xl font-medium text-gray-900">
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-indigo-600 transition-all duration-300 hover:scale-105"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-indigo-600 transition-all duration-300 hover:scale-105"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-indigo-600 transition-all duration-300 hover:scale-105"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default ScrollHeader;
