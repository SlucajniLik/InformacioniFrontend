import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavijacService } from 'src/app/navijac.service';
import { PrijavaService } from 'src/app/prijava.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-pregled-rezultata',
  templateUrl: './pregled-rezultata.component.html',
  styleUrls: ['./pregled-rezultata.component.css']
})
export class PregledRezultataComponent {

  constructor(private navServ:NavijacService,private route:ActivatedRoute,private prijavaServ:PrijavaService,private router:Router)
  {
 
       
  }
  paymentMember:any={
    ime:'',
    prezime:'',
    datumPlacanja:'',
    suma:''
  }
  datee?:any
  datee2?:any
  user:any={
    ime:'',
    prezime:'',
    datumPlacanja:'',
    suma:'',
    imeTima:'',
    logo:''
  
  }
 










  datePipe = new DatePipe('en-US');
  teamId?:number
  results?:any[]
resultsLength?:number;
  addMonths(date:any,months:any) {
    date.setMonth(date.getMonth() + months);
  
    return date;
  }
  
    ngOnInit(): void {

        
      this.prijavaServ.getInformation().subscribe(
        res=>{this.user=res
        
        
this.navServ.getTeamsMemberInformation(this.user.userId).subscribe(

  (res:any)=>{

    this.teamId=res.idTima


    this.navServ.getMemberData(this.teamId!).subscribe(
      (res:any)=>{
        this.datee=new Date(res.datumPlacanja)
        this.datee2=this.addMonths(this.datee,(+res.suma/500)),'yyyy-MM-dd'
        this.datee2=this.datePipe.transform(this.datee2,'yyyy-MM-dd')

    const currentDate=new Date()
    const currentDateFormed=this.datePipe.transform(currentDate,'yyyy-MM-dd')
    console.log(currentDateFormed);
      if(currentDateFormed!<=this.datee2)
      {
        //this.paymentMember=res

        this.navServ.getResultsForMember(this.teamId!).subscribe(
          (ress:any)=>{this.results=ress
            this.resultsLength=this.results?.length
            console.log(this.results!.length+"666ff")
          }
        )
        
      }
      else{
        this.results=[]
        this.resultsLength=this.results.length
        console.log(this.resultsLength+"766ff")
      }
      
      }
    )







 





    //this.teamId=res.idTima
    
          
    






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
