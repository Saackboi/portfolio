import { Injectable, NgZone, inject } from '@angular/core';
import {
  ParallaxLayer,
  animateModalClose,
  animateModalOpen,
  animateScreenEnter,
  comicPop,
  isReducedMotion,
  jellyTap,
  makeDraggable,
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

  animateScreenEnter(container: HTMLElement): void {
    this.screenEnter(container);
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

  animateModalOpen(overlay: HTMLElement, dialog: HTMLElement): void {
    this.modalOpen(overlay, dialog);
  }

  modalClose(overlay: HTMLElement, dialog: HTMLElement, onComplete: () => void): void {
    this.ngZone.runOutsideAngular(() => animateModalClose(overlay, dialog, onComplete));
  }

  animateModalClose(overlay: HTMLElement, dialog: HTMLElement, onComplete: () => void): void {
    this.modalClose(overlay, dialog, onComplete);
  }

  makeDraggable(element: HTMLElement, boundsElement?: HTMLElement): () => void {
    return makeDraggable(element, boundsElement);
  }

  setupParallax(container: HTMLElement, layers: ParallaxLayer[]): () => void {
    return setupParallax(container, layers);
  }
}
