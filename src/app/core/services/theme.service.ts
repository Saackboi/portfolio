import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  // Matches the template behavior: toggles the "dark" class on <html>.
  toggle(): void {
    this.document.documentElement.classList.toggle('dark');
  }
}
