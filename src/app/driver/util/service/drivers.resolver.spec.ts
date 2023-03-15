import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';

import { DriversResolver } from './drivers.resolver';

describe('DriversResolver', () => {
  let resolver: DriversResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ HttpClientTestingModule ] });
    resolver = TestBed.inject(DriversResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
