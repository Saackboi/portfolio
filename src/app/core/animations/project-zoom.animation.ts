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

  // Remove mask clipping during zoom
  if (viewport) {
    viewport.style.overflow = 'visible';
    viewport.style.maskImage = 'none';
    viewport.style.webkitMaskImage = 'none';
  }

  const tl = gsap.timeline({
    onComplete: () => {
      onComplete();
    }
  });

  // 1. Grab & Anticipation: micro-lift
  tl.to(card, {
    scale: 1.08,
    y: -16,
    rotation: -1,
    duration: 0.12,
    ease: 'power2.out',
    zIndex: 9999
  })
  // 2. Cinematic Zoom: rapid ultra-fluid engulfment
  .to(card, {
    scale: 15,
    y: 0,
    rotation: 0,
    duration: 0.28,
    ease: 'power4.in'
  }, '-=0.02')
  // 3. Blackout shutter flash
  .to(blackout, {
    opacity: 1,
    duration: 0.15,
    ease: 'power2.inOut'
  }, '-=0.15');
}
