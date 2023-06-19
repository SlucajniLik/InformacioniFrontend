import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-lista-timova',
  templateUrl: './lista-timova.component.html',
  styleUrls: ['./lista-timova.component.css']
})
export class ListaTimovaComponent {


user:any

  constructor(private menServ:MenadzerService,private prijavaServ:PrijavaService)
  {

    this.prijavaServ.getInformation().subscribe(
      (res:any)=>{this.user=res}
    )



  }

  teams?:any[]

    ngOnInit(): void {
      this.menServ.getTeams().subscribe(
        (res:any)=>{this.teams=res
          console.log(this.teams+"ff")
        }
      )






    }


    ChoseTeam(id:number) {

console.log(this.user.userId+"fgfdfdfdfdf8");

console.log("tim"+id)
     this.menServ.ChoseTeam(id,this.user.userId).subscribe(
      res=>{console.log(res)}
     )

      }


}
