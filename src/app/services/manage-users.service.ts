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

  checkUserAvailability(userName : String, pwd : String){ 
      for(let user of this.usersList){
        if(userName == user.regUserName && pwd == user.regPassword){
          return true;
        }
      }
      return false;
  }

  addUser(userDetail : User){
    this.usersList.push(userDetail);
    //console.log("Console from service"+JSON.stringify(this.usersList));
    return true;
  }

  verifyUser(userName : String){
    for(let usr of this.usersList ){
      if(usr.regUserName == userName){
        return true;
      }
    }
    return false;
  }
  
  log(msg : String){
    if(null != msg){
        console.log(new Date().toLocaleString()+" "+msg);
    }  
 }

}
