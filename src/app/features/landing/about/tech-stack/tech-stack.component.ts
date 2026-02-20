import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { TechCategory } from '../../../../core/models/portfolio-content.model';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';

@Component({
  selector: 'app-tech-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  private readonly portfolioContent = inject(PortfolioContentService);

  protected readonly categories = this.portfolioContent.techStack;

  protected badgeToneClass(category: TechCategory, index: number): string {
    const tone = category.badgeTones[index % category.badgeTones.length];
    return `tech-stack__badge--${tone}`;
  }

  protected badgeTiltClass(index: number): string {
    const tiltIndex = (index % 4) + 1;
    return `tech-stack__badge--tilt-${tiltIndex}`;
  }
}
