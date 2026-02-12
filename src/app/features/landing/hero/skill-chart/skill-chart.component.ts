import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface SkillStat {
  label: string;
  value: number;
}

@Component({
  selector: 'app-skill-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-chart.component.html',
  styleUrl: './skill-chart.component.css'
})
export class SkillChartComponent {
  readonly skills = input<SkillStat[]>([]);

  protected stampLabel(value: number): string {
    if (value >= 75) {
      return 'STRONG';
    }

    if (value >= 50) {
      return 'SOLID';
    }

    return 'RISING';
  }

  protected isStrong(value: number): boolean {
    return value >= 75;
  }

  protected isSolid(value: number): boolean {
    return value >= 50 && value < 75;
  }

  protected isRising(value: number): boolean {
    return value < 50;
  }
}
