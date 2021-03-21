import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'placename', 'adress', 'telNr' ,'status', 'action'];
  dataSource: any [];
  nbrplaces: number;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    
    this.dataSource = JSON.parse(localStorage.getItem('places'));
    this.setBookingsAndPlaces();
   
  }

  add() {
    console.log('it works');
    // this.router.navigate([ '/booking' ])
  }

  setBookingsAndPlaces() {
    this. nbrplaces = this.dataSource.length;
    let count = 0;
    this.dataSource.forEach((places) => {
      if (places.status !== 'verfugbarkeit') {
        count += 1;
      }
    });
    this.nbrplaces = count;
  }

  goStart() {
    //this.router.navigate([ '/start' ])
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate([ '/login' ]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '100%',
      data: {templateName: 'place'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.animal = result;
    });
  }

  book() {}

  edit() {}

  cancel() {}

}
