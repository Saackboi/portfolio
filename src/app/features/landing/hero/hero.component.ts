import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { SkillChartComponent, SkillStat } from './skill-chart/skill-chart.component';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, SkillChartComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  protected readonly skills = signal<SkillStat[]>([
    { label: 'FRONT', value: 100 },
    { label: 'BACK', value: 80 },
    { label: 'UX/UI', value: 20 },
    { label: 'DB', value: 10 }
  ]);
}
