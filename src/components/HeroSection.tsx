
import FloatingElement from '@/components/FloatingElement';
import EnhancedAnimatedSection from '@/components/EnhancedAnimatedSection';

const HeroSection = () => {
  // GitHub Pages에서 올바른 경로 설정
  const basePath = import.meta.env.PROD ? '/floating-design-space' : '';

  return (
    <section className="absolute top-[280px] left-[120px] w-[1678px] h-[642px] rounded-[20px] hero-section">
      <div className="absolute inset-0 w-full h-full z-[100] hero-background">
        <img 
          src={`${basePath}/images/heroimg.png`} 
          alt="Hero Background" 
          className="w-full h-full object-cover rounded-[20px]"
          onLoad={() => console.log('Hero image loaded successfully')}
          onError={() => console.error('Failed to load hero image')}
        />
      </div>

      <FloatingElement className="absolute top-[2px] left-[calc(75%+42px)] w-[158px] h-[154px] floating-element" delay={0.8}>
        <img src={`${basePath}/images/cheese.png`} alt="Floating cheese" className="w-full h-full object-contain" style={{ transform: 'rotate(30deg)' }} />
      </FloatingElement>
      
      <FloatingElement className="absolute -top-[62px] left-[calc(83.3333%-61px)] w-[102px] h-[91px] floating-element" delay={1.6}>
        <img src={`${basePath}/images/elipse.png`} alt="Floating ellipse" className="w-full h-full object-contain" style={{ transform: 'rotate(259deg) scaleY(-1)' }} />
      </FloatingElement>
      
      <FloatingElement className="absolute -top-[82px] left-[calc(75%-60px)] w-[159px] h-[152px] floating-element" delay={2.4}>
        <img src={`${basePath}/images/ball.png`} alt="Floating ball" className="w-full h-full object-contain" style={{ transform: 'rotate(339deg)' }} />
      </FloatingElement>
      
      <FloatingElement className="absolute -top-[62px] left-[calc(66.6667%-41px)] w-[358px] h-[300px] floating-element" delay={0.4}>
        <img src={`${basePath}/images/glass.png`} alt="Floating glass" className="w-full h-full object-contain" />
      </FloatingElement>

      <EnhancedAnimatedSection 
        delay={0.3} 
        className="absolute -top-[53px] left-[calc(16.6667%+138px)] w-[397px] leading-relaxed z-[80]"
        animationType="fadeRight"
        duration={1.2}
      >
        <p className="text-lg text-gray-900 mb-0">Design is more than just a few tricks to the eye.</p>
        <h1 className="font-garamond font-medium italic text-[28px] text-gray-900">
          It's a few tricks to the brain
        </h1>
      </EnhancedAnimatedSection>
    </section>
  );
};

export default HeroSection;
