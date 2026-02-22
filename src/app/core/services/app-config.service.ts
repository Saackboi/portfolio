import { Injectable, signal } from '@angular/core';

type AppConfig = {
  googleSheetsApiUrl?: string;
  emailJsServiceId?: string;
  emailJsTemplateId?: string;
  emailJsPublicKey?: string;
};

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private readonly config = signal<AppConfig>({});

  readonly googleSheetsApiUrl = signal<string>('');
  readonly emailJsServiceId = signal<string>('');
  readonly emailJsTemplateId = signal<string>('');
  readonly emailJsPublicKey = signal<string>('');

  async load(): Promise<void> {
    let config: AppConfig = {};

    try {
      const response = await fetch('/env.json', { cache: 'no-store' });
      if (response.ok) {
        config = (await response.json()) as AppConfig;
      }
    } catch {
      config = {};
    }

    const resolvedUrl = config.googleSheetsApiUrl || '';
    const resolvedServiceId = config.emailJsServiceId || '';
    const resolvedTemplateId = config.emailJsTemplateId || '';
    const resolvedPublicKey = config.emailJsPublicKey || '';
    this.config.set(config);
    this.googleSheetsApiUrl.set(resolvedUrl);
    this.emailJsServiceId.set(resolvedServiceId);
    this.emailJsTemplateId.set(resolvedTemplateId);
    this.emailJsPublicKey.set(resolvedPublicKey);
  }
}
