import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Prijava/navigation/navigation.component';
import { RegistrationComponent } from './Prijava/registration/registration.component';
import { LoginComponent } from './Prijava/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DodajTimoveComponent } from './Administrator/dodaj-timove/dodaj-timove.component';
import { DodajIgraceComponent } from './Menadzer/dodaj-igrace/dodaj-igrace.component';
import { PregledRezultataComponent } from './Navijac/pregled-rezultata/pregled-rezultata.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    LoginComponent,
    DodajTimoveComponent,
    DodajIgraceComponent,
    PregledRezultataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component:LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'dodajTimove', component: DodajTimoveComponent },
      { path: 'dodajIgrace', component: DodajIgraceComponent },
      { path: 'pregledRezultata', component: PregledRezultataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
