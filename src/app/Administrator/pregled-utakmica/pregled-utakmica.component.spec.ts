import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledUtakmicaComponent } from './pregled-utakmica.component';

describe('PregledUtakmicaComponent', () => {
  let component: PregledUtakmicaComponent;
  let fixture: ComponentFixture<PregledUtakmicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledUtakmicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregledUtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
