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
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
