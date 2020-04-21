import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {
 userDetail ;
  constructor(private http: HttpClient) { }

  getUserDetail(userName){
    let url = 'http://api.github.com/users/'+userName;
    return this.http.get(url, {observe: 'response'});
  }

  getRepos(usr){
    let url = 'http://api.github.com/users/'+usr+'/repos';
    return this.http.get(url,{observe: 'response'});
  }
}
