import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFAuth: AngularFireAuth) { }

  Login(credentials): any{
    return this.AFAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  Logout(): any{
    this.AFAuth.signOut();
  }

  isLogged(): any{
    return this.AFAuth.authState;
  }

}
