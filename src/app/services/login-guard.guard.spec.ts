import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login-guard.guard';
import { HttpClientModule } from '@angular/common/http';

describe('LoginGuardGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [LoginGuard]
    });
    guard = TestBed.inject(LoginGuard);
  });

  /*it('should be created', () => {
    expect(guard).toBeTruthy();
  }); */
});
