import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProjectCardComponent } from './project-card/project-card.component';
import { PortfolioContentService } from '../../../core/services/portfolio-content.service';

@Component({
  selector: 'app-project-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent {
  private readonly portfolioContent = inject(PortfolioContentService);

  protected readonly projects = this.portfolioContent.projects;
}
