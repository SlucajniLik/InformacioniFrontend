import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTimovaNavijacComponent } from './lista-timova-navijac.component';

describe('ListaTimovaNavijacComponent', () => {
  let component: ListaTimovaNavijacComponent;
  let fixture: ComponentFixture<ListaTimovaNavijacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTimovaNavijacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTimovaNavijacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
