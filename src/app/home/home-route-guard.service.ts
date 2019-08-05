import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class HomeRouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (Cookie.get('authtoken') == undefined || Cookie.get('authtoken') == '' || Cookie.get('authtoken') == null) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

}
