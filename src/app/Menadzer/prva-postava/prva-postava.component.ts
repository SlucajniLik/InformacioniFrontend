import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-prva-postava',
  templateUrl: './prva-postava.component.html',
  styleUrls: ['./prva-postava.component.css']
})
export class PrvaPostavaComponent {

  constructor(private menService:MenadzerService,private route:ActivatedRoute,private prijavaServ:PrijavaService)
  {
  
  
  }
  
  
    players!:any[]
    displayColumn=['ime','datumRodjenja','pozicija','id','id2']
  myTeam:any
  playersCountBench:any
  err2:any=false
    ngOnInit(): void {
  
      this.prijavaServ.getInformation().subscribe(
  
        (ress:any)=>{
    
          this.menService.getManagerTeam(ress.userId).subscribe(
            res=>{this.myTeam=res
  
              this.menService.getLineUpPlayers(true,this.myTeam.id).subscribe(
                (res:any)=>{this.players=res

                  console.table(this.players)
          
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



    
setLineUp(id:number,type?:boolean)
{

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
     this.players=this.players?.splice(index!,1)


     this.prijavaServ.getInformation().subscribe(
  
      (ress:any)=>{
  
        this.menService.getManagerTeam(ress.userId).subscribe(
          res=>{this.myTeam=res

            this.menService.getLineUpPlayers(true,this.myTeam.id).subscribe(
              (res:any)=>{this.players=res

                console.table(this.players)
        
              }
            )
       
         
         }
       
           )
      }
     )  
}

}
else
{this.err2=true}


}
else
{



  this.menService.setLineUp(id,type).subscribe(
    res=>{console.log(res)}
  )
  
  
  const index=this.players?.findIndex(t=>t.id==id)
  
  
  if(index!>-1)
  {
       this.players=this.players?.splice(index!,1)
  
  
       this.prijavaServ.getInformation().subscribe(
    
        (ress:any)=>{
    
          this.menService.getManagerTeam(ress.userId).subscribe(
            res=>{this.myTeam=res
  
              this.menService.getLineUpPlayers(true,this.myTeam.id).subscribe(
                (res:any)=>{this.players=res
  
                  console.table(this.players)
          
                }
              )
         
           
           }
         
             )
        }
       )  
  }




}



}



}
