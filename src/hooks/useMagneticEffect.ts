import { useEffect, useRef } from 'react';

interface MagneticOptions {
  strength?: number;
  ease?: number;
}

export const useMagneticEffect = (options: MagneticOptions = {}) => {
  const { strength = 50, ease = 0.15 } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let bounds: DOMRect;
    let mouseX = 0;
    let mouseY = 0;
    let elementX = 0;
    let elementY = 0;
    let requestId: number;

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const animate = () => {
      if (!element) return;
      
      elementX = lerp(elementX, mouseX, ease);
      elementY = lerp(elementY, mouseY, ease);

      element.style.transform = `translate(${elementX}px, ${elementY}px)`;
      requestId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      bounds = element.getBoundingClientRect();
      
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;
      
      mouseX = (x / bounds.width) * strength;
      mouseY = (y / bounds.height) * strength;
      
      if (!requestId) {
        requestId = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestId);
    };
  }, [strength, ease]);

  return ref;
};