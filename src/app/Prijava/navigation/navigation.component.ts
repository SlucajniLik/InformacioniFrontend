import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

constructor(private route:Router)
{}
logOut()
{

localStorage.removeItem("token")

this.route.navigate([""])

}




}
