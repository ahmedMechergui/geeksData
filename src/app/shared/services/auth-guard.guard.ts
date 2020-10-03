import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private AFAuth: AngularFireAuth,
    private router: Router
    ) {}
  canActivate(): any {
    return this.AFAuth.currentUser.then(user => {
      if (!user) {
        this.router.createUrlTree(['/login']);
        return false;
      }
      return true;
    });
  }

}
