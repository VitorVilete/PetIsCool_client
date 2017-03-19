import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { RegisterPageComponent } from './register-page/register-page.component' ;
import { LoginPageComponent } from './login-page/login-page.component' ;
import { HomeComponent } from './home/home.component' ;

 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent }
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);