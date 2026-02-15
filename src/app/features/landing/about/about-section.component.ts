import { ChangeDetectionStrategy, Component } from '@angular/core';

import { KnowMeComponent } from './know-me/know-me.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KnowMeComponent, TechStackComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
// Section shell composes the notepad and tech stack panels.
export class AboutSectionComponent {}
