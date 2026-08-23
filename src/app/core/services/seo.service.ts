import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://portfolio.sackboi.win';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  setTitle(titleText: string): void {
    this.title.setTitle(titleText);
  }

  setDescription(description: string): void {
    if (!description) return;
    this.meta.updateTag({ name: 'description', content: description });
  }

  setOpenGraph(options: { title?: string; description?: string; image?: string; url?: string }): void {
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
      const fullImage = image.startsWith('http')
        ? image
        : `${this.baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;
      this.meta.updateTag({ property: 'og:image', content: fullImage });
      this.meta.updateTag({ name: 'twitter:image', content: fullImage });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }
    if (url) {
      const fullUrl = url.startsWith('http')
        ? url
        : `${this.baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
      this.meta.updateTag({ property: 'og:url', content: fullUrl });
      this.setCanonical(fullUrl);
    }
  }

  setCanonical(url: string): void {
    if (!url) return;
    const fullUrl = url.startsWith('http')
      ? url
      : `${this.baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullUrl);
  }
}
