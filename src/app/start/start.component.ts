import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  booksElements = [
    {id: 1, name: 'Boehringer Ingelheim',logIn: 'myadress@gmail.com', password: 'mypass1'},
    {id: 2, name: 'Apotheke von Deutschland'},
    {id: 3, name: 'Daimeler AG'},
    {id: 4, name: 'Autohaus'}
  ];
  eventsElements = [
    {id: 5, name: 'Event 1'},
    {id: 6, name: 'Event 2'},
    {id: 7, name: 'Event 3'},
    {id: 8, name: 'Event 4'}
  ];
  placesElements = [
    {id: 8, name: 'Duisburg'},
    {id: 9, name: 'Essen'},
    {id: 10, name: 'Berlin'},
    {id: 11, name: 'München'}
  ];

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  addFirme() {
      this.router.navigate([ '/booking' ])
  }

  addEvent() {
    this.router.navigate([ '/event' ])
  }

  addPlace() {
    this.router.navigate([ '/places' ])
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate([ '/login' ]);
  }
/**
  isAdmin() {
    const currentUser: any = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser).roles.includes('ROLE_ADMIN');
      this.router.navigate([ '/start']);

    }
    return false;
  } */
}
