import { Component } from '@angular/core';
import { MenadzerService } from 'src/app/menadzer.service';

@Component({
  selector: 'app-lista-igraca',
  templateUrl: './lista-igraca.component.html',
  styleUrls: ['./lista-igraca.component.css']
})
export class ListaIgracaComponent {

constructor(private menService:MenadzerService)
{


}


  players?:any[]

  ngOnInit(): void {
    this.menService.getPlayers().subscribe(
      (res:any)=>{this.players=res
       
      }
    )
   
  }









}
