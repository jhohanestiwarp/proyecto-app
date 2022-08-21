import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
 
 
  constructor(private router: Router ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.checkLogging(this.router.url);

  }

  

  checkLogging(url: string):boolean{
    console.log(url);  
    const datosdeusuario: String =  localStorage.getItem("isLogin")
    console.log(datosdeusuario);
    if (datosdeusuario === null) {
      return false;   
    }
    return true;

    
  }

}