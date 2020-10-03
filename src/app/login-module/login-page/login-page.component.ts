import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isLoading = true;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('ahmed.michrgui@hotmail.fr', [Validators.required, Validators.email]),
      password: new FormControl('9ar9ouch', [Validators.required])
    });
  }

}
