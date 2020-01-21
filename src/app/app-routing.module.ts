import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component: LoginComponent },
  {path:"about", component: AboutComponent },
  {path:"contact", component: ContactComponent },
  {path:"home", component: HomeComponent },
  {path:"navbar", component: NavbarComponent },
  {path:"register", component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
