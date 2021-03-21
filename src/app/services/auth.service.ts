import { Injectable } from '@angular/core';
import { User} from '../interface/user';
import{ Observable } from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  setData() {

    const places = [
      {id: 1, placename: 'Rheinberg',  adress: 'Duisburg', telNr: '02940394595',  status: 'verfugbarkeit'},
      {id: 2, placename: 'mannheim',   adress:   'Essen',  telNr: '022434323234', status: 'verfugbarkeit'},
      {id: 3, placename: 'düsseldorf', adress: 'Berlin',   telNr: '1234059095',   status: 'verfugbarkeit'},
    ];
    if(!localStorage.getItem('places')) {
      localStorage.setItem('places', JSON.stringify(places));
    }
  }

}



/**logIn(username: string, password: string) {
  const url = '';
  const params = new HttpParams()
    .set('username', username)
    .set('password', password);
}

getParkings():Observable <User[]> {
  
  return this.http.get<User[]>(environment.apiUrl +'/login');
}
getParking(isadmin:boolean):Observable<User> {
  
  return this.http.get<User[]>(environment.apiUrl +'/login').pipe(
    map(Users => Users.find(user=>user.isadmin===true))
  );
}

**/