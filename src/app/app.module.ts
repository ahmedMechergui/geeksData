import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {SoftwareModule} from './software/software.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    SoftwareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
