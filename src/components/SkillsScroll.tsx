
import { useRef } from 'react';
import { motion } from 'framer-motion';

const SkillsScroll = () => {
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

  const renderSkillItem = (skill: string, index: number) => (
    <motion.div
      key={`skill-${index}`}
      className="px-6 py-3 border border-gray-700 rounded-lg text-2xl font-medium text-gray-800 uppercase flex-shrink-0 transition-colors duration-500"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgba(99, 102, 241, 0.3)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.div>
  );

  const renderSkillIcon = (src: string, alt: string, iconIndex: number, delay: number) => (
    <motion.div
      key={`icon-${iconIndex}`}
      className="flex-shrink-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay / 2, duration: 0.6, ease: "back.out(1.7)" }}
      whileHover={{
        scale: 1.2,
        rotate: 10,
        transition: { duration: 0.3 }
      }}
    >
      <img src={src} alt={alt} className="object-contain" />
    </motion.div>
  );

  return (
    <div className="h-full flex items-center overflow-hidden">
      <motion.div
        className="flex items-center gap-[45px] whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* First set */}
        {renderSkillItem('Brand Identity', 0)}
        {renderSkillIcon('/images/eclipse2.png', 'Brand Identity Icon', 0, 0)}
        {renderSkillItem('UI/UX Design', 1)}
        {renderSkillIcon('/images/stars.png', 'UI/UX Design Icon', 1, 0.8)}
        {renderSkillItem('Digital Strategy', 2)}
        {renderSkillItem('Web Design', 3)}
        {renderSkillIcon('/images/songhee.png', 'Web Design Icon', 2, 1.6)}
        {renderSkillItem('Product Management', 4)}
        {renderSkillIcon('/images/glass2.png', 'Product Management Icon', 3, 2.4)}
        {renderSkillItem('UX Research', 5)}
        {renderSkillItem('Web Publishing', 6)}
        {renderSkillItem('Graphic Design', 7)}

        {/* Duplicate for infinite scroll */}
        {renderSkillItem('Brand Identity', 8)}
        {renderSkillIcon('/images/eclipse2.png', 'Brand Identity Icon', 4, 0)}
        {renderSkillItem('UI/UX Design', 9)}
        {renderSkillIcon('/images/stars.png', 'UI/UX Design Icon', 5, 0.8)}
        {renderSkillItem('Digital Strategy', 10)}
        {renderSkillItem('Web Design', 11)}
        {renderSkillIcon('/images/songhee.png', 'Web Design Icon', 6, 1.6)}
        {renderSkillItem('Product Management', 12)}
        {renderSkillIcon('/images/glass2.png', 'Product Management Icon', 7, 2.4)}
        {renderSkillItem('UX Research', 13)}
        {renderSkillItem('Web Publishing', 14)}
        {renderSkillItem('Graphic Design', 15)}
      </motion.div>
    </div>
  );
};

export default SkillsScroll;
