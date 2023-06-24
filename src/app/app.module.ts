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
import { ListaRezultata2Component } from './Administrator/lista-rezultata2/lista-rezultata2.component';
import { AdminGuard } from './admin.guard';
import { MenadzerGuard } from './menadzer.guard';
import { LoginGuard } from './login.guard';
import { PrvaPostavaComponent } from './Menadzer/prva-postava/prva-postava.component';
import { DrugaPostavaComponent } from './Menadzer/druga-postava/druga-postava.component';





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
    MenadzerTimoviComponent,
    ListaRezultata2Component,
    PrvaPostavaComponent,
    DrugaPostavaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component:LoginComponent,canActivate:[LoginGuard] },
      { path: 'register', component: RegistrationComponent,canActivate:[LoginGuard] },
//admin
    //  { path: 'dodajIgrace', component: DodajIgraceComponent,canActivate:[AdminGuard] },
     // { path: 'listaIgraca', component: ListaIgracaComponent,canActivate:[AdminGuard] },
      { path: 'dodajTimove', component: DodajTimoveComponent,canActivate:[AdminGuard]  },
      { path: 'dodajRaspored', component: UnosRasporedaUtakmicaComponent,canActivate:[AdminGuard]  },
      { path: 'pregledRaspored', component: ListaUtakmicaComponent ,canActivate:[AdminGuard] },
      { path: 'promeniPodatkeUtakmice/:id/:idTim1/:idTim2', component: IzmeniPodatkeUtakmiceComponent ,canActivate:[AdminGuard] },
      { path: 'rezultatiTimova', component: ListaRezultataComponent,canActivate:[AdminGuard]  },
      { path: 'listaTimova', component: ListaTimovaComponent,canActivate:[AdminGuard] },
     // { path: 'rezultatiTimova2/:id', component: ListaRezultata2Component },
//menadzer
      
      { path: 'pregledRezultata', component: PregledRezultataComponent,canActivate:[MenadzerGuard] },
      
      { path: 'dodajIgrace', component:DodajIgraceComponent ,canActivate:[MenadzerGuard]},
      { path: 'listaIgraca', component:ListaIgracaComponent,canActivate:[MenadzerGuard] },
      { path: 'prvaPostava', component:PrvaPostavaComponent,canActivate:[MenadzerGuard] },
      { path: 'drugaPostava', component:DrugaPostavaComponent,canActivate:[MenadzerGuard] },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
