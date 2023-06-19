import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Utakmica2 } from 'src/app/Interfejsi/Utakmica2';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-izmeni-podatke-utakmice',
  templateUrl: './izmeni-podatke-utakmice.component.html',
  styleUrls: ['./izmeni-podatke-utakmice.component.css']
})
export class IzmeniPodatkeUtakmiceComponent implements OnInit{


constructor(private admServ:AdminService,private route:ActivatedRoute)
{
}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id')+"dddddfd")
  }



form=new FormGroup(
  {
redCard:new FormControl('',[Validators.required]),
yellowCard:new FormControl('',[Validators.required]),
result:new FormControl('')

  }
)





get RedCard()
{
  return  this.form.get('redCard')
}


get YellowCard()
{
  return  this.form.get('yellowCard')
}


get Result()
{
  return  this.form.get('result')
}



utakmica2?:Utakmica2


EditDataMatch()
{

console.log(this.Result?.value! +"ffffff")

this.utakmica2=
{
  rezultat:this.Result?.value!,
  brCrvenihKartona:this.RedCard?.value!,
  brZutihKartona:this.YellowCard?.value!

}

console.log(this.route.snapshot.paramMap.get('id')+"dddddfd")

this.admServ.editMatch(+this.route.snapshot.paramMap.get('id')!,this.utakmica2).subscribe(

  res=>{console.log(res)}
)






}




}
