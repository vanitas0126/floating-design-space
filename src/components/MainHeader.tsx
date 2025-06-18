
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

  const handleButtonClick = (action: string) => {
    console.log('Button clicked:', action);
    if (action === 'top') {
      handleScrollToTop();
    } else {
      handleScrollToSection(action);
    }
  };

  return (
    <div 
      className="fixed top-[10px] left-0 w-full opacity-100"
      style={{
        zIndex: 999999,
        pointerEvents: 'none',
        position: 'fixed'
      }}
      onClick={() => console.log('MainHeader container clicked')}
    >
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            console.log('Logo button clicked');
            handleButtonClick('top');
          }}
          onMouseEnter={() => console.log('Logo button hovered')}
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
          style={{
            pointerEvents: 'auto',
            zIndex: 999999,
            position: 'relative',
            background: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid red'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              console.log('Work button clicked');
              handleButtonClick('work');
            }}
            onMouseEnter={() => console.log('Work button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999,
              position: 'relative',
              background: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid green'
            }}
          >
            Work
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              console.log('About button clicked');
              handleButtonClick('about');
            }}
            onMouseEnter={() => console.log('About button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999,
              position: 'relative',
              background: 'rgba(0, 0, 255, 0.1)',
              border: '1px solid blue'
            }}
          >
            About
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              console.log('Contact button clicked');
              handleButtonClick('contact');
            }}
            onMouseEnter={() => console.log('Contact button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 999999,
              position: 'relative',
              background: 'rgba(255, 255, 0, 0.1)',
              border: '1px solid yellow'
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
