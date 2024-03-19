import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BudgetListComponent } from '../budget-list/budget-list.component';
import { BudgetLayoutActionsComponent } from '../budget-layout-actions/budget-layout-actions.component';
import { CreateBudgetStepperComponent } from '../create-budget-stepper/create-budget-stepper.component';

const uiModules = [MatButtonModule, MatMenuModule];

const components = [
  BudgetLayoutActionsComponent,
  BudgetListComponent,
  CreateBudgetStepperComponent,
];

@Component({
  selector: 'lib-house-budget-layout',
  standalone: true,
  imports: [CommonModule, ...uiModules, ...components],
  templateUrl: './house-budget-layout.component.html',
  styleUrl: './house-budget-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseBudgetLayoutComponent {
  budgets = input<Array<{ id: string; name: string }>>([]);
  showCreateBudget = input<boolean>(false);


  @Output()createBudget = new EventEmitter<void>();
  @Output()saveBudget = new EventEmitter<void>();
}
