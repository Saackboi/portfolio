import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { isReducedMotion } from './reduced-motion';

gsap.registerPlugin(Draggable);

export function makeDraggable(element: HTMLElement, boundsElement?: HTMLElement): () => void {
  if (!element || isReducedMotion() || typeof window === 'undefined') {
    return () => {};
  }

  const dragInstance = Draggable.create(element, {
    type: 'x,y',
    edgeResistance: 0.65,
    bounds: boundsElement ?? undefined,
    inertia: false,
    onPress() {
      gsap.to(element, {
        scale: 1.08,
        rotation: '+=3',
        boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
        zIndex: 100,
        duration: 0.12,
        ease: 'power1.out'
      });
    },
    onRelease() {
      gsap.to(element, {
        scale: 1,
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
        duration: 0.25,
        ease: 'elastic.out(1, 0.4)'
      });
    }
  });

  return () => {
    dragInstance.forEach((d) => d.kill());
  };
}
