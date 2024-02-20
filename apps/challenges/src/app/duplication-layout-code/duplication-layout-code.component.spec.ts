import { ComponentFixture, TestBed } from '@angular/core/testing';

import DuplicationLayoutCodeComponent from './duplication-layout-code.component';

describe('DuplicationLayoutCodeComponent', () => {
  let component: DuplicationLayoutCodeComponent;
  let fixture: ComponentFixture<DuplicationLayoutCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicationLayoutCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DuplicationLayoutCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
