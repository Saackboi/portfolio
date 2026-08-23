import gsap from 'gsap';
import { isReducedMotion } from './reduced-motion';

export function animateAboutEntrance(container: HTMLElement): void {
  if (!container || isReducedMotion()) return;

  const heading = container.querySelector('.about__heading') as HTMLElement | null;
  const knowMePanel = container.querySelector('.know-me__panel') as HTMLElement | null;
  const techStackPanel = container.querySelector('.tech-stack__panel') as HTMLElement | null;
  const tapes = container.querySelectorAll('.know-me__tape, .tech-stack__tape');
  const manifestoItems = container.querySelectorAll('.know-me__manifesto-list li');
  const badges = container.querySelectorAll('.tech-stack__badge');

  gsap.killTweensOf([heading, knowMePanel, techStackPanel, tapes, manifestoItems, badges]);

  // Initial hidden state
  if (heading) gsap.set(heading, { opacity: 0, y: -25 });
  if (knowMePanel) gsap.set(knowMePanel, { opacity: 0, y: -45, scale: 0.96, rotation: -1 });
  if (techStackPanel) gsap.set(techStackPanel, { opacity: 0, y: -45, scale: 0.96, rotation: 1 });
  if (tapes.length > 0) gsap.set(tapes, { opacity: 0, scale: 1.4 });
  if (manifestoItems.length > 0) gsap.set(manifestoItems, { opacity: 0, x: -15 });
  if (badges.length > 0) gsap.set(badges, { opacity: 0, scale: 0.8 });

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    onComplete: () => {
      if (heading) gsap.set(heading, { clearProps: 'all' });
      if (knowMePanel) gsap.set(knowMePanel, { clearProps: 'opacity,y,scale,transform' });
      if (techStackPanel) gsap.set(techStackPanel, { clearProps: 'opacity,y,scale,transform' });
      if (tapes.length > 0) gsap.set(tapes, { clearProps: 'opacity,scale,transform' });
      if (manifestoItems.length > 0) gsap.set(manifestoItems, { clearProps: 'all' });
      if (badges.length > 0) gsap.set(badges, { clearProps: 'all' });
    }
  });

  // 1. Heading drop
  if (heading) {
    tl.to(heading, { opacity: 1, y: 0, duration: 0.35 });
  }

  // 2. Dossier panels landing onto the desk
  if (knowMePanel) {
    tl.to(
      knowMePanel,
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.48, ease: 'back.out(1.4)' },
      '-=0.2'
    );
  }

  if (techStackPanel) {
    tl.to(
      techStackPanel,
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.48, ease: 'back.out(1.4)' },
      '-=0.38'
    );
  }

  // 3. Tapes snap onto the corners
  if (tapes.length > 0) {
    tl.to(
      tapes,
      { opacity: 1, scale: 1, duration: 0.28, ease: 'back.out(2.2)', stagger: 0.05 },
      '-=0.2'
    );
  }

  // 4. Manifesto bullet points stamp in
  if (manifestoItems.length > 0) {
    tl.to(
      manifestoItems,
      { opacity: 1, x: 0, duration: 0.28, ease: 'power2.out', stagger: 0.04 },
      '-=0.2'
    );
  }

  // 5. Tech badges cascade with micro-elastic pop
  if (badges.length > 0) {
    tl.to(
      badges,
      { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(1.8)', stagger: 0.02 },
      '-=0.25'
    );
  }
}
