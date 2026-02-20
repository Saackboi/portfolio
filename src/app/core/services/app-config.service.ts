import { Injectable, signal } from '@angular/core';

type AppConfig = {
  googleSheetsApiUrl?: string;
};

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private readonly config = signal<AppConfig>({});

  readonly googleSheetsApiUrl = signal<string>('');

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
    this.config.set(config);
    this.googleSheetsApiUrl.set(resolvedUrl);
  }
}
