

const MainHeader = () => {
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

  const handleButtonClick = (action: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked:', action);
    
    if (action === 'top') {
      handleScrollToTop();
    } else {
      handleScrollToSection(action);
    }
  };

  return (
    <div 
      className="fixed top-[10px] left-0 w-full"
      style={{
        zIndex: 999999999,
        pointerEvents: 'none',
        position: 'fixed'
      }}
    >
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0">
        <button 
          onClick={(e) => handleButtonClick('top', e)}
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
          style={{
            pointerEvents: 'auto',
            zIndex: 999999999,
            position: 'relative',
            background: 'transparent',
            border: 'none'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
          <button 
            onClick={(e) => handleButtonClick('work', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none'
            }}
          >
            Work
          </button>
          <button 
            onClick={(e) => handleButtonClick('about', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none'
            }}
          >
            About
          </button>
          <button 
            onClick={(e) => handleButtonClick('contact', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none'
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;

