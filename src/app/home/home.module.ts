import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { MatListModule, MatSortModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HomeRouteGuardService } from './home-route-guard.service';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path: 'home', component: HomeComponent, canActivate: [HomeRouteGuardService]}
    ])
  ],
  providers:[AppService, HomeRouteGuardService],
  bootstrap: [AppComponent]
})
export class HomeModule { }
