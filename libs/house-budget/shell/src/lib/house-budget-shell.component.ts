import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-house-budget-shell',
  standalone: true,
  imports: [CommonModule],
  template: `<p>house-budget-shell works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseBudgetShellComponent {}
