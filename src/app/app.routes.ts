import { Routes } from '@angular/router';

import { ShellComponent } from './core/layout/shell/shell.component';

// Shell layout hosts the persistent navigation.
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing.page').then(m => m.LandingPage)
      },
      {
        path: 'projects/:slug',
        loadComponent: () =>
          import('./features/project-detail/project-detail.page').then(m => m.ProjectDetailPage)
      }
    ]
  }
];
