import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-druga-postava',
  templateUrl: './druga-postava.component.html',
  styleUrls: ['./druga-postava.component.css']
})
export class DrugaPostavaComponent {


  constructor(private menService:MenadzerService,private route:ActivatedRoute,private prijavaServ:PrijavaService)
  {
  
  
  }
  
  
    players!:any[]
    displayColumn=['ime','datumRodjenja','pozicija','id','id2']
  myTeam:any
  playersCountLineUp:any
  err:any=false
    ngOnInit(): void {
  
      this.prijavaServ.getInformation().subscribe(
  
        (ress:any)=>{
    
          this.menService.getManagerTeam(ress.userId).subscribe(
            res=>{this.myTeam=res
  
              this.menService.getLineUpPlayers(false,this.myTeam.id).subscribe(
                (res:any)=>{this.players=res
          
                }
              )


              this.menService.getLineUpPlayers(true,this.myTeam.id).subscribe(
                (res:any)=>{this.playersCountLineUp=res.length
  
                  console.table(this.playersCountLineUp)
          
                }
              )
         
           
           }
         
             )
        }
       )  
    }



    
setLineUp(id:number,type?:boolean)
{
if(type==true)
{
if(this.playersCountLineUp<=11)
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
  
              this.menService.getLineUpPlayers(false,this.myTeam.id).subscribe(
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
  
              this.menService.getLineUpPlayers(false,this.myTeam.id).subscribe(
                (res:any)=>{this.players=res
          
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
