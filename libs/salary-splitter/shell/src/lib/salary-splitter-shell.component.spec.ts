import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalarySplitterComponent } from './salary-splitter-shell.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SalarysplitterShellComponent', () => {
  let component: SalarySplitterComponent;
  let fixture: ComponentFixture<SalarySplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarySplitterComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
