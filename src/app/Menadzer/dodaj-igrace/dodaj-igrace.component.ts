import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Igrac } from 'src/app/Interfejsi/Igrac';
import { MenadzerService } from 'src/app/menadzer.service';

@Component({
  selector: 'app-dodaj-igrace',
  templateUrl: './dodaj-igrace.component.html',
  styleUrls: ['./dodaj-igrace.component.css']
})
export class DodajIgraceComponent {

player:Igrac={

    ime:'',
    prezime:'',
    datumRodjenja:'',
    idTima:0




}
form=new FormGroup({
name:new FormControl('',[Validators.required]),
surname:new FormControl('',[Validators.required]),
dateBirth:new FormControl('',[Validators.minLength(3)]),





})




constructor(private menService:MenadzerService,private route:ActivatedRoute)
{}


addPlayer()
{
console.log(this.route.snapshot.paramMap.get("id")+"ffffffffffffffs")
this.player={

 ime:this.Name?.value!,
 prezime:this.Surname?.value!,
 datumRodjenja:this.DateBirth?.value!,
 idTima:+this.route.snapshot.paramMap.get("id")!,



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













}
