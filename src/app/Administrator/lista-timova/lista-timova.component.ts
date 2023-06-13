import { Component, OnInit } from '@angular/core';
import { Tim } from 'src/app/Interfejsi/Tim';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-lista-timova',
  templateUrl: './lista-timova.component.html',
  styleUrls: ['./lista-timova.component.css']
})
export class ListaTimovaComponent implements OnInit {

constructor(private admServ:AdminService)
{
}

teams?:any[]

  ngOnInit(): void {
    this.admServ.getTeams().subscribe(
      (res:any)=>{this.teams=res
        console.log(this.teams+"ff")
      }
    )
   
  }





}
