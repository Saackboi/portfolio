import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject
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
      // 1. Trigger Cosmic Warp & Hero Float Entrance Animation
      this.gsapAnimation.heroEntrance(el);

      const bgArtwork = el.querySelector('.hero__artwork--bg') as HTMLElement | null;
      const bodyArtwork = el.querySelector('.hero__artwork--body') as HTMLElement | null;
      const errorGlow = el.querySelector('.hero__error-glow') as HTMLElement | null;
      const intro = el.querySelector('.hero__intro') as HTMLElement | null;

      // Optical Multi-Plane Depth Hierarchy
      const layers = [
        ...(bgArtwork ? [{ element: bgArtwork, depth: 10 }] : []),
        ...(intro ? [{ element: intro, depth: 14 }] : []),
        ...(errorGlow ? [{ element: errorGlow, depth: 24 }] : []),
        ...(bodyArtwork ? [{ element: bodyArtwork, depth: 46 }] : [])
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
