import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { AuthGuardService } from "app/services/auth-guard.service";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[AuthGuardService]
})

export class AppRoutingModule{

}