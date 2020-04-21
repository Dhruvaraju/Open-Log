import { TestBed } from '@angular/core/testing';

import { GitServiceService } from './git-service.service';

describe('GitServiceService', () => {
  let service: GitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
