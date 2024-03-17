import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseBudgetShellComponent } from './house-budget-shell.component';

describe('HouseBudgetShellComponent', () => {
  let component: HouseBudgetShellComponent;
  let fixture: ComponentFixture<HouseBudgetShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseBudgetShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseBudgetShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
