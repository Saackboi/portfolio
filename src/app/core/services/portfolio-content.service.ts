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
  private readonly loadingState = signal(true);
  private readonly loadedState = signal(false);

  readonly projects = computed(() =>
    this.data().projects
  );

  readonly techStack = computed(() =>
    this.data().techStack
  );

  readonly loading = computed(() =>
    this.loadingState()
  );

  async load(minDurationMs = 300): Promise<void> {
    if (this.loadedState()) {
      return;
    }

    this.loadingState.set(true);
    const start = Date.now();
    const url = this.appConfig.googleSheetsApiUrl();
    if (!url) {
      this.data.set(this.emptyPayload);
      await this.ensureMinimumDelay(start, minDurationMs);
      this.loadingState.set(false);
      this.loadedState.set(true);
      return;
    }

    try {
      const payload = await firstValueFrom(this.http.get<SheetsPayload>(url));
      this.data.set(payload ?? this.emptyPayload);
    } catch {
      this.data.set(this.emptyPayload);
    } finally {
      await this.ensureMinimumDelay(start, minDurationMs);
      this.loadingState.set(false);
      this.loadedState.set(true);
    }
  }

  private async ensureMinimumDelay(startTime: number, minDurationMs: number): Promise<void> {
    const elapsed = Date.now() - startTime;
    if (elapsed < minDurationMs) {
      await new Promise(resolve => setTimeout(resolve, minDurationMs - elapsed));
    }
  }
}
