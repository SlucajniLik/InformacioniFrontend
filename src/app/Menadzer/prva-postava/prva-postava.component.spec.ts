import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvaPostavaComponent } from './prva-postava.component';

describe('PrvaPostavaComponent', () => {
  let component: PrvaPostavaComponent;
  let fixture: ComponentFixture<PrvaPostavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrvaPostavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrvaPostavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
