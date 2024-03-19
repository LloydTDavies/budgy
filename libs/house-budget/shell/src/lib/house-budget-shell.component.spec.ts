import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseBudgetShellComponent } from './house-budget-shell.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HouseBudgetShellComponent', () => {
  let component: HouseBudgetShellComponent;
  let fixture: ComponentFixture<HouseBudgetShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseBudgetShellComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseBudgetShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display layout component', () => {
    expect(
      fixture.nativeElement.querySelector('lib-house-budget-layout')
    ).toBeTruthy();
  });

  it('Should show create budget stepper if create budget is clicked', () => {
    component.createBudget();
    fixture.detectChanges();

    expect(component.showCreateBudget()).toBeTruthy;
  });
});
