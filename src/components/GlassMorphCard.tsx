
import { ReactNode } from 'react';

interface GlassMorphCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

const GlassMorphCard = ({ children, className = '', intensity = 'medium' }: GlassMorphCardProps) => {
  const getGlassStyles = () => {
    switch (intensity) {
      case 'light':
        return {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        };
      case 'strong':
        return {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%)',
          backdropFilter: 'blur(60px) saturate(200%) brightness(110%)',
          WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(110%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderTop: '2px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
        };
      default: // medium
        return {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 100%)',
          backdropFilter: 'blur(40px) saturate(180%) brightness(105%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(105%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        };
    }
  };

  return (
    <div
      className={`rounded-xl transition-all duration-300 ${className}`}
      style={getGlassStyles()}
    >
      {children}
    </div>
  );
};

export default GlassMorphCard;
