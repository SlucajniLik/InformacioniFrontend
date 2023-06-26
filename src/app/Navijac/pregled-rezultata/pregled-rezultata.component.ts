import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavijacService } from 'src/app/navijac.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-pregled-rezultata',
  templateUrl: './pregled-rezultata.component.html',
  styleUrls: ['./pregled-rezultata.component.css']
})
export class PregledRezultataComponent {

  constructor(private navServ:NavijacService,private route:ActivatedRoute,private prijavaServ:PrijavaService,private router:Router)
  {
 
       
  }

  user:any
  teamId?:number
  results?:any[]
  
    ngOnInit(): void {


      this.prijavaServ.getInformation().subscribe(
        res=>{this.user=res
        
        
this.navServ.getTeamsMemberInformation(this.user.userId).subscribe(

  (res:any)=>{

 
    this.teamId=res.idTima
    
          this.navServ.getResultsForMember(res.idTima).subscribe(
            (ress:any)=>{this.results=ress
              console.log(this.results+"ff")
            }
          )
    

  }
)        
        }

      )






    
  
    }
  

    viewSeason(id:number,sezona:string)
    {
       this.router.navigate(["odigraneUtakmice"],{queryParams:{id:id,sezona:sezona}})
    }





}
