import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFaundPageComponent } from './componentes/not-faund-page/not-faund-page.component';
import { AuthGuard } from './guards/auth.guard';  
import { from } from 'rxjs';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'privado',component:PrivadoComponent, canActivate:[AuthGuard]},
  {path:'**',component:NotFaundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
