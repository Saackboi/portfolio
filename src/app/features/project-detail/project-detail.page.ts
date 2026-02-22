import { ChangeDetectionStrategy, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectCard } from '../../core/models/portfolio-content.model';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { TechCardConfig, getTechCard } from '../../shared/constants/tech-cards';
import { ProjectDetailNavComponent } from './nav/project-detail-nav.component';

@Component({
  selector: 'app-project-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ProjectDetailNavComponent, NgOptimizedImage],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css'
})
export class ProjectDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolioContent = inject(PortfolioContentService);

  private readonly slug = signal('');

  protected readonly project = computed<ProjectCard | undefined>(() =>
    this.portfolioContent.projects().find(project => project.slug === this.slug())
  );


  private readonly galleryTiltClasses = [
    'project-footage__card--tilt-left',
    'project-footage__card--tilt-right',
    'project-footage__card--tilt-neutral'
  ];
  private readonly galleryTapeClasses = [
    'project-footage__card--tape-yellow',
    'project-footage__card--tape-pink',
    'project-footage__card--tape-blue',
    'project-footage__card--tape-green',
    'project-footage__card--tape-orange',
    'project-footage__card--tape-purple'
  ];
  private readonly galleryTapeCache = new Map<string, string[]>();


  constructor() {
    effect(() => {
      if (!this.slug() || this.portfolioContent.loading()) {
        return;
      }

      if (!this.project()) {
        void this.router.navigate(['/'], { fragment: 'proyectos' });
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug.set(params.get('slug') ?? '');
    });
  }

  protected techCardFor(name: string): TechCardConfig {
    return getTechCard(name);
  }

  protected galleryStyleFor(slug: string, caption: string, index: number): GalleryStyleConfig {
    const seed = `${slug}|${caption}|${index}`;
    const hash = this.hashString(seed);
    const tiltIndex = Math.abs(hash) % this.galleryTiltClasses.length;
    const tapeSequence = this.getTapeSequence(slug);
    const tapeIndex = index % tapeSequence.length;

    return {
      tilt: this.galleryTiltClasses[tiltIndex],
      tape: tapeSequence[tapeIndex]
    };
  }

  private getTapeSequence(slug: string): string[] {
    const key = slug || 'default';
    const cached = this.galleryTapeCache.get(key);
    if (cached) {
      return cached;
    }

    const palette = [...this.galleryTapeClasses];
    const shuffled = this.shuffleWithSeed(palette, this.hashString(key));
    this.galleryTapeCache.set(key, shuffled);
    return shuffled;
  }

  private shuffleWithSeed(values: string[], seed: number): string[] {
    const result = [...values];
    let state = seed >>> 0;
    for (let i = result.length - 1; i > 0; i -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const j = state % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  private hashString(value: string): number {
    let hash = 5381;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 33) ^ value.charCodeAt(i);
    }
    return hash;
  }


}

type GalleryStyleConfig = {
  tilt: string;
  tape: string;
};

type GalleryShot = {
  src: string;
  caption: string;
};
