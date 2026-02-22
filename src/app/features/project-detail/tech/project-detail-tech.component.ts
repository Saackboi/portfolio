import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';
import { TechCardConfig, getTechCard } from '../../../shared/constants/tech-cards';

@Component({
  selector: 'app-project-detail-tech',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './project-detail-tech.component.html',
  styleUrl: './project-detail-tech.component.css'
})
export class ProjectDetailTechComponent {
  @Input({ required: true }) project!: ProjectCard;

  protected techCardFor(name: string): TechCardConfig {
    return getTechCard(name);
  }
}
