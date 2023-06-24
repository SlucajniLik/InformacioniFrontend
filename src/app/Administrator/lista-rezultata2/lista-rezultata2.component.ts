import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-lista-rezultata2',
  templateUrl: './lista-rezultata2.component.html',
  styleUrls: ['./lista-rezultata2.component.css']
})
export class ListaRezultata2Component {


  constructor(private admServ:AdminService,private route:ActivatedRoute)
  {
  }
  
  results?:any[]
  
    ngOnInit(): void {
      this.admServ.getResults(+this.route.snapshot.paramMap.get("id")!).subscribe(
        (res:any)=>{this.results=res
          console.log(this.results+"ff")
        }
      )
  
    }
  










}
