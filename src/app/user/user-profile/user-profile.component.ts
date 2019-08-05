import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [Location]
})
export class UserProfileComponent implements OnInit {
  public currentUser: any;
  public userName = Cookie.get('userName');
  constructor(private _route: ActivatedRoute, private router: Router, private appService: AppService, private toastr: ToastrService, private location: Location) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(): any {
    this.appService.getSingleUser(Cookie.get('email')).subscribe(
      data => {
        this.currentUser = data["data"];
      },
      error => {
        // console.log("some error occured");
        // console.log(error.error.message)
      }
    )
  }// end get all users

  //for saving user detail
  save(): any {
    this.appService.editUser(this.currentUser.userId, this.currentUser)
      .subscribe(
        data => {
          this.toastr.success('Edited successfully!');
          this.router.navigate(['/user-detail']);
        },
        error => {
          // console.log("some error occured");
          // console.log(error.error.message)
        }
      )
  }// end edit

  goBackToPreviousPage(): any {
    this.location.back();
  }

}
