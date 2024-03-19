import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

const uiModules = [
  MatStepperModule
]

@Component({
  selector: 'lib-create-budget-stepper',
  standalone: true,
  imports: [CommonModule, ...uiModules],
  templateUrl: './create-budget-stepper.component.html',
  styleUrl: './create-budget-stepper.component.scss',
})
export class CreateBudgetStepperComponent {}
