import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ManageUsersService } from '../services/manage-users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  accessFlag : boolean;
  constructor(private store: Store<State>, private logger : ManageUsersService, private router: Router){
    store.select(state => state).subscribe(details => {
      this.accessFlag = details.logins.logInValidated;
    })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.logger.log('Details from route guard: '+ this.accessFlag);
      if(this.accessFlag){
        return this.accessFlag;
      }else{
        this.router.navigate(['/noAuth']);
      }
    
  }
  
}
