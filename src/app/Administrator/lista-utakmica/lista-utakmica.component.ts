import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UtakmicaTim } from 'src/app/Interfejsi/UtakmicaTim';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-lista-utakmica',
  templateUrl: './lista-utakmica.component.html',
  styleUrls: ['./lista-utakmica.component.css']
})
export class ListaUtakmicaComponent implements OnInit {




utakmicaTim?:any=[]
displayColumn=['tim1','tim2','datum','vreme','brCrvenihKartona'
,'brZutihKartona','rezultat','id'
]






constructor(private admServ:AdminService,private router:Router,private route:ActivatedRoute)
{

}
  ngOnInit(): void {


    console.log(+this.route.snapshot.paramMap.get("year")!+"//")
this.admServ.getMatch(+this.route.snapshot.paramMap.get("year")!).subscribe(
  (res:any)=>{

this.utakmicaTim=res


    console.log(this.utakmicaTim+"///")


  }
)








  }







ChangeMatchData(id:number,idTim1:number,idTim2:number,tim1:string,tim2:string)
{


this.router.navigate(["/promeniPodatkeUtakmice/"+id+"/"+idTim1+"/"+idTim2],{queryParams:{tim1:tim1,tim2:tim2}})





}








}
