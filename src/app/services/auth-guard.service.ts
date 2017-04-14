import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from "app/services/session.service";

@Injectable()
export class AuthGuardService implements CanActivate {
   
  constructor(private sessionService:SessionService, private router:Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url:string = state.url;
      if(this.sessionService.get()) return true;
      
      this.router.navigate(['login']);
      return false;
    }
}
