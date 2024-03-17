import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalarySplitterInputFormComponent } from './salary-splitter-input-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SalarySplitterInputFormComponent', () => {
  function fillInForm(
    salary: number,
    essentialSpendingPercentage = 50,
    nonEssentialSpending = 30,
    savingsPercentage = 20
  ) {
    component.form.get('monthlySalary')?.setValue(salary);
    component.form.get('essentialSpendingPercentage')?.setValue(essentialSpendingPercentage);
    component.form.get('nonEssentialSpending')?.setValue(nonEssentialSpending);
    component.form.get('savingsPercentage')?.setValue(savingsPercentage);
  }

  let component: SalarySplitterInputFormComponent;
  let fixture: ComponentFixture<SalarySplitterInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarySplitterInputFormComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySplitterInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form if valid', () => {
    const spy = jest.spyOn(component.salarySplitterSubmit, 'emit');
    fillInForm(1000);
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should not submit form if invalid', () => {
    const spy = jest.spyOn(component.salarySplitterSubmit, 'emit');
    fillInForm(0);
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should clear form', () => {
    const spy = jest.spyOn(component.salarySplitterSubmit, 'emit');
    fillInForm(1000);
    component.onClear();
    expect(spy).not.toHaveBeenCalled();
    expect(component.form.value).toEqual({
      monthlySalary: null,
      essentialSpendingPercentage: null,
      nonEssentialSpending: null,
      savingsPercentage: null,
    });
  });

  describe('totalPercentageValidator', () => {
    it('Should invalidate if total is greater than 100', () => {
      fillInForm(1000, 50, 30, 30);
      fixture.detectChanges();
      expect(component.form.invalid).toBeTruthy();
      expect(component.form.get('savingsPercentage')?.hasError('totalPercentageExceeds100')).toBeTruthy();
    });
  });
});
