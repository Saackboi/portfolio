import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateProjectZoom(
  card: HTMLElement,
  blackout: HTMLElement,
  viewport: HTMLElement | null,
  onComplete: () => void
): void {
  if (isReducedMotion()) {
    onComplete();
    return;
  }

  if (viewport) {
    viewport.style.overflow = 'visible';
  }

  const tl = gsap.timeline({
    onComplete: () => {
      onComplete();
    }
  });

  // Fast GPU-accelerated transition without rasterizing 15x bitmap sizes
  tl.to(card, {
    scale: 1.05,
    y: -8,
    duration: 0.08,
    ease: 'power2.out',
    zIndex: 9999
  })
  .to(card, {
    scale: 2.2,
    opacity: 0,
    duration: 0.16,
    ease: 'power3.in'
  }, '-=0.02')
  .to(blackout, {
    opacity: 1,
    duration: 0.12,
    ease: 'power1.inOut'
  }, '-=0.10');
}
