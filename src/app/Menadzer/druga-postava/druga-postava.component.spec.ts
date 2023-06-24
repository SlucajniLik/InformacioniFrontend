import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugaPostavaComponent } from './druga-postava.component';

describe('DrugaPostavaComponent', () => {
  let component: DrugaPostavaComponent;
  let fixture: ComponentFixture<DrugaPostavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugaPostavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugaPostavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
