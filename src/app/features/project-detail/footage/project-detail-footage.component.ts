import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-detail-footage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './project-detail-footage.component.html',
  styleUrl: './project-detail-footage.component.css'
})
export class ProjectDetailFootageComponent {
  @Input({ required: true }) project!: ProjectCard;

  protected selectedShot: GalleryShot | null = null;
  protected isClosing = false;
  private closeTimeout: ReturnType<typeof setTimeout> | null = null;

  private readonly galleryTiltClasses = [
    'project-footage__card--tilt-left',
    'project-footage__card--tilt-right',
    'project-footage__card--tilt-neutral'
  ];
  private readonly galleryTapeClasses = [
    'project-footage__card--tape-yellow',
    'project-footage__card--tape-pink',
    'project-footage__card--tape-blue',
    'project-footage__card--tape-green',
    'project-footage__card--tape-orange',
    'project-footage__card--tape-purple'
  ];
  private readonly galleryTapeCache = new Map<string, string[]>();

  protected galleryStyleFor(slug: string, caption: string, index: number): GalleryStyleConfig {
    const seed = `${slug}|${caption}|${index}`;
    const hash = this.hashString(seed);
    const tiltIndex = Math.abs(hash) % this.galleryTiltClasses.length;
    const tapeSequence = this.getTapeSequence(slug);
    const tapeIndex = index % tapeSequence.length;

    return {
      tilt: this.galleryTiltClasses[tiltIndex],
      tape: tapeSequence[tapeIndex]
    };
  }

  protected openModal(shot: GalleryShot): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.isClosing = false;
    this.selectedShot = shot;
  }

  protected closeModal(): void {
    if (!this.selectedShot || this.isClosing) {
      return;
    }

    this.isClosing = true;
    this.closeTimeout = setTimeout(() => {
      this.selectedShot = null;
      this.isClosing = false;
      this.closeTimeout = null;
    }, 180);
  }

  @HostListener('document:keydown', ['$event'])
  protected handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.selectedShot) {
      this.closeModal();
    }
  }

  private getTapeSequence(slug: string): string[] {
    const key = slug || 'default';
    const cached = this.galleryTapeCache.get(key);
    if (cached) {
      return cached;
    }

    const palette = [...this.galleryTapeClasses];
    const shuffled = this.shuffleWithSeed(palette, this.hashString(key));
    this.galleryTapeCache.set(key, shuffled);
    return shuffled;
  }

  private shuffleWithSeed(values: string[], seed: number): string[] {
    const result = [...values];
    let state = seed >>> 0;
    for (let i = result.length - 1; i > 0; i -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const j = state % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  private hashString(value: string): number {
    let hash = 5381;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 33) ^ value.charCodeAt(i);
    }
    return hash;
  }
}

type GalleryStyleConfig = {
  tilt: string;
  tape: string;
};

type GalleryShot = {
  src: string;
  caption: string;
};
