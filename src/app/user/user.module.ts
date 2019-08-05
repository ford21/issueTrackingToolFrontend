import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Route} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';
import { HomeRouteGuardService } from '../home/home-route-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UserDetailsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path: 'sign-up', component: SignupComponent, pathMatch: 'full'},
      {path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'},
      {path: 'user-detail', component: UserDetailsComponent, canActivate: [HomeRouteGuardService], pathMatch: 'full'},
      {path: 'user-profile', component: UserProfileComponent, canActivate: [HomeRouteGuardService], pathMatch: 'full'}
    ])
  ],
  providers:[AppService, HomeRouteGuardService],
  bootstrap: [AppComponent]
})
export class UserModule { }
