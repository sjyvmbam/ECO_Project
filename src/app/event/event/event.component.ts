import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['id', 'day', 'name', 'place' ,'status', 'action'];
  dataSource: any [];
  nbrEvents: number;
  nbrFreePlacces: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
   /** if (localStorage.getItem('loggedUser') === null) {
      this.router.navigate([ '/start'])
    }
    this.dataSource1 = JSON.parse(localStorage.getItem('Events'))
    this.setBookingsAndPlaces();* */
  }

  add() {
    console.log('it works');
    // this.router.navigate([ '/booking' ])
  }

  setBookingsAndPlaces() {
    this. nbrEvents = this.dataSource.length;
    let count = 0;
    this.dataSource.forEach((event) => {
      if (event.status !== 'booked' && event.status !== 'participated') {
        count += 1;
      }
    });
    this.nbrFreePlacces = count;
  }

  goStart() {
    this.router.navigate(['/start'])
  }


  book() {}

  edit() {}

  cancel() {}
 
}


