import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApproveMemebersComponent } from './list-approve-memebers.component';

describe('ListApproveMemebersComponent', () => {
  let component: ListApproveMemebersComponent;
  let fixture: ComponentFixture<ListApproveMemebersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApproveMemebersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListApproveMemebersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
