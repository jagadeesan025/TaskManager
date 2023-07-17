import { TestBed } from '@angular/core/testing';

import { HmlService } from './hml.service';

describe('HmlService', () => {
  let service: HmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
