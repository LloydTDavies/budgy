import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseBudgetLayoutComponent } from './house-budget-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { signal } from '@angular/core';

describe('HouseBudgetLayoutComponent', () => {
  let component: HouseBudgetLayoutComponent;
  let fixture: ComponentFixture<HouseBudgetLayoutComponent>;

  function clickActionsButton() {
    fixture.debugElement
      .query(By.css('[data-role="actions-button"]'))
      .nativeElement.click();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseBudgetLayoutComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseBudgetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header', () => {
    const header = fixture.nativeElement.querySelector('h1').textContent;
    expect(header).toEqual('House budget');
  });

  describe('Actions button', () => {
    it('should display actions button', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.textContent).toContain('Actions');
    });
    it('should display actions menu and items', () => {
      clickActionsButton();

      expect(
        fixture.debugElement.query(
          By.css('[data-role="create-budget-menu-item"]')
        ).nativeElement.textContent
      ).toContain('Create new budget');
      expect(
        fixture.debugElement.query(
          By.css('[data-role="save-budget-menu-item"]')
        ).nativeElement.textContent
      ).toContain('Save budget');
    });
  });

  describe('Budget list', () => {
    it('should display budget list if we have some budgets', () => {
      fixture.componentRef.setInput('budgets', [
        {
          id: '1',
          name: 'Budget 1',
        },
      ]);
      fixture.detectChanges();

      const budgetList = fixture.nativeElement.querySelector('lib-budget-list');

      expect(budgetList).toBeTruthy();
    });
    it('should not display budget list if we have no budgets', () => {
      fixture.componentRef.setInput('budgets', { budgets: signal([]) });
      fixture.detectChanges();

      const budgetList = fixture.nativeElement.querySelector('lib-budget-list');

      expect(budgetList).toBeFalsy();
    });
    it('Should display lets add a new budget if we have no budgets', () => {
      fixture.componentRef.setInput('budgets', { budgets: signal([]) });

      fixture.detectChanges();

      const letsCreateBudgetText = fixture.nativeElement.querySelector('h3');
      const createBudgetButton = fixture.debugElement.query(
        By.css('[data-role="create-budget"]')
      );

      expect(
        fixture.nativeElement.querySelector('lib-budget-list')
      ).toBeFalsy();
      expect(letsCreateBudgetText.textContent).toEqual('Lets add a new budget');
      expect(createBudgetButton).toBeTruthy();
    });
  });

  describe('Create budget stepper', () => {
    it('should not show stepper if showCreateBudget is false', () => {
      fixture.componentRef.setInput('showCreateBudget', false);
      fixture.detectChanges();
      expect(component.showCreateBudget()).toEqual(false);
    });

    it('should show stepper if showCreateBudget is true', () => {
      fixture.componentRef.setInput('showCreateBudget', true);
      fixture.detectChanges();
      expect(component.showCreateBudget()).toEqual(true);
      expect(fixture.nativeElement.querySelector('lib-create-budget-stepper')).toBeTruthy();
    })

  })
});
