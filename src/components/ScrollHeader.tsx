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
    let targetPosition = 0;
    switch (sectionId) {
      case 'work':
        targetPosition = 1150;
        break;
      case 'about':
        targetPosition = 3290;
        break;
      case 'contact':
        targetPosition = 4880;
        break;
      default:
        targetPosition = 0;
    }
    const headerHeight = 60;
    const scrollTarget = targetPosition - headerHeight;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      {/* Full-width header container */}
      <div className="fixed top-0 left-0 w-full z-[10000]">
        <header className={`h-[60px] w-full transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{
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
      }}>
          <div className="w-[1680px] mx-auto flex justify-between items-center h-full px-[90px]">
            <button onClick={scrollToTop} className="header-font text-[32px] font-medium text-gray-900 hover:text-indigo-600 transition-all duration-500 hover:scale-110 cursor-pointer" style={{
            fontFamily: 'Arial Narrow, Arial, sans-serif',
            fontStretch: 'condensed',
            textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
          }}>
              UX.Song
            </button>
            
            <nav className="header-font flex gap-[80px] text-[28px] font-medium text-gray-900" style={{
            fontFamily: 'Arial Narrow, Arial, sans-serif',
            fontStretch: 'condensed'
          }}>
              <button onClick={() => scrollToSection('work')} className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95" style={{
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }}>
                Work
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95" style={{
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }}>
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-all duration-500 hover:scale-110 transform cursor-pointer active:scale-95" style={{
              textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
            }}>
                Contact
              </button>
            </nav>
          </div>
        </header>
      </div>
    </>;
};
export default ScrollHeader;