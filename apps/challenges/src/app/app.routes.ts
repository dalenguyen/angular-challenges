import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'duplication-code-layout',
    loadComponent: () =>
      import('./duplication-layout-code/duplication-layout-code.component'),
  },
  {
    path: 'control-child-layout',
    loadComponent: () =>
      import('./control-child-layout/control-child-layout.component'),
  },
  {
    path: 'multilevel-data-passing',
    loadComponent: () =>
      import('./multilevel-data-passing/multilevel-data-passing.component'),
  },
  {
    path: 'access-grandchild-component',
    loadComponent: () =>
      import(
        './access-grandchild-component/access-grandchild-component.component'
      ),
  },
];
