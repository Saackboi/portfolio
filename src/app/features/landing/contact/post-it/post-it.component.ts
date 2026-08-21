import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  inject
} from '@angular/core';

import { GsapAnimationService } from '../../../../core/services/gsap-animation.service';

type PostItTone = 'accent' | 'secondary';
type PostItTilt = 'left' | 'right';

@Component({
  selector: 'app-post-it',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-it.component.html',
  styleUrl: './post-it.component.css'
})
export class PostItComponent implements AfterViewInit, OnDestroy {
  private readonly gsapAnimation = inject(GsapAnimationService);
  private readonly host = inject(ElementRef<HTMLElement>);

  @Input({ required: true }) title!: string;
  @Input({ required: true }) text!: string;
  @Input() tone: PostItTone = 'accent';
  @Input() tilt: PostItTilt = 'right';

  private cleanupDraggable?: () => void;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement.querySelector('.post-it') as HTMLElement | null;
    if (el) {
      this.cleanupDraggable = this.gsapAnimation.makeDraggable(el);
    }
  }


  ngOnDestroy(): void {
    this.cleanupDraggable?.();
  }

  protected toneClass(): string {
    return `post-it--${this.tone}`;
  }

  protected tiltClass(): string {
    return `post-it--${this.tilt}`;
  }
}

