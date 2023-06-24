import { TestBed } from '@angular/core/testing';

import { NavijacGuard } from './navijac.guard';

describe('NavijacGuard', () => {
  let guard: NavijacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavijacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
