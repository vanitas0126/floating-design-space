
import { useEffect, useState } from 'react';

interface ScrollHeaderProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const ScrollHeader = ({ scrollToSection, scrollToTop }: ScrollHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`absolute top-[10px] left-0 w-full z-[9999] transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0">
        <button 
          onClick={scrollToTop} 
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
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
    </div>
  );
};

export default ScrollHeader;
