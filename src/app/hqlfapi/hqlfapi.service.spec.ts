import { TestBed, inject } from '@angular/core/testing';

import { HqlfapiService } from './hqlfapi.service';

describe('HqlfapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HqlfapiService]
    });
  });

  it('should be created', inject([HqlfapiService], (service: HqlfapiService) => {
    expect(service).toBeTruthy();
  }));
});
