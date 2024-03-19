import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-budget-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss',
})
export class BudgetListComponent {}
