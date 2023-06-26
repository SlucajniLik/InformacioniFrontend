import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdigraneUtakmiceComponent } from './odigrane-utakmice.component';

describe('OdigraneUtakmiceComponent', () => {
  let component: OdigraneUtakmiceComponent;
  let fixture: ComponentFixture<OdigraneUtakmiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdigraneUtakmiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdigraneUtakmiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
