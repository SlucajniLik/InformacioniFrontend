import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrijavaService } from 'src/app/prijava.service';
import { LoginKorisnik } from "src/app/Interfejsi/LoginKorisnik "
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private prijavaserv:PrijavaService,private router:Router)
{

}


user?:LoginKorisnik
  form=new FormGroup(
    {
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  
    }
  )
  
  
  

  get Username()
  {
    return  this.form.get('username')
  }
  
  
  get Password()
  {
    return  this.form.get('password')
  }
  
token:any

login()
{

  this.user=
{
korisnickoIme:this.Username?.value!,
lozinka:this.Password?.value!
}



this.prijavaserv.loginAdmin(this.user).subscribe(
 x=>{this.token=x
 if(this.token)
 {
localStorage.setItem("token",this.token)
this.router.navigate(["dodajTimove"])
//console.log(this.token+"dfdf")
 }
 else
 {
  console.log(this.user?.lozinka+"dfdf")
 }

}
  
)
console.log(this.user.korisnickoIme!+this.user.lozinka+"")
this.prijavaserv.loginManager(this.user).subscribe(

  x=>{this.token=x
    if(this.token)
    {
   localStorage.setItem("token",this.token)
   this.router.navigate(["dodajIgrace"])
   
    }
  } 
)

this.prijavaserv.loginMember(this.user).subscribe(

  x=>{this.token=x
    if(this.token)
    {
   localStorage.setItem("token",this.token)
   this.router.navigate(["pregledRezultata"])
   
    }
  } 
)













}







}
