import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'theme';

  init(): void {
    const stored = this.readStoredTheme();
    if (stored) {
      this.applyTheme(stored === 'dark');
      return;
    }
    this.applyTheme(true);
  }

  // Matches the template behavior: toggles the "dark" class on <html>.
  toggle(): void {
    const isDark = !this.document.documentElement.classList.contains('dark');
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    this.document.documentElement.classList.toggle('dark', isDark);
    this.document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    this.storeTheme(isDark ? 'dark' : 'light');
  }

  private readStoredTheme(): 'dark' | 'light' | null {
    try {
      const stored = this.document.defaultView?.localStorage?.getItem(this.storageKey);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch {
      return null;
    }

    return null;
  }

  private storeTheme(value: 'dark' | 'light'): void {
    try {
      this.document.defaultView?.localStorage?.setItem(this.storageKey, value);
    } catch {
      return;
    }
  }
}
