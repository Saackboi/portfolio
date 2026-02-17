import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostItComponent } from './post-it/post-it.component';
import { SocialBoardComponent } from './social-board/social-board.component';

@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactFormComponent, SocialBoardComponent, PostItComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {}
