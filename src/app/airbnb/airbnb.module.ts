import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirbnbAppComponent } from './airbnb.app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AirbnbRoutingModule } from './airbnb.route';
import { PlacesComponent } from './components/places/places.component';



@NgModule({
  declarations: [
    AirbnbAppComponent,
    HomeComponent,
    MenuComponent,
    PlacesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AirbnbRoutingModule

  ]
})
export class AirbnbModule { }
