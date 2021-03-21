import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FullCalendarModule} from '@fullcalendar/angular'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import {MatCardModule} from '@angular/material/card';
import { EventModule } from './event/event.module';
import { BookingComponent } from './booking/booking.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { PlacesComponent } from './places/places.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    BookingComponent,
    DialogboxComponent,
    HeaderComponent,
    PlacesComponent,
    EventcalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    EventModule,
    MatDialogModule,
    MatMenuModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
