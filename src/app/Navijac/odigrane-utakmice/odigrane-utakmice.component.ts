import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { NavijacService } from 'src/app/navijac.service';

@Component({
  selector: 'app-odigrane-utakmice',
  templateUrl: './odigrane-utakmice.component.html',
  styleUrls: ['./odigrane-utakmice.component.css']
})
export class OdigraneUtakmiceComponent {

  utakmicaTim!:any[]

  displayColumn=['tim1','tim2'
,'datum','vreme','brCrvenihKartona',
'brZutihKartona','rezultat'
]







  constructor(private navServ:NavijacService,private route:ActivatedRoute)
  {
  
  }

  teamId:any
  season:any
    ngOnInit(): void {
  
    this.route.queryParamMap.subscribe(
      res=>{ this.teamId=res.get("id")
             this.season=res.get("sezona")
         }
    )





  this.navServ.getMatchesForMember(this.teamId,this.season).subscribe(
    (res:any)=>{
  
  this.utakmicaTim=res
  
  
  
  
      console.log(this.utakmicaTim)
  
  
    }
  )
    }

  
}
