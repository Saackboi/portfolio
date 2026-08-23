import { Injectable, NgZone, inject } from '@angular/core';
import {
  ParallaxLayer,
  animateAboutEntrance,
  animateCarouselSlide,
  animateDeskEntrance,
  animateHeroEntrance,
  animateModalClose,
  animateModalOpen,
  animateProjectZoom,
  animateScreenEnter,
  comicPop,
  isReducedMotion,
  jellyTap,
  retroJitter,
  setupParallax
} from '../animations';

export type { ParallaxLayer };

@Injectable({ providedIn: 'root' })
export class GsapAnimationService {
  private readonly ngZone = inject(NgZone);

  isReducedMotion(): boolean {
    return isReducedMotion();
  }

  screenEnter(container: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => animateScreenEnter(container));
  }

  heroEntrance(container: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => animateHeroEntrance(container));
  }

  aboutEntrance(container: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => animateAboutEntrance(container));
  }

  deskEntrance(container: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => animateDeskEntrance(container));
  }

  comicPop(element: HTMLElement, delay = 0): void {
    this.ngZone.runOutsideAngular(() => comicPop(element, delay));
  }

  jellyTap(element: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => jellyTap(element));
  }

  retroJitter(element: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => retroJitter(element));
  }

  modalOpen(overlay: HTMLElement, dialog: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => animateModalOpen(overlay, dialog));
  }

  modalClose(overlay: HTMLElement, dialog: HTMLElement, onComplete: () => void): void {
    this.ngZone.runOutsideAngular(() => animateModalClose(overlay, dialog, onComplete));
  }

  setupParallax(container: HTMLElement, layers: ParallaxLayer[]): () => void {
    let cleanup: () => void = () => {};
    this.ngZone.runOutsideAngular(() => {
      cleanup = setupParallax(container, layers);
    });
    return cleanup;
  }

  carouselSlide(track: HTMLElement, direction: number = 1): void {
    this.ngZone.runOutsideAngular(() => animateCarouselSlide(track, direction));
  }

  projectZoom(
    card: HTMLElement,
    blackout: HTMLElement,
    viewport: HTMLElement | null,
    onComplete: () => void
  ): void {
    this.ngZone.runOutsideAngular(() => animateProjectZoom(card, blackout, viewport, onComplete));
  }
}
