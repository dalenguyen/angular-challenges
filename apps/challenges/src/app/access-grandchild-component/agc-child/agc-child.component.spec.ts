import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgcChildComponent } from './agc-child.component';

describe('AgcChildComponent', () => {
  let component: AgcChildComponent;
  let fixture: ComponentFixture<AgcChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgcChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
