import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule', pathMatch: 'full'},
  {path: '', loadChildren: './home/home.module.ts#HomeModule'},
  {path: 'software', loadChildren: './software/software.module#SoftwareModule'},
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
