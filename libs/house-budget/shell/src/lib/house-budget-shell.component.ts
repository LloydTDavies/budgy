import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseBudgetLayoutComponent } from './house-budget-layout/house-budget-layout.component';

@Component({
  selector: 'lib-house-budget-shell',
  standalone: true,
  imports: [CommonModule, HouseBudgetLayoutComponent],
  template: `<lib-house-budget-layout
    (createBudget)="createBudget()"
    [showCreateBudget]="showCreateBudget()"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseBudgetShellComponent {
  showCreateBudget = signal(false);
  createBudget() {
    this.showCreateBudget.set(true);
  }
}
