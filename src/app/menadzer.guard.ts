import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})


export class MenadzerGuard implements CanActivate {
  decodededToken:any
  role:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(localStorage.getItem("token"))
      {
        this.decodededToken=jwt_decode(localStorage.getItem("token")!)
      
      this.role=this.decodededToken["role"]
     
      
      
      
      if(this.role=="menadzer")
      {
        return true
      }
      }
    
      
      return false
  }
  
}
