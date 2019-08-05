import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './../issue/create/create.component';
import { EditComponent } from './../issue/edit/edit.component';
import { ViewComponent } from './../issue/view/view.component';
import { HomeRouteGuardService } from './../home/home-route-guard.service';
import { RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    EditComponent
],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RichTextEditorAllModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
        {path: 'create', component: CreateComponent, canActivate: [HomeRouteGuardService]},
        {path: 'edit/:trackingId', component: EditComponent, canActivate: [HomeRouteGuardService]},
        {path: 'view/:trackingId', component: ViewComponent, canActivate: [HomeRouteGuardService]}
    ])
  ],
  providers:[AppService,HomeRouteGuardService]
  //bootstrap: [AppComponent]
})
export class IssueModule { }
