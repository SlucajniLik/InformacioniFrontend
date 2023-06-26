import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
name:new FormControl('',[Validators.required]),
surname:new FormControl('',[Validators.required]),
dateBirth:new FormControl('',[Validators.minLength(3)]),
pozicija:new FormControl('',[])




})


myTeam:any

constructor(private menService:MenadzerService,private route:ActivatedRoute,private prijavaServ:PrijavaService)
{}
  ngOnInit(): void {

   this.prijavaServ.getInformation().subscribe(

    (ress:any)=>{
      console.log("dddddddi"+ress)
      this.menService.getManagerTeam(ress.userId).subscribe(
        res=>{this.myTeam=res
       
       
       }
     
         )
    }
   )  
  }
pozicije:any[]=["pozicija1","pozicija2","pozicija3"]

addPlayer()
{
console.log(this.route.snapshot.paramMap.get("id")+"ffffffffffffffs")
this.player={

 ime:this.Name?.value!,
 prezime:this.Surname?.value!,
 datumRodjenja:this.DateBirth?.value!,
 pozicija:this.Pozicija?.value!,
 idTima:this.myTeam.id,
 



}




this.menService.addPlayer(this.player).subscribe(
  res=>{console.log(res)},
  error=>{console.log(error)}
)


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
