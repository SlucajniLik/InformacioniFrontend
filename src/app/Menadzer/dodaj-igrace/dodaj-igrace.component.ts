import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Igrac } from 'src/app/Interfejsi/Igrac';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-dodaj-igrace',
  templateUrl: './dodaj-igrace.component.html',
  styleUrls: ['./dodaj-igrace.component.css']
})
export class DodajIgraceComponent implements OnInit{

player:Igrac={

    ime:'',
    prezime:'',
    datumRodjenja:'',
    pozicija:'',
    idTima:0




}
form=new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3)]),
surname:new FormControl('',[Validators.required,Validators.minLength(3)]),
dateBirth:new FormControl('',[Validators.required]),
pozicija:new FormControl('',[Validators.required])




})


myTeam:any
rest:any=false
constructor(private menService:MenadzerService,private route:ActivatedRoute,private prijavaServ:PrijavaService)
{}
  ngOnInit(): void {

   this.prijavaServ.getInformation().subscribe(

    (ress:any)=>{



      console.log("dddddddi"+ress)
      this.menService.getManagerTeam(ress.userId).subscribe(
        res=>{this.myTeam=res
       
      if(res==null)
      {
         this.rest=true
      }
       }
     
         )
    }
   )  
  }
pozicije:any[]=["Golman ","Centralni bek","Levi bek","Desni bek"
,'Centralni vezni igrac','Defanzivni vezni igrac','Ofanzivni vezni igrac'
,' Krilni vezni igrac','Prvi napadac','Drugi napadac','Treci napadac'
]
success:any=false
mess:any=false


change()
{


  this.success=false
  this.mess=false
}
addPlayer()
{
console.log(this.route.snapshot.paramMap.get("id")+"ffffffffffffffs")
this.player={

 ime:this.Name?.value!,
 prezime:this.Surname?.value!,
 datumRodjenja:moment(this.DateBirth?.value!).format("YYYY-MM-DD"),
 pozicija:this.Pozicija?.value!,
 idTima:this.myTeam.id,
 



}




if(this.form.status.toString()=="VALID")
{
this.menService.addPlayer(this.player).subscribe(
  res=>{console.log(res)

    if(res==null)
    {
           this.mess=true
    }
    else
    {
      this.DateBirth?.setValue("")
      this.Name?.setValue("")
      this.Surname?.setValue("")
      this.Pozicija?.setValue("")
    this.success=true
    }
   
  },
  error=>{console.log(error)}
)
}

}


get Name()
{
  return this.form.get('name')
}

get Surname()
{
  return this.form.get('surname')
}
get DateBirth()
{
  return this.form.get('dateBirth')
}



get Pozicija()
{
  return this.form.get('pozicija')
}













}
