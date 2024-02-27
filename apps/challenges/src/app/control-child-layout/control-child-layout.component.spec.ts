import { ComponentFixture, TestBed } from '@angular/core/testing';
import ControlChildLayoutComponent from './control-child-layout.component';

describe('ControlChildLayoutComponent', () => {
  let component: ControlChildLayoutComponent;
  let fixture: ComponentFixture<ControlChildLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlChildLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlChildLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
