import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySplitterLayoutComponent } from './layout/salary-splitter-layout.component';
import { Observable, Subject, map } from 'rxjs';
import { SalarySplitBreakdown, SalarySplitFormValues } from '@budgy/salary-splitter-data';

@Component({
  selector: 'lib-salary-splitter-shell',
  standalone: true,
  imports: [CommonModule, SalarySplitterLayoutComponent],
  template: `
    <lib-salary-splitter-layout
      (salarySplitterSubmit)="salarySubmitted($event)"
      [salarySplitBreakdown]="salarySplit$ | async"
    />
  `,
})
export class SalarySplitterComponent {
  salarySplit$$ = new Subject<SalarySplitFormValues>();

  salarySplit$ : Observable<SalarySplitBreakdown> = this.salarySplit$$.pipe(
    map((submittedValues) => {
      const {
        monthlySalary,
        essentialSpendingPercentage,
        nonEssentialSpending,
        savingsPercentage,
      } = submittedValues;
      return {
        monthlySalary,
        essentialSplit: monthlySalary * (essentialSpendingPercentage / 100),
        nonEssentialSplit: monthlySalary * (nonEssentialSpending / 100),
        savingsSplit: monthlySalary * (savingsPercentage / 100),
      };
    })
  );

  salarySubmitted(salarySplit: SalarySplitFormValues) {
    this.salarySplit$$.next(salarySplit);
  }
}
