import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosRasporedaUtakmicaComponent } from './unos-rasporeda-utakmica.component';

describe('UnosRasporedaUtakmicaComponent', () => {
  let component: UnosRasporedaUtakmicaComponent;
  let fixture: ComponentFixture<UnosRasporedaUtakmicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosRasporedaUtakmicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosRasporedaUtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
