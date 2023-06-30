import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igrac } from './Interfejsi/Igrac';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class MenadzerService {

  constructor(private http:HttpClient,private sharServ:SharedService) { }
url=this.sharServ.getUrl()
token=localStorage.getItem("token");
  addPlayer(player:Igrac)
  {
  return this.http.post(this.url+"addPlayers",player,{
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),
    },
  })
  }


  ChoseTeam(id:number,idMenadzera:number)
  {
  return this.http.put(this.url+"choseTeam/"+id+"/"+idMenadzera,"",{
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),
    },
  })
  }



  getTeams()
  {
  return this.http.get(this.url+"getTeamsNull",{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),

    },

  },)
}




getManagerTeam(id:number)
  {
  return this.http.get(this.url+"getManagerTeam/"+id,{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),

    },

  },)
}


  getPlayers(id:number)
    {
    return this.http.get(this.url+"getPlayers/"+id,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'bearer ' + localStorage.getItem("token"),
      },
    })
  }





  getManagerTeams(id:number)
  {
  return this.http.get(this.url+"getTeamsManager/"+id,{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),

    },

  },)
}



setLineUp(id:number,type?:boolean)
{
console.log(localStorage.getItem("token")+"556645")
  return this.http.put(this.url+"editLineUp/"+id+"/"+type,"",{

    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: 'bearer ' + localStorage.getItem("token"),

    },

  },)
}

getLineUpPlayers(type:boolean,id:number)
{
return this.http.get(this.url+"getPlayersLineUp/"+id+"/"+type,{
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),
  },
})
}




}
