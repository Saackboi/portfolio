import gsap from 'gsap';

export function animateCarouselSlide(
  track: HTMLElement,
  direction: number = 1
): void {
  if (!track) return;

  const activeCard = track.querySelector('.polaroid-card--active') as HTMLElement | null;
  const leftCard = track.querySelector('.polaroid-card--left') as HTMLElement | null;
  const rightCard = track.querySelector('.polaroid-card--right') as HTMLElement | null;

  const cards = [leftCard, activeCard, rightCard].filter(Boolean) as HTMLElement[];
  if (cards.length === 0) return;

  gsap.killTweensOf(cards);

  const startX = direction > 0 ? 60 : -60;
  const startRotateY = direction > 0 ? 12 : -12;

  // Animate the cards with 3D slide and smooth settle
  if (activeCard) {
    gsap.fromTo(
      activeCard,
      {
        x: startX,
        rotateY: startRotateY,
        scale: 0.94,
        opacity: 0.7
      },
      {
        x: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        clearProps: 'x,rotateY,scale,opacity'
      }
    );
  }

  if (leftCard) {
    gsap.fromTo(
      leftCard,
      {
        x: startX * 0.7,
        opacity: 0.3
      },
      {
        x: 0,
        opacity: 0.5,
        duration: 0.35,
        ease: 'power2.out',
        clearProps: 'x,opacity'
      }
    );
  }

  if (rightCard) {
    gsap.fromTo(
      rightCard,
      {
        x: startX * 0.7,
        opacity: 0.3
      },
      {
        x: 0,
        opacity: 0.5,
        duration: 0.35,
        ease: 'power2.out',
        clearProps: 'x,opacity'
      }
    );
  }
}
