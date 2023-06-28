import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenadzerService } from 'src/app/menadzer.service';
import { NavijacService } from 'src/app/navijac.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-lista-timova-navijac',
  templateUrl: './lista-timova-navijac.component.html',
  styleUrls: ['./lista-timova-navijac.component.css']
})
export class ListaTimovaNavijacComponent {

  user:any

  constructor(private navServ:NavijacService,private prijavaServ:PrijavaService,private router:Router)
  {

    



  }

  teams!:any[]
  displayColumn=['logo','naziv','datum','grad','id']
status:boolean=false;
    ngOnInit(): void {

      this.prijavaServ.getInformation().subscribe(
        (res:any)=>{this.user=res
        
          this.navServ.getTeamsMember(this.user.userId).subscribe(
            (res:any)=>{this.teams=res
              console.log(this.teams+"ff")
            }
          )
        
        
        }
      )










    






    }


    ChoseTeam(id:number) {

this.navServ.editTeamsMember(this.user.userId,id).subscribe(

  res=>{

    this.teams=[]  

    this.status=true
    this.router.navigate(["pregledRezultata"],{ queryParams: { id:id } })
  }
)

      }








}
