import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Korisnik } from 'src/app/Interfejsi/Korisnik';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
uloga:any;
  korisnik?:Korisnik
  


  constructor(private prijavaserv:PrijavaService)
  {

    

  }
  ngOnInit(): void {
    this.password = 'password';
    this.password2 = 'password';
  }



form=new FormGroup(
  {
name:new FormControl('',[Validators.required,Validators.minLength(3)]),
surname:new FormControl('',[Validators.required,Validators.minLength(3)]),
username:new FormControl('',[Validators.required,Validators.minLength(3)]),
password:new FormControl('',[Validators.required,Validators.minLength(8)]),
confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
role:new FormControl('',[Validators.required])

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

get ConfirmPassword()
{
  return  this.form.get('confirmPassword')
}


get Role()
{
  return  this.form.get('role')
}
change()
{
  this.success=false
  this.alredyExist=false
}

password:any;

show = false;

onClick() {
  if (this.password === 'password') {
    this.password = 'text';
    this.show = true;
  } else {
    this.password = 'password';
    this.show = false;
  }
}




password2:any;

show2 = false;


onClick2() {
  if (this.password2 === 'password') {
    this.password2 = 'text';
    this.show2 = true;
  } else {
    this.password2 = 'password';
    this.show2 = false;
  }
}
isEqual()
{
if(this.Password?.value!.toString()!=this.ConfirmPassword?.value?.toString())
{
return false
}
return true

}
success:boolean=false
alredyExist:boolean=false
register()
{
console.log(this.form)
this.korisnik={
    ime: this.Name?.value!,
    prezime:this.Surname?.value!,
    korisnickoIme:this.Username?.value!,
    lozinka:this.Password?.value!
    
}
console.log(this.form.status)
this.uloga=this.Role?.value
if(this.form.status.toString()=="VALID")
{
  this.prijavaserv.register(this.korisnik,this.uloga).subscribe(

    res=>{
      
      if(res!="ne")
      {
        console.log(res)
        this.Name?.setValue(null)
        this.Surname?.setValue("")
        this.Password?.setValue("")
        this.ConfirmPassword?.setValue("")
        this.Username?.setValue("")
        this.Role?.setValue("")
        this.success=true
      }
      else
      {
       this.alredyExist=true
      }
      
      
    
    
    
    }
  )
  
}



}

}
