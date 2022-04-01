import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './discord/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},

  {path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,                  // <-- debugging purposes only
      onSameUrlNavigation: 'reload',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
