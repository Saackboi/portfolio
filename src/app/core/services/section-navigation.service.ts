import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type SectionId = 'inicio' | 'sobre-mi' | 'proyectos';

@Injectable({ providedIn: 'root' })
export class SectionNavigationService {
  private readonly document = inject(DOCUMENT);

  readonly activeSection = signal<SectionId>('inicio');
  readonly isContactOpen = signal(false);

  constructor() {
    this.initFromHash();
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => this.initFromHash());
    }
  }

  private initFromHash(): void {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (hash === 'contacto') {
      this.isContactOpen.set(true);
      return;
    }
    if (hash === 'sobre-mi' || hash === 'proyectos' || hash === 'inicio') {
      this.activeSection.set(hash as SectionId);
    }
  }

  setSection(section: SectionId): void {
    this.activeSection.set(section);
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}#${section}`;
      window.history.replaceState(null, '', newUrl);
    }
  }

  openContact(): void {
    this.isContactOpen.set(true);
  }

  closeContact(): void {
    this.isContactOpen.set(false);
  }

  toggleContact(): void {
    this.isContactOpen.update((open) => !open);
  }
}
