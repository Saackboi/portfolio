import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { GsapAnimationService } from '../../../core/services/gsap-animation.service';
import { PortfolioContentService } from '../../../core/services/portfolio-content.service';
import { SectionNavigationService } from '../../../core/services/section-navigation.service';
import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent {
  private readonly portfolioContent = inject(PortfolioContentService);
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly projects = this.portfolioContent.projects;
  protected readonly selectedIndex = signal<number>(0);

  protected readonly totalCount = computed(() => this.projects().length);

  protected readonly activeProject = computed<ProjectCard | undefined>(() => {
    const list = this.projects();
    if (!list.length) return undefined;
    const idx = Math.max(0, Math.min(this.selectedIndex(), list.length - 1));
    return list[idx];
  });

  protected readonly prevProject = computed<ProjectCard | undefined>(() => {
    const list = this.projects();
    if (list.length <= 1) return undefined;
    const idx = (this.selectedIndex() - 1 + list.length) % list.length;
    return list[idx];
  });

  protected readonly nextProject = computed<ProjectCard | undefined>(() => {
    const list = this.projects();
    if (list.length <= 1) return undefined;
    const idx = (this.selectedIndex() + 1) % list.length;
    return list[idx];
  });

  selectProject(index: number, direction: number = 1, event?: MouseEvent): void {
    const total = this.totalCount();
    if (total === 0) return;

    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }

    const newIndex = (index + total) % total;
    this.selectedIndex.set(newIndex);

    setTimeout(() => {
      const track = this.host.nativeElement.querySelector('.projects__track') as HTMLElement | null;
      if (track) {
        this.gsapAnimation.carouselSlide(track, direction);
      }
    }, 10);
  }

  next(event?: MouseEvent): void {
    this.selectProject(this.selectedIndex() + 1, 1, event);
  }

  prev(event?: MouseEvent): void {
    this.selectProject(this.selectedIndex() - 1, -1, event);
  }

  @HostListener('window:keydown.ArrowLeft')
  handleArrowLeft(): void {
    if (this.sectionNav.activeSection() === 'proyectos' && !this.sectionNav.isContactOpen()) {
      this.prev();
    }
  }

  @HostListener('window:keydown.ArrowRight')
  handleArrowRight(): void {
    if (this.sectionNav.activeSection() === 'proyectos' && !this.sectionNav.isContactOpen()) {
      this.next();
    }
  }

  protected tapeClass(tone?: string): string {
    return `polaroid-card__tape--${tone ?? 'yellow'}`;
  }
}
