import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Rezultat } from 'src/app/Interfejsi/Rezultat';
import { Utakmica } from 'src/app/Interfejsi/Utakmica';
import { Utakmica2 } from 'src/app/Interfejsi/Utakmica2';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-izmeni-podatke-utakmice',
  templateUrl: './izmeni-podatke-utakmice.component.html',
  styleUrls: ['./izmeni-podatke-utakmice.component.css']
})
export class IzmeniPodatkeUtakmiceComponent implements OnInit{


constructor(private admServ:AdminService,private route:ActivatedRoute)
{
}

tim1:any
tim2:any






  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id')+"dddddfd")

     this.route.queryParamMap.subscribe(

      res=>{this.tim1=res.get("tim1")
      this.tim2=res.get("tim2")
    }
     )



  }


form=new FormGroup(
  {
redCard:new FormControl('',[Validators.required]),
yellowCard:new FormControl('',[Validators.required]),
resultTim1:new FormControl(''),
resultTim2:new FormControl('')
  }
)





get RedCard()
{
  return  this.form.get('redCard')
}


get YellowCard()
{
  return  this.form.get('yellowCard')
}


get ResultTim1()
{
  return  this.form.get('resultTim1')
}




get ResultTim2()
{
  return  this.form.get('resultTim2')
}


utakmica2?:Utakmica2


rezultat1:Rezultat={
  id: 0,
  sezona:'' ,
  brOdigranihSusreta: 0,
  brPobeda: 0,
  brNeresenih: 0,
  brIzgubljenih: 0,
  brBodova: 0,
  idTima: 0
}


rezultat2:Rezultat={
  id: 0,
  sezona:'' ,
  brOdigranihSusreta: 0,
  brPobeda: 0,
  brNeresenih: 0,
  brIzgubljenih: 0,
  brBodova: 0,
  idTima: 0
}






EditDataMatch()
{


const res=this.ResultTim1?.value!.toString()+":"+this.ResultTim2?.value!.toString()
this.utakmica2=
{
  rezultat:res,
  brCrvenihKartona:this.RedCard?.value!,
  brZutihKartona:this.YellowCard?.value!

}

console.log(this.utakmica2+"ff")

this.admServ.editMatch(+this.route.snapshot.paramMap.get('id')!,this.utakmica2).subscribe(

  (res:any)=>{
    
    
    console.log(res.datum+"dd")
    this.admServ.getTeamResult(res.idTima1,res.datum.split("-")[0]).subscribe(

      
        (res2:any)=>{
            if(res2==null)
        {
        
           this.rezultat1.idTima=res.idTima1;
           this.rezultat1.brOdigranihSusreta=1
           this.rezultat1.sezona=res.datum.split("-")[0]

     if(res.rezultat.split(":")[0]> res.rezultat.split(":")[1])
     {
      this.rezultat1.brPobeda=1
     
      this.rezultat1.brBodova=3
     }
     else if(res.rezultat.split(":")[0]<res.rezultat.split(":")[1])
      {
      
      this.rezultat1.brIzgubljenih=1
     
      }
      else if(res.rezultat.split(":")[0]==res.rezultat.split(":")[1])
      {

        this.rezultat1.brNeresenih=1
        
      }

         this.admServ.addResult(this.rezultat1).subscribe(
          res=>console.log(res)
         )
        }
        else
        {
     

this.rezultat1=res2
           
         
          this.rezultat1.brOdigranihSusreta+=1
          this.rezultat1.sezona=res.datum.split("-")[0]

    if(res.rezultat.split(":")[0]> res.rezultat.split(":")[1])
    {
     this.rezultat1.brPobeda+=1
    
     this.rezultat1.brBodova+=3
    }
    else if(res.rezultat.split(":")[0]<res.rezultat.split(":")[1])
     {
     
     this.rezultat1.brIzgubljenih+=1
    
     }
     else if(res.rezultat.split(":")[0]==res.rezultat.split(":")[1])
     {

       this.rezultat1.brNeresenih+=1
       
     }

        this.admServ.updateResult(this.rezultat1).subscribe(
         res=>console.log(res)
        )


        }



        }
    )


    this.admServ.getTeamResult(res.idTima2,res.datum.split("-")[0]).subscribe(

    (res2:any)=>{
          if(res2==null)
      {
      
         this.rezultat2.idTima=res.idTima2;
         this.rezultat2.brOdigranihSusreta=1
         this.rezultat2.sezona=res.datum.split("-")[0]

   if(res.rezultat.split(":")[0]< res.rezultat.split(":")[1])
   {
    this.rezultat2.brPobeda=1
   
    this.rezultat2.brBodova=3
   }
   else if(res.rezultat.split(":")[0]>res.rezultat.split(":")[1])
    {
    
    this.rezultat2.brIzgubljenih=1
   
    }
    else if(res.rezultat.split(":")[0]==res.rezultat.split(":")[1])
    {

      this.rezultat2.brNeresenih=1
      
    }

       this.admServ.addResult(this.rezultat2).subscribe(
        res=>console.log(res)
       )
      }
      else
      {



        this.rezultat2=res2
           
         
        this.rezultat2.brOdigranihSusreta+=1
        

  if(res.rezultat.split(":")[0]<res.rezultat.split(":")[1])
  {
   this.rezultat2.brPobeda+=1
  
   this.rezultat2.brBodova+=3
  }
  else if(res.rezultat.split(":")[0]>res.rezultat.split(":")[1])
   {
   
   this.rezultat2.brIzgubljenih+=1
  
   }
   else if(res.rezultat.split(":")[0]==res.rezultat.split(":")[1])
   {

     this.rezultat2.brNeresenih+=1
     
   }

      this.admServ.updateResult(this.rezultat2).subscribe(
       res=>console.log(res)
      )














      }
      }
  )











  }
)






}




}
