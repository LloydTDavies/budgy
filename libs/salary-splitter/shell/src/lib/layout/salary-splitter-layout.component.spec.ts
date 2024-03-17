import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalarySplitterLayoutComponent } from './salary-splitter-layout.component';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('SalarySplitterLayoutComponent', () => {
  let component: SalarySplitterLayoutComponent;
  let fixture: ComponentFixture<SalarySplitterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarySplitterLayoutComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SalarySplitterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
