import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type SocialLink = {
  label: string;
  href: string;
  icon: string;
  tone: 'dark' | 'secondary' | 'accent';
  tilt: 'left' | 'right' | 'neutral';
};

@Component({
  selector: 'app-social-board',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-board.component.html',
  styleUrl: './social-board.component.css'
})
export class SocialBoardComponent {
  // Reactive social list makes it easy to add more networks later.
  protected readonly socials = signal<SocialLink[]>([
    {
      label: 'GITHUB',
      href: 'https://github.com/Saackboi',
      icon: 'fab fa-github',
      tone: 'dark',
      tilt: 'left'
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/kevinsanchez06',
      icon: 'fab fa-linkedin-in',
      tone: 'secondary',
      tilt: 'right'
    },
    {
      label: 'INSTAGRAM',
      href: 'https://www.instagram.com/code.koji/',
      icon: 'fab fa-instagram',
      tone: 'accent',
      tilt: 'neutral'
    }
  ]);

  protected toneClass(tone: SocialLink['tone']): string {
    return `social-board__button--${tone}`;
  }

  protected tiltClass(tilt: SocialLink['tilt']): string {
    return `social-board__button--${tilt}`;
  }
}
