import { ChangeDetectionStrategy, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ProjectDetailNavComponent } from './nav/project-detail-nav.component';

@Component({
  selector: 'app-project-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectDetailNavComponent, NgOptimizedImage],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css'
})
export class ProjectDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolioContent = inject(PortfolioContentService);

  private readonly slug = signal('');

  protected readonly project = computed(() =>
    this.portfolioContent.projects().find(project => project.slug === this.slug())
  );


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

}
