import { TestBed } from '@angular/core/testing';

import { GitService } from './git-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

describe('GitService', () => {
  let service: GitService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GitService, HttpClient]
    });
    service = TestBed.inject(GitService);
  });

   it('Check with existing git user to verify user exists', async() => {
    service.getUserDetail('microsoft').subscribe(
      response => {
        expect(response.status).toBe(200);
      },
      catchError => {
        console.log(catchError);
      }
    )
  }); 

  it('Check for random string does not exists', async() => {
    service.getUserDetail('nonExistingUser').subscribe(
      catchError => {
        expect(catchError.status).toBe(404);
      }
    )
  });

  it('Verify if repos exist in github for user microsoft: should succeed', async() => {
    service.getRepos('microsoft').subscribe(
      response => {
        expect(response.status).toBe(200);
      },
      catchError => {
        console.log(catchError);
      }
    )
  });

});
