
const MainHeader = () => {
  const handleScrollToSection = (sectionId: string) => {
    console.log('🎯🎯🎯 MainHeader scrolling to section:', sectionId);
    
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
    
    console.log('🔄🔄🔄 Scrolling to position:', scrollTarget);
    
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  const handleScrollToTop = () => {
    console.log('🔝🔝🔝 MainHeader scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleButtonClick = (action: string, e: React.MouseEvent) => {
    console.log('🖱️🖱️🖱️ BUTTON CLICKED!!! Action:', action);
    console.log('🖱️🖱️🖱️ Event type:', e.type);
    console.log('🖱️🖱️🖱️ Target:', e.target);
    console.log('🖱️🖱️🖱️ CurrentTarget:', e.currentTarget);
    
    e.preventDefault();
    e.stopPropagation();
    
    if (action === 'top') {
      handleScrollToTop();
    } else {
      handleScrollToSection(action);
    }
  };

  // 더 강력한 클릭 감지
  const handleMouseDown = (buttonName: string, e: React.MouseEvent) => {
    console.log('🖱️🖱️🖱️ MOUSE DOWN DETECTED on:', buttonName);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseUp = (buttonName: string, e: React.MouseEvent) => {
    console.log('🖱️🖱️🖱️ MOUSE UP DETECTED on:', buttonName);
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed top-0 left-0 w-full"
      style={{
        zIndex: 9999999999,
        pointerEvents: 'none',
        position: 'fixed'
      }}
    >
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0 pt-[10px]">
        <button 
          onClick={(e) => handleButtonClick('top', e)}
          onMouseDown={(e) => handleMouseDown('UX.Song', e)}
          onMouseUp={(e) => handleMouseUp('UX.Song', e)}
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
          style={{
            pointerEvents: 'auto',
            zIndex: 9999999999,
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: '5px 10px',
            margin: '0',
            display: 'block',
            minHeight: '50px',
            minWidth: '150px'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
          <button 
            onClick={(e) => handleButtonClick('work', e)}
            onMouseDown={(e) => handleMouseDown('Work', e)}
            onMouseUp={(e) => handleMouseUp('Work', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              padding: '5px 10px',
              margin: '0',
              display: 'block',
              minHeight: '50px',
              minWidth: '80px'
            }}
          >
            Work
          </button>
          <button 
            onClick={(e) => handleButtonClick('about', e)}
            onMouseDown={(e) => handleMouseDown('About', e)}
            onMouseUp={(e) => handleMouseUp('About', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              padding: '5px 10px',
              margin: '0',
              display: 'block',
              minHeight: '50px',
              minWidth: '80px'
            }}
          >
            About
          </button>
          <button 
            onClick={(e) => handleButtonClick('contact', e)}
            onMouseDown={(e) => handleMouseDown('Contact', e)}
            onMouseUp={(e) => handleMouseUp('Contact', e)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999999,
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              padding: '5px 10px',
              margin: '0',
              display: 'block',
              minHeight: '50px',
              minWidth: '80px'
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
