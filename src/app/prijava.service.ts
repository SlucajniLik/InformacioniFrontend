import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from './Interfejsi/Korisnik';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  constructor(private http:HttpClient) { }
url="https://localhost:7166/"

registerAdmin(user:Korisnik)
{
return this.http.post(this.url+"registerAdmin",user)
}


registerManager(user:any)
{
return this.http.post(this.url+"registerAdmin",user)
}


}
