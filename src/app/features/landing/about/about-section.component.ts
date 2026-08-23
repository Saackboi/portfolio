import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  inject
} from '@angular/core';

import { GsapAnimationService } from '../../../core/services/gsap-animation.service';
import { KnowMeComponent } from './know-me/know-me.component';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KnowMeComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  private readonly gsapAnimation = inject(GsapAnimationService);
  private readonly host = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      this.gsapAnimation.aboutEntrance(this.host.nativeElement);
    });
  }
}
