import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { StartComponent } from './start/start.component';
import {EventComponent} from './event/event/event.component'
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { PlacesComponent } from './places/places.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
const appRoutes:Routes=[
  {path: 'start', component: StartComponent},
  {path: 'login', component: LoginComponent},
  {path:'booking', component: BookingComponent},
  {path:'event', component: EventComponent},
  {path:'header',component:HeaderComponent},
  {path:'places',component:PlacesComponent},
  {path:'calendar',component:EventcalendarComponent},
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
