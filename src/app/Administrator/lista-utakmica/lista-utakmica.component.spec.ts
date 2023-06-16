import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUtakmicaComponent } from './lista-utakmica.component';

describe('ListaUtakmicaComponent', () => {
  let component: ListaUtakmicaComponent;
  let fixture: ComponentFixture<ListaUtakmicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUtakmicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
