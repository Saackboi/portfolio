import gsap from 'gsap';

export function animateScreenEnter(container: HTMLElement): void {
  if (!container) return;

  gsap.killTweensOf(container);

  gsap.fromTo(
    container,
    {
      opacity: 0,
      scale: 0.97,
      y: 18
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.24,
      ease: 'power2.out',
      clearProps: 'all'
    }
  );
}
