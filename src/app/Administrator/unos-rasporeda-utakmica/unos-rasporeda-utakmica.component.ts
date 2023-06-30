import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Utakmica } from 'src/app/Interfejsi/Utakmica';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-unos-rasporeda-utakmica',
  templateUrl: './unos-rasporeda-utakmica.component.html',
  styleUrls: ['./unos-rasporeda-utakmica.component.css']
})
export class UnosRasporedaUtakmicaComponent implements OnInit{


  constructor(private admServ:AdminService,private cd:ChangeDetectorRef)
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

allow:boolean=true
success:boolean=false

check1:any=false
check2:any=false
checkTeams()
{ 
  
   if(this.Tim1?.value==this.Tim2?.value && this.Tim1?.value!='' && this.Tim2?.value!='')
   {
    
    this.check1=true
    console.log(this.Tim1?.value+"/"+this.Tim2?.value+"-"+this.check1)
   }
   else
   {
    this.check1=false
    console.log(this.Tim1?.value+"/"+this.Tim2?.value+"-"+this.check1)
   }
   
  
}

onClick()
{
this.utakmica={
 
    datum:moment(this.Datum?.value!).format("YYYY-MM-DD"),
    vreme: this.Vreme?.value!,
    rezultat: '0',
    brZutihKartona: '0',
    brCrvenihKartona: '0',
    idTima1: +this.Tim1?.value!,
    idTima2: +this.Tim2?.value!
}


console.log(this.utakmica)

if(this.form.status.toString()=="VALID")
{
this.admServ.addMatch(this.utakmica).subscribe(
  res=>{
    if(res==null)
    {this.allow=false}
    else
    {
      this.allow=true
      this.success=true

     this.Datum?.setValue("")
     this.Vreme?.setValue("")
     this.Tim1?.setValue("")
     this.Tim2?.setValue("")


    }
    
  
  
  }
)
}
}







  teams?:any[]
  teams1?:any[]
  teams2?:any[]
    ngOnInit(): void {
      this.admServ.getTeams().subscribe(
        (res:any)=>{this.teams=res
          this.teams1=res
          this.teams2=res
          console.log(this.teams+"ff")
        }
      )
     
    }
  
  




}
