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


  players?:any[]
myTeam:any
  ngOnInit(): void {

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


setLineUp(id:number,type?:boolean)
{

this.menService.setLineUp(id,type).subscribe(
  res=>{console.log(res)}
)


const index=this.players?.findIndex(t=>t.id==id)


if(index!>-1)
{
     this.players?.splice(index!,1)
}
}





firstLineUp()
{

this.router.navigate(["prvaPostava"])

}




secondLineUp()
{

this.router.navigate(["drugaPostava"])

}


}
