import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [Location]
})
export class EditComponent implements OnInit {

  public currentIssue: any;
  public assignee: any;
  public title: String;
  public previousAssignee: String;
  public states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];

  constructor(private _route: ActivatedRoute, private router: Router, private appService: AppService, private toastr: ToastrService, private location: Location) {
  }

  ngOnInit() {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.getSingleIssue(trackingId).subscribe(
      data => {
        this.currentIssue = data["data"];
        this.title = this.currentIssue.title;
        this.previousAssignee = this.currentIssue.assigned
      },
      error => {
        // console.log(error.error.message)
      }
    )
    this.getAll();
  }

  editIssue(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.editIssue(this.currentIssue.trackingId, this.currentIssue)
      .subscribe(
        data => {
          if (this.currentIssue.assigned != Cookie.get('email') && this.previousAssignee != this.currentIssue.assigned) {
            this.appService.addNotification(this.title, 'assignee', trackingId).subscribe();
          } else {
            this.appService.addNotification(this.title, 'modification', trackingId).subscribe();
          }
          this.toastr.success('Edited successfully!');
          this.router.navigate(['/view', this.currentIssue.trackingId]);
        },
        error => {
          // console.log(error.error.message);
        }
      )
  }// end edit

  getAll(): any {
    this.appService.getAllUsers().subscribe(
      data => {
        this.assignee = data["data"];
      },
      error => {
        // console.log(error.error.message)
      }
    )
  }

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


  goBackToPreviousPage(): any {
    this.location.back();
  }

}
