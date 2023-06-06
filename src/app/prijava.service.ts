import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from './Interfejsi/Korisnik';
import { LoginKorisnik } from './Interfejsi/LoginKorisnik ';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  constructor(private http:HttpClient) { }
url="https://localhost:7166/"
url2="https://localhost:7166/loginAdmin"
url3="https://localhost:7166/loginManager"
url4="https://localhost:7166/loginMemberFan"
registerAdmin(user:Korisnik)
{
return this.http.post(this.url+"registerAdmin",user)
}

loginAdmin(user:LoginKorisnik)
{
return this.http.post(this.url2,user,{responseType: 'text'})
}

loginManager(user:LoginKorisnik)
{
return this.http.post(this.url3,user,{responseType: 'text'})
}


loginMember(user:LoginKorisnik)
{
return this.http.post(this.url4,user,{responseType: 'text'})
}

}
