import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [Location]
})
export class CreateComponent implements OnInit {
  
  public issueTitle: string;
  public issueDescription: string;
  public bigDescription: string = "";
  public status: string;
  public contentIssue: String;
  public states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];

  constructor(private _route: ActivatedRoute, private router: Router, private appService: AppService, private toastr: ToastrService, private location: Location) {
  }

  ngOnInit() {
  }

  createIssue(): any {
    if (this.issueTitle == null || this.issueTitle == undefined || this.issueTitle == '') {
      this.toastr.warning('Title for the Issue is Required!');
    } else {
      let issueData = {
        title: this.issueTitle,
        description: this.issueDescription,
        bigDescription: this.bigDescription,
        status: this.status
      }
      this.appService.createIssue(issueData).subscribe(
        data => {
          this.toastr.success('Issue Creates successfully', 'Success!');
          this.router.navigate(['/home']);
        },
        error => {
          // console.log(error.error.message);
          this.toastr.error('Some error occured', 'Error');
        }
      )
    }

  }// end create function

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
