import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';

import { GsapAnimationService } from '../../../core/services/gsap-animation.service';
import { KnowMeComponent } from './know-me/know-me.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

export type AboutTab = 'bio' | 'stack';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KnowMeComponent, TechStackComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  private readonly gsapAnimation = inject(GsapAnimationService);

  readonly activeTab = signal<AboutTab>('bio');

  setTab(tab: AboutTab, event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.activeTab.set(tab);
  }
}
