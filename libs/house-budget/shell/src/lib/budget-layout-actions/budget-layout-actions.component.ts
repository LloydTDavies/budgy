import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const uiModules = [MatButtonModule, MatMenuModule];

@Component({
  selector: 'lib-budget-layout-actions',
  standalone: true,
  imports: [CommonModule, ...uiModules],
  templateUrl: './budget-layout-actions.component.html',
  styleUrl: './budget-layout-actions.component.scss',
})
export class BudgetLayoutActionsComponent {
  @Output() createBudget = new EventEmitter<void>();
  @Output() saveBudget = new EventEmitter<void>();
}
