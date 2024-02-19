import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterAComponent } from './filter-a.component';

describe('FilterAComponent', () => {
  let component: FilterAComponent;
  let fixture: ComponentFixture<FilterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
