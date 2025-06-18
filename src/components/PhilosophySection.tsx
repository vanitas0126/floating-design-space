
import EnhancedAnimatedSection from '@/components/EnhancedAnimatedSection';

const PhilosophySection = () => {
  return (
    <EnhancedAnimatedSection 
      className="absolute top-[789px] left-[120px] w-[1680px] philosophy-section"
      animationType="fadeUp"
      delay={0.1}
      duration={0.6}
    >
      <div className="flex gap-[50px] text-2xl leading-[160%] text-gray-900 text-justify font-medium">
        <div className="flex-1 w-[520px] philosophy-text">
          <p>I believe good design aligns structure with perception. It should not only work, but feel right. A clear flow, supported by intentional visuals and language, helps users act without hesitation. To me, aesthetics are part of how we communicate</p>
        </div>
        <div className="flex-1 w-[520px] philosophy-text">
          <p>clarity not just decoration. That's why I value purposeful layout, readable hierarchy, and design systems that scale. Design isn't about finishing fast. It's about reducing friction through decisions that make sense and visuals that speak clearly.</p>
        </div>
        <div className="flex-1 w-[520px] philosophy-text">
          <p>I don't separate function and form — I design them together, so users don't have to think twice. Every detail, from spacing to wording, exists to support a single goal: clarity. Good design earns trust by being clear, calm, and out of the way.</p>
        </div>
      </div>
    </EnhancedAnimatedSection>
  );
};

export default PhilosophySection;
