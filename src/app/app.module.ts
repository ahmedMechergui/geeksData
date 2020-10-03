import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login-module/login.module';
import {HomeModule} from './home-module/home.module';
import {SoftwareModule} from './software-module/software.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedComponentsModule} from './shared/shared-components-module/shared-components.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedComponentsModule,
    LoginModule,
    HomeModule,
    SoftwareModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
