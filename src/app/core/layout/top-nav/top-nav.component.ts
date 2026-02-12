import { Component, inject } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  private readonly theme = inject(ThemeService);

  toggleTheme(): void {
    this.theme.toggle();
  }
}
