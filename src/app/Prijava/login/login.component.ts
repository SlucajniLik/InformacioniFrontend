import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrijavaService } from 'src/app/prijava.service';
import { LoginKorisnik } from "src/app/Interfejsi/LoginKorisnik "
import { Router } from '@angular/router';
import { NavijacService } from 'src/app/navijac.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private prijavaserv:PrijavaService,private router:Router,private navServ:NavijacService)
{

}

decodededToken:any
user?:LoginKorisnik
  form=new FormGroup(
    {
  username:new FormControl('',[Validators.required,]),
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
nonAllowed:any;
resp?:any
wrongPassword:boolean=false
nonAllow:boolean=false
notExist:boolean=false



change()
{
  this.notExist=false
  this.nonAllow=false
  this.wrongPassword=false
}
login()
{

  this.user=
{
korisnickoIme:this.Username?.value!,
lozinka:this.Password?.value!,
tip:''
}



this.prijavaserv.login(this.user).subscribe(


  (res:any)=>{
    this.resp=res
console.log(this.resp+"aaaa")

     if(res=="ne")
     {this.nonAllow=false
      this.notExist=false
      this.wrongPassword=true
  console.log("pogresna sifra")
     }
     else if(res=="nonAllowed")
     {this.notExist=false
      this.wrongPassword=false
       this.nonAllow=true
        console.log("Jos uvek niste odobreni")



        this.Password?.setValue("")
        this.Username?.setValue("")
     }
     else if(res=="nel")
     {
      console.log("korisnik ne postoji u bazi")
      this.notExist=true
      this.nonAllow=false
      this.wrongPassword=false
      this.Password?.setValue("")
      this.Username?.setValue("")
     }
     else if(res)
     {
      if(this.form.status.toString()=="VALID" &&this.notExist==false&&this.nonAllow==false &&
      this.wrongPassword==false)
      {
          localStorage.setItem("token",res)   
            
         
          this.decodededToken=jwt_decode(localStorage.getItem("token")!)
          console.log(this.decodededToken['role']+"dddddd88888")
         if(this.decodededToken['role']=="admin")
         {
          this.router.navigate(["dodajTimove"])
         }
         else if(this.decodededToken['role']=="menadzer")
         {
          this.router.navigate(["dodajIgrace"])
         }
         else if(this.decodededToken['role']=="navijac")
         {
            
       
      

        console.log("sdsdsdsdsdsdsdsdsdsdsd")

        this.decodededToken=jwt_decode(localStorage.getItem("token")!)
       this.navServ.getTeamsMemberInformation(this.decodededToken['nameid']).subscribe(

         (res:any)=>
         {

          console.log(res+"titititit")
           if(res.idTima!=null)
           {
            this.router.navigate(["pregledRezultata"])
           }
           else
           {


            this.router.navigate(["listaTimovaNavijac"])
           }
          
         }
       )
         }

        }
     }
  }
)













/*
this.prijavaserv.loginAdmin(this.user).subscribe(
 x=>{this.token=x
 if(this.token)
 {
localStorage.setItem("token",this.token)

console.log(this.token+"ovde je token")
this.router.navigate(["dodajTimove"])
//console.log(this.token+"dfdf")
 }
 else
 {
  console.log(this.token+"ovde nijeee token")
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
    if(this.token )
    {
      console.log(this.token+"Nije vam dozvoljenooooooo")
      if(this.token=="nonAllowed")
      {

      
      }
       else
       {

        localStorage.setItem("token",this.token)

        this.decodededToken=jwt_decode(localStorage.getItem("token")!)
       this.navServ.getTeamsMemberInformation(this.decodededToken['nameid']).subscribe(

         (res:any)=>
         {

          console.log(res+"titititit")
           if(res.idTima!=null)
           {
            this.router.navigate(["pregledRezultata"])
           }
           else
           {


            this.router.navigate(["listaTimovaNavijac"])
           }
          
         }



       )







       
       }
  
   
    }
  } 
)

*/











}






}
