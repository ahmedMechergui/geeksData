import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscribeToAuth();
  }

  subscribeToAuth(): void {
    this.authService.isLogged().subscribe((response) => {
      this.isAuthenticated = !!response;
    });
  }

}
