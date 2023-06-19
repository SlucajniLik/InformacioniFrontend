import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRezultataComponent } from './lista-rezultata.component';

describe('ListaRezultataComponent', () => {
  let component: ListaRezultataComponent;
  let fixture: ComponentFixture<ListaRezultataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRezultataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRezultataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
