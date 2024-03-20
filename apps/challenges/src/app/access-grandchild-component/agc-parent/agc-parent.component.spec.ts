import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgcParentComponent } from './agc-parent.component';

describe('AgcParentComponent', () => {
  let component: AgcParentComponent;
  let fixture: ComponentFixture<AgcParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgcParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
