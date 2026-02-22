import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-detail-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './project-detail-hero.component.html',
  styleUrl: './project-detail-hero.component.css'
})
export class ProjectDetailHeroComponent {
  @Input({ required: true }) project!: ProjectCard;
}
