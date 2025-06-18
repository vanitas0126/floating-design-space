
interface MainHeaderProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const MainHeader = ({
  scrollToSection,
  scrollToTop
}: MainHeaderProps) => {
  const handleScrollToSection = (sectionId: string) => {
    console.log('MainHeader scrolling to section:', sectionId);
    
    let targetPosition = 0;
    switch(sectionId) {
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

  const handleScrollToTop = () => {
    console.log('MainHeader scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute top-[10px] left-0 w-full z-[9999] opacity-100">
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0">
        <button 
          onClick={handleScrollToTop} 
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
          <button 
            onClick={() => handleScrollToSection('work')} 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
          >
            Work
          </button>
          <button 
            onClick={() => handleScrollToSection('about')} 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
          >
            About
          </button>
          <button 
            onClick={() => handleScrollToSection('contact')} 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;
