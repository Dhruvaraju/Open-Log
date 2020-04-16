import { Injectable } from '@angular/core';
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  usersList : User[] = [
    {
      firstName: "Ethan",
      lastName: "Hunt",
      regUserName: "superman",
      regPassword: "Clarke@2020",
      confirmPassword: "Clarke@2020",
      city: "Chennai",
      state: "TamilNadu",
      zip: "600119",
      gender: "male"
      }
  ];
  constructor() { }

  checkUserAvailability(){
    return "available";
  }

  addUser(userDetail : User){
    this.usersList.push(userDetail);
    console.log("Console from service"+this.usersList);
    return "User Added";
  }

  verifyUser(userName : String){
    for(let usr of this.usersList ){
      if(usr.regUserName == userName){
        return true;
      }
    }
    return false;
  }
  

}
