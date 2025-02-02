import { loadRemoteModule } from "@nx/angular/mf";
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'users',
    loadChildren: () => loadRemoteModule('users', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'connections',
    loadChildren: () => loadRemoteModule('connections', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
