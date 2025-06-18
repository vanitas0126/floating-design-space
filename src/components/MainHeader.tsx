
interface MainHeaderProps {
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
}

const MainHeader = ({ scrollToSection, scrollToTop }: MainHeaderProps) => {
  return (
    <div className="absolute top-[30px] left-0 w-full z-[9999] opacity-100">
      <div className="max-w-[1680px] mx-auto flex justify-between items-center px-[20px]">
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

export default MainHeader;
