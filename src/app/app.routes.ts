import { Routes } from '@angular/router';

import { ShellComponent } from './core/layout/shell/shell.component';

// Shell layout hosts the persistent navigation.
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: []
  }
];
