import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { NavijacService } from 'src/app/navijac.service';
import { PrijavaService } from 'src/app/prijava.service';

@Component({
  selector: 'app-podaci',
  templateUrl: './podaci.component.html',
  styleUrls: ['./podaci.component.css']
})
export class PodaciComponent {




  
constructor(private route:ActivatedRoute,private prijavaServ:PrijavaService
  ,private navServ:NavijacService
  )
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
teamId:any
addMonths(date:any,months:any) {
  date.setMonth(date.getMonth() + months);

  return date;
}

 datePipe = new DatePipe('en-US');
  ngOnInit(): void {

    this.prijavaServ.getInformation().subscribe(
      res=>{this.user=res
      
      
this.navServ.getTeamsMemberInformation(this.user.userId).subscribe(

(res:any)=>{


  this.teamId=res.idTima





        this.navServ.getMemberData(this.teamId).subscribe(
          (res:any)=>{
            this.datee=new Date(res.datumPlacanja)
            this.datee2=this.addMonths(this.datee,(+res.suma/500)),'yyyy-MM-dd'
            this.datee2=this.datePipe.transform(this.datee2,'yyyy-MM-dd')

        const currentDate=new Date()
        const currentDateFormed=this.datePipe.transform(currentDate,'yyyy-MM-dd')
        console.log(currentDateFormed);
          if(currentDateFormed!>this.datee2)
          {
            this.paymentMember=res
            
          }
          else{
            this.paymentMember=null
          }
          console.log(this.datee2)
          }
        )


        
  }
  )          
          }
        )
  
  
  }
form=new FormGroup(
  {
   datum:new FormControl('',[]),
   suma:new FormControl('',[]),
 
  }
)


get Datum()
{
  return this.form.get("datum")
}



get Suma()
{
  return this.form.get("suma")
}





payment:any;




}
