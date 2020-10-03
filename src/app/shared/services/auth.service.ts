import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFAuth: AngularFireAuth) { }

  Login(credentials): any{
    return this.AFAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
    // this.AFAuth.currentUser.then(user => console.log(user));
    // this.AFAuth.signOut();
  }

}
