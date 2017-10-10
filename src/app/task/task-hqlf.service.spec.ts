import { TestBed, inject } from '@angular/core/testing';

import { TaskHqlfService } from './task-hqlf.service';

describe('TaskHqlfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskHqlfService]
    });
  });

  it('should be created', inject([TaskHqlfService], (service: TaskHqlfService) => {
    expect(service).toBeTruthy();
  }));
});
