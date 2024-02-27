import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildLayoutComponent } from './child-layout.component';

describe('ChildLayoutComponent', () => {
  let component: ChildLayoutComponent;
  let fixture: ComponentFixture<ChildLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
