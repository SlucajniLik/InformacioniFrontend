import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavijaciUplateComponent } from './navijaci-uplate.component';

describe('NavijaciUplateComponent', () => {
  let component: NavijaciUplateComponent;
  let fixture: ComponentFixture<NavijaciUplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavijaciUplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavijaciUplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
