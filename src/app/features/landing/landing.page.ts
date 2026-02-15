import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutSectionComponent } from './about/about-section.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, AboutSectionComponent],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css'
})
export class LandingPage {}
