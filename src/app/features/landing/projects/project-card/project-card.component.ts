import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProjectCard } from '../../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectCard;

  protected tapeClass(): string {
    return `project-card__tape--${this.project.tapeTone}`;
  }

  protected tiltClass(): string {
    return `project-card--${this.project.tilt}`;
  }
}
