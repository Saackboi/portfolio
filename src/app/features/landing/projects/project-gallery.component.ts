import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ProjectCardComponent } from './project-card/project-card.component';

type TapeTone = 'yellow' | 'primary' | 'blue';

type ProjectCard = {
  title: string;
  description: string;
  year: string;
  code: string;
  image: string;
  tapeTone: TapeTone;
  tilt: 'left' | 'right' | 'neutral';
};

@Component({
  selector: 'app-project-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent {
  // Reactive list makes it easy to add or reorder projects later.
  protected readonly projects = signal<ProjectCard[]>([
    {
      title: 'Sistema Web UTP',
      description: 'Sistema para el Centro Especializado en Lenguas. Web dinámica.',
      year: '2024',
      code: '#001',
      image: 'assets/projects/project-cel.png',
      tapeTone: 'yellow',
      tilt: 'left'
    },
    {
      title: 'Self-Hosting Server',
      description: 'Plataforma Multiusos y Automatización. Linux & Docker.',
      year: '2025',
      code: '#002',
      image: 'assets/projects/project-selfhost.png',
      tapeTone: 'primary',
      tilt: 'right'
    },
    {
      title: 'Treecify',
      description: 'Micro-SaaS de Identidad Digital y QR. VPS & DevOps.',
      year: '2025',
      code: '#003',
      image: 'assets/projects/project-treecify.png',
      tapeTone: 'blue',
      tilt: 'neutral'
    },
  ]);
}
