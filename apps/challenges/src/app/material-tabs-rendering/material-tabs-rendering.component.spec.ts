import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialTabsRenderingComponent } from './material-tabs-rendering.component';

describe('MaterialTabsRenderingComponent', () => {
  let component: MaterialTabsRenderingComponent;
  let fixture: ComponentFixture<MaterialTabsRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTabsRenderingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialTabsRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
