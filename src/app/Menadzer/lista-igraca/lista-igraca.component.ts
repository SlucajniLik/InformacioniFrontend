import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-lista-igraca',
  templateUrl: './lista-igraca.component.html',
  styleUrls: ['./lista-igraca.component.css']
})
export class ListaIgracaComponent {

constructor(private router:Router,  private menService:MenadzerService,private route:ActivatedRoute,private prijavaServ:PrijavaService)
{


}


  players!:any[]
  displayColumn=['ime','datumRodjenja','pozicija','id','id2']
myTeam:any
playersCountLineUp:any
playersCountBench:any
  ngOnInit(): void {

    this.prijavaServ.getInformation().subscribe(

      (ress:any)=>{
  
        this.menService.getManagerTeam(ress.userId).subscribe(
          res=>{this.myTeam=res

            this.menService.getPlayers(this.myTeam.id).subscribe(
              (res:any)=>{this.players=res
        
              }
            )
            this.menService.getLineUpPlayers(true,this.myTeam.id).subscribe(
              (res:any)=>{this.playersCountLineUp=res.length

                console.table(this.playersCountLineUp)
        
              }
            )

            this.menService.getLineUpPlayers(false,this.myTeam.id).subscribe(
              (res:any)=>{this.playersCountBench=res.length
        
              }
            )






         
         }
       
           )
      }
     )  
  }

err:any=false
err2:any=false
setLineUp(id:number,type?:boolean)
{

if(type==true){
  if(this.playersCountLineUp<=11)
  {

this.menService.setLineUp(id,type).subscribe(
  res=>{console.log(res)}
)


const index=this.players?.findIndex(t=>t.id==id)


if(index!>-1)
{
     
     this.players?.splice(index!,1)


     this.prijavaServ.getInformation().subscribe(

      (ress:any)=>{
  
        this.menService.getManagerTeam(ress.userId).subscribe(
          res=>{this.myTeam=res

            this.menService.getPlayers(this.myTeam.id).subscribe(
              (res:any)=>{this.players=res
        
              }
            )
       
         
         }
       
           )
      }
     )  

    
}
}
else
{
  this.err=true
}
}

if(type==false)
{
    if(this.playersCountBench<=5)
    {
  
  this.menService.setLineUp(id,type).subscribe(
    res=>{console.log(res)}
  )
  
  
  const index=this.players?.findIndex(t=>t.id==id)
  
  
  if(index!>-1)
  {
       
       this.players?.splice(index!,1)
  
  
       this.prijavaServ.getInformation().subscribe(
  
        (ress:any)=>{
    
          this.menService.getManagerTeam(ress.userId).subscribe(
            res=>{this.myTeam=res
  
              this.menService.getPlayers(this.myTeam.id).subscribe(
                (res:any)=>{this.players=res
          
                }
              )
         
           
           }
         
             )
        }
       )  
  
      
  }
  }
  else
  {
    this.err2=true
  }
  
  




}


}







}
