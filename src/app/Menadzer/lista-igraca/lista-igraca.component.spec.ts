import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIgracaComponent } from './lista-igraca.component';

describe('ListaIgracaComponent', () => {
  let component: ListaIgracaComponent;
  let fixture: ComponentFixture<ListaIgracaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIgracaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIgracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
