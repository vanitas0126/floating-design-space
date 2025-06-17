
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: 'light' | 'medium' | 'strong';
}

const FloatingElement = ({ 
  children, 
  className = '', 
  delay = 0,
  intensity = 'medium'
}: FloatingElementProps) => {
  const getFloatIntensity = () => {
    switch (intensity) {
      case 'light': return { y: [-4, 4, -2, 0], rotate: [-1, 1, -0.5, 0] };
      case 'strong': return { y: [-12, 8, -6, 0], rotate: [-3, 2, -1.5, 0] };
      default: return { y: [-8, 6, -4, 0], rotate: [-2, 1.5, -1, 0] };
    }
  };

  const floatAnimation = getFloatIntensity();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: floatAnimation.y,
        rotate: floatAnimation.rotate,
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: 8,
          delay: delay + 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 8,
          delay: delay + 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
