import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppConfigService } from './core/services/app-config.service';
import { PortfolioContentService } from './core/services/portfolio-content.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService, PortfolioContentService],
      useFactory: (appConfigService: AppConfigService, portfolioContent: PortfolioContentService) => () =>
        appConfigService.load().then(() => portfolioContent.load(3000))
    },
    provideRouter(routes)
  ]
};
