import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { AppService } from "./../../app.service";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public userName: String = Cookie.get('userName');
  public authToken: String;
  public allIssue: any;
  public field: String = 'title';
  public type: Number = 1;
  public searchBox: String;
  public firstChar: String;
  public name: String[];
  public allNotifications: any;
  public notificationLength: Number = 0;

  constructor(private toastr: ToastrService, public appService: AppService, public router: Router, public _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = Cookie.get('userName').split(' ');
    this.firstChar = this.name[0].charAt(0) + this.name[1].charAt(0);
    this.authToken = Cookie.get('authtoken');
    this.GetAllIssue(this.field, this.type);
    this.getAllNotifications();
  }

  public getAllNotifications(): any {
    this.appService.getNotifications().subscribe(
      data => {
        this.allNotifications = data["data"];
        if (this.allNotifications) {
          this.notificationLength = this.allNotifications.length;
        }
      },
      error => {
        this.toastr.error(error.error.message)
      });

  }// end of getAllNotifications

  //clearing notification on select
  public clearNotification(trackingId: String, email: String): any {
    this.appService.deleteNotifications(trackingId, email).subscribe();
    this.getAllNotifications();
  }

  // clearing all the notifications
  public clearAll(): any {
    this.appService.deleteNotifications(null, Cookie.get('email')).subscribe();
    this.getAllNotifications();
  }

  public GetAllIssue(field: String, type: Number): any {
    this.appService.getSortedIssue(field, type).subscribe(
      data => {
        this.allIssue = data["data"];
        this.srch = true;
        return this.allIssue;
      },
      error => {
        this.toastr.error(error.error.message)
      });

  }// end of GetAllIssue

  public srch = true;

  public searchIssue(): any {
    if (this.searchBox == null || this.searchBox == undefined || this.searchBox == '') {
      this.GetAllIssue(this.field, this.type);
      return this.searchBox;
    }
    this.appService.getSearchIssues(this.searchBox).subscribe(
      data => {
        this.allIssue = data["data"];
        this.srch = false;
        return this.allIssue;
      },
      error => {
        this.toastr.error(error.error.message)
      });

  }// end of searchIssue

  public sortedData(field: String): any {
    if (this.type == 1) {
      this.type = -1;
    } else {
      this.type = 1;
    }
    this.GetAllIssue(field, this.type);
  } // end of sortedData

  public logout: any = () => {
    this.appService.logout()
      .subscribe((apiResponse) => {
        if (apiResponse.status === 200) {
          Cookie.delete('authtoken');
          Cookie.delete('userName');
          Cookie.delete('email');
          this.toastr.success(apiResponse.message)
          this.router.navigate(['/login']);
        } else {
          this.toastr.error(apiResponse.message)
        } // end condition
      }, (err) => {
        this.toastr.error(err.error.message)
      });
  } // end logout

}