import { TestBed, inject } from '@angular/core/testing';

import { DirectoryHqlfService } from './directory-hqlf.service';

describe('DirectoryHqlfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectoryHqlfService]
    });
  });

  it('should be created', inject([DirectoryHqlfService], (service: DirectoryHqlfService) => {
    expect(service).toBeTruthy();
  }));
});
