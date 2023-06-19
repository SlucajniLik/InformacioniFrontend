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
import { ListaTimovaComponent } from './Menadzer/lista-timova/lista-timova.component';
import { ListaIgracaComponent } from './Menadzer/lista-igraca/lista-igraca.component';
import { UnosRasporedaUtakmicaComponent } from './Administrator/unos-rasporeda-utakmica/unos-rasporeda-utakmica.component';
import { ListaUtakmicaComponent } from './Administrator/lista-utakmica/lista-utakmica.component';
import { IzmeniPodatkeUtakmiceComponent } from './Administrator/izmeni-podatke-utakmice/izmeni-podatke-utakmice.component';
import { ListaRezultataComponent } from './Administrator/lista-rezultata/lista-rezultata.component';
import { MenadzerTimoviComponent } from './Menadzer/menadzer-timovi/menadzer-timovi.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    LoginComponent,
    DodajTimoveComponent,
    DodajIgraceComponent,
    PregledRezultataComponent,
    ListaTimovaComponent,
    ListaIgracaComponent,
    UnosRasporedaUtakmicaComponent,
    ListaUtakmicaComponent,
    IzmeniPodatkeUtakmiceComponent,
    ListaRezultataComponent,
    MenadzerTimoviComponent


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
//admin
      { path: 'dodajIgrace', component: DodajIgraceComponent },
      { path: 'listaIgraca', component: ListaIgracaComponent },
      { path: 'dodajRaspored', component: UnosRasporedaUtakmicaComponent },
      { path: 'pregledRaspored', component: ListaUtakmicaComponent },
      { path: 'promeniPodatkeUtakmice/:id/:idTim1/:idTim2', component: IzmeniPodatkeUtakmiceComponent },
      { path: 'rezultatiTimova', component: ListaRezultataComponent },
//menadzer
      { path: 'dodajTimove', component: DodajTimoveComponent },
      { path: 'pregledRezultata', component: PregledRezultataComponent },
      { path: 'listaTimova', component: ListaTimovaComponent },
      { path: 'menadzerTimovi', component:MenadzerTimoviComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
