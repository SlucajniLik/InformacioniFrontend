import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  form=new FormGroup(
    {
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  
    }
  )
  
  
  

  get Username()
  {
    return  this.form.get('username')
  }
  
  
  get Password()
  {
    return  this.form.get('password')
  }
  



}
