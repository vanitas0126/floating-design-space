
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

const ContactSection = () => {
  // GitHub Pages 배포 시 올바른 이미지 경로 설정
  const basePath = import.meta.env.PROD ? '/floating-design-space' : '';

  const openEmail = () => {
    window.location.href = 'mailto:allivanitas@gmail.com';
  };

  return (
    <section id="contact" className="absolute top-[5000px] left-0 w-full contact-section">
      <AnimatedSection 
        className="absolute left-[calc(4.16667%+40px)]"
        delay={100}
      >
        <h2 className="text-5xl font-medium text-gray-900 leading-tight">Contact</h2>
      </AnimatedSection>

      <AnimatedSection 
        className="absolute top-[415px] left-1/2 transform -translate-x-1/2 text-center z-10"
        delay={200}
      >
        <h3 
          className="text-[130px] font-medium text-gray-900 leading-tight mb-[40px] cursor-pointer transition-transform duration-500 hover:scale-105 contact-title"
          onClick={openEmail}
          style={{
            textShadow: '0 2px 4px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.6)'
          }}
        >
          EMAIL... ME!
        </h3>
        
        <p className="text-4xl leading-[1.75] text-gray-900" style={{
          textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)'
        }}>
          For project inquiries or portfolio access,<br />
          contact me directly at{' '}
          <span 
            className="font-garamond font-medium italic text-indigo-600 cursor-pointer transition-colors duration-500 hover:text-purple-600 underline decoration-2 underline-offset-4"
            onClick={openEmail}
            style={{
              textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(255, 255, 255, 0.7)'
            }}
          >
            allivanitas@gmail.com
          </span>
        </p>

        <AnimatedSection 
          className="mt-[280px] w-full"
          delay={300}
        >
          <div className="w-[1680px] mx-auto flex justify-center items-center gap-20">
            <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Dribbble</a>
            <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Behance</a>
            <a href="#" className="text-4xl text-gray-900 no-underline font-medium transition-colors duration-500 hover:text-indigo-600">Portfolio</a>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection 
        className="absolute top-[132px] left-[182px] w-[1557px] h-[796px] z-0"
        delay={150}
      >
        <img 
          src={`${basePath}/images/emailme.png`} 
          alt="Email Me Background" 
          className="w-full h-full object-cover rounded-[20px]" 
          onError={(e) => {
            console.log(`Failed to load emailme image from path: ${basePath}/images/emailme.png`);
            console.log('Current basePath:', basePath);
            console.log('Full URL attempted:', `${basePath}/images/emailme.png`);
          }}
        />
      </AnimatedSection>

      {/* Footer를 Contact 섹션 아래에 배치 */}
      <div className="absolute top-[1200px] left-0 w-full">
        <Footer />
      </div>
    </section>
  );
};

export default ContactSection;
