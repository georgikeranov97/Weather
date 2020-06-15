import { TestBed } from '@angular/core/testing';

import { ObservationService } from './observation.service';

describe('ObservationServiceService', () => {
  let service: ObservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
