import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterBComponent } from './filter-b.component';

describe('FilterBComponent', () => {
  let component: FilterBComponent;
  let fixture: ComponentFixture<FilterBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
