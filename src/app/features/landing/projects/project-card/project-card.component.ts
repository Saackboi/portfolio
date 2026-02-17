import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

type TapeTone = 'yellow' | 'primary' | 'blue';
type Tilt = 'left' | 'right' | 'neutral';

export type ProjectCardData = {
  title: string;
  description: string;
  year: string;
  code: string;
  image: string;
  tapeTone: TapeTone;
  tilt: Tilt;
};

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectCardData;

  protected tapeClass(): string {
    return `project-card__tape--${this.project.tapeTone}`;
  }

  protected tiltClass(): string {
    return `project-card--${this.project.tilt}`;
  }
}
