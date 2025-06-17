
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
        element.style.transition = 'all 0.8s ease-out';
      }, 300);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "power2.out" }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50 h-20"
          style={{
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
            `,
          }}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="w-full max-w-[1920px] mx-auto h-full relative flex items-center px-4">
            <motion.button
              onClick={scrollToTop}
              className="header-font absolute left-[186px] transform -translate-x-1/2 text-[44px] font-medium text-gray-900 transition-all duration-500"
              style={{ 
                fontFamily: 'Arial Narrow, Arial, sans-serif', 
                fontStretch: 'condensed',
                textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                color: "rgb(79, 70, 229)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              UX.Song
            </motion.button>
            
            <motion.nav 
              className="header-font absolute left-[calc(66.6667%+65px)] flex gap-[100px] text-4xl font-medium text-gray-900" 
              style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontStretch: 'condensed' }}
              variants={itemVariants}
            >
              {['Work', 'About', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="transition-all duration-500"
                  style={{
                    textShadow: '0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(255, 255, 255, 0.6)',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
                  }}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    color: "rgb(79, 70, 229)",
                    y: -2,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default ScrollHeader;
