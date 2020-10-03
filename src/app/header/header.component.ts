import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subscribeToAuth();
  }

  subscribeToAuth(): void {
    this.authService.isLogged().subscribe((response) => {
      this.isAuthenticated = !!response;
    });
  }

  logout(): any{
    this.authService.Logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
