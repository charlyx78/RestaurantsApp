import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomePreparingComponent } from './home-preparing/home-preparing.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomeComponent,
    RegisterComponent,
    HomePreparingComponent,
  ],
  imports: [
    AppRoutingModule,
    GooglePlaceModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
