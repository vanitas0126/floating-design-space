
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPScrollTriggerProps {
  children: ReactNode;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'parallax';
  className?: string;
}

const GSAPScrollTrigger = ({
  children,
  trigger,
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  pin = false,
  animation = 'fade',
  className = ''
}: GSAPScrollTriggerProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let tl = gsap.timeline();

    // 애니메이션 타입에 따른 초기 설정
    switch (animation) {
      case 'fade':
        gsap.set(element, { opacity: 0, y: 50 });
        tl.to(element, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        break;
      case 'slide':
        gsap.set(element, { x: -100, opacity: 0 });
        tl.to(element, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
        break;
      case 'scale':
        gsap.set(element, { scale: 0.8, opacity: 0 });
        tl.to(element, { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" });
        break;
      case 'rotate':
        gsap.set(element, { rotation: -10, opacity: 0 });
        tl.to(element, { rotation: 0, opacity: 1, duration: 1, ease: "power2.out" });
        break;
      case 'parallax':
        tl.to(element, { y: -50, duration: 1, ease: "none" });
        break;
    }

    ScrollTrigger.create({
      trigger: trigger || element,
      start,
      end,
      scrub,
      pin,
      animation: tl,
      toggleActions: "play none none reverse"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [trigger, start, end, scrub, pin, animation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPScrollTrigger;
