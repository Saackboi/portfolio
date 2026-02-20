import { Injectable, signal } from '@angular/core';

import { environment } from '../../../environments/environment';

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

    const resolvedUrl = config.googleSheetsApiUrl || environment.googleSheetsApiUrl || '';
    this.config.set(config);
    this.googleSheetsApiUrl.set(resolvedUrl);
  }
}
