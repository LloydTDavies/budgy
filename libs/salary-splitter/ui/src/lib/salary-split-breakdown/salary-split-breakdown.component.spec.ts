import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalarySplitBreakdownComponent } from './salary-split-breakdown.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SalarySplitBreakdownComponent', () => {
  let component: SalarySplitBreakdownComponent;
  let fixture: ComponentFixture<SalarySplitBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarySplitBreakdownComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySplitBreakdownComponent);
    component = fixture.componentInstance;
    component.splitBreakdown = {
      monthlySalary: 1000,
      savingsSplit: 200,
      essentialSplit: 300,
      nonEssentialSplit: 500,
      
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render monthly salary', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Monthly salary: £1,000.00');
  })
  it('should render savings split', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll('h3').forEach(element => {
      if(element.textContent === 'Savings: £200.00') {
        expect(element).toBeTruthy();
      }
    })
  })
  it('should render essential split', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll('h3').forEach(element => {
      if(element.textContent === 'Essential spending: £300.00') {
        expect(element).toBeTruthy();
      }
    })
  })

  it('should render non essential split', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll('h3').forEach(element => {
      if(element.textContent === 'Non-essential spending: £500.00') {
        expect(element).toBeTruthy();
      }
    })
  })
});
