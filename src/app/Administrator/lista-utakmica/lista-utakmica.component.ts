import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-lista-utakmica',
  templateUrl: './lista-utakmica.component.html',
  styleUrls: ['./lista-utakmica.component.css']
})
export class ListaUtakmicaComponent implements OnInit {

constructor(private admServ:AdminService)
{

}
  ngOnInit(): void {
   
this.admServ.getMatch().subscribe(
  res=>console.log(res)
)








  }
















}
