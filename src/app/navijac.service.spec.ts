import { TestBed } from '@angular/core/testing';

import { NavijacService } from './navijac.service';

describe('NavijacService', () => {
  let service: NavijacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavijacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
