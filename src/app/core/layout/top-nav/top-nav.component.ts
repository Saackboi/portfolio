import { Component, inject, signal } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  private readonly theme = inject(ThemeService);
  protected readonly isMenuOpen = signal(false);

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
