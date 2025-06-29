
import { useEffect, useRef } from 'react';

const SkillsScroll = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const skills = [
    'Brand Identity',
    'UI/UX Design', 
    'Digital Strategy',
    'Web Design',
    'Product Management',
    'UX Research',
    'Web Publishing',
    'Graphic Design'
  ];

  // GitHub Pages 배포 시 올바른 이미지 경로 설정
  const basePath = import.meta.env.PROD ? '/floating-design-space' : '';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const renderSkillItem = (skill: string, index: number) => (
    <div
      key={`skill-${index}`}
      className="px-6 py-3 border border-gray-700 rounded-lg text-2xl font-medium text-gray-800 uppercase flex-shrink-0 transition-colors duration-500"
    >
      {skill}
    </div>
  );

  const renderSkillIcon = (src: string, alt: string, iconIndex: number, delay: number) => (
    <div
      key={`icon-${iconIndex}`}
      className="flex-shrink-0"
      style={{
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <img 
        src={`${basePath}${src}`} 
        alt={alt} 
        className="object-contain" 
        onError={(e) => {
          console.log(`Failed to load ${alt} image from path: ${basePath}${src}`);
          console.log('Current basePath:', basePath);
          console.log('Full URL attempted:', `${basePath}${src}`);
        }}
      />
    </div>
  );

  return (
    <div className="h-full flex items-center">
      <div
        ref={trackRef}
        className="flex items-center gap-[45px] whitespace-nowrap"
        style={{
          animation: 'scroll-skills 25s linear infinite',
        }}
      >
        {/* First set */}
        {renderSkillItem('Brand Identity', 0)}
        {renderSkillIcon('/images/eclipse2.png', 'Eclipse2 Icon', 0, 0)}
        {renderSkillItem('UI/UX Design', 1)}
        {renderSkillIcon('/images/stars.png', 'Stars Icon', 1, 0.8)}
        {renderSkillItem('Digital Strategy', 2)}
        {renderSkillItem('Web Design', 3)}
        {renderSkillIcon('/images/songhee.png', 'Songhee Icon', 2, 1.6)}
        {renderSkillItem('Product Management', 4)}
        {renderSkillIcon('/images/glass2.png', 'Glass2 Icon', 3, 2.4)}
        {renderSkillItem('UX Research', 5)}
        {renderSkillItem('Web Publishing', 6)}
        {renderSkillItem('Graphic Design', 7)}

        {/* Duplicate for infinite scroll */}
        {renderSkillItem('Brand Identity', 8)}
        {renderSkillIcon('/images/eclipse2.png', 'Eclipse2 Icon', 4, 0)}
        {renderSkillItem('UI/UX Design', 9)}
        {renderSkillIcon('/images/stars.png', 'Stars Icon', 5, 0.8)}
        {renderSkillItem('Digital Strategy', 10)}
        {renderSkillItem('Web Design', 11)}
        {renderSkillIcon('/images/songhee.png', 'Songhee Icon', 6, 1.6)}
        {renderSkillItem('Product Management', 12)}
        {renderSkillIcon('/images/glass2.png', 'Glass2 Icon', 7, 2.4)}
        {renderSkillItem('UX Research', 13)}
        {renderSkillItem('Web Publishing', 14)}
        {renderSkillItem('Graphic Design', 15)}
      </div>
    </div>
  );
};

export default SkillsScroll;
