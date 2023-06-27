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


register(user:Korisnik,type:string)
{
return this.http.post(this.url+"register/"+type,user)
}







registerAdmin(user:Korisnik)
{
return this.http.post(this.url+"registerAdmin",user)
}

registerManager(user:Korisnik)
{
return this.http.post(this.url+"registerManager",user)
}

registerMember(user:Korisnik)
{
return this.http.post(this.url+"registerMemmerFan",user)
}





login(user:LoginKorisnik)
{
return this.http.post(this.url+"login",user,{responseType: 'text'})
}


loginAdmin(user:LoginKorisnik)
{
return this.http.post(this.url+"loginAdmin",user,{responseType: 'text'})
}

loginManager(user:LoginKorisnik)
{
return this.http.post(this.url+"loginManager",user,{responseType: 'text'})
}


loginMember(user:LoginKorisnik)
{
return this.http.post(this.url+"loginMemberFan",user,{responseType: 'text'})
}



getInformation()
{
 
return this.http.get(this.url+"getInformation",{
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' +localStorage.getItem("token"),
  },
})
}




}
