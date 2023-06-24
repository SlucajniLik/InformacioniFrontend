import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DozvoliNavijaceComponent } from './dozvoli-navijace.component';

describe('DozvoliNavijaceComponent', () => {
  let component: DozvoliNavijaceComponent;
  let fixture: ComponentFixture<DozvoliNavijaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DozvoliNavijaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DozvoliNavijaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
