import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../interface/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  users:User[];
  userAdmin:User[];

  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthService) {
      console.log('login component initialized...');


    }

  ngOnInit(): void {
    this.setDataBase();
    this.initSigninForm();
    this.authService.setData();
  }

  initSigninForm(){
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

  });
  }

  onSubmitSigninForm(){
    console.log(this.signinForm.value);
    const username = this.signinForm.get('username').value;
    const password = this.signinForm.get('password').value;
    const foundUser = this.Login(username, password);
    //const foundUser1 = this.login2(username, password);

    if (this.Login(username, password) !== false) {
      localStorage.setItem('loggedUser', JSON.stringify(foundUser));
    }

    /**else if(this.login2(username, password) !== false) {
      localStorage.setItem('loggedUser', JSON.stringify(foundUser1));
      this.router.navigate([ '/header']);
    } */
   
    else {
    alert('username or password was not found');
    }

  }
  // User can be an ADMIN or FIRMA(here meant is Employee of the Firma)
  Login(username: string, password: string): boolean {
    //  recuperer la liste des utilisateurs
    const users =  JSON.parse(localStorage.getItem('users'));
    //  verifier que l'utilisateur existe
    const currentUser = users.find(user => user.username === username && user.password === password);
    console.log('current user :');
    console.log(currentUser);
    // rediriger l'utilisateur en fonction de son role
    if(currentUser){
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
       if(currentUser.roles[0] == 'ROLE_ADMIN'){
         console.log('current user has role: ADMIN');
         this.router.navigate(['/start']);
       }
       if(currentUser.roles[0] == 'ROLE_USER'){
        console.log('current user has role: USER');
        this.router.navigate(['/booking']);
       }
       return true;
    }
    return false;
  }
 

  setDataBase() {
    const users = [
      {username: 'eco', password: '1234', roles: ['ROLE_ADMIN']},
      {username: 'eco2', password: '1234t', roles: ['ROLE_USER']},
      {username:'EcoConsult',password:'1234#abcd',roles:['ROLE_ADMIN']},
    ];

    if(!localStorage.getItem('users')) {
      localStorage.setItem('users',JSON.stringify(users));
    }

    const userAdmin = [
      {username:'BoehringerIngelheim',password:'mypass1',roles:['ROLE_USER']},
    ];
    if(!localStorage.getItem('userAdmin')) {
      localStorage.setItem('userAdmin',JSON.stringify(userAdmin));
    }

    const bookings = [
      {id: 1, day: 'Mon 17 Feb 20, 12:02', place: 'Duisburg', name: 'Pharma', status: 'booked'},
      {id: 2, day: 'Mon 17 Jan 20, 12:02', place: 'Essen', name: 'Apotheke', status: 'participated'},
      {id: 3, day: 'Mon 17 Dec 20, 12:02', place: 'Berlin', name: 'Medion Tv', status: 'canceled'},
    ];
    if(!localStorage.getItem('bookings')) {
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  }
}

