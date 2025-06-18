
import AnimatedSection from '@/components/AnimatedSection';

const WorkSection = () => {
  const basePath = import.meta.env.PROD ? '/floating-design-space' : '';

  return (
    <section id="work" className="absolute top-[1316px] left-0 w-full work-section">
      <AnimatedSection 
        className="absolute left-[calc(4.16667%+40px)]"
        delay={100}
      >
        <h2 className="text-5xl font-medium text-gray-900 leading-tight mb-[60px]">Work</h2>
      </AnimatedSection>

      {/* Project Row 1 */}
      <div className="absolute top-[120px] left-[120px] flex gap-[30px] w-[calc(100%-240px)]">
        <AnimatedSection 
          className="w-[821px] work-project"
          delay={200}
        >
          <div className="w-[821px] h-[887px] rounded-none overflow-hidden mb-[30px] relative">
            <img 
              src={`${basePath}/images/hopeposter.png`} 
              alt="HOPE Project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => console.log('Failed to load hopeposter image')}
            />
          </div>
          <h3 className="text-[28px] font-medium text-gray-900 leading-tight">HOPE</h3>
        </AnimatedSection>

        <AnimatedSection 
          className="w-[821px] work-project"
          delay={300}
        >
          <div className="w-[821px] h-[887px] rounded-none overflow-hidden mb-[30px] relative">
            <img 
              src={`${basePath}/images/madmax.png`} 
              alt="MAD MAX Project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => console.log('Failed to load madmax image')}
            />
          </div>
          <h3 className="text-[28px] font-medium text-gray-900 leading-tight">MAD MAX</h3>
        </AnimatedSection>
      </div>

      {/* Project Row 2 */}
      <div className="absolute top-[1201px] left-[120px] flex gap-[30px] w-[calc(100%-240px)]">
        <AnimatedSection 
          className="w-[821px] work-project"
          delay={100}
        >
          <div className="w-[821px] h-[887px] rounded-none overflow-hidden mb-[30px] relative">
            <img 
              src={`${basePath}/images/musicplayer.png`} 
              alt="PIXEL MUSIC PLAYER Project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => console.log('Failed to load musicplayer image')}
            />
          </div>
          <h3 className="text-[28px] font-medium text-gray-900 leading-tight">PIXEL MUSIC PLAYER</h3>
        </AnimatedSection>

        <AnimatedSection 
          className="w-[821px] work-project"
          delay={200}
        >
          <div className="w-[821px] h-[887px] rounded-none overflow-hidden mb-[30px] relative">
            <img 
              src={`${basePath}/images/nigeria.png`} 
              alt="NIGERIA RAILWAY Project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => console.log('Failed to load nigeria image')}
            />
          </div>
          <h3 className="text-[28px] font-medium text-gray-900 leading-tight">NIGERIA RAILWAY DEPARTMENT WEBSITE REDESIGN</h3>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorkSection;
