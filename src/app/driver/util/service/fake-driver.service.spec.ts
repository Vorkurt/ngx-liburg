import { TestBed } from '@angular/core/testing';

import { FakeDriverService } from './fake-driver.service';

describe('FakeDriverService', () => {
  let service: FakeDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
