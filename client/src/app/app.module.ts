import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LanguageTranslationModule } from './shared/language-translation/language-translation.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './shared/services/user.service';

import { AuthGuard } from './shared/authGuard/auth.guard';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfraConfig } from './shared/models/infra-config';
import { AuthInterceptor } from './shared/authGuard/auth.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    LanguageTranslationModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
    BrowserModule,
    BrowserAnimationsModule
  ],

  providers: [UserService, AuthGuard,InfraConfig,
  {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
