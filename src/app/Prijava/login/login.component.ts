import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrijavaService } from 'src/app/prijava.service';
import { LoginKorisnik } from "src/app/Interfejsi/LoginKorisnik "
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private prijavaserv:PrijavaService)
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
 
localStorage.setItem("token",this.token)
//console.log(this.token+"dfdf")


}
  
)






}







}
