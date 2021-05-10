import { TestBed } from '@angular/core/testing';

import { ServiciocrudService } from './serviciocrud.service';

describe('ServiciocrudService', () => {
  let service: ServiciocrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciocrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
