import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateAboutEntrance(container: HTMLElement): void {
  if (!container || isReducedMotion()) return;

  const heading = container.querySelector('.about__heading') as HTMLElement | null;
  const dossier = container.querySelector('.know-me__dossier') as HTMLElement | null;
  const tornSheet = container.querySelector('.know-me__torn-sheet-container') as HTMLElement | null;
  const tapes = container.querySelectorAll('.know-me__tape');
  const stickers = container.querySelectorAll('.know-me__sticker');

  gsap.killTweensOf([heading, dossier, tornSheet, tapes, stickers]);

  // Initial hidden state
  if (heading) gsap.set(heading, { opacity: 0, y: -25 });
  if (dossier) gsap.set(dossier, { opacity: 0, y: -35, scale: 0.97 });
  if (tornSheet) gsap.set(tornSheet, { opacity: 0, y: -45, scale: 0.92 });
  if (tapes.length > 0) gsap.set(tapes, { opacity: 0, scale: 1.3 });
  if (stickers.length > 0) gsap.set(stickers, { opacity: 0, scale: 0.85 });

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    onComplete: () => {
      if (heading) gsap.set(heading, { clearProps: 'all' });
      if (dossier) gsap.set(dossier, { clearProps: 'opacity,y,scale' });
      if (tornSheet) gsap.set(tornSheet, { clearProps: 'opacity,y,scale' });
      if (tapes.length > 0) gsap.set(tapes, { clearProps: 'opacity,scale' });
      if (stickers.length > 0) gsap.set(stickers, { clearProps: 'opacity,scale' });
    }
  });

  // 1. Heading drop
  if (heading) {
    tl.to(heading, { opacity: 1, y: 0, duration: 0.35 });
  }

  // 2. Dossier Panel landing
  if (dossier) {
    tl.to(
      dossier,
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.4)' },
      '-=0.15'
    );
  }

  // 3. Realistic Torn Sheet landing with soft bounce
  if (tornSheet) {
    tl.to(
      tornSheet,
      { opacity: 1, y: 0, scale: 1, duration: 0.48, ease: 'back.out(1.5)' },
      '-=0.35'
    );
  }

  // 4. Tapes snapping onto the dossier corners
  if (tapes.length > 0) {
    tl.to(
      tapes,
      { opacity: 1, scale: 1, duration: 0.26, ease: 'back.out(2.2)', stagger: 0.05 },
      '-=0.2'
    );
  }

  // 5. 2x2 Sticker Cards pop onto the torn paper
  if (stickers.length > 0) {
    tl.to(
      stickers,
      { opacity: 1, scale: 1, duration: 0.26, ease: 'back.out(1.8)', stagger: 0.05 },
      '-=0.2'
    );
  }
}
