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


  getPlayers()
    {
    return this.http.get(this.url+"getPlayers",{
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'bearer ' + this.token,
      },
    })
  }







}
