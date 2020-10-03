import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../shared/services/toast.service';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {AuthGuard} from "../../shared/services/auth-guard.guard";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private toaster: ToastService,
    private authService: AuthService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.toaster.info('cet identifiant est le seul dans la base de données , utiliser le pour connecter', 'Info :');
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('ahmed.michrgui@hotmail.fr', [Validators.required, Validators.email]),
      password: new FormControl('9ar9ouch', [Validators.required])
    });
    console.log(this.form);
  }

  submit(): void{
    this.isLoading = true;
    this.authService.Login(this.form.value).then(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    });
  }

}
