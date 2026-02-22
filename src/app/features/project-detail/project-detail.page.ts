import { ChangeDetectionStrategy, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectCard } from '../../core/models/portfolio-content.model';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ProjectDetailNavComponent } from './nav/project-detail-nav.component';
import { ProjectDetailHeroComponent } from './hero/project-detail-hero.component';
import { ProjectDetailScopeComponent } from './scope/project-detail-scope.component';
import { ProjectDetailTechComponent } from './tech/project-detail-tech.component';
import { ProjectDetailFootageComponent } from './footage/project-detail-footage.component';
import { ProjectDetailCtaComponent } from './cta/project-detail-cta.component';

@Component({
  selector: 'app-project-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ProjectDetailNavComponent,
    ProjectDetailHeroComponent,
    ProjectDetailScopeComponent,
    ProjectDetailTechComponent,
    ProjectDetailFootageComponent,
    ProjectDetailCtaComponent
  ],
  templateUrl: './project-detail.page.html',
  styleUrl: '../../shared/styles/project-detail.shared.css'
})
export class ProjectDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolioContent = inject(PortfolioContentService);

  private readonly slug = signal('');

  protected readonly project = computed<ProjectCard | undefined>(() =>
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
