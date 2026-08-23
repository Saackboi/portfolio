import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateCarouselSlide(
  track: HTMLElement,
  _direction: number = 1
): void {
  if (!track || isReducedMotion()) return;

  const activeCard = track.querySelector('.polaroid-frame--active') as HTMLElement | null;
  if (!activeCard) return;

  const activeTapes = activeCard.querySelectorAll('.polaroid-frame__tape');
  const activeCta = activeCard.querySelector('.polaroid-frame__cta') as HTMLElement | null;

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // 1. Masking tapes slap/snap onto the corners from above with elastic bounce
  if (activeTapes.length > 0) {
    gsap.killTweensOf(activeTapes);
    tl.fromTo(
      activeTapes,
      {
        opacity: 0,
        scale: 1.6,
        y: -14
      },
      {
        opacity: 0.85,
        scale: 1,
        y: 0,
        duration: 0.28,
        ease: 'back.out(2.4)',
        stagger: 0.06,
        clearProps: 'scale,y'
      },
      0.08
    );
  }

  // 2. CTA button stamps/pops onto the bottom chin with comic tactile punch
  if (activeCta) {
    gsap.killTweensOf(activeCta);
    tl.fromTo(
      activeCta,
      {
        opacity: 0,
        scale: 1.45,
        y: -8,
        rotation: -2
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.26,
        ease: 'back.out(2.2)',
        clearProps: 'all'
      },
      0.14
    );
  }
}
