import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledRezultataComponent } from './pregled-rezultata.component';

describe('PregledRezultataComponent', () => {
  let component: PregledRezultataComponent;
  let fixture: ComponentFixture<PregledRezultataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledRezultataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregledRezultataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
