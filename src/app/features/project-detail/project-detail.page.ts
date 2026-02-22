import { ChangeDetectionStrategy, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ProjectDetailNavComponent } from './nav/project-detail-nav.component';

@Component({
  selector: 'app-project-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ProjectDetailNavComponent, NgOptimizedImage],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css'
})
export class ProjectDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly portfolioContent = inject(PortfolioContentService);

  private readonly slug = signal('');

  protected readonly project = computed(() =>
    this.portfolioContent.projects().find(project => project.slug === this.slug())
  );

  private readonly techCardMap: Record<string, TechCardConfig> = {
    'Node.js': {
      displayName: 'Node.js',
      logo: 'assets/logos/tech/nodejs.svg',
      color: '#339933',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.45)',
      variant: 'project-tech__card--green',
      tagLabel: 'BACKEND',
      tagBg: '#ffffff',
      tagText: '#0b0b0b'
    },
    React: {
      displayName: 'React',
      logo: 'assets/logos/tech/react.svg',
      color: '#61DAFB',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.45)',
      variant: 'project-tech__card--blue',
      tagLabel: 'FRONTEND',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    Docker: {
      displayName: 'Docker',
      logo: 'assets/logos/tech/docker.svg',
      color: '#2496ED',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'CONTAINER',
      tagBg: '#ffffff',
      tagText: '#2496ED'
    },
    SQLite: {
      displayName: 'SQLite',
      logo: 'assets/logos/tech/sqlite.svg',
      color: '#003B57',
      border: '#ffffff',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--ink',
      tagLabel: 'DATA',
      tagBg: '#ffffff',
      tagText: '#003B57'
    },
    'Express.js': {
      displayName: 'Express.js',
      logo: 'assets/logos/tech/express.svg',
      color: '#000000',
      border: '#ffffff',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(255,255,255,0.15)',
      variant: 'project-tech__card--ink',
      tagLabel: 'BACKEND',
      tagBg: '#ffffff',
      tagText: '#000000'
    },
    HTML: {
      displayName: 'HTML5',
      logo: 'assets/logos/tech/html5.svg',
      color: '#E34F26',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--orange',
      tagLabel: 'FRONTEND',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    CSS: {
      displayName: 'CSS3',
      logo: 'assets/logos/tech/css3.svg',
      color: '#1572B6',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'FRONTEND',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    JavaScript: {
      displayName: 'JavaScript',
      logo: 'assets/logos/tech/javascript.svg',
      color: '#F7DF1E',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--yellow',
      tagLabel: 'FRONTEND',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    MySQL: {
      displayName: 'MySQL',
      logo: 'assets/logos/tech/mysql.svg',
      color: '#4479A1',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'DATA',
      tagBg: '#ffffff',
      tagText: '#4479A1'
    },
    Linux: {
      displayName: 'Linux',
      logo: 'assets/logos/tech/linux.svg',
      color: '#FCC624',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--yellow',
      tagLabel: 'INFRA',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    Cloudflared: {
      displayName: 'Cloudflare',
      logo: 'assets/logos/tech/cloudflare.svg',
      color: '#F38020',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--orange',
      tagLabel: 'PROXY',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    N8N: {
      displayName: 'n8n',
      logo: 'assets/logos/tech/n8n.svg',
      color: '#EA4B71',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#0b0b0b',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--magenta',
      tagLabel: 'AUTOMATION',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    Angular: {
      displayName: 'Angular',
      logo: 'assets/logos/tech/angular.svg',
      color: '#DD0031',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--red',
      tagLabel: 'FRONTEND',
      tagBg: '#ffffff',
      tagText: '#DD0031'
    },
    'C#': {
      displayName: 'C#',
      logo: 'assets/logos/tech/csharp.svg',
      color: '#239120',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--green',
      tagLabel: 'BACKEND',
      tagBg: '#ffffff',
      tagText: '#239120'
    },
    '.NET': {
      displayName: '.NET',
      logo: 'assets/logos/tech/dotnet.svg',
      color: '#0b0b0b',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#512BD4',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--purple',
      tagLabel: 'BACKEND',
      tagBg: '#ffffff',
      tagText: '#512BD4'
    },
    'SQL Server': {
      displayName: 'SQL Server',
      logo: 'assets/logos/tech/microsoftsqlserver.svg',
      color: '#0078D4',
      border: '#ffffff',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--red',
      tagLabel: 'DATA',
      tagBg: '#ffffff',
      tagText: '#0078D4'
    },
    'Microsoft Azure': {
      displayName: 'Microsoft Azure',
      logo: 'assets/logos/tech/microsoftazure.svg',
      color: '#0078D4',
      border: '#0b0b0b',
      text: '#ffffff',
      logoColor: '#ffffff',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'CLOUD',
      tagBg: '#ffffff',
      tagText: '#0078D4'
    },
    GCP: {
      displayName: 'Google Cloud',
      logo: 'assets/logos/tech/googlecloud.svg',
      color: '#ffffff',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#4285F4',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'CLOUD',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    },
    GC: {
      displayName: 'Google Cloud',
      logo: 'assets/logos/tech/googlecloud.svg',
      color: '#ffffff',
      border: '#0b0b0b',
      text: '#0b0b0b',
      logoColor: '#4285F4',
      shadow: 'rgba(0,0,0,0.5)',
      variant: 'project-tech__card--blue',
      tagLabel: 'CLOUD',
      tagBg: '#0b0b0b',
      tagText: '#ffffff'
    }
  };


  constructor() {
    effect(() => {
      if (!this.slug() || this.portfolioContent.loading()) {
        return;
      }

      if (!this.project()) {
        void this.router.navigate(['/'], { fragment: 'proyectos' });
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug.set(params.get('slug') ?? '');
    });
  }

  protected techCardFor(name: string): TechCardConfig {
    return (
      this.techCardMap[name] ?? {
        displayName: name,
        logo: 'assets/logos/tech/generic.svg',
        color: '#111111',
        border: '#ffffff',
        text: '#ffffff',
        logoColor: '#ffffff',
        shadow: 'rgba(0,0,0,0.5)',
        variant: 'project-tech__card--ink',
        tagLabel: 'STACK',
        tagBg: '#ffffff',
        tagText: '#111111'
      }
    );
  }

}

type TechCardConfig = {
  displayName: string;
  logo: string;
  color: string;
  border: string;
  text: string;
  logoColor: string;
  shadow: string;
  variant: string;
  tagLabel: string;
  tagBg: string;
  tagText: string;
};
