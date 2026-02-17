import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type PostItTone = 'accent' | 'secondary';
type PostItTilt = 'left' | 'right';

@Component({
  selector: 'app-post-it',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-it.component.html',
  styleUrl: './post-it.component.css'
})
export class PostItComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) text!: string;
  @Input() tone: PostItTone = 'accent';
  @Input() tilt: PostItTilt = 'right';

  protected toneClass(): string {
    return `post-it--${this.tone}`;
  }

  protected tiltClass(): string {
    return `post-it--${this.tilt}`;
  }
}
