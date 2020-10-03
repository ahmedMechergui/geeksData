import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: './login-module/login.module#LoginModule'},
  {path: '', loadChildren: './home-module/home.module#HomeModule' , pathMatch : 'full'},
  {path: 'logiciel', loadChildren: './software-module/software.module#SoftwareModule'},
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
