import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SalarySplitFormValues } from '@budgy/salary-splitter-data';

const uiModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
];

@Component({
  selector: 'lib-salary-splitter-input-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...uiModules],
  templateUrl: './salary-splitter-input-form.component.html',
  styleUrl: './salary-splitter-input-form.component.scss',
})
export class SalarySplitterInputFormComponent {
  @Output() salarySplitterSubmit = new EventEmitter<SalarySplitFormValues>();

  readonly formBuilder = inject(FormBuilder);
  readonly form: FormGroup = this.formBuilder.group({
    monthlySalary: this.formBuilder.control(0, [
      Validators.required,
      Validators.min(1),
    ]),
    essentialSpendingPercentage: this.formBuilder.control(50, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
      this.totalPercentageValidator(),
    ]),
    nonEssentialSpending: this.formBuilder.control(30, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
      this.totalPercentageValidator(),
    ]),
    savingsPercentage: this.formBuilder.control(20, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
      this.totalPercentageValidator(),
    ]),
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.salarySplitterSubmit.emit(this.form.value);
    }
  }

  onClear(): void {
    this.form.reset();
  }

  getSavingsFieldError(): string {
    const control = this.form.get('savingsPercentage');
    if (control?.hasError('totalPercentageExceeds100')) {
      return 'Total percentage exceeds 100%';
    }
    return '';
  }

  private totalPercentageValidator(): ValidatorFn {
    return (): ValidationErrors | null => {
      const total =
        this.form?.controls['essentialSpendingPercentage'].value +
        this.form?.controls['nonEssentialSpending'].value +
        this.form?.controls['savingsPercentage'].value;
      return total <= 100 ? null : { totalPercentageExceeds100: true };
    };
  }
}
