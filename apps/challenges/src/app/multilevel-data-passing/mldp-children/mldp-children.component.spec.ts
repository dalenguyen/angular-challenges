import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MldpChildrenComponent } from './mldp-children.component';

describe('MldpChildrenComponent', () => {
  let component: MldpChildrenComponent;
  let fixture: ComponentFixture<MldpChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MldpChildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MldpChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
