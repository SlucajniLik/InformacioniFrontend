import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Tim } from 'src/app/Interfejsi/Tim';
import { AdminService } from 'src/app/admin.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-dodaj-timove',
  templateUrl: './dodaj-timove.component.html',
  styleUrls: ['./dodaj-timove.component.css']
})
export class DodajTimoveComponent implements OnInit {



  team:Tim={

    id:0,
    naziv:'',
    datumOsnivanja:'',
    grad:'',
    logo:'',
    idMenadzera:0






}
form=new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3)]),
dateOfEstablishment:new FormControl('',[Validators.required]),
city:new FormControl('',[Validators.required,Validators.minLength(3)]),
logo:new FormControl('',[Validators.required]),
idMenadzera:new FormControl('',[Validators.required]),
val:new FormControl('Izaberite fajl',[])




})




constructor(private admService:AdminService,private prijavaServ:PrijavaService)
{

/*this.prijavaServ.getInformation().subscribe(
  (res:any)=>{console.log(res.userId+"ccc")}
)*/

}

managers:any
  ngOnInit(): void {
    this.prijavaServ.getInformation().subscribe(
      (res:any)=>{console.log(res.userId+"ccc")}
    )

    this.admService.getManagers().subscribe(
      res=>{this.managers=res
      
      console.log(res)
      
      }
    )
    


  }
selectedFile:any

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  //this.uploadImage(file);
this.selectedFile=file
  console.log(file+"ddddd")
this.Val?.setValue(event.target.files[0].name!)
if(this.Val?.value=="Izaberite fajl")
{
  this.checkImg=true
}
else
{
  this.checkImg=false
}
console.log(this.Val?.value+"tttttt")
  console.log(event.target.files[0].name+"dddddeeeee")
}


imageUrl:any
async uploadImage() {
  
  this.admService.uploadImage(this.selectedFile).subscribe(
    response => {
      console.log(response);


        this.imageUrl = response;
      // Process the response as per your requirement

    },
    error => {
      console.error(error);
      // Handle the error as per your requirement
    }
  );
}


alredyExist:boolean=false;
success:boolean=false

checkImg:boolean=false




change()
{
  this.alredyExist=false
  this.success=false
}
 addTeams()
{
  if(this.form.status.toString()=="VALID")
  {
  this.admService.uploadImage(this.selectedFile).subscribe(
    response => {
      console.log(response);
 if(response==null)
 {
this.alredyExist=true

 }     
else
{


        this.imageUrl = response;
      // Process the response as per your requirement





      this.team={
         id:0,
        naziv:this.Name?.value!,
        datumOsnivanja:moment(this.DateOfEstablishment?.value!).format("YYYY-MM-DD"),
        grad:this.City?.value!,
        logo:this.imageUrl!,
        idMenadzera:+this.IdMenadzera?.value!




      }




      
      this.admService.addTeams(this.team).subscribe(
        res=>{console.log(res)
        
        this.success=true
        this.Name?.setValue("")
         this.City?.setValue("")
         this.Logo?.setValue("")
         this.DateOfEstablishment?.setValue("")
         this.IdMenadzera?.setValue("")
        },
        error=>{console.log(error)}
      )
      
      }

    },
    error => {
      console.error(error);
      // Handle the error as per your requirement
    }
  );

  }

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



get Val()
{
  return this.form.get('val')
}



get IdMenadzera()
{
  return this.form.get('idMenadzera')
}

}
