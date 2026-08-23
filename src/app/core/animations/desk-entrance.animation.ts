import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateDeskEntrance(container: HTMLElement): void {
  if (!container || isReducedMotion()) return;

  const header = container.querySelector('.projects__heading') as HTMLElement | null;
  const cards = container.querySelectorAll('.polaroid-frame');
  const tapes = container.querySelectorAll('.polaroid-frame--active .polaroid-frame__tape');
  const cta = container.querySelector('.polaroid-frame--active .polaroid-frame__cta') as HTMLElement | null;
  const hud = container.querySelector('.projects__hud') as HTMLElement | null;
  const navBtns = container.querySelectorAll('.projects__nav-btn');

  // Kill existing tweens
  gsap.killTweensOf([header, cards, tapes, cta, hud, navBtns]);

  // Set initial invisible / dropped-from-above state immediately before paint
  if (header) {
    gsap.set(header, { opacity: 0, y: -24 });
  }

  if (cards.length > 0) {
    gsap.set(cards, {
      opacity: 0,
      y: -90,
      scale: 0.9,
      rotation: (i) => (i % 2 === 0 ? -10 : 10)
    });
  }

  if (tapes.length > 0) {
    gsap.set(tapes, { opacity: 0, scale: 1.6 });
  }

  if (cta) {
    gsap.set(cta, { opacity: 0, scale: 1.4 });
  }

  if (hud) {
    gsap.set(hud, { opacity: 0, y: 20 });
  }

  if (navBtns.length > 0) {
    gsap.set(navBtns, { opacity: 0, scale: 0.85 });
  }

  // Create clean orchestrated entrance timeline
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    onComplete: () => {
      if (header) gsap.set(header, { clearProps: 'all' });
      if (cards.length > 0) gsap.set(cards, { clearProps: 'transform,opacity' });
      if (tapes.length > 0) gsap.set(tapes, { clearProps: 'transform,opacity' });
      if (cta) gsap.set(cta, { clearProps: 'transform,opacity' });
      if (hud) gsap.set(hud, { clearProps: 'all' });
      if (navBtns.length > 0) gsap.set(navBtns, { clearProps: 'all' });
    }
  });

  // 1. Header slides in smoothly
  if (header) {
    tl.to(header, { opacity: 1, y: 0, duration: 0.3 });
  }

  // 2. Polaroids drop onto the desk with physical elastic landing
  if (cards.length > 0) {
    tl.to(
      cards,
      {
        opacity: (i, el) => (el.classList.contains('polaroid-frame--active') ? 1 : 0.72),
        y: (i, el) => (el.classList.contains('polaroid-frame--active') ? 0 : 26),
        scale: (i, el) => (el.classList.contains('polaroid-frame--active') ? 1 : 0.82),
        rotation: (i, el) =>
          el.classList.contains('polaroid-frame--left')
            ? -6.5
            : el.classList.contains('polaroid-frame--right')
            ? 6.5
            : 0,
        duration: 0.48,
        ease: 'back.out(1.5)',
        stagger: 0.08
      },
      '-=0.15'
    );
  }

  // 3. Masking tape corners slap onto the active Polaroid
  if (tapes.length > 0) {
    tl.to(
      tapes,
      {
        opacity: 0.85,
        scale: 1,
        duration: 0.26,
        ease: 'back.out(2.4)',
        stagger: 0.06
      },
      '-=0.18'
    );
  }

  // 4. CTA paper sticker snaps onto the bottom chin
  if (cta) {
    tl.to(
      cta,
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2.2)'
      },
      '-=0.18'
    );
  }

  // 5. Controls and HUD appear
  if (hud || navBtns.length > 0) {
    tl.to(
      [...(hud ? [hud] : []), ...Array.from(navBtns)],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.28,
        stagger: 0.05
      },
      '-=0.18'
    );
  }
}
