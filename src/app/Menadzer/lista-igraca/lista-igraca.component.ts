import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenadzerService } from 'src/app/menadzer.service';

@Component({
  selector: 'app-lista-igraca',
  templateUrl: './lista-igraca.component.html',
  styleUrls: ['./lista-igraca.component.css']
})
export class ListaIgracaComponent {

constructor(private menService:MenadzerService,private route:ActivatedRoute)
{


}


  players?:any[]

  ngOnInit(): void {
    this.menService.getPlayers(+this.route.snapshot.paramMap.get("id")!).subscribe(
      (res:any)=>{this.players=res

      }
    )

  }









}
