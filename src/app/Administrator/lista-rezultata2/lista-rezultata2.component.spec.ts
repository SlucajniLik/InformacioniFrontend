import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRezultata2Component } from './lista-rezultata2.component';

describe('ListaRezultata2Component', () => {
  let component: ListaRezultata2Component;
  let fixture: ComponentFixture<ListaRezultata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRezultata2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRezultata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
