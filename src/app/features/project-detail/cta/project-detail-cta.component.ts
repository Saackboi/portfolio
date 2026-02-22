import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-detail-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './project-detail-cta.component.html',
  styleUrl: './project-detail-cta.component.css'
})
export class ProjectDetailCtaComponent {
  @Input({ required: true }) project!: ProjectCard;
}
