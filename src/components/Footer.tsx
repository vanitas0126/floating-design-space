
const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 relative z-[10001]">
      <div className="max-w-[1680px] mx-auto flex justify-between items-center py-[20px] px-[20px]">
        <p className="header-font text-[44px] font-medium text-gray-900">
          Songhee Park © 2025
        </p>
        
        <a 
          href="#" 
          className="header-font text-4xl font-medium text-gray-900 cursor-pointer transition-all duration-300 hover:scale-105 hover:text-indigo-600"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
