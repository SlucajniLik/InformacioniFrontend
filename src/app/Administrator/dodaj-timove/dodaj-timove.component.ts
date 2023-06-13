import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tim } from 'src/app/Interfejsi/Tim';
import { AdminService } from 'src/app/admin.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-dodaj-timove',
  templateUrl: './dodaj-timove.component.html',
  styleUrls: ['./dodaj-timove.component.css']
})
export class DodajTimoveComponent {

 

  team:Tim={


    naziv:'',
    datumOsnivanja:'',
    grad:'',
    logo:'',
    




  
}
form=new FormGroup({
name:new FormControl('',[Validators.required]),
dateOfEstablishment:new FormControl('',[Validators.required]),
city:new FormControl('',[Validators.required]),
logo:new FormControl('',[Validators.minLength(3)]),





})




constructor(private admService:AdminService,private prijavaServ:PrijavaService)
{

this.prijavaServ.getInformation().subscribe(
  (res:any)=>{console.log(res.userId)}
)

}


addTeams()
{

this.team={
 
  naziv:this.Name?.value!,
  datumOsnivanja:this.DateOfEstablishment?.value!,
  grad:this.City?.value!,
  logo:this.Logo?.value!,




}




this.admService.addTeams(this.team).subscribe(
  res=>{console.log(res)},
  error=>{console.log(error)}
)


}


get Name()
{
  return this.form.get('name')
}

get DateOfEstablishment()
{
  return this.form.get('dateOfEstablishment')
}
get City()
{
  return this.form.get('city')
}


get Logo()
{
  return this.form.get('logo')
}

}
