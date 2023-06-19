import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igrac } from './Interfejsi/Igrac';

@Injectable({
  providedIn: 'root'
})
export class MenadzerService {

  constructor(private http:HttpClient) { }
url="https://localhost:7166/"
token=localStorage.getItem("token");
  addPlayer(player:Igrac)
  {
  return this.http.post(this.url+"addPlayers",player,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + this.token,
    },
  })
  }


  ChoseTeam(id:number,idMenadzera:number)
  {
  return this.http.put(this.url+"choseTeam/"+id+"/"+idMenadzera,"",{
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




  getPlayers()
    {
    return this.http.get(this.url+"getPlayers",{
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'bearer ' + this.token,
      },
    })
  }





  getManagerTeams(id:number)
  {
  return this.http.get(this.url+"getTeamsManager/"+id,{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + this.token,

    },

  },)
}



}
