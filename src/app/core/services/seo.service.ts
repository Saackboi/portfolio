import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setTitle(titleText: string) {
    this.title.setTitle(titleText);
  }

  setDescription(description: string) {
    if (!description) return;
    this.meta.updateTag({ name: 'description', content: description });
  }

  setOpenGraph(options: { title?: string; description?: string; image?: string; url?: string }) {
    const { title, description, image, url } = options;
    if (title) {
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ name: 'twitter:title', content: title });
    }
    if (description) {
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }
    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
    }
  }

  setCanonical(url: string) {
    if (!url) return;
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
