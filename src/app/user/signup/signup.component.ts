import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public gender: any = "Gender";
  public email: any;
  public password: any;
  public place: any;
  public confirm: any;

  constructor(
    public appService: AppService,
    public router: Router,
    private toastr: ToastrService,
    vcr: ViewContainerRef) {
  }

  ngOnInit() {
  }

  public goToSignIn: any = () => {
    this.router.navigate(['/login']);
  } // end goToSignIn

  public signupFunction: any = () => {
    if (!this.firstName) {
      this.toastr.warning('enter first name')
    } else if (!this.lastName) {
      this.toastr.warning('enter last name')
    } else if (!this.place) {
      this.toastr.warning('Enter your place')
    } else if (!this.gender || this.gender == 'Gender') {
      this.toastr.warning('enter Gender')
    } else if (!this.email) {
      this.toastr.warning('enter email')
    } else if (!this.password) {
      this.toastr.warning('enter password')
    } else if (!this.confirm) {
      this.toastr.warning('enter confirm password')
    } else {
      if (this.password != this.confirm) {
        console.log('password missmatch');
        this.toastr.warning('password missmatch')
      } else {
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          password: this.password,
          place: this.place
        }
        this.appService.signupFunction(data)
          .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.toastr.success(apiResponse.message);
              this.goToSignIn();
            } else {
              this.toastr.error(apiResponse.message);
            }
          }, (err) => {
            this.toastr.error(err.error.message)
          });
      }
    } // end condition
  } // end signupFunction

}
