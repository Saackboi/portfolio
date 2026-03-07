import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

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

  ngOnInit(): void {
    const title = 'Portfolio | Kevin Sánchez';
    const description = 'A visual, terminal-inspired portfolio showcasing experiments, projects, and process.';
    const url = location.origin;
    const image = `${location.origin}/assets/projects/detail/self-03.png`;

    this.seo.setTitle(title);
    this.seo.setDescription(description);
    this.seo.setOpenGraph({ title, description, image, url });
    this.seo.setCanonical(url);
  }
}
