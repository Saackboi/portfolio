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
import { ProjectDetailModalComponent } from './projects/project-detail-modal/project-detail-modal.component';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    ProjectGalleryComponent,
    ContactSectionComponent,
    ProjectDetailModalComponent
  ],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.css'
})
export class LandingPage implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly sectionNav = inject(SectionNavigationService);
  private readonly gsapAnimation = inject(GsapAnimationService);

  protected readonly activeSection = this.sectionNav.activeSection;
  protected readonly isContactOpen = this.sectionNav.isContactOpen;
  protected readonly activeProjectSlug = this.sectionNav.activeProjectSlug;

  private readonly host = inject(ElementRef<HTMLElement>);







  ngOnInit(): void {
    const title = 'Kevin Sánchez — Desarrollador Full-Stack | .NET & Angular';
    const description =
      'Desarrollador Full-Stack especializado en .NET y Angular. Construyo sistemas completos y escalables de inicio a fin, combinando arquitectura sólida, automatización y buenas prácticas de infraestructura.';
    const url = 'https://portfolio.sackboi.win/';
    const image = 'https://portfolio.sackboi.win/og-image.jpg';

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

  closeProjectModal(): void {
    this.sectionNav.closeProject();
  }



  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeContact();
    }
  }
}


