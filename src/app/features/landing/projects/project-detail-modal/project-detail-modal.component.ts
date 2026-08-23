import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCard } from '../../../../core/models/portfolio-content.model';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { SectionNavigationService } from '../../../../core/services/section-navigation.service';
import { GsapAnimationService } from '../../../../core/services/gsap-animation.service';
import { TechCardConfig, getTechCard } from '../../../../shared/constants/tech-cards';

export type ProjectDetailTab = 'overview' | 'scope' | 'tech' | 'footage';

@Component({
  selector: 'app-project-detail-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.css'
})
export class ProjectDetailModalComponent {
  readonly slug = input.required<string>();
  readonly closeModal = output<void>();

  private readonly portfolioContent = inject(PortfolioContentService);
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly activeTab = signal<ProjectDetailTab>('overview');
  readonly previewImage = signal<{ src: string; caption: string } | null>(null);
  readonly isLightboxClosing = signal<boolean>(false);

  readonly allProjects = this.portfolioContent.projects;

  readonly project = computed<ProjectCard | undefined>(() =>
    this.allProjects().find((p) => p.slug === this.slug())
  );

  readonly currentIndex = computed<number>(() =>
    this.allProjects().findIndex((p) => p.slug === this.slug())
  );

  readonly prevProject = computed<ProjectCard | null>(() => {
    const list = this.allProjects();
    const idx = this.currentIndex();
    if (list.length <= 1 || idx === -1) return null;
    return list[(idx - 1 + list.length) % list.length];
  });

  readonly nextProject = computed<ProjectCard | null>(() => {
    const list = this.allProjects();
    const idx = this.currentIndex();
    if (list.length <= 1 || idx === -1) return null;
    return list[(idx + 1) % list.length];
  });

  constructor() {
    afterNextRender(() => {
      const overlay = this.host.nativeElement.querySelector('.project-modal') as HTMLElement | null;
      const dialog = this.host.nativeElement.querySelector('.project-modal__container') as HTMLElement | null;
      if (overlay && dialog) {
        this.gsapAnimation.modalOpen(overlay, dialog);
      }
    });
  }

  setTab(tab: ProjectDetailTab, event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.activeTab.set(tab);
  }

  switchProject(slug?: string, event?: MouseEvent): void {
    if (!slug) return;
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.sectionNav.openProject(slug);
  }

  close(): void {
    const overlay = this.host.nativeElement.querySelector('.project-modal') as HTMLElement | null;
    const dialog = this.host.nativeElement.querySelector('.project-modal__container') as HTMLElement | null;
    if (overlay && dialog) {
      this.gsapAnimation.modalClose(overlay, dialog, () => {
        this.closeModal.emit();
      });
    } else {
      this.closeModal.emit();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    if (this.previewImage()) {
      this.closeImagePreview();
    } else {
      this.close();
    }
  }

  protected techCardFor(name: string): TechCardConfig {
    return getTechCard(name);
  }

  protected getPolaroidClass(index: number): string {
    const classes = [
      'project-modal__polaroid--tilt-left',
      'project-modal__polaroid--tilt-right',
      'project-modal__polaroid--tilt-subtle-left',
      'project-modal__polaroid--tilt-subtle-right'
    ];
    return classes[index % classes.length];
  }

  protected getTapeClass(index: number): string {
    const tapes = [
      'project-modal__polaroid-tape--yellow',
      'project-modal__polaroid-tape--pink',
      'project-modal__polaroid-tape--blue',
      'project-modal__polaroid-tape--green'
    ];
    return tapes[index % tapes.length];
  }

  openImagePreview(src?: string, caption?: string): void {
    if (!src) return;
    this.isLightboxClosing.set(false);
    this.previewImage.set({ src, caption: caption ?? 'Vista previa' });
  }

  closeImagePreview(): void {
    this.isLightboxClosing.set(true);
    setTimeout(() => {
      this.previewImage.set(null);
      this.isLightboxClosing.set(false);
    }, 180);
  }
}
