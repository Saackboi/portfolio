import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-detail-scope',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './project-detail-scope.component.html',
  styleUrl: './project-detail-scope.component.css'
})
export class ProjectDetailScopeComponent {
  @Input({ required: true }) project!: ProjectCard;
}
