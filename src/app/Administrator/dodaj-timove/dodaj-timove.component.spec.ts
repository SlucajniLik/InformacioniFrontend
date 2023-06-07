import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTimoveComponent } from './dodaj-timove.component';

describe('DodajTimoveComponent', () => {
  let component: DodajTimoveComponent;
  let fixture: ComponentFixture<DodajTimoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajTimoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajTimoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
