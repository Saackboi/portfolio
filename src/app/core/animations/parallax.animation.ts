import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export interface ParallaxLayer {
  element: HTMLElement;
  depth: number;
  tilt?: boolean;
}

export function setupParallax(container: HTMLElement, layers: ParallaxLayer[]): () => void {
  if (!container || !layers.length || isReducedMotion() || typeof window === 'undefined') {
    return () => {};
  }

  const onMouseMove = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach(({ element, depth, tilt }) => {
      if (!element) return;
      const vars: gsap.TweenVars = {
        x: relX * depth,
        y: relY * depth,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto'
      };

      if (tilt) {
        vars['rotateY'] = relX * 12;
        vars['rotateX'] = -relY * 12;
        vars['transformPerspective'] = 800;
      }


      gsap.to(element, vars);
    });
  };

  const onMouseLeave = () => {
    layers.forEach(({ element, tilt }) => {
      if (!element) return;
      const vars: gsap.TweenVars = {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto'
      };

      if (tilt) {
        vars.rotateY = 0;
        vars.rotateX = 0;
      }

      gsap.to(element, vars);
    });
  };

  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseleave', onMouseLeave);

  return () => {
    container.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('mouseleave', onMouseLeave);
  };
}
