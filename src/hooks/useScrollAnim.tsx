import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  pinned?: boolean;
  toggleActions?: string;
}

export const useScrollAnim = (options: ScrollAnimOptions) => {
  useEffect(() => {
    const {
      trigger,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      markers = false,
      from,
      to,
      pinned = false,
      toggleActions = 'play none none none'
    } = options;

    const triggerElement = document.querySelector(trigger);
    
    if (!triggerElement) {
      console.warn(`Element with selector "${trigger}" not found for ScrollTrigger`);
      return;
    }

    let animation;
    
    if (from) {
      // Create a timeline with from and to states
      animation = gsap.fromTo(
        triggerElement,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: triggerElement,
            start,
            end,
            scrub,
            markers,
            pin: pinned,
            toggleActions
          }
        }
      );
    } else {
      // Just create a to animation
      animation = gsap.to(triggerElement, {
        ...to,
        scrollTrigger: {
          trigger: triggerElement,
          start,
          end,
          scrub,
          markers,
          pin: pinned,
          toggleActions
        }
      });
    }

    // Cleanup function
    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation && animation.kill();
    };
  }, [options]);
};