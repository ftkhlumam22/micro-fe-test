import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () => import('admin/Component').then((m) => m.AppComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('dashboard/Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
