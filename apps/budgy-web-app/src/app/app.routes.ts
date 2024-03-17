import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'house-budget-shell',
    loadChildren: () =>
      import('@budgy/house-budget-shell').then((m) => m.houseBudgetShellRoutes),
  },
  { path: '', redirectTo: 'salary-splitter', pathMatch: 'full' },
  {
    path: 'salary-splitter',
    loadComponent: () =>
      import('@budgy/salary-splitter-shell').then(
        (c) => c.SalarySplitterComponent
      ),
    pathMatch: 'full',
    title: 'Salary Splitter',
  },
];
