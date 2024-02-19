import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'duplication-code-layout',
    loadComponent: () =>
      import('./duplication-layout-code/duplication-layout-code.component'),
  },
];
