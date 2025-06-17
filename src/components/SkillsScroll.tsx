
import React from 'react';

const SkillsScroll = () => {
  const skills = [
    { text: "Brand Identity", icon: "/images/eclipse2.png" },
    { text: "UI/UX Design", icon: "/images/stars.png" },
    { text: "Digital Strategy", icon: null },
    { text: "Web Design", icon: "/images/songhee.png" },
    { text: "Product Management", icon: "/images/glass2.png" },
    { text: "UX Research", icon: null },
    { text: "Web Publishing", icon: null },
    { text: "Graphic Design", icon: null }
  ];

  // 무한 스크롤을 위해 배열을 두 번 반복
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
      <section className="py-16 md:py-24 overflow-hidden bg-gray-50">
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex items-center mx-8">
                {skill.icon ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 mr-8 flex-shrink-0">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.text} icon`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 flex-shrink-0">
                    {skill.text}
                  </span>
                )}
                {skill.icon && (
                  <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 flex-shrink-0 ml-8">
                    {skill.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsScroll;
