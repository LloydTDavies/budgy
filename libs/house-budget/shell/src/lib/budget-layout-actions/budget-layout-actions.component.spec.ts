import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetLayoutActionsComponent } from './budget-layout-actions.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BudgetLayoutActionsComponent', () => {
  let component: BudgetLayoutActionsComponent;
  let fixture: ComponentFixture<BudgetLayoutActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetLayoutActionsComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetLayoutActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Actions button', () => {
    it('should display actions button', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.textContent).toContain('Actions');
    });
    it('should display actions menu and items', () => {
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges();
      const actionMenuItem = fixture.debugElement.query(
        By.css('[data-role="create-budget-menu-item"]')
      ).nativeElement;
      expect(actionMenuItem.textContent).toContain('Create new budget');
      const saveMenuItem = fixture.debugElement.query(
        By.css('[data-role="save-budget-menu-item"]')
      ).nativeElement;
      expect(saveMenuItem.textContent).toContain('Save budget');
    });

    it('Should call the create budget action', () => {
      const spy = jest.spyOn(component.createBudget, 'emit');

      fixture.debugElement.query(
        By.css('[data-role="actions-button"]')
      ).nativeElement.click();
      fixture.debugElement.query(
        By.css('[data-role="create-budget-menu-item"]')
      ).nativeElement.click();

      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    });

    it('Should call the save budget action', () => {
      const spy = jest.spyOn(component.saveBudget, 'emit');
      fixture.debugElement.query(
        By.css('[data-role="actions-button"]')
      ).nativeElement.click();
      fixture.debugElement.query(
        By.css('[data-role="save-budget-menu-item"]')
      ).nativeElement.click();

      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    })
  });
});
