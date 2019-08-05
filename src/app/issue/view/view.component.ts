import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToolbarService, HtmlEditorService, TableService, LinkService } from '@syncfusion/ej2-angular-richtexteditor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [Location]
})
export class ViewComponent implements OnInit {

  public currentIssue: any;
  public watcher: any;
  public commentBox: any;
  public allComment: any;
  public textbox: String;
  public value: String;
  public title: String;
  public commentLength: Number = 0;
  public states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];
  public assignee: any;
  public assigned: String;

  constructor(private toastr: ToastrService, public appService: AppService, public router: Router, public _route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.getSingleIssue(trackingId).subscribe(
      data => {
        if(data.status == 404){
          this.currentIssue = false;
        }else{
          this.currentIssue = data["data"];
          if(this.currentIssue){
            this.title = this.currentIssue.title;
          }
        }
      },error => {
        // console.log(error.error.message)
      }
    )
    this.getAllWatcher();
    this.getAllComments();
    this.getAll();
    this.clearNotification();
  }

  public clearNotification(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.deleteNotifications(trackingId, Cookie.get('email')).subscribe();
  }

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

  public getAllComments(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.getAllComment(trackingId).subscribe(
      data => {
        this.allComment = data["data"];
        if (this.allComment) {
          this.commentLength = this.allComment.length
        }
      },
      error => {
        // console.log(error.error.message)
      }
    )
  }

  public assigning(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    this.appService.addAssignee(trackingId, this.currentIssue.assigned).subscribe(
      data => {
        if (data.status == 200) {
          this.appService.addNotification(this.title, 'assignee', trackingId).subscribe();
          this.toastr.success(data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      error => {
        // console.log(error.error.message)
      }
    )

  }

  addWatcher(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    if (trackingId == null || trackingId == undefined || trackingId == '') {
      this.toastr.warning('Issue Id is Missing!');
    } else {
      this.appService.addWatcher(trackingId).subscribe(
        data => {
          if (data.status == 200) {
            this.appService.addNotification(this.title, 'watcher', trackingId).subscribe();
            this.toastr.success(data.message);
          }
          this.getAllWatcher();
        },
        error => {
          // console.log(error.error.message);
          this.toastr.error("Some error occured while adding");
        }
      );
    }
  }// end addWatcher function

  removeWatcher(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    if (trackingId == null || trackingId == undefined || trackingId == '') {
      this.toastr.warning('Issue Id is Required!');
    } else {
      this.appService.removeWatcher(trackingId).subscribe(
        data => {
          if (data.status == 200) {
            // this.appService.deleteNotifications(trackingId, Cookie.get('email')).subscribe();
            this.toastr.success(data.message);
          }
          this.getAllWatcher();
        },
        error => {
          // console.log(error.error.message);
          this.toastr.error("Some error occured while removing");
        }
      );
    }
  }// end removeWatcher function

  getAllWatcher(): any {
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    if (trackingId == null || trackingId == undefined || trackingId == '') {
      this.toastr.warning('Issue Id is Missing!');
    } else {
      this.appService.getWatchers(trackingId).subscribe(
        data => {
          this.watcher = data["data"]
        },
        error => {
          // console.log(error);
          // this.toastr.error(error.error.message);
          this.toastr.error("Some error occured while get watchers list");
        }
      );
    }
  }// end getAllWatcher function

  editIssue(): any {
    let email = Cookie.get('email');
    let userName = Cookie.get('userName');
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    if (trackingId == null || trackingId == undefined || trackingId == '') {
      this.toastr.warning('Issue Id is Required!');
    } else {
      this.appService.getSingleIssue(trackingId).subscribe(
        data => {
          if (data.data.assigned == email || data.data.email == email || data.data.creator == userName) {
            this.router.navigate(['/edit', trackingId]);
          } else {
            this.toastr.error("The issue is not assigned to you or reported by you, So you cannot edit");
          }
          this.getAllWatcher();
        },
        error => {
          // console.log(error.error.message);
          this.toastr.error("Some error occured while saving");
        }
      );
    }
  }// end editIssue function

  deleteThisIssue(): any {
    let email = Cookie.get('email');
    let trackingId = this._route.snapshot.paramMap.get('trackingId');
    if (trackingId == null || trackingId == undefined || trackingId == '') {
      this.toastr.warning('Issue Id is Required!');
    } else {
      this.appService.getSingleIssue(trackingId).subscribe(
        data => {
          if (data.data.email == email) {
            let confirmed = confirm("Are your sure you want to delete this Issue")
            if (confirmed) {
              this.appService.deleteIssue(trackingId).subscribe(
                data => {
                  if (data.status == 200) {
                    this.toastr.success(data.message);
                    this.router.navigate(['/home']);
                  }
                  this.getAllWatcher();
                },
                error => {
                  // console.log(error.error.message);
                  this.toastr.error("Some error occured while deleting");
                }
              )
            }
          } else {
            this.toastr.error("You cannot delete this issue as it was not reported by you");
          }
          this.getAllWatcher();
        },
        error => {
          // console.log(error.error.message);
          this.toastr.error("Some error occured while get the issue");
        }
      );
    }
  }// end deleteThisIssue function

  commenting(): any {
    if (this.commentBox == null || this.commentBox == undefined || this.commentBox == '') {
      this.toastr.warning('Please Enter Something');
    } else {
      let trackingId = this._route.snapshot.paramMap.get('trackingId');
      this.appService.createComment(this.commentBox, trackingId).subscribe(
        data => {
          if (data.status == 200) {
            this.commentBox = "";
            this.toastr.success(data.message);
            this.appService.addNotification(this.title, 'comment', trackingId).subscribe();
            this.getAllComments();
          } else {
            this.toastr.error(data.message);
          }
        },
        error => {
          this.toastr.error('Some error occured', 'Error');
        });
      this.getAllComments();
    }
  }// end commenting function

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
