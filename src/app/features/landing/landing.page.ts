import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  effect,
  inject
} from '@angular/core';

import { GsapAnimationService } from '../../core/services/gsap-animation.service';
import { SectionNavigationService } from '../../core/services/section-navigation.service';
import { SeoService } from '../../core/services/seo.service';

import { AboutSectionComponent } from './about/about-section.component';
import { ContactSectionComponent } from './contact/contact-section.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectGalleryComponent } from './projects/project-gallery.component';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, AboutSectionComponent, ProjectGalleryComponent, ContactSectionComponent],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css'
})
export class LandingPage implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);

  protected readonly activeSection = this.sectionNav.activeSection;
  protected readonly isContactOpen = this.sectionNav.isContactOpen;

  private readonly host = inject(ElementRef<HTMLElement>);







  ngOnInit(): void {
    const title = 'Portfolio | Kevin Sánchez';
    const description = 'A visual, terminal-inspired portfolio showcasing experiments, projects, and process.';
    const url = location.origin;
    const image = `${location.origin}/assets/projects/detail/self/self-03.png`;

    this.seo.setTitle(title);
    this.seo.setDescription(description);
    this.seo.setOpenGraph({ title, description, image, url });
    this.seo.setCanonical(url);
  }

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    if (this.isContactOpen()) {
      this.closeContact();
    }
  }

  openContact(event?: MouseEvent): void {
    if (event?.currentTarget instanceof HTMLElement) {
      this.gsapAnimation.jellyTap(event.currentTarget);
    }
    this.sectionNav.openContact();
  }

  closeContact(): void {
    const overlay = this.host.nativeElement.querySelector('.contact-overlay') as HTMLElement | null;
    const dialog = this.host.nativeElement.querySelector('.contact-overlay__container') as HTMLElement | null;
    if (overlay && dialog) {
      this.gsapAnimation.modalClose(overlay, dialog, () => {
        this.sectionNav.closeContact();
      });
    } else {
      this.sectionNav.closeContact();
    }
  }



  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeContact();
    }
  }
}


