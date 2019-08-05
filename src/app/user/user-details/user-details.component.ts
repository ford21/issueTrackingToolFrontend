import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public allUsers: any;
  public allwatchers: any;
  public allassignee: any;
  public issueWatcher: any;
  public issueCreated: any;
  public issueAssigned: any;
  email: String;
  public created: Number = 0;
  public watched: Number = 0;
  public assigned: Number = 0;
  public name: String = '';

  constructor(private toastr: ToastrService, public appService: AppService, public router: Router, public _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getALlUsers();
    this.getAllWatchers();
    this.getAllAssignee();
  }

  // for getting details of user issues
  public getdetails(email: String, firstname: String, lastname: String): any {
    let issueIDArray = [];
    let issuewatcherArray = [];
    let issueCreatedArray = [];
    let issueAssignedArray = [];
    if (this.allwatchers) {
      let count = 0;
      for (let i of this.allwatchers) {
        if (i.email == email) {
          issueIDArray.push(i.trackingId);
          count++;
        }
      }
      this.watched = count;
    }
    if (this.allassignee) {
      let count1 = 0;
      let count2 = 0;
      for (let i of this.allassignee) {
        if (i.email == email) {
          count1++;
          issueCreatedArray.push(i.title)
        } if (i.assigned == email) {
          count2++;
          issueAssignedArray.push(i.title)
        }
        for (let t of issueIDArray) {
          if (i.trackingId == t) {
            issuewatcherArray.push(i.title)
          }
        }

      }
      this.assigned = count2;
      this.created = count1;
    }
    this.name = firstname + ' ' + lastname;
    this.issueWatcher = issuewatcherArray;
    this.issueAssigned = issueAssignedArray;
    this.issueCreated = issueCreatedArray
  }// end of getdetails

  getALlUsers(): any {
    this.appService.getAllUsers().subscribe(
      data => {
        this.allUsers = data["data"];
      },
      error => {
        //console.log("some error occured");
        // console.log(error.error.message)
      }
    )

  }// edn of getALlUsers

  getAllWatchers(): any {
    this.appService.getAllWatchers().subscribe(
      data => {
        this.allwatchers = data["data"];
      },
      error => {
        //console.log("some error occured");
        // console.log(error.error.message)
      }
    )

  }// end of getAllWatchers

  getAllAssignee(): any {
    this.appService.getAllIssue('', '').subscribe(
      data => {
        this.allassignee = data["data"];
      },
      error => {
        //console.log("some error occured");
        // console.log(error.error.message)
      }
    )

  }// end of getAllAssignee

  //For opening and closing of the side navigation

  public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
