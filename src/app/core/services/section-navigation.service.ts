import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type SectionId = 'inicio' | 'sobre-mi' | 'proyectos';

@Injectable({ providedIn: 'root' })
export class SectionNavigationService {
  private readonly document = inject(DOCUMENT);

  readonly activeSection = signal<SectionId>('inicio');
  readonly isContactOpen = signal(false);
  readonly activeProjectSlug = signal<string | null>(null);

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
    if (hash.startsWith('proyecto-')) {
      const slug = hash.replace('proyecto-', '');
      this.activeSection.set('proyectos');
      this.activeProjectSlug.set(slug);
      return;
    }
    if (hash === 'sobre-mi' || hash === 'proyectos' || hash === 'inicio') {
      this.activeSection.set(hash as SectionId);
      this.activeProjectSlug.set(null);
    }
  }

  setSection(section: SectionId): void {
    this.activeSection.set(section);
    this.activeProjectSlug.set(null);
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

  openProject(slug: string): void {
    this.activeProjectSlug.set(slug);
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}#proyecto-${slug}`;
      window.history.replaceState(null, '', newUrl);
    }
  }

  closeProject(): void {
    this.activeProjectSlug.set(null);
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}#proyectos`;
      window.history.replaceState(null, '', newUrl);
    }
  }
}
