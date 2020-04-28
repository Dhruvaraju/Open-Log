import * as LogInActions from './log-in.actions';

describe('LogIn', () => {
  it('should create an instance', () => {
    expect(new LogInActions.LoadLogIns()).toBeTruthy();
  });
});
