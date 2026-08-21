import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  viewChild
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { GsapAnimationService } from '../../../core/services/gsap-animation.service';
import { SectionNavigationService } from '../../../core/services/section-navigation.service';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);
  private readonly host = inject(ElementRef<HTMLElement>);

  private cleanupParallax?: () => void;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    const heroSection = el.querySelector('.hero') as HTMLElement | null;

    if (heroSection) {
      const titlePanel = el.querySelector('.hero__title-panel') as HTMLElement | null;
      const bioCard = el.querySelector('.hero__bio-card') as HTMLElement | null;
      const frame = el.querySelector('.hero__frame') as HTMLElement | null;
      const modeTag = el.querySelector('.hero__mode-tag') as HTMLElement | null;
      const bubbles = Array.from(el.querySelectorAll('.hero__bubble')) as HTMLElement[];


      const layers = [
        ...(titlePanel ? [{ element: titlePanel, depth: 16 }] : []),
        ...(bioCard ? [{ element: bioCard, depth: 26 }] : []),
        ...(frame ? [{ element: frame, depth: 22 }] : []),
        ...(modeTag ? [{ element: modeTag, depth: 38 }] : []),
        ...bubbles.map((b, i) => ({ element: b, depth: 32 + i * 8 }))
      ];


      this.cleanupParallax = this.gsapAnimation.setupParallax(heroSection, layers);
    }
  }

  ngOnDestroy(): void {
    this.cleanupParallax?.();
  }

  goToProjects(event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.sectionNav.setSection('proyectos');
  }
}



