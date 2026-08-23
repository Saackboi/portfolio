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

  // Pre-configure ultra-fast quickTo setters for 120 FPS pointer tracking without layout thrashing
  const quickLayers = layers
    .filter((l) => Boolean(l.element))
    .map(({ element, depth, tilt }) => {
      element.style.willChange = 'transform';

      const setX = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power2.out' });
      const setY = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power2.out' });
      const setRotateY = tilt
        ? gsap.quickTo(element, 'rotateY', { duration: 0.35, ease: 'power2.out' })
        : null;
      const setRotateX = tilt
        ? gsap.quickTo(element, 'rotateX', { duration: 0.35, ease: 'power2.out' })
        : null;

      if (tilt) {
        gsap.set(element, { transformPerspective: 800 });
      }

      return {
        depth,
        tilt,
        setX,
        setY,
        setRotateX,
        setRotateY,
        element
      };
    });

  // Cache bounding box to completely eliminate synchronous layout reflows on mousemove
  let rect = container.getBoundingClientRect();

  const updateRect = () => {
    rect = container.getBoundingClientRect();
  };

  const onMouseMove = (event: MouseEvent) => {
    const width = rect.width || 1;
    const height = rect.height || 1;
    const relX = (event.clientX - rect.left) / width - 0.5;
    const relY = (event.clientY - rect.top) / height - 0.5;

    for (let i = 0; i < quickLayers.length; i++) {
      const q = quickLayers[i];
      q.setX(relX * q.depth);
      q.setY(relY * q.depth);
      if (q.tilt && q.setRotateY && q.setRotateX) {
        q.setRotateY(relX * 12);
        q.setRotateX(-relY * 12);
      }
    }
  };

  const onMouseLeave = () => {
    for (let i = 0; i < quickLayers.length; i++) {
      const q = quickLayers[i];
      q.setX(0);
      q.setY(0);
      if (q.tilt && q.setRotateY && q.setRotateX) {
        q.setRotateY(0);
        q.setRotateX(0);
      }
    }
  };

  container.addEventListener('mouseenter', updateRect, { passive: true });
  container.addEventListener('mousemove', onMouseMove, { passive: true });
  container.addEventListener('mouseleave', onMouseLeave, { passive: true });
  window.addEventListener('resize', updateRect, { passive: true });

  return () => {
    container.removeEventListener('mouseenter', updateRect);
    container.removeEventListener('mousemove', onMouseMove);
    container.removeEventListener('mouseleave', onMouseLeave);
    window.removeEventListener('resize', updateRect);
    quickLayers.forEach((q) => {
      q.element.style.willChange = 'auto';
    });
  };
}
