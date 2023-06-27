import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavijacService {

  constructor(private http:HttpClient) { }
url="https://localhost:7166/"
token:any;
 



getTeamsMemberInformation(id:number)
{
return this.http.get(this.url+"getTeamMemeberInforrmation/"+id,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}




getTeamsMember(id:number)
{
return this.http.get(this.url+"getTeamsMember/"+id,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}
editTeamsMember(idMemeber:number,idTeam:number)
{
return this.http.put(this.url+"editMemeberTeam/"+idMemeber+"/"+idTeam,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}


getResultsForMember(id:number)
{
return this.http.get(this.url+"getResultForMember/"+id,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}



getMatchesForMember(id:number,sezona:string)
{
return this.http.get(this.url+"getMatchesForMember/"+id+"/"+sezona,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}



getMemberData(id:number)
{
return this.http.get(this.url+"getMemberData/"+id,{

  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'bearer ' + localStorage.getItem("token"),

  },
})
}






}
