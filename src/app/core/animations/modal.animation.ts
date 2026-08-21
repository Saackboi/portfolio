import gsap from 'gsap';

export function animateModalOpen(overlay: HTMLElement, dialog: HTMLElement): void {
  if (!overlay || !dialog) return;

  gsap.killTweensOf([overlay, dialog]);

  const tl = gsap.timeline();
  tl.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.16, ease: 'power1.out' }
  ).fromTo(
    dialog,
    {
      scale: 0.94,
      opacity: 0,
      y: 15
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.22,
      ease: 'back.out(1.5)',
      clearProps: 'transform,opacity'
    },
    '-=0.06'
  );
}

export function animateModalClose(
  overlay: HTMLElement,
  dialog: HTMLElement,
  onComplete: () => void
): void {
  if (!overlay || !dialog) {
    onComplete();
    return;
  }

  gsap.killTweensOf([overlay, dialog]);

  const tl = gsap.timeline({ onComplete });
  tl.to(dialog, {
    scale: 0.95,
    opacity: 0,
    y: 10,
    duration: 0.14,
    ease: 'power2.in'
  }).to(
    overlay,
    {
      opacity: 0,
      duration: 0.1,
      ease: 'power1.in'
    },
    '-=0.04'
  );
}
