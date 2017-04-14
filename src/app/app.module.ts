import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { TRANSLATION_PROVIDERS } from './translate/translation';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { DataService } from './services/data.service';
import { SessionService } from './services/session.service';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EqualFieldDirective } from './directives/equal-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    AlertComponent,
    DashboardComponent,
    EqualFieldDirective,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, SessionService, TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
