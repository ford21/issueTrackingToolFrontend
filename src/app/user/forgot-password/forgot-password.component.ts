import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public validation: Boolean = false;
  public email: String = null;
  public password: String = null;
  public confirm: String = null;
  public getotp: String =null;
  public otp: String = null;

  constructor(public appService:AppService, public router:Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  public checkEmail: any = () => {
    if (!this.email) {
      this.toastr.warning('Please enter your email')
    } else {
      this.appService.getvalidateemail(this.email).subscribe((apiResponse) => {
          if (apiResponse.status === 200) {
            this.validation = true;
            this.otp = Math.random().toString(10).substring(2, 8).toLocaleUpperCase();
            this.appService.getOTP(this.otp,this.email).subscribe((apiResponse) => {
              if (apiResponse.status === 200) {
                this.toastr.success(apiResponse.message)
              }else{
                this.toastr.error(apiResponse.message)
              }
            });
          }else{
            this.toastr.error(apiResponse.message)
            this.validation = false;
          }
        }, (err) => {
          this.toastr.error(err.error.message)
        });
    }

  } // end checkEmail

  public back: any = () => {
    this.validation = false;
  }

  public resetPassword: any = () =>{
    if (!this.password) {
      this.toastr.warning('Please enter your password')
    } else if (this.confirm == null || this.confirm == undefined) {
      this.toastr.warning('Confirm password is empty')
    }else{
      if( this.confirm != this.password){
        this.toastr.warning('Password does not match!')
      }else{
        if(this.getotp == this.otp){
          this.appService.resetPassword(this.email,this.password).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
              this.toastr.success(apiResponse.message)
                this.router.navigate(['/login']);
              this.validation = null;
            }else{
              this.toastr.error(apiResponse.message)
              this.validation = true;
            }
          }, (err) => {
            this.toastr.error(err.error.message)
          });
        }else{
          this.toastr.warning('Please check the OTP');
        }
      }
    }
  }// end of resetPassword

}
