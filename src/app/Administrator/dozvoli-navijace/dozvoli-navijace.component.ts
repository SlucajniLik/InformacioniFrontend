import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dozvoli-navijace',
  templateUrl: './dozvoli-navijace.component.html',
  styleUrls: ['./dozvoli-navijace.component.css']
})
export class DozvoliNavijaceComponent implements OnInit {
  
  constructor(private admServ:AdminService)
  {

  }

members!:any[]
displayColumn=['ime','prezime','id','id2']

  ngOnInit(): void {
   this.admServ.getMemebers().subscribe(
    (res:any)=>{this.members=res}
   )
  }


allowMember(id:number,status:boolean)
{
this.admServ.editMemebers(id,status).subscribe(
  res=>{

    const index=this.members?.findIndex(t=>t.id==id)

    if(index!>-1)
    {
      this.members?.splice(index!,1)
      this.admServ.getMemebers().subscribe(
        (res:any)=>{this.members=res}
       )
    }
  }
)

}

rejectMember(id:number,status:boolean)
{
  this.admServ.editMemebers(id,status).subscribe(
    res=>{
  
      const index=this.members?.findIndex(t=>t.id==id)
  
      if(index!>-1)
      {
        this.members?.splice(index!,1)
        this.admServ.getMemebers().subscribe(
          (res:any)=>{this.members=res}
         )
      }
    }
  )
}






}
