import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-navijaci-uplate',
  templateUrl: './navijaci-uplate.component.html',
  styleUrls: ['./navijaci-uplate.component.css']
})
export class NavijaciUplateComponent {


  constructor(private admServ:AdminService,private router:Router)
  {

  }

members?:any[]


  ngOnInit(): void {
   this.admServ.getMemebersForPay().subscribe(
    (res:any)=>{this.members=res}
   )
  }




PayMember(id:number)
{

  this.router.navigate(["uplate/"+id])

}









}
