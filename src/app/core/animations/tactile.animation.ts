import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function jellyTap(element: HTMLElement): void {
  if (!element || isReducedMotion()) return;

  gsap.fromTo(
    element,
    { scale: 0.92, rotation: -1.5 },
    { scale: 1, rotation: 0, duration: 0.3, ease: 'elastic.out(1, 0.35)', clearProps: 'transform' }
  );
}

export function comicPop(element: HTMLElement, delay = 0): void {
  if (!element || isReducedMotion()) return;

  gsap.fromTo(
    element,
    { scale: 0.7, opacity: 0, rotation: -4 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.35,
      delay,
      ease: 'back.out(2)',
      clearProps: 'transform'
    }
  );
}

export function retroJitter(element: HTMLElement): void {
  if (!element || isReducedMotion()) return;

  gsap.to(element, {
    rotation: '+=1.5',
    y: '+=2',
    duration: 0.15,
    repeat: -1,
    yoyo: true,
    ease: 'steps(2)'
  });
}
