import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tim } from './Interfejsi/Tim';

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







    
}
