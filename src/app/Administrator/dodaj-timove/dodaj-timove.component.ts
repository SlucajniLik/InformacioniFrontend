import { Component } from '@angular/core';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-dodaj-timove',
  templateUrl: './dodaj-timove.component.html',
  styleUrls: ['./dodaj-timove.component.css']
})
export class DodajTimoveComponent {

  userId?:any
constructor(private prijvaServ:PrijavaService)
{


this.prijvaServ.getInformation().subscribe(

x=>{
this.userId=x
}
)


}





}
