import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utakmica2 } from './Interfejsi/Utakmica2';
import { Tim } from './Interfejsi/Tim';
import { Utakmica } from './Interfejsi/Utakmica';
import { map } from 'rxjs';

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




private apiKey = 'd56e6f47f9904f3de264e97df8ddbc8c';



uploadImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);



  return this.http.post('https://api.imgbb.com/1/upload', formData, { params:{key:this.apiKey} }).pipe(map((response:any)=>response['data']['url']));
}


getResults(id:number)
{
return this.http.get(this.url+"getResults/"+id,{
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,
  }})



}





addResult(result:any)
{
return this.http.post(this.url+"addResult",result,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}





updateResult(result:any)
{
return this.http.put(this.url+"updateResult",result,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}


getTeamResult(id:number,sez:string)
{
return this.http.get(this.url+"getTeamResult/"+id+"/"+sez,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}





getManagers()
{
return this.http.get(this.url+"getManagers",{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}





getMemebers()
{
return this.http.get(this.url+"getNonApprovedMemebers",{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}




editMemebers(id:number,status:boolean)
{
return this.http.put(this.url+"approveMemebers/"+id+"/"+status,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + this.token,

  },

},)
}











}
