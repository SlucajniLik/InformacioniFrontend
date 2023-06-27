import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
name:new FormControl('',[Validators.required]),
dateOfEstablishment:new FormControl('',[Validators.required]),
city:new FormControl('',[Validators.required]),
logo:new FormControl('',[Validators.minLength(3)]),
idMenadzera:new FormControl('',[])





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

  console.log(event.target.files[0]+"dddddeeeee")
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



async addTeams()
{

  this.admService.uploadImage(this.selectedFile).subscribe(
    response => {
      console.log(response);


        this.imageUrl = response;
      // Process the response as per your requirement





      this.team={
         id:0,
        naziv:this.Name?.value!,
        datumOsnivanja:this.DateOfEstablishment?.value!,
        grad:this.City?.value!,
        logo:this.imageUrl!,
        idMenadzera:+this.IdMenadzera?.value!




      }




      this.admService.addTeams(this.team).subscribe(
        res=>{console.log(res)},
        error=>{console.log(error)}
      )



    },
    error => {
      console.error(error);
      // Handle the error as per your requirement
    }
  );















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




get IdMenadzera()
{
  return this.form.get('idMenadzera')
}

}
