import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-lista-rezultata',
  templateUrl: './lista-rezultata.component.html',
  styleUrls: ['./lista-rezultata.component.css']
})
export class ListaRezultataComponent {




constructor(private admServ:AdminService,private router:Router)
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





  seeResults(id:number)
  {

this.router.navigate(["rezultatiTimova2/"+id])

  }






}
