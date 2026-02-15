import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type TechCategory = {
  title: string;
  tone: 'primary' | 'secondary' | 'accent' | 'ink' | 'paper' | 'light';
  badges: string[];
  badgeTones: Array<'ink' | 'primary' | 'secondary' | 'accent' | 'paper' | 'muted'>;
};

@Component({
  selector: 'app-tech-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  // Reactive categories make it easy to extend the stack by area.
  protected readonly categories = signal<TechCategory[]>([
    {
      title: 'Lenguajes de Programacion',
      tone: 'primary',
      badges: ['C# .NET', 'NodeJS', 'TypeScript', 'JavaScript'],
      badgeTones: ['ink', 'primary', 'secondary', 'accent']
    },
    {
      title: 'Frameworks & Librerias',
      tone: 'secondary',
      badges: ['Angular', 'React', 'Express.js', 'n8n', 'Power Apps', 'Google Gemini'],
      badgeTones: ['paper', 'ink', 'secondary', 'primary', 'accent', 'paper']
    },
    {
      title: 'Bases de Datos',
      tone: 'accent',
      badges: ['SQL Server', 'MySQL', 'Supabase'],
      badgeTones: ['ink', 'accent', 'paper']
    },
    {
      title: 'Herramientas & Devops',
      tone: 'ink',
      badges: ['Docker', 'Cloudflare', 'Linux', 'Google Cloud', 'Git', 'Postman', 'Visual Studio'],
      badgeTones: ['accent', 'paper', 'primary', 'secondary', 'paper', 'muted', 'secondary']
    }
  ]);

  protected badgeToneClass(category: TechCategory, index: number): string {
    const tone = category.badgeTones[index % category.badgeTones.length];
    return `tech-stack__badge--${tone}`;
  }

  protected badgeTiltClass(index: number): string {
    const tiltIndex = (index % 4) + 1;
    return `tech-stack__badge--tilt-${tiltIndex}`;
  }
}
