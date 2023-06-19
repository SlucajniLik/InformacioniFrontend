import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniPodatkeUtakmiceComponent } from './izmeni-podatke-utakmice.component';

describe('IzmeniPodatkeUtakmiceComponent', () => {
  let component: IzmeniPodatkeUtakmiceComponent;
  let fixture: ComponentFixture<IzmeniPodatkeUtakmiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmeniPodatkeUtakmiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzmeniPodatkeUtakmiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
