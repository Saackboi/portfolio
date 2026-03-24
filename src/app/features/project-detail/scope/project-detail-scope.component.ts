import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProjectCard } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-project-detail-scope',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './project-detail-scope.component.html',
  styleUrl: './project-detail-scope.component.css'
})
export class ProjectDetailScopeComponent {
  @Input({ required: true }) project!: ProjectCard;

  private readonly cdr = inject(ChangeDetectorRef);

  protected isModalOpen = false;
  protected isClosing = false;
  private closeTimeout: ReturnType<typeof setTimeout> | null = null;

  protected openModal(): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.isClosing = false;
    this.isModalOpen = true;
  }

  protected closeModal(): void {
    if (!this.isModalOpen || this.isClosing) {
      return;
    }

    this.isClosing = true;
    this.closeTimeout = setTimeout(() => {
      this.isModalOpen = false;
      this.isClosing = false;
      this.closeTimeout = null;
      this.cdr.markForCheck();
    }, 180);
  }

  @HostListener('document:keydown', ['$event'])
  protected handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeModal();
    }
  }
}
