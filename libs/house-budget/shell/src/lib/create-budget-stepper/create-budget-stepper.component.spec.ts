import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBudgetStepperComponent } from './create-budget-stepper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateBudgetStepperComponent', () => {
  let component: CreateBudgetStepperComponent;
  let fixture: ComponentFixture<CreateBudgetStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBudgetStepperComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBudgetStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
