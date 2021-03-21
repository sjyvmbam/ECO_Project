import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

export interface DialogData {
  templateName: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'day', 'name', 'place' ,'status', 'action'];
  dataSource: any [];
  nbrbookings: number;
  nbrFreePlacces: number;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {  console.log('booking component itialized..');}

  ngOnInit(): void {
   
    this.dataSource = JSON.parse(localStorage.getItem('bookings'));
    this.setBookingsAndPlaces();
  }

  add() {
    console.log('it works');
    // this.router.navigate([ '/booking' ])
  }

  setBookingsAndPlaces() {
    this. nbrbookings = this.dataSource.length;
    let count = 0;
    this.dataSource.forEach((booking) => {
      if (booking.status !== 'booked' && booking.status !== 'participated') {
        count += 1;
      }
    });
    this.nbrFreePlacces = count;
  }

  goStart() {
    //this.router.navigate([ '/start' ])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data: {templateName: 'booking'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  book() {}

  edit() {}

  cancel() {}
 
}
