import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerTimoviComponent } from './menadzer-timovi.component';

describe('MendzerTimoviComponent', () => {
  let component: MenadzerTimoviComponent;
  let fixture: ComponentFixture<MenadzerTimoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerTimoviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerTimoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
