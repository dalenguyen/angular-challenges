import { ComponentFixture, TestBed } from '@angular/core/testing';
import MultilevelDataPassingComponent from './multilevel-data-passing.component';

describe('MultilevelDataPassingComponent', () => {
  let component: MultilevelDataPassingComponent;
  let fixture: ComponentFixture<MultilevelDataPassingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultilevelDataPassingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultilevelDataPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
