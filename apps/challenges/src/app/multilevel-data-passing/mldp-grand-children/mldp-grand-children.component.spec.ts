import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MldpGrandChildrenComponent } from './mldp-grand-children.component';

describe('MldpGrandChildrenComponent', () => {
  let component: MldpGrandChildrenComponent;
  let fixture: ComponentFixture<MldpGrandChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MldpGrandChildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MldpGrandChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
