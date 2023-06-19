import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTimovaComponent } from './lista-timova.component';

describe('ListaTimovaComponent', () => {
  let component: ListaTimovaComponent;
  let fixture: ComponentFixture<ListaTimovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTimovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTimovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
