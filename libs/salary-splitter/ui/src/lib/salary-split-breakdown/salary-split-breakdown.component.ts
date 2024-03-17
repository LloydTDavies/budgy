import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-salary-split-breakdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salary-split-breakdown.component.html',
  styleUrl: './salary-split-breakdown.component.scss',
  providers:[
  ]
})
export class SalarySplitBreakdownComponent {
  @Input({ required: true }) splitBreakdown: {
    monthlySalary: number;
    savingsSplit: number;
    essentialSplit: number;
    nonEssentialSplit: number;
  } = {
    monthlySalary: 0,
    savingsSplit: 0,
    essentialSplit: 0,
    nonEssentialSplit: 0,
  };
}
