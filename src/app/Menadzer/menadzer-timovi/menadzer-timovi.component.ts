import { Component } from '@angular/core';
import { MenadzerService } from 'src/app/menadzer.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-mendzer-timovi',
  templateUrl: './menadzer-timovi.component.html',
  styleUrls: ['./menadzer-timovi.component.css']
})
export class MenadzerTimoviComponent {



  user:any

  constructor(private menServ:MenadzerService,private prijavaServ:PrijavaService)
  {


  }

  teams?:any[]

    ngOnInit(): void {

      this.prijavaServ.getInformation().subscribe(
        (res:any)=>{this.user=res

          this.menServ.getManagerTeams(this.user.userId).subscribe(
            (res:any)=>{this.teams=res
              console.log(this.teams+"ff")
            }
          )


        console.log(this.user.userId+"ovde menadzzzzzer")
        }

      )














    }










}
