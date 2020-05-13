import { TestBed, async } from '@angular/core/testing';

import { ManageUsersService } from './manage-users.service';
import { User } from '../objects/user';
import { exec } from 'child_process';

describe('ManageUsersService', () => {
  let service: ManageUsersService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ ManageUsersService ]
    });
    service = TestBed.inject(ManageUsersService);
   
  });

  it('Check for user and return true if exists', async() => {
    expect(service.checkUserAvailability('superman','Clarke@2020')).toBe(true);
  });

  it('Incorrect user should return false', async() => {
    expect(service.checkUserAvailability('test','test')).toBe(false);
  });

  it('Checking if add user functionality working ', async() => {
    service.addUser({
      firstName: "Dexter",
      lastName: "Morgan",
      regUserName: "dexter",
      regPassword: "Dexter@2020",
      confirmPassword: "Dexter@2020",
      city: "Chennai",
      state: "TamilNadu",
      zip: "600119",
      gender: "male"
      });
      expect(service.checkUserAvailability('dexter','Dexter@2020')).toBe(true);
  });

  it('Verification of user name by providing valid user name', async()=>{
    expect(service.verifyUser('superman')).toBe(true);
  })

  it('Verification of user name by providing invalid user name', async()=>{
    expect(service.verifyUser('testData')).toBe(false);
  })

});
