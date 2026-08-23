import gsap from 'gsap';

export function animateModalOpen(overlay: HTMLElement, dialog: HTMLElement): void {
  if (!overlay || !dialog) return;

  gsap.killTweensOf([overlay, dialog]);

  const tl = gsap.timeline();
  tl.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.15, ease: 'power1.out' }
  ).fromTo(
    dialog,
    {
      opacity: 0,
      y: 10,
      scale: 0.98
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.18,
      ease: 'power2.out',
      clearProps: 'transform,opacity'
    },
    '-=0.08'
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
    opacity: 0,
    y: 8,
    scale: 0.98,
    duration: 0.12,
    ease: 'power2.in'
  }).to(
    overlay,
    {
      opacity: 0,
      duration: 0.12,
      ease: 'power1.in'
    },
    '-=0.08'
  );
}
