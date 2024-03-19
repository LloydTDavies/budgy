import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'salary-splitter', pathMatch: 'full' },
  {
    path: 'house-budget',
    loadChildren: () =>
      import('@budgy/house-budget-shell').then((m) => m.houseBudgetShellRoutes),
  },
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
