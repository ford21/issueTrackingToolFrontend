import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserModule } from './user/user.module';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { IssueModule } from './issue/issue.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    IssueModule,
    UserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent, pathMatch:'full'},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '*', component:LoginComponent},
      {path: '**', component:LoginComponent},
      {path: 'sign-up', component:SignupComponent, pathMatch: 'full'}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
