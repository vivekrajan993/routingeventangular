import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from './service';


@Injectable({
  providedIn: 'root'
})
export class MyNewGuardGuard implements CanActivate {
  constructor(private router:Router) {};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
      // if (this.service.isLoggedIn()) {
      //   return true;
      //  } else {
      //   window.alert("You don't have permission to view this page")
      //   this.router.navigate(['home']);
      //   return false;
      //  }
      }
     
  
}
