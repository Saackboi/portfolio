import { Routes } from '@angular/router';

import { ShellComponent } from './core/layout/shell/shell.component';

// Shell layout hosts the persistent single-page game viewport & modals.
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing.page').then((m) => m.LandingPage)
      },
      {
        path: 'projects/:slug',
        redirectTo: (route) => `/#proyecto-${route.params['slug']}`
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
