import { ComponentFixture, TestBed } from '@angular/core/testing';
import AccessGrandchildComponentComponent from './access-grandchild-component.component';

describe('AccessGrandchildComponentComponent', () => {
  let component: AccessGrandchildComponentComponent;
  let fixture: ComponentFixture<AccessGrandchildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessGrandchildComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessGrandchildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
