import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utakmica2 } from './Interfejsi/Utakmica2';
import { Tim } from './Interfejsi/Tim';
import { Utakmica } from './Interfejsi/Utakmica';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url="https://localhost:7166/"
  token=localStorage.getItem("token");
    addTeams(team:Tim)
    {
    return this.http.post(this.url+"addTeams",team,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'bearer ' + this.token,
      },
    })
    }

    getTeams()
    {
    return this.http.get(this.url+"getTeams",{

      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'bearer ' + this.token,

      },

    },)
  }

  addMatch(utakmica:Utakmica)
  {
  return this.http.post(this.url+"addMatch",utakmica,{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + this.token,

    },

  },)
}



getMatch()
{
return this.http.get(this.url+"getMatches",{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}





editMatch(id:number,utakmica2:Utakmica2)
{
return this.http.put(this.url+"editMatch/"+id,utakmica2,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}










}
