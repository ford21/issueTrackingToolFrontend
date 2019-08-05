import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable()
export class AppService {

  private url = 'http://localhost:3000';
  //private url 'http://issuetrackingtool.reifordproject.site'

  constructor(public http: HttpClient) {
  } // end constructor  


  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  } // end getUserInfoFromLocalstorage



  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  public editUser(userId, userDetail): any {
    let authToken = Cookie.get('authtoken');
    return this.http.put(`${this.url}/api/v1/users/` + userId + `/edit?authToken=` + authToken, userDetail);
  }

  public getSingleUser(email): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/users/view/` + email + `/singleUser?authToken=` + authToken);
  }

  public signupFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('gender', data.gender)
      .set('email', data.email)
      .set('password', data.password)
      .set('place', data.place);
    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.

  public signinFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.

  public getAllUsers = () => {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/users/view/all?authToken=${authToken}`);

  }

  public logout(): Observable<any> {
    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))
    return this.http.post(`${this.url}/api/v1/users/logout`, params);
  } // end logout function

  getvalidateemail(email): any {
    const params = new HttpParams()
      .set('email', email);
    return this.http.post(`${this.url}/api/v1/users/forgotpassword/email`, params);
  }

  resetPassword(email, password): any {
    const params = new HttpParams()
      .set('password', password)
      .set('email', email);
    return this.http.post(`${this.url}/api/v1/users/forgotpassword/reset`, params);
  }

  getOTP(OTP, email): any {
    const params = new HttpParams()
      .set('email', email)
      .set('OTP', OTP);
    return this.http.post(`${this.url}/api/v1/resetpassword`, params);
  }

  createIssue(issueData): any {
    const params = new HttpParams()
      .set('title', issueData.title)
      .set('description', issueData.description)
      .set('bigDescription', issueData.bigDescription)
      .set('status', issueData.status)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/issueTrackingTool/create`, params);
  } // end create issue

  getAllIssue(field, value): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/issueTrackingTool/view/all?field=${field}&value=${value}&authToken=` + authToken);
  }

  getSortedIssue(field, value): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/issueTrackingTool/sort?field=${field}&value=${value}&authToken=` + authToken);
  }
  getSearchIssues(search): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/issueTrackingTool/search?search=${search}&authToken=` + authToken);

  }

  getSingleIssue(trackingId): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/issueTrackingTool/view/` + trackingId + `/singleIssue?authToken=` + authToken);
  }

  editIssue(trackingId, Issue): any {
    let authToken = Cookie.get('authtoken');
    return this.http.put(`${this.url}/api/v1/issueTrackingTool/` + trackingId + `/edit?authToken=` + authToken, Issue);
  }

  deleteIssue(trackingId): any {
    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/issueTrackingTool/${trackingId}/delete`, params);

  }

  getWatchers(trackingId): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/watcher/view/all/` + trackingId + `?authToken=` + authToken);
  }
  getAllWatchers(): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/watcher/view/all?authToken=` + authToken);
  }

  addWatcher(trackingId): any {
    const params = new HttpParams()
      .set('trackingId', trackingId)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/watcher/` + trackingId + `/add`, params);
  } // end

  removeWatcher(trackingId): any {
    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/watcher/` + trackingId + `/remove`, params);
  } // end

  createComment(commentBox, trackingId): any {
    const params = new HttpParams()
      .set('comment', commentBox)
      .set('trackingId', trackingId)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/comment/add`, params);
  }

  getAllComment(trackingId): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/comment/view/all/` + trackingId + `?authToken=` + authToken);
  }

  addNotification(title, changes, trackingId): any {
    const params = new HttpParams()
      .set('title', title)
      .set('changes', changes)
      .set('trackingId', trackingId)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/notifications/add`, params);
  }


  getNotifications(): any {
    let authToken = Cookie.get('authtoken');
    return this.http.get(`${this.url}/api/v1/notifications/get/all?email=` + Cookie.get('email') + `&authToken=` + authToken);
  }

  addAssignee(trackingId, email): any {
    const params = new HttpParams()
      .set('email', email)
      .set('trackingId', trackingId)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/issueTrackingTool/assign`, params);
  }

  deleteNotifications(trackingId, email): any {
    const params = new HttpParams()
      .set('email', email)
      .set('trackingId', trackingId)
      .set('authToken', Cookie.get('authtoken'));
    return this.http.post(`${this.url}/api/v1/notifications/delete`, params);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }  // END handleError

}

