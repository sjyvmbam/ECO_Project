import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  netImage:any = 'assets/img/VIR.jpg';
  title = 'app';
  constructor() { }

  ngOnInit(): void {
  }

}
