import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { SheetsPayload } from '../models/portfolio-content.model';
import { AppConfigService } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  private readonly http = inject(HttpClient);
  private readonly appConfig = inject(AppConfigService);
  private readonly emptyPayload: SheetsPayload = { projects: [], techStack: [] };

  private readonly data = signal<SheetsPayload>(this.emptyPayload);

  readonly projects = computed(() =>
    this.data().projects
  );

  readonly techStack = computed(() =>
    this.data().techStack
  );

  async load(timeoutMs = 3000): Promise<void> {
    const url = this.appConfig.googleSheetsApiUrl();
    if (!url) {
      this.data.set(this.emptyPayload);
      return;
    }

    let timedOut = false;
    const timeout = new Promise<void>(resolve => {
      setTimeout(() => {
        timedOut = true;
        resolve();
      }, timeoutMs);
    });

    const request = firstValueFrom(this.http.get<SheetsPayload>(url))
      .then(payload => {
        if (!timedOut) {
          this.data.set(payload ?? this.emptyPayload);
        }
      })
      .catch(() => {
        if (!timedOut) {
          this.data.set(this.emptyPayload);
        }
      });

    await Promise.race([request.then(() => undefined), timeout]);
  }
}
