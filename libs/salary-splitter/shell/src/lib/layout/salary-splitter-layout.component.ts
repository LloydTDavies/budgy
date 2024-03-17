import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySplitterInputFormComponent, SalarySplitBreakdownComponent } from '@budgy/salary-splitter-ui'
import { SalarySplitFormValues } from '@budgy/salary-splitter-data';

@Component({
  selector: 'lib-salary-splitter-layout',
  standalone: true,
  imports: [CommonModule, SalarySplitterInputFormComponent, SalarySplitBreakdownComponent],
  templateUrl: './salary-splitter-layout.component.html',
  styleUrl: './salary-splitter-layout.component.scss',
})
export class SalarySplitterLayoutComponent {
  @Input() salarySplitBreakdown!: any;
  @Output() salarySplitterSubmit = new EventEmitter<SalarySplitFormValues>();
}
