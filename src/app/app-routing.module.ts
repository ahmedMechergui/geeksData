import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/services/auth-guard.guard';
import {NotAuthGuard} from './shared/services/not-auth.guard';

const routes: Routes = [
  {path: 'login', loadChildren: './login-module/login.module#LoginModule', canActivate: [NotAuthGuard]},
  {path: '', loadChildren: './home-module/home.module#HomeModule' , pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'logiciel', loadChildren: './software-module/software.module#SoftwareModule', canActivate: [AuthGuard]},
  // {path: 'news', loadChildren: './modules/events/events.module#EventsModule' , canActivate : [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
