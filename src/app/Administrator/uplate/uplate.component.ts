import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-uplate',
  templateUrl: './uplate.component.html',
  styleUrls: ['./uplate.component.css']
})
export class UplateComponent implements OnInit {

constructor(private admServ:AdminService,private route:ActivatedRoute)
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

addMonths(date:any,months:any) {
  date.setMonth(date.getMonth() + months);

  return date;
}

 datePipe = new DatePipe('en-US');
  ngOnInit(): void {
        this.admServ.getPayment(+this.route.snapshot.paramMap.get("id")!).subscribe(
          (res:any)=>{this.paymentMember=res
            this.datee=new Date(res.datumPlacanja)
            this.datee2=this.addMonths(this.datee,(+res.suma/500)),'yyyy-MM-dd'
            this.datee2=this.datePipe.transform(this.datee2,'yyyy-MM-dd')
          console.log(this.datee2)
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



MemberPay()
{


this.payment={

datumPlacanja:moment(this.Datum?.value!).format("YYYY-MM-DD"),
suma:this.Suma?.value!,
idNavijaca:+this.route.snapshot.paramMap.get("id")!
}
this.admServ.addPayment(this.payment).subscribe(
  res=>{console.log(res)
  
    this.admServ.getPayment(+this.route.snapshot.paramMap.get("id")!).subscribe(
      (res:any)=>{this.paymentMember=res
        this.datee=new Date(res.datumPlacanja)
        this.datee2=this.addMonths(this.datee,(+res.suma/500)),'yyyy-MM-dd'
        this.datee2=this.datePipe.transform(this.datee2,'yyyy-MM-dd')
      console.log(this.datee2)
      }
    )
  
  }
)



}
















}
