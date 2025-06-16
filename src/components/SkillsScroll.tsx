
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

  const skillIcons = [
    { type: 'icon', delay: 0 },
    { type: 'icon', delay: 0.8 },
    { type: 'icon', delay: 1.6 },
    { type: 'icon', delay: 2.4 }
  ];

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
      className="px-6 py-3 border border-gray-700 rounded-lg text-2xl font-medium text-gray-800 uppercase flex-shrink-0"
    >
      {skill}
    </div>
  );

  const renderSkillIcon = (iconIndex: number, delay: number) => (
    <div
      key={`icon-${iconIndex}`}
      className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex-shrink-0 opacity-80"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  return (
    <div className="h-full flex items-center">
      <div
        ref={trackRef}
        className="flex items-center gap-[45px] whitespace-nowrap"
        style={{
          animation: 'scroll-skills 20s linear infinite',
        }}
      >
        {/* First set */}
        {renderSkillItem('Brand Identity', 0)}
        {renderSkillIcon(0, 0)}
        {renderSkillItem('UI/UX Design', 1)}
        {renderSkillIcon(1, 0.8)}
        {renderSkillItem('Digital Strategy', 2)}
        {renderSkillItem('Web Design', 3)}
        {renderSkillIcon(2, 1.6)}
        {renderSkillItem('Product Management', 4)}
        {renderSkillIcon(3, 2.4)}
        {renderSkillItem('UX Research', 5)}
        {renderSkillItem('Web Publishing', 6)}
        {renderSkillItem('Graphic Design', 7)}

        {/* Duplicate for infinite scroll */}
        {renderSkillItem('Brand Identity', 8)}
        {renderSkillIcon(4, 0)}
        {renderSkillItem('UI/UX Design', 9)}
        {renderSkillIcon(5, 0.8)}
        {renderSkillItem('Digital Strategy', 10)}
        {renderSkillItem('Web Design', 11)}
        {renderSkillIcon(6, 1.6)}
        {renderSkillItem('Product Management', 12)}
        {renderSkillIcon(7, 2.4)}
        {renderSkillItem('UX Research', 13)}
        {renderSkillItem('Web Publishing', 14)}
        {renderSkillItem('Graphic Design', 15)}
      </div>
    </div>
  );
};

export default SkillsScroll;
