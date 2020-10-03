import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedComponentsModule} from '../shared/shared-components-module/shared-components.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ]
})
export class LoginModule {
}
