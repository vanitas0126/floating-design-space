
import AnimatedSection from '@/components/AnimatedSection';

const AboutSection = () => {
  const basePath = import.meta.env.PROD ? '/floating-design-space' : '';

  return (
    <section id="about" className="absolute top-[3700px] left-0 w-full about-section">
      <AnimatedSection 
        className="absolute left-[calc(4.16667%+40px)]"
        delay={100}
      >
        <h2 className="text-5xl font-medium text-gray-900 leading-tight">About</h2>
      </AnimatedSection>

      <div className="absolute top-[121px] left-[120px] flex gap-[120px] w-[calc(100%-240px)]">
        <AnimatedSection 
          className="w-[821px] h-[887px] overflow-hidden flex-shrink-0 about-image"
          delay={200}
        >
          <img 
            src={`${basePath}/images/face.png`} 
            alt="Songhee's Profile" 
            className="w-full h-full object-cover"
            onError={() => console.log('Failed to load face image')}
          />
        </AnimatedSection>

        <div className="flex-1 flex flex-col max-w-[821px] h-[887px] justify-between">
          <AnimatedSection 
            className="mb-[40px]"
            delay={300}
          >
            <h3 className="font-garamond font-light italic text-[110px] leading-tight text-gray-900 whitespace-nowrap">
              Hi, I'm Songhee
            </h3>
          </AnimatedSection>

          <AnimatedSection 
            className="mb-[80px]"
            delay={400}
          >
            <p className="text-2xl leading-[200%] text-gray-900 text-justify">
              I'm a UX designer who starts with structure — not surface. I focus on identifying hesitation points in a user's journey and turning them into seamless, intuitive flows. My process values logic, clarity, and repeatable decisions that scale. To me, design is about removing friction, not adding noise. Whether through research, flow mapping, or UI refinement, I aim to create interactions that feel natural — not because they explain themselves, but because they don't need to.
            </p>
          </AnimatedSection>

          {/* Experience Section */}
          <div className="w-full flex-1 flex flex-col justify-end">
            <AnimatedSection delay={500}>
              <div className="py-[35px] flex justify-between items-center border-t border-gray-700">
                <h4 className="text-[28px] font-medium text-gray-900 leading-tight">Visual Communication Design</h4>
                <div className="flex items-center">
                  <span className="font-mono text-lg text-gray-500">Korean Polytechnic @ 24-26</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="py-[35px] flex justify-between items-center border-t border-gray-700">
                <h4 className="text-[28px] font-medium text-gray-900 leading-tight">UX/UI Designer</h4>
                <div className="flex items-center">
                  <span className="font-mono text-lg text-gray-500">RoopreKorea @ 21.4-22.1</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="py-[35px] flex justify-between items-center border-t border-gray-700">
                <h4 className="text-[28px] font-medium text-gray-900 leading-tight">Product Design Certification</h4>
                <div className="flex items-center">
                  <span className="font-mono text-lg text-gray-500">Blossom UX School @ 22.7-23.2</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="border-t border-gray-700" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
