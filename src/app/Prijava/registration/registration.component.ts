import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Korisnik } from 'src/app/Interfejsi/Korisnik';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
uloga:any;
  korisnik?:Korisnik
  


  constructor(private prijavaserv:PrijavaService)
  {

    

  }



form=new FormGroup(
  {
name:new FormControl('',[Validators.required]),
surname:new FormControl('',[Validators.required]),
username:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required]),
role:new FormControl('')

  }
)


get Name()
{
  return  this.form.get('name')
}


get Surname()
{
  return  this.form.get('surname')
}



get Username()
{
  return  this.form.get('username')
}


get Password()
{
  return  this.form.get('password')
}


get Role()
{
  return  this.form.get('role')
}


register()
{
console.log(this.Password?.value)
this.korisnik={
    ime: this.Name?.value!,
    prezime:this.Surname?.value!,
    korisnickoIme:this.Username?.value!,
    lozinka:this.Password?.value!
}

this.uloga=this.Role?.value

  if(this.uloga=='admin'){
    this.prijavaserv.registerAdmin(this.korisnik).subscribe()
  }
else if(this.uloga=='menadzer'){
  this.prijavaserv.registerManager(this.korisnik).subscribe()
  
}
else if(this.uloga=='navijac'){
  this.prijavaserv.registerMember(this.korisnik).subscribe()
}
}

}
