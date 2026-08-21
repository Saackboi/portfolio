import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export interface ParallaxLayer {
  element: HTMLElement;
  depth: number;
}

export function setupParallax(container: HTMLElement, layers: ParallaxLayer[]): () => void {
  if (!container || !layers.length || isReducedMotion() || typeof window === 'undefined') {
    return () => {};
  }

  const onMouseMove = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach(({ element, depth }) => {
      if (!element) return;
      gsap.to(element, {
        x: relX * depth,
        y: relY * depth,
        duration: 0.4,
        ease: 'power1.out',
        overwrite: 'auto'
      });
    });
  };

  const onMouseLeave = () => {
    layers.forEach(({ element }) => {
      if (!element) return;
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
        overwrite: 'auto'
      });
    });
  };

  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseleave', onMouseLeave);

  return () => {
    container.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('mouseleave', onMouseLeave);
  };
}
