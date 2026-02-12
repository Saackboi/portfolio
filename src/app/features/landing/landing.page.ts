import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css'
})
export class LandingPage {}
