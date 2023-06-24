import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PrijavaService } from 'src/app/prijava.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
user:any;
token:any;
  decodededToken: any;
constructor(private route:Router,private prijavaServ:PrijavaService)
{
  
}



  ngOnInit(): any {
   

  }


  isLogedIn()
  {
    if(localStorage.getItem("token"))
    {
     
      return true;
    }
    return null;
  }


role:any
isLogedRole()
{

if(localStorage.getItem("token"))
{
  this.decodededToken=jwt_decode(localStorage.getItem("token")!)

this.role=this.decodededToken["role"]

if(this.role=="menadzer")
{
  return "menadzer"
}



if(this.role=="admin")
{
  return "admin"
}



if(this.role=="navijac")
{
  return "navijac"
}
}

else
{return null}

return null

}


logOut()
{

localStorage.removeItem("token")

this.route.navigate([""])

}




}
