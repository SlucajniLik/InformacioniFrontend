import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-pregled-utakmica',
  templateUrl: './pregled-utakmica.component.html',
  styleUrls: ['./pregled-utakmica.component.css']
})
export class PregledUtakmicaComponent {

  

utakmicaTim?:any=[]


Matches(ut:number)
{


this.router.navigate(["pregledRasporedDva/"+ut])




}


constructor(private admServ:AdminService,private router:Router)
{

}

logo:any
  ngOnInit(): void {
    this.logo="https://i.ibb.co/Fgg3bxP/English-Football-League-Logo.png"
this.admServ.getMatchesDates().subscribe(
  (res:any)=>{

this.utakmicaTim=res;


    console.log(this.utakmicaTim)


  }
)
  }
}
