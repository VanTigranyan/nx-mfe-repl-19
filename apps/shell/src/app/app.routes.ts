import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'users',
    loadChildren: () => import('users/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'connections',
    loadChildren: () =>
      import('connections/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
