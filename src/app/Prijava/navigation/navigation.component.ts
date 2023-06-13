import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
user:any;
token:any;
constructor(private route:Router,private prijavaServ:PrijavaService)
{
  
}



  ngOnInit(): any {


  
    
if(localStorage.getItem("token"))
{
this.prijavaServ.getInformation().subscribe(
  res=>{this.user=res
  console.log(this.user.role+"ovde")
  }
)
}






  }


  isLogedIn()
  {
    if(localStorage.getItem("token"))
    {
     
      return true;
    }
    return false;
  }



logOut()
{

localStorage.removeItem("token")

this.route.navigate([""])

}




}
