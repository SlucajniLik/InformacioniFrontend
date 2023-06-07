import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIgraceComponent } from './dodaj-igrace.component';

describe('DodajIgraceComponent', () => {
  let component: DodajIgraceComponent;
  let fixture: ComponentFixture<DodajIgraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajIgraceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajIgraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
