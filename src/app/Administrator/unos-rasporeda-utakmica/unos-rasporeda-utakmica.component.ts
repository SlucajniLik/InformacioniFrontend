import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Utakmica } from 'src/app/Interfejsi/Utakmica';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-unos-rasporeda-utakmica',
  templateUrl: './unos-rasporeda-utakmica.component.html',
  styleUrls: ['./unos-rasporeda-utakmica.component.css']
})
export class UnosRasporedaUtakmicaComponent implements OnInit{


  constructor(private admServ:AdminService)
  {
  }
  utakmica:Utakmica={

    datum: '',
    vreme: '',
    rezultat: '',
    brZutihKartona: '',
    brCrvenihKartona: '',
    idTima1: 0,
    idTima2: 0
  }
form=new FormGroup({
  tim1:new FormControl('',[Validators.required]),
  tim2:new FormControl('',[Validators.required]),
  datum:new FormControl('',[Validators.required]),
  vreme:new FormControl('',[Validators.required])
})

 get Datum()
 {

  return this.form.get("datum")
 }


 get Vreme()
 {

  return this.form.get("vreme")
 }




 get Tim1()
 {

  return this.form.get("tim1")
 }


 get Tim2()
 {

  return this.form.get("tim2")
 }



onClick()
{
this.utakmica={
 
    datum:this.Datum?.value!,
    vreme: this.Vreme?.value!,
    rezultat: '0',
    brZutihKartona: '0',
    brCrvenihKartona: '0',
    idTima1: +this.Tim1?.value!,
    idTima2: +this.Tim2?.value!
}


console.log(this.utakmica)
this.admServ.addMatch(this.utakmica).subscribe(
  res=>{console.log(res)}
)

}







  teams?:any[]
  
    ngOnInit(): void {
      this.admServ.getTeams().subscribe(
        (res:any)=>{this.teams=res
          console.log(this.teams+"ff")
        }
      )
     
    }
  
  




}
