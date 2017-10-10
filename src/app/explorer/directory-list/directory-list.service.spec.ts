import { TestBed, inject } from '@angular/core/testing';

import { DirectoryListService } from './directory-list.service';

describe('DirectoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectoryListService]
    });
  });

  it('should be created', inject([DirectoryListService], (service: DirectoryListService) => {
    expect(service).toBeTruthy();
  }));
});
