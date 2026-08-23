import { Component, inject, signal } from '@angular/core';

import { GsapAnimationService } from '../../services/gsap-animation.service';
import { SectionId, SectionNavigationService } from '../../services/section-navigation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  private readonly theme = inject(ThemeService);
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);

  protected readonly activeSection = this.sectionNav.activeSection;
  protected readonly isDark = this.theme.isDark;
  protected readonly isMenuOpen = signal(false);

  navigateTo(section: SectionId, event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.sectionNav.setSection(section);
    this.closeMenu();
  }

  openContact(event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.sectionNav.openContact();
    this.closeMenu();
  }

  toggleTheme(event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}


