
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
        zIndex: 9999999,
        pointerEvents: 'auto',
        position: 'fixed'
      }}
      onClick={() => console.log('MainHeader container clicked')}
    >
      <div className="w-[1680px] mx-auto flex justify-between items-center px-0">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Logo button clicked');
            handleButtonClick('top');
          }}
          onMouseEnter={() => console.log('Logo button hovered')}
          className="header-font text-[44px] font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105"
          style={{
            pointerEvents: 'auto',
            zIndex: 9999999,
            position: 'relative'
          }}
        >
          UX.Song
        </button>
        
        <nav className="header-font flex gap-[100px] text-4xl font-medium text-gray-900">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Work button clicked');
              handleButtonClick('work');
            }}
            onMouseEnter={() => console.log('Work button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999,
              position: 'relative'
            }}
          >
            Work
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('About button clicked');
              handleButtonClick('about');
            }}
            onMouseEnter={() => console.log('About button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999,
              position: 'relative'
            }}
          >
            About
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Contact button clicked');
              handleButtonClick('contact');
            }}
            onMouseEnter={() => console.log('Contact button hovered')}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
            style={{
              pointerEvents: 'auto',
              zIndex: 9999999,
              position: 'relative'
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
