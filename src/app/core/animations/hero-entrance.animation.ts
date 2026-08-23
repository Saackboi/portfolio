import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateHeroEntrance(container: HTMLElement): void {
  if (!container || isReducedMotion()) return;

  const bgArtwork = container.querySelector('.hero__artwork--bg') as HTMLElement | null;
  const bodyArtwork = container.querySelector('.hero__artwork--body') as HTMLElement | null;
  const errorGlow = container.querySelector('.hero__error-glow') as HTMLElement | null;
  const headline = container.querySelector('.hero__headline') as HTMLElement | null;
  const bio = container.querySelector('.hero__bio') as HTMLElement | null;
  const cta = container.querySelector('.hero__cta') as HTMLElement | null;

  gsap.killTweensOf([bgArtwork, bodyArtwork, errorGlow, headline, bio, cta]);

  // Set initial invisible / warp-prep state
  if (bgArtwork) gsap.set(bgArtwork, { opacity: 0, scale: 1.06 });
  if (bodyArtwork) gsap.set(bodyArtwork, { opacity: 0, y: -35, scale: 0.96 });
  if (errorGlow) gsap.set(errorGlow, { opacity: 0, scale: 0.6 });
  if (headline) gsap.set(headline, { opacity: 0, x: -35 });
  if (bio) gsap.set(bio, { opacity: 0, y: 16 });
  if (cta) gsap.set(cta, { opacity: 0, scale: 0.85, y: 12 });

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    onComplete: () => {
      if (bgArtwork) gsap.set(bgArtwork, { clearProps: 'opacity,scale,transform' });
      if (bodyArtwork) gsap.set(bodyArtwork, { clearProps: 'opacity,y,scale,transform' });
      if (errorGlow) gsap.set(errorGlow, { clearProps: 'opacity,scale,transform' });
      if (headline) gsap.set(headline, { clearProps: 'all' });
      if (bio) gsap.set(bio, { clearProps: 'all' });
      if (cta) gsap.set(cta, { clearProps: 'all' });
    }
  });

  // 1. Cosmic backdrop warp expansion
  if (bgArtwork) {
    tl.to(bgArtwork, { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' });
  }

  // 2. Character descending into zero-g hover
  if (bodyArtwork) {
    tl.to(bodyArtwork, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.42');
  }

  // 3. Headline punch-in
  if (headline) {
    tl.to(headline, { opacity: 1, x: 0, duration: 0.45, ease: 'back.out(1.3)' }, '-=0.38');
  }

  // 4. Hologram HUD badge glitch-pop
  if (errorGlow) {
    tl.to(errorGlow, { opacity: 1, scale: 1, duration: 0.28, ease: 'back.out(2.2)' }, '-=0.25');
  }

  // 5. Bio and role summary
  if (bio) {
    tl.to(bio, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2');
  }

  // 6. Tactical CTA button bounce
  if (cta) {
    tl.to(cta, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(2)' }, '-=0.2');
  }
}
