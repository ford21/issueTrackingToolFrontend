(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <span class=\"badge badge-dark rounded-circle\" style=\"font-size:30px;\">{{firstChar.toUpperCase()}}</span>\n    <p class=\"navbar-brand\">Welcome, <strong>\n            <em>{{userName.toUpperCase()}}</em>\n        </strong></p>\n    <button class=\"navbar-toggler justify-content-end\" type=\"button\" data-toggle=\"collapse\"\n        data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" style=\"font-size:20px;cursor:pointer\" [routerLink]=\"['/user-detail']\"\n                    data-toggle=\"tooltip\" title=\"Home\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:20px;cursor:pointer\" [routerLink]=\"['/create']\"\n                    data-toggle=\"tooltip\" title=\"Report a bug\">Report a\n                    Bug</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:20px;cursor:pointer\" [routerLink]=\"['/login']\" (click)=\"logout()\"\n                    data-toggle=\"tooltip\" title=\"Logout\">Logout</a>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-center\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" name=\"searchBox\" type=\"text\" [(ngModel)]=\"searchBox\" #search=\"ngModel\"\n                    id=\"search\" placeholder=\"Search\" aria-label=\"Search\" data-toggle=\"tooltip\" title=\"Seach for title\">\n            </div>\n            <button class=\"btn btn-warning\" (click)=\"searchIssue()\">Search</button>\n        </form>\n    </div>\n    <div class=\"container\">\n        <span style=\"font-size:30px;cursor:pointer\" class=\"fa fa-bell-o\" data-toggle=\"modal\"\n            data-target=\"#myModal\"><span class=\"badge badge-dark rounded-circle\"\n                [hidden]=\"!allNotifications\">{{notificationLength}}</span></span>\n        <div class=\"modal\" id=\"myModal\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Notifications</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n                    <div class=\"modal-body\" [hidden]=\"!allNotifications\" *ngFor=\"let notification of allNotifications\">\n                        <span data-dismiss=\"modal\" style=\"font-size:20px;cursor:pointer\"\n                            [routerLink]=\"['/view',notification.issueId]\"\n                            (click)=\"clearNotification(notification.issueId,notification.email)\">New\n                            '<em>{{notification.notifyChange}}</em>' on title <em>'{{notification.title}}'</em> @\n                            <em>'{{notification.byWhom}}'</em> </span>\n                    </div>\n                    <div class=\"modal-body text-center\" [hidden]=\"allNotifications\">\n                        <span data-dismiss=\"modal\" style=\"font-size:20px;cursor:pointer\"><em>You Have No\n                                Notifications</em></span>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"clearAll()\">Clear\n                            all</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>\n<div class=\"text-center\">\n    <h4 scope=\"col\" [hidden]=\"srch\">Search Results...</h4>\n</div>\n<div class=\"container\">\n    <div class=\" table-responsive\" *ngIf=\"allIssue\">\n        <table class=\"table table-hover table-striped table-condensed table-sm\" style=\"font-size: 16px;\">\n            <thead>\n                <tr [hidden]=\"!srch\" class=\"info\">\n                    <th scope=\"col\" style=\"cursor:pointer\" (click)=\"sortedData('title')\">Title</th>\n                    <th scope=\"col\" style=\"cursor:pointer\" (click)=\"sortedData('creator')\">Reporter</th>\n                    <th scope=\"col\" style=\"cursor:pointer\" (click)=\"sortedData('status')\">Status</th>\n                    <th scope=\"col\" style=\"cursor:pointer\" (click)=\"sortedData('created')\">Date</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let issue of allIssue\">\n                    <td [routerLink]=\"['/view',issue.trackingId]\" style=\"cursor:pointer\">{{issue.title | uppercase}}\n                    </td>\n                    <td [routerLink]=\"['/view',issue.trackingId]\" style=\"cursor:pointer\">{{issue.creator}}</td>\n                    <td [routerLink]=\"['/view',issue.trackingId]\" style=\"cursor:pointer\">{{issue.status}}</td>\n                    <td [routerLink]=\"['/view',issue.trackingId]\" style=\"cursor:pointer\">{{issue.created | date}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"!allIssue\">\n    <h3>Sorry couldn't find any Issue...</h3>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issue/create/create.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issue/create/create.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <p class=\"navbar-brand text-center\"></p>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/']\"\n                    (click)=\"logout()\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <h3 class=\"margin-top-5 margin-bottom-5\">Create an Issue</h3>\n    <form #createIssueForm=\"ngForm\" (ngSubmit)=\"createIssue()\" data-toggle=\"validator\" novalidate=\"true\">\n        <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" id=\"title\" #title=\"ngModel\"\n                class=\"form-control\" placeholder=\"Enter Issue Title\" required=\"required\"\n                data-error=\"Please enter Issue title\">\n            <div class=\"help-block with-errors\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <input type=\"text\" name=\"issueDescription\" [(ngModel)]=\"issueDescription\" id=\"description\"\n                #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description for the Issue\"\n                required=\"required\" data-error=\"Please enter Issue Description\">\n            <div class=\"help-block with-errors\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"content\">Content of the Issue</label>\n            <!-- <textarea type=\"text\" name=\"bigDescription\" [(ngModel)]=\"bigDescription\" id=\"content\" #content=\"ngModel\"\n                class=\"form-control\" rows=\"4\" required=\"required\" placeholder=\"Enter Content for the Issue\"\n                data-error=\"Please enter Content of the Issue\"></textarea> -->\n            <ejs-richtexteditor type=\"text\" name=\"bigDescription\" [(ngModel)]=\"bigDescription\" id=\"content\"\n                #content=\"ngModel\" class=\"form-control\" rows=\"4\" required=\"required\"\n                placeholder=\"Enter Content for the Issue\" data-error=\"Please enter Content of the Issue\">\n            </ejs-richtexteditor>\n            <div class=\"help-block with-errors\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"status\">Status</label>\n            <select [(ngModel)]=\"status\" #state=\"ngModel\" name=\"status\" class=\"form-control\" id=\"state\"\n                required=\"required\" data-error=\"Please Select Issue status\">\n                <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n            </select>\n            <div class=\"help-block with-errors\"></div>\n        </div>\n        <div class=\"d-flex justify-content-between margin-bottom-5\">\n            <a (click)=\"goBackToPreviousPage()\" class=\"btn btn-outline-primary\">Cancel</a>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createIssueForm.form.valid\"\n                type=\"submit\">Create</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issue/edit/edit.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issue/edit/edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <p class=\"navbar-brand text-center\"></p>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/create']\">Report a\n                    Bug</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/']\"\n                    (click)=\"logout()\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"container\">\n    <div>\n        <button type=\"button\" class=\"close\" style=\"font-size:30px\" aria-label=\"Close\" (click)=\"goBackToPreviousPage()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <!-- <div class=\"row\" style=\"text-align:left\"> -->\n    <div *ngIf=\"currentIssue\">\n        <form #editIssueForm=\"ngForm\" (ngSubmit)=\"editIssue()\" data-toggle=\"validator\" novalidate=\"true\">\n            <div class=\"form-group\">\n                <label class=\"label\">Issue Title</label>\n                <input type=\"text\" name=\"IssueTitle\" [(ngModel)]=\"currentIssue.title\" #IssueTitle=\"ngModel\"\n                    class=\"form-control\" placeholder=\"Enter Issue Title\" required=\"required\"\n                    data-error=\"Issue must have title\" disabled>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Description</label>\n                <input type=\"text\" name=\"IssueDescription\" [(ngModel)]=\"currentIssue.description\" #description=\"ngModel\"\n                    class=\"form-control\" placeholder=\"Enter Description for the Issue\" required=\"required\"\n                    data-error=\"Issue must Description\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Issue Summary</label>\n                <!-- <textarea name=\"bigDescription\" [(ngModel)]=\"currentIssue.bigDes\" id=\"summary\" #bigDes=\"ngModel\"\n                        class=\"form-control\" rows=\"3\" required=\"required\"\n                        data-error=\"Issue must have Summary\"></textarea> -->\n                <ejs-richtexteditor type=\"text\" name=\"bigDescription\" [(ngModel)]=\"currentIssue.bigDes\" id=\"content\"\n                    #bigDes=\"ngModel\" class=\"form-control\" rows=\"4\" required=\"required\"\n                    placeholder=\"Enter Content for the Issue\" data-error=\"Please enter Content of the Issue\">\n                </ejs-richtexteditor>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Status</label>\n                <select [(ngModel)]=\"currentIssue.status\" #state=\"ngModel\" name=\"status\" class=\"form-control\" id=\"state\"\n                    required=\"required\" data-error=\"Please Select Issue status\">\n                    <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n                </select>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Repoter</label>\n                <input type=\"text\" name=\"repoter\" [(ngModel)]=\"currentIssue.creator\" #repoter=\"ngModel\"\n                    class=\"form-control\" disabled data-error=\"Repoter name required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Created on</label>\n                <input type=\"text\" name=\"date\" [(ngModel)]=\"currentIssue.created\" #date=\"ngModel\" class=\"form-control\"\n                    disabled data-error=\"date required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Assign To</label>\n                <select [(ngModel)]=\"currentIssue.assigned\" #assigned=\"ngModel\" name=\"assigned\" class=\"form-control\"\n                    id=\"assigned\" required=\"required\">\n                    <option *ngFor=\"let assign of assignee\" [value]=\"assign.email\">\n                        {{assign.firstName}} {{assign.lastName}} ({{assign.email}})</option>\n                </select>\n            </div>\n            <div class=\"form-group text-center\">\n                <input class=\"submit center-block btn btn-primary\" [disabled]=\"!editIssueForm.form.valid\" value=\"Submit\"\n                    type=\"submit\">\n            </div>\n        </form>\n    </div>\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issue/view/view.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issue/view/view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <p class=\"navbar-brand text-center\"></p>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/create']\">Report a\n                    Bug</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/logout']\"\n                    (click)=\"logout()\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"container\" [hidden]=\"!currentIssue\">\n    <div class=\"d-flex justify-content-between margin-bottom-15\">\n        <a (click)=\"editIssue()\"><i class=\"fa fa-edit\" style=\"font-size:30px;color:blue\"></i></a>\n        <a (click)=\"deleteThisIssue()\"><i class=\"fa fa-trash-o\" style=\"font-size:30px;color:red\"></i></a>\n    </div>\n    <div *ngIf=\"currentIssue\">\n        <form #form=\"ngForm\">\n            <div class=\"form-group\">\n                <label class=\"label\">Issue Title</label>\n                <input type=\"text\" name=\"IssueTitle\" [(ngModel)]=\"currentIssue.title\" #titleitle=\"ngModel\"\n                    class=\"form-control\" placeholder=\"Enter Issue Title\" disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Description</label>\n                <input type=\"text\" name=\"IssueDescription\" [(ngModel)]=\"currentIssue.description\" #description=\"ngModel\"\n                    class=\"form-control\" disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Issue Summary</label>\n                <!-- <textarea type=\"text\" name=\"bigDescription\" [(ngModel)]=\"currentIssue.bigDes\" id=\"summary\"\n                    #bigDes=\"ngModel\" class=\"form-control\" rows=\"5\" disabled></textarea> -->\n                <ejs-richtexteditor type=\"text\" name=\"bigDescription\" [(ngModel)]=\"currentIssue.bigDes\" id=\"summary\"\n                    #bigDes=\"ngModel\" class=\"form-control\" disabled>\n                </ejs-richtexteditor>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Status</label>\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"currentIssue.status\" #state=\"ngModel\" class=\"form-control\"\n                    placeholder=\"Status\" disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Repoter</label>\n                <input type=\"text\" name=\"repoter\" [(ngModel)]=\"currentIssue.creator\" #repoter=\"ngModel\"\n                    class=\"form-control\" disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Created on</label>\n                <input type=\"text\" name=\"date1\" [(ngModel)]=\"currentIssue.created\" #date1=\"ngModel\" class=\"form-control\"\n                    disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Last Modified on</label>\n                <input type=\"text\" name=\"date2\" [(ngModel)]=\"currentIssue.lastModified\" #date2=\"ngModel\"\n                    class=\"form-control\" disabled>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Assign To</label>\n                <select [(ngModel)]=\"currentIssue.assigned\" #assigned=\"ngModel\" name=\"assigned\" class=\"form-control\"\n                    id=\"assigned\">\n                    <option *ngFor=\"let assign of assignee\" [value]=\"assign.email\">\n                        {{assign.firstName}} {{assign.lastName}} ({{assign.email}})</option>\n                </select>\n                <div class=\"text-right\">\n                    <button class=\"btn btn-primary\" (click)=\"assigning()\">Assign</button>\n                </div>\n            </div>\n        </form>\n\n        <hr>\n        <div>\n            <button class=\"btn btn-success\" (click)=\"addWatcher()\">Watcher</button>\n            <button class=\"btn btn-danger\" (click)=\"removeWatcher()\">Remove</button>\n        </div>\n        <div class=\"form-group\">\n\n            <span [hidden]=\"watcher\" style=\"font-size:20px; width: 30px;\"><b><i>No Watchers on this Issue</i></b></span>\n            <span [hidden]=\"!watcher\" style=\"font-size:20px; width: 30px;\"><b><i>List of Watchers on this\n                        Issue</i></b></span>\n            <ul class=\"list-group\" *ngFor=\"let watch of watcher\">\n                <li class=\"margin-bottom-25\" style=\"font-size:20px\" [value]=\"watch\">\n                    <span> {{watch.name}}</span>\n                </li>\n            </ul>\n        </div>\n        <hr>\n        <h3 for=\"name\" class=\"text-center\"><span style=\"font-size:30px;\"\n                class=\"badge badge-dark rounded-circle fa fa-comments \"> {{commentLength}} Comments</span></h3>\n        <hr>\n        <div class=\"form-group\">\n            <textarea name=\"comment\" id=\"comment\" [(ngModel)]=\"commentBox\" class=\"form-control\" #comment=\"ngModel\"\n                rows=\"7\" placeholder=\"Comment...\"></textarea>\n        </div>\n        <div class=\"text-right\">\n            <button class=\"btn btn-primary\" (click)=\"commenting()\">Comment</button>\n        </div>\n        <hr>\n        <div class=\"form-group\" *ngFor=\"let comment of allComment\">\n            <span class=\"fa fa-comments-o\" style=\"font-size:20px; width: 30px;\"></span>\n            <span class=\"fa fa-thumbs-up\" style=\"font-size:20px; width: 30px;\"></span>\n            <span class=\"fa fa-thumbs-down\" style=\"font-size:20px; width: 30px;\"></span>\n            <textarea style=\"border-width:0px;border:none;\" rows=\"5\" wrap=\"on\" type=\"text\" name=\"comment\" id=\"comments\"\n                class=\"form-control\" disabled>{{comment.comment}}</textarea>\n            <p for=\"name\"><span class=\"\" style=\"font-size: 18px;\"><b><i>{{comment.name}}</i></b></span><span class=\"\"\n                    style=\"font-size: 13px;\">, On {{comment.created | date}}</span></p>\n        </div>\n    </div>\n</div>\n<div class=\"container\" [hidden]=\"currentIssue\">\n    <div>\n        <h3>Issue Not Found or has been removed by the Reporter</h3>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container-login\">\n        <div class=\"wrap-login p-t-122 p-b-30\">\n            <form class=\"login-form validate-form\">\n                <div [hidden]=\"validation\">\n                    <div class=\"wrap-input validate-input m-b-10\" data-validate=\"email is required\">\n                        <input class=\"input\" size=\"30\" type=\"email\" [(ngModel)]=\"email\" name=\"email\"\n                            placeholder=\"Email\">\n                        <span class=\"focus-input\"></span>\n                        <span class=\"symbol-input\">\n                            <i class=\"fa fa-user\"></i>\n                        </span>\n                    </div>\n                    <div class=\"container-login-form-btn p-t-10\">\n                        <button class=\"login-form-btn\" (click)=\"checkEmail()\">\n                            Next\n                        </button>\n                    </div>\n                </div>\n                <div [hidden]=\"!validation\">\n                    <div class=\"wrap-input validate-input m-b-10\" data-validate=\"One Time Password is required\">\n                        <input class=\"input\" size=\"30\" type=\"text\" [(ngModel)]=\"getotp\" name=\"getotp\"\n                            placeholder=\"One Time Password\">\n                        <span class=\"focus-input\"></span>\n                        <span class=\"symbol-input\">\n                            <i class=\"fa fa-unlock-alt\"></i>\n                        </span>\n                    </div>\n                    <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Password is required\">\n                        <input class=\"input\" size=\"30\" type=\"password\" [(ngModel)]=\"password\" name=\"password\"\n                            placeholder=\"New Password\">\n                        <span class=\"focus-input\"></span>\n                        <span class=\"symbol-input\">\n                            <i class=\"fa fa-lock\"></i>\n                        </span>\n                    </div>\n                    <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Confirm Password is required\">\n                        <input class=\"input\" size=\"30\" type=\"password\" [(ngModel)]=\"confirm\" name=\"confirm\"\n                            placeholder=\"Confirm Password\">\n                        <span class=\"focus-input\"></span>\n                        <span class=\"symbol-input\">\n                            <i class=\"fa fa-lock\"></i>\n                        </span>\n                    </div>\n                    <div class=\"container-login-form-btn p-t-10\">\n                        <button class=\"login-form-btn\" (click)=\"resetPassword()\">\n                            Reset Password\n                        </button>\n                    </div>\n                    <div class=\"text-center w-full\">\n                        <i class=\"fa fa-long-arrow-left\"></i>\n                        <a class=\"txt1\" (click)=\"back()\">\n                            Back\n                        </a>\n                    </div>\n                </div>\n                <div class=\"text-center w-full\">\n                    <a class=\"txt1\" [routerLink]=\"['/login']\">\n                        Goto Login\n                    </a>\n                    <i class=\"fa fa-long-arrow-right\"></i>\n                </div>\n            </form>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container-login\">\n        <div class=\"wrap-login p-t-122 p-b-30\">\n            <form class=\"login-form validate-form\">\n\n                <div class=\"wrap-input validate-input m-b-10\" data-validate=\"email is required\">\n                    <input class=\"input\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n                    <span class=\"focus-input\"></span>\n                    <span class=\"symbol-input\">\n                        <i class=\"fa fa-user-circle\"></i>\n                    </span>\n                </div>\n\n                <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Password is required\">\n                    <input class=\"input\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n                    <span class=\"focus-input\"></span>\n                    <span class=\"symbol-input\">\n                        <i class=\"fa fa-lock\"></i>\n                    </span>\n                </div>\n\n                <div class=\"container-login-form-btn p-t-10\">\n                    <button class=\"login-form-btn\" (click)=\"signinFunction()\">\n                        Login\n                    </button>\n                </div>\n\n                <div class=\"text-center w-full p-t-20 p-b-230\">\n                    <a class=\"txt1\" [routerLink]=\"['/forgot-password']\">\n                        Forgot Password ?\n                        <i class=\"fa fa-long-arrow-right\"></i>\n                    </a>\n                </div>\n\n                <div class=\"text-center w-full\">\n                    <a class=\"txt1\" [routerLink]=\"['/sign-up']\">\n                        Create new account\n                        <i class=\"fa fa-long-arrow-right\"></i>\n                    </a>\n                </div>\n            </form>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-login\">\n    <div class=\"wrap-login p-t-122 p-b-30\">\n        <form class=\"login-form validate-form\">\n\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Firstname is required\">\n                <input class=\"input\" type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"firstName\"\n                    required />\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-user\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Lastname is required\">\n                <input class=\"input\" type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" placeholder=\"lastName\">\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-user\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"place is required\">\n                <input class=\"input\" type=\"text\" [(ngModel)]=\"place\" name=\"place\" placeholder=\"place\">\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-home\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Gender is required\">\n                <select name=\"Gender\" class=\"form-control input\" [(ngModel)]=\"gender\" id=\"category\" required>\n                    <option>Male</option>\n                    <option>Female</option>\n                </select>\n                <span class=\"focus-input\" name=\"male\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-male\"></i>\n                </span>\n                <span class=\"focus-input\" name=\"female\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-female\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"email is required\">\n                <input class=\"input\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-envelope\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Password is required\">\n                <input class=\"input\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-lock\"></i>\n                </span>\n            </div>\n            <div class=\"wrap-input validate-input m-b-10\" data-validate=\"Password is required\">\n                <input class=\"input\" type=\"password\" [(ngModel)]=\"confirm\" name=\"confirm\"\n                    placeholder=\"Confirm Password\">\n                <span class=\"focus-input\"></span>\n                <span class=\"symbol-input\">\n                    <i class=\"fa fa-lock\"></i>\n                </span>\n            </div>\n\n            <div class=\"container-login-form-btn p-t-10\">\n                <button class=\"login-form-btn btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n            </div>\n            <div class=\"text-center w-full p-t-20 p-b-230\">\n                <i class=\"fa fa-long-arrow-left\"></i>\n                <a class=\"txt1\" [routerLink]=\"['/login']\">\n                    Goto Login\n                </a>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-details/user-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-details/user-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776;</span>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"text-center\">\n        <p class=\"navbar-brand\" style=\"font-size:30px\">Track the details of others Users</p>\n    </div>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/user-profile']\">Edit User</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" style=\"font-size:30px;cursor:pointer\" [routerLink]=\"['/logout']\"\n                    (click)=\"logout()\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div id=\"mySidenav\" class=\"sidenav\">\n    <a class=\"closebtn\" style=\"font-size:30px;cursor:pointer\" (click)=\"closeNav()\">&times;</a>\n    <a class=\"text-center\">Users</a>\n    <div *ngFor=\"let user of allUsers\">\n        <a style=\"font-size:30px;cursor:pointer\"\n            (click)=\"getdetails(user.email,user.firstName,user.lastName)\">{{user.firstName}} {{user.lastName}}</a>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"text-center\">\n        <h1><em>{{name.toUpperCase()}}</em></h1>\n    </div>\n    <hr>\n    <div class=\"container text-center\" style=\"font-size:30px;\">\n        <p>\n            <span style=\"cursor:pointer;\" data-toggle=\"collapse\" data-target=\"#drop1\" (click)=\"closeNav()\">\n                Created <span> {{created}} </span> Issues <span class=\"fa fa-edit\"></span>\n                <div class=\"container\" *ngIf=\"issueCreated\">\n                    <div id=\"drop1\" class=\"collapse\" *ngFor=\"let title of issueCreated\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item text-success\">{{title}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </span>\n        </p>\n        <p>\n            <span style=\"cursor:pointer;\" data-toggle=\"collapse\" data-target=\"#drop2\" (click)=\"closeNav()\">\n                Watcher on <span> {{watched}} </span> Issues <span class=\"fa fa-eye\"></span>\n                <div class=\"container\" *ngIf=\"issueWatcher\">\n                    <div id=\"drop2\" class=\"collapse\" *ngFor=\"let title of issueWatcher\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item text-info\">{{title}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </span>\n        </p>\n        <p>\n            <span style=\"cursor:pointer;\" data-toggle=\"collapse\" data-target=\"#drop3\" (click)=\"closeNav()\">\n                Assigned on <span> {{assigned}} </span> Issues <span class=\"fa fa-sticky-note-o\"></span>\n                <div class=\"container\" *ngIf=\"issueAssigned\">\n                    <div id=\"drop3\" class=\"collapse\" *ngFor=\"let title of issueAssigned\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item text-warning\">{{title}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </span>\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-profile/user-profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-profile/user-profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-success\">\n    <p class=\"navbar-brand text-center\">Welcome, {{userName}} to your Profile</p>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n</nav>\n<div class=\"container\">\n    <div>\n        <button type=\"button\" class=\"close\" style=\"font-size:30px\" aria-label=\"Close\" (click)=\"goBackToPreviousPage()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div *ngIf=\"currentUser\">\n        <form #editUserForm=\"ngForm\" (ngSubmit)=\"save()\" data-toggle=\"validator\" novalidate=\"true\">\n            <div class=\"form-group\">\n                <label class=\"label\">FirstName</label>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"currentUser.firstName\" #firstName=\"ngModel\"\n                    class=\"form-control\" placeholder=\"Enter firstName\" required=\"required\"\n                    data-error=\"firststName is required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">LastName</label>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"currentUser.lastName\" #lastName=\"ngModel\"\n                    class=\"form-control\" placeholder=\"Enter lastName\" required=\"required\"\n                    data-error=\"LastName is required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Email</label>\n                <input type=\"text\" name=\"repoter\" [(ngModel)]=\"currentUser.email\" #repoter=\"ngModel\"\n                    class=\"form-control\" disabled data-error=\"email required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Gender</label>\n                <input type=\"text\" name=\"gender\" [(ngModel)]=\"currentUser.gender\" #gender=\"ngModel\" class=\"form-control\"\n                    disabled data-error=\"gender required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Created on</label>\n                <input type=\"text\" name=\"date\" [(ngModel)]=\"currentUser.createdOn\" #date=\"ngModel\" class=\"form-control\"\n                    disabled data-error=\"date required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"label\">Place</label>\n                <input type=\"text\" name=\"place\" [(ngModel)]=\"currentUser.place\" #place=\"ngModel\" class=\"form-control\"\n                    data-error=\"place required\">\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group text-center\">\n                <input class=\"submit center-block btn btn-primary\" [disabled]=\"!editUserForm.form.valid\" value=\"Submit\"\n                    type=\"submit\">\n            </div>\n        </form>\n    </div>\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'project1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _issue_issue_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./issue/issue.module */ "./src/app/issue/issue.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
            _issue_issue_module__WEBPACK_IMPORTED_MODULE_13__["IssueModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: 'sign-up', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], pathMatch: 'full' }
            ])
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppService = class AppService {
    //private url 'http://issuetrackingtool.reifordproject.site'
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        this.getUserInfoFromLocalstorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.getAllUsers = () => {
            let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
            return this.http.get(`${this.url}/api/v1/users/view/all?authToken=${authToken}`);
        };
    } // end constructor  
    editUser(userId, userDetail) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.put(`${this.url}/api/v1/users/` + userId + `/edit?authToken=` + authToken, userDetail);
    }
    getSingleUser(email) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/users/view/` + email + `/singleUser?authToken=` + authToken);
    }
    signupFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('gender', data.gender)
            .set('email', data.email)
            .set('password', data.password)
            .set('place', data.place);
        return this.http.post(`${this.url}/api/v1/users/signup`, params);
    } // end of signupFunction function.
    signinFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(`${this.url}/api/v1/users/login`, params);
    } // end of signinFunction function.
    logout() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/users/logout`, params);
    } // end logout function
    getvalidateemail(email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('email', email);
        return this.http.post(`${this.url}/api/v1/users/forgotpassword/email`, params);
    }
    resetPassword(email, password) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('password', password)
            .set('email', email);
        return this.http.post(`${this.url}/api/v1/users/forgotpassword/reset`, params);
    }
    getOTP(OTP, email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('email', email)
            .set('OTP', OTP);
        return this.http.post(`${this.url}/api/v1/resetpassword`, params);
    }
    createIssue(issueData) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('title', issueData.title)
            .set('description', issueData.description)
            .set('bigDescription', issueData.bigDescription)
            .set('status', issueData.status)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/issueTrackingTool/create`, params);
    } // end create issue
    getAllIssue(field, value) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/issueTrackingTool/view/all?field=${field}&value=${value}&authToken=` + authToken);
    }
    getSortedIssue(field, value) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/issueTrackingTool/sort?field=${field}&value=${value}&authToken=` + authToken);
    }
    getSearchIssues(search) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/issueTrackingTool/search?search=${search}&authToken=` + authToken);
    }
    getSingleIssue(trackingId) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/issueTrackingTool/view/` + trackingId + `/singleIssue?authToken=` + authToken);
    }
    editIssue(trackingId, Issue) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.put(`${this.url}/api/v1/issueTrackingTool/` + trackingId + `/edit?authToken=` + authToken, Issue);
    }
    deleteIssue(trackingId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/issueTrackingTool/${trackingId}/delete`, params);
    }
    getWatchers(trackingId) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/watcher/view/all/` + trackingId + `?authToken=` + authToken);
    }
    getAllWatchers() {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/watcher/view/all?authToken=` + authToken);
    }
    addWatcher(trackingId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('trackingId', trackingId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/watcher/` + trackingId + `/add`, params);
    } // end
    removeWatcher(trackingId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/watcher/` + trackingId + `/remove`, params);
    } // end
    createComment(commentBox, trackingId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('comment', commentBox)
            .set('trackingId', trackingId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/comment/add`, params);
    }
    getAllComment(trackingId) {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/comment/view/all/` + trackingId + `?authToken=` + authToken);
    }
    addNotification(title, changes, trackingId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('title', title)
            .set('changes', changes)
            .set('trackingId', trackingId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/notifications/add`, params);
    }
    getNotifications() {
        let authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        return this.http.get(`${this.url}/api/v1/notifications/get/all?email=` + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('email') + `&authToken=` + authToken);
    }
    addAssignee(trackingId, email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('email', email)
            .set('trackingId', trackingId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/issueTrackingTool/assign`, params);
    }
    deleteNotifications(trackingId, email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]()
            .set('email', email)
            .set('trackingId', trackingId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/notifications/delete`, params);
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    } // END handleError
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./src/app/home/home-route-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home/home-route-guard.service.ts ***!
  \**************************************************/
/*! exports provided: HomeRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouteGuardService", function() { return HomeRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




let HomeRouteGuardService = class HomeRouteGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') == undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') == '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') == null) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
};
HomeRouteGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HomeRouteGuardService);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-route-guard.service */ "./src/app/home/home-route-guard.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");














let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_home_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["HomeRouteGuardService"]] }
            ])
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _home_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["HomeRouteGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: auto;\r\n  padding: 0 15px;\r\n}\r\n.mat-sort-header-container {\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n@media (max-width: 400px) {  \r\n  .container {\r\n      font-size:10px !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRTtNQUNJLHlCQUF5QjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7ICBcclxuICAuY29udGFpbmVyIHtcclxuICAgICAgZm9udC1zaXplOjEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let HomeComponent = class HomeComponent {
    constructor(toastr, appService, router, _route) {
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName');
        this.field = 'title';
        this.type = 1;
        this.notificationLength = 0;
        this.srch = true;
        this.logout = () => {
            this.appService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('userName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('email');
                    this.toastr.success(apiResponse.message);
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error(apiResponse.message);
                } // end condition
            }, (err) => {
                this.toastr.error(err.error.message);
            });
        }; // end logout
    }
    ngOnInit() {
        this.name = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userName').split(' ');
        this.firstChar = this.name[0].charAt(0) + this.name[1].charAt(0);
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.GetAllIssue(this.field, this.type);
        this.getAllNotifications();
    }
    getAllNotifications() {
        this.appService.getNotifications().subscribe(data => {
            this.allNotifications = data["data"];
            if (this.allNotifications) {
                this.notificationLength = this.allNotifications.length;
            }
        }, error => {
            this.toastr.error(error.error.message);
        });
    } // end of getAllNotifications
    //clearing notification on select
    clearNotification(trackingId, email) {
        this.appService.deleteNotifications(trackingId, email).subscribe();
        this.getAllNotifications();
    }
    // clearing all the notifications
    clearAll() {
        this.appService.deleteNotifications(null, ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('email')).subscribe();
        this.getAllNotifications();
    }
    GetAllIssue(field, type) {
        this.appService.getSortedIssue(field, type).subscribe(data => {
            this.allIssue = data["data"];
            this.srch = true;
            return this.allIssue;
        }, error => {
            this.toastr.error(error.error.message);
        });
    } // end of GetAllIssue
    searchIssue() {
        if (this.searchBox == null || this.searchBox == undefined || this.searchBox == '') {
            this.GetAllIssue(this.field, this.type);
            return this.searchBox;
        }
        this.appService.getSearchIssues(this.searchBox).subscribe(data => {
            this.allIssue = data["data"];
            this.srch = false;
            return this.allIssue;
        }, error => {
            this.toastr.error(error.error.message);
        });
    } // end of searchIssue
    sortedData(field) {
        if (this.type == 1) {
            this.type = -1;
        }
        else {
            this.type = 1;
        }
        this.GetAllIssue(field, this.type);
    } // end of sortedData
};
HomeComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/issue/create/create.component.css":
/*!***************************************************!*\
  !*** ./src/app/issue/create/create.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');\r\n.container {\r\n    width: auto;\r\n    padding: 0 15px;\r\n  }\r\nbody {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\ninput[type=\"text\"], #state, #content {\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    line-height: 50px;\r\n    height:40px;\r\n    padding-left: 3rem;\r\n    border-radius: 2rem\r\n}\r\n.text-white {\r\n    color: #fff!important;\r\n}\r\n.has-error input[type=\"text\"], .has-error textarea, .has-error select {\r\n    border: 1px solid #ff0400;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTtBQUMzRTtJQUNJLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxvQ0FBb0M7SUFDcEMscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0fE9wZW4rU2FucycpO1xyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAjc3RhdGUsICNjb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbVxyXG59XHJcbi50ZXh0LXdoaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuaGFzLWVycm9yIHRleHRhcmVhLCAuaGFzLWVycm9yIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwNDAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/issue/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/issue/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







let CreateComponent = class CreateComponent {
    constructor(_route, router, appService, toastr, location) {
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.location = location;
        this.bigDescription = "";
        this.states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];
        this.logout = () => {
            this.appService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('email');
                    this.toastr.success(apiResponse.message);
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error(apiResponse.message);
                } // end condition
            }, (err) => {
                this.toastr.error(err.error.message);
            });
        }; // end logout
    }
    ngOnInit() {
    }
    createIssue() {
        if (this.issueTitle == null || this.issueTitle == undefined || this.issueTitle == '') {
            this.toastr.warning('Title for the Issue is Required!');
        }
        else {
            let issueData = {
                title: this.issueTitle,
                description: this.issueDescription,
                bigDescription: this.bigDescription,
                status: this.status
            };
            this.appService.createIssue(issueData).subscribe(data => {
                this.toastr.success('Issue Creates successfully', 'Success!');
                this.router.navigate(['/home']);
            }, error => {
                // console.log(error.error.message);
                this.toastr.error('Some error occured', 'Error');
            });
        }
    } // end create function
    goBackToPreviousPage() {
        this.location.back();
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/issue/create/create.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
        styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/issue/create/create.component.css")]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/issue/edit/edit.component.css":
/*!***********************************************!*\
  !*** ./src/app/issue/edit/edit.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');\r\n\r\n.container {\r\n  width: auto;\r\n  padding: 0 15px;\r\n}\r\n\r\nbody, html {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-family: 'Montserrat', sans-serif;\r\n    background: #0a583173;\r\n    opacity: 0.9;\r\n}\r\n\r\ninput[type=\"text\"], #state, #summary, #assigned {\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    height:40px;\r\n    line-height: 50px;\r\n    padding-left: 3rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.text-white {\r\n    color: #fff!important;\r\n}\r\n\r\n.label{\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    line-height: 5px;\r\n}\r\n\r\n.has-error input[type=\"text\"], .has-error textarea, .has-error select {\r\n    border: 1px solid #ff0400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxPcGVuK1NhbnMnKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuYm9keSwgaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgI3N0YXRlLCAjc3VtbWFyeSwgI2Fzc2lnbmVkIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cInRleHRcIl0sIC5oYXMtZXJyb3IgdGV4dGFyZWEsIC5oYXMtZXJyb3Igc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjA0MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/issue/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/issue/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







let EditComponent = class EditComponent {
    constructor(_route, router, appService, toastr, location) {
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.location = location;
        this.states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];
        this.logout = () => {
            this.appService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('email');
                    this.toastr.success(apiResponse.message);
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error(apiResponse.message);
                } // end condition
            }, (err) => {
                this.toastr.error(err.error.message);
            });
        }; // end logout
    }
    ngOnInit() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.getSingleIssue(trackingId).subscribe(data => {
            this.currentIssue = data["data"];
            this.title = this.currentIssue.title;
            this.previousAssignee = this.currentIssue.assigned;
        }, error => {
            // console.log(error.error.message)
        });
        this.getAll();
    }
    editIssue() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.editIssue(this.currentIssue.trackingId, this.currentIssue)
            .subscribe(data => {
            if (this.currentIssue.assigned != ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('email') && this.previousAssignee != this.currentIssue.assigned) {
                this.appService.addNotification(this.title, 'assignee', trackingId).subscribe();
            }
            else {
                this.appService.addNotification(this.title, 'modification', trackingId).subscribe();
            }
            this.toastr.success('Edited successfully!');
            this.router.navigate(['/view', this.currentIssue.trackingId]);
        }, error => {
            // console.log(error.error.message);
        });
    } // end edit
    getAll() {
        this.appService.getAllUsers().subscribe(data => {
            this.assignee = data["data"];
        }, error => {
            // console.log(error.error.message)
        });
    }
    goBackToPreviousPage() {
        this.location.back();
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/issue/edit/edit.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
        styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/issue/edit/edit.component.css")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/issue/issue.module.ts":
/*!***************************************!*\
  !*** ./src/app/issue/issue.module.ts ***!
  \***************************************/
/*! exports provided: IssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueModule", function() { return IssueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _issue_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../issue/create/create.component */ "./src/app/issue/create/create.component.ts");
/* harmony import */ var _issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../issue/edit/edit.component */ "./src/app/issue/edit/edit.component.ts");
/* harmony import */ var _issue_view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../issue/view/view.component */ "./src/app/issue/view/view.component.ts");
/* harmony import */ var _home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../home/home-route-guard.service */ "./src/app/home/home-route-guard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");














let IssueModule = class IssueModule {
};
IssueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _issue_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"],
            _issue_view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"],
            _issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_13__["RichTextEditorAllModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                { path: 'create', component: _issue_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], canActivate: [_home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeRouteGuardService"]] },
                { path: 'edit/:trackingId', component: _issue_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], canActivate: [_home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeRouteGuardService"]] },
                { path: 'view/:trackingId', component: _issue_view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"], canActivate: [_home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeRouteGuardService"]] }
            ])
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeRouteGuardService"]]
        //bootstrap: [AppComponent]
    })
], IssueModule);



/***/ }),

/***/ "./src/app/issue/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/issue/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');\r\n.container {\r\n  width: auto;\r\n  padding: 0 25px;\r\n}\r\nbody, html {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-family: 'Montserrat', sans-serif;\r\n    background: #0a583173;\r\n    opacity: 0.9;\r\n}\r\ninput[type=\"text\"], #state, #summary, #assigned {\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    height:40px;\r\n    padding-left: 3rem;\r\n    border-radius: 2rem;\r\n}\r\n#comment {\r\n    font-size: 1.6rem;\r\n    height:100px;\r\n    border-radius: 1rem;\r\n}\r\n#comments {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 1.6rem;\r\n    border-radius: 1rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    color: #010100;\r\n    overflow: auto;\r\n    resize: auto;\r\n    outline: none;\r\n}\r\n.text-white {\r\n    color: #fff!important;\r\n}\r\n.label{\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    line-height: 5px;\r\n}\r\n.has-error input[type=\"text\"], .has-error textarea, .has-error select {\r\n    border: 1px solid #ff0400;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxPcGVuK1NhbnMnKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbmJvZHksIGh0bWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICMwYTU4MzE3MztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sICNzdGF0ZSwgI3N1bW1hcnksICNhc3NpZ25lZCB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGNvbG9yOiAjMDEwMTAwO1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcbiNjb21tZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4jY29tbWVudHMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcmVzaXplOiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4udGV4dC13aGl0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBjb2xvcjogIzAxMDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbn1cclxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLmhhcy1lcnJvciB0ZXh0YXJlYSwgLmhhcy1lcnJvciBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMDQwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/issue/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/issue/view/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







let ViewComponent = class ViewComponent {
    constructor(toastr, appService, router, _route, location) {
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.location = location;
        this.commentLength = 0;
        this.states = ["Open", "in-Progress", "in-Test", "Backlog", "Done"];
        this.logout = () => {
            this.appService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('email');
                    this.toastr.success(apiResponse.message);
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error(apiResponse.message);
                } // end condition
            }, (err) => {
                this.toastr.error(err.error.message);
            });
        }; // end logout
    }
    ngOnInit() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.getSingleIssue(trackingId).subscribe(data => {
            if (data.status == 404) {
                this.currentIssue = false;
            }
            else {
                this.currentIssue = data["data"];
                if (this.currentIssue) {
                    this.title = this.currentIssue.title;
                }
            }
        }, error => {
            // console.log(error.error.message)
        });
        this.getAllWatcher();
        this.getAllComments();
        this.getAll();
        this.clearNotification();
    }
    clearNotification() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.deleteNotifications(trackingId, ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('email')).subscribe();
    }
    getAll() {
        this.appService.getAllUsers().subscribe(data => {
            this.assignee = data["data"];
        }, error => {
            // console.log(error.error.message)
        });
    }
    getAllComments() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.getAllComment(trackingId).subscribe(data => {
            this.allComment = data["data"];
            if (this.allComment) {
                this.commentLength = this.allComment.length;
            }
        }, error => {
            // console.log(error.error.message)
        });
    }
    assigning() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        this.appService.addAssignee(trackingId, this.currentIssue.assigned).subscribe(data => {
            if (data.status == 200) {
                this.appService.addNotification(this.title, 'assignee', trackingId).subscribe();
                this.toastr.success(data.message);
            }
            else {
                this.toastr.error(data.message);
            }
        }, error => {
            // console.log(error.error.message)
        });
    }
    addWatcher() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        if (trackingId == null || trackingId == undefined || trackingId == '') {
            this.toastr.warning('Issue Id is Missing!');
        }
        else {
            this.appService.addWatcher(trackingId).subscribe(data => {
                if (data.status == 200) {
                    this.appService.addNotification(this.title, 'watcher', trackingId).subscribe();
                    this.toastr.success(data.message);
                }
                this.getAllWatcher();
            }, error => {
                // console.log(error.error.message);
                this.toastr.error("Some error occured while adding");
            });
        }
    } // end addWatcher function
    removeWatcher() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        if (trackingId == null || trackingId == undefined || trackingId == '') {
            this.toastr.warning('Issue Id is Required!');
        }
        else {
            this.appService.removeWatcher(trackingId).subscribe(data => {
                if (data.status == 200) {
                    // this.appService.deleteNotifications(trackingId, Cookie.get('email')).subscribe();
                    this.toastr.success(data.message);
                }
                this.getAllWatcher();
            }, error => {
                // console.log(error.error.message);
                this.toastr.error("Some error occured while removing");
            });
        }
    } // end removeWatcher function
    getAllWatcher() {
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        if (trackingId == null || trackingId == undefined || trackingId == '') {
            this.toastr.warning('Issue Id is Missing!');
        }
        else {
            this.appService.getWatchers(trackingId).subscribe(data => {
                this.watcher = data["data"];
            }, error => {
                // console.log(error);
                // this.toastr.error(error.error.message);
                this.toastr.error("Some error occured while get watchers list");
            });
        }
    } // end getAllWatcher function
    editIssue() {
        let email = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('email');
        let userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName');
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        if (trackingId == null || trackingId == undefined || trackingId == '') {
            this.toastr.warning('Issue Id is Required!');
        }
        else {
            this.appService.getSingleIssue(trackingId).subscribe(data => {
                if (data.data.assigned == email || data.data.email == email || data.data.creator == userName) {
                    this.router.navigate(['/edit', trackingId]);
                }
                else {
                    this.toastr.error("The issue is not assigned to you or reported by you, So you cannot edit");
                }
                this.getAllWatcher();
            }, error => {
                // console.log(error.error.message);
                this.toastr.error("Some error occured while saving");
            });
        }
    } // end editIssue function
    deleteThisIssue() {
        let email = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('email');
        let trackingId = this._route.snapshot.paramMap.get('trackingId');
        if (trackingId == null || trackingId == undefined || trackingId == '') {
            this.toastr.warning('Issue Id is Required!');
        }
        else {
            this.appService.getSingleIssue(trackingId).subscribe(data => {
                if (data.data.email == email) {
                    let confirmed = confirm("Are your sure you want to delete this Issue");
                    if (confirmed) {
                        this.appService.deleteIssue(trackingId).subscribe(data => {
                            if (data.status == 200) {
                                this.toastr.success(data.message);
                                this.router.navigate(['/home']);
                            }
                            this.getAllWatcher();
                        }, error => {
                            // console.log(error.error.message);
                            this.toastr.error("Some error occured while deleting");
                        });
                    }
                }
                else {
                    this.toastr.error("You cannot delete this issue as it was not reported by you");
                }
                this.getAllWatcher();
            }, error => {
                // console.log(error.error.message);
                this.toastr.error("Some error occured while get the issue");
            });
        }
    } // end deleteThisIssue function
    commenting() {
        if (this.commentBox == null || this.commentBox == undefined || this.commentBox == '') {
            this.toastr.warning('Please Enter Something');
        }
        else {
            let trackingId = this._route.snapshot.paramMap.get('trackingId');
            this.appService.createComment(this.commentBox, trackingId).subscribe(data => {
                if (data.status == 200) {
                    this.commentBox = "";
                    this.toastr.success(data.message);
                    this.appService.addNotification(this.title, 'comment', trackingId).subscribe();
                    this.getAllComments();
                }
                else {
                    this.toastr.error(data.message);
                }
            }, error => {
                this.toastr.error('Some error occured', 'Error');
            });
            this.getAllComments();
        }
    } // end commenting function
    goBackToPreviousPage() {
        this.location.back();
    }
};
ViewComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/issue/view/view.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
        styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/issue/view/view.component.css")]
    })
], ViewComponent);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  background: #0a583173;\r\n  height: 100%;\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Montserrat-Regular;\r\n\tfont-size: 17px;\r\n\tline-height: 1.7;\r\n\tcolor: #0c0505;\r\n\topacity: 100;\r\n\tmargin: 0px;\r\n\t-webkit-transition: all 0.4s;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.5s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\np {\r\n\tfont-family: Montserrat-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n/*[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 16px;\r\n  color: #3d4d4a;\r\n  line-height: 1;\r\n}\r\n\r\n/*[ login ]*/\r\n\r\n.container-login { \r\n  min-height: 10vh;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  \r\n  position: relative;\r\n}\r\n\r\n.container-login::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.9;\r\n}\r\n\r\n.wrap-login {\r\n  width: 300px;\r\n  background: transparent;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[  ]*/\r\n\r\n.login-form {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n.wrap-input {\r\n  position: relative;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.input {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n  font-size: 15px;\r\n  line-height: 1.2;\r\n  color: #333333;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  background: #fff;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  padding: 0 30px 0 53px;\r\n}\r\n\r\n/*[ Focus ]*/\r\n\r\n.focus-input {\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 0px 0px 0px;\r\n  color: rgba(10, 150, 40, 0.664);\r\n}\r\n\r\n.symbol-input {\r\n  font-size: 15px;\r\n  color: #999999;\r\n\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-left: 30px;\r\n  pointer-events: none;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.input:focus + .focus-input + .symbol-input {\r\n  color: #018512;\r\n  padding-left: 20px;\r\n}\r\n\r\n/*[ Button ]*/\r\n\r\n.container-login-form-btn {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.login-form-btn {\r\n  font-family: Montserrat-Bold;\r\n  font-size: 15px;\r\n  line-height: 1.5;\r\n  color: #202524;\r\n\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background: #0a583173;\r\n  /* background: #333333; */\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 0 25px;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.login-form-btn::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  top: 0;\r\n  left: 0;\r\n  background: #07b41e;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  opacity: 0;\r\n}\r\n\r\n.login-form-btn:hover {\r\n  background: transparent;\r\n  color: #fff;\r\n}\r\n\r\n.login-form-btn:hover:before {\r\n  opacity: 1;\r\n}\r\n\r\n/*[ Alert validate ]*/\r\n\r\n.validate-input {\r\n  position: relative;\r\n}\r\n\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  max-width: 70%;\r\n  background-color: white;\r\n  border: 1px solid #c80000;\r\n  border-radius: 14px;\r\n  padding: 4px 25px 4px 10px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 8px;\r\n  pointer-events: none;\r\n\r\n  font-family: Montserrat-Bold;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n  -webkit-transition: opacity 0.4s;\r\n  transition: opacity 0.4s;\r\n}\r\n\r\n.alert-validate::after {\r\n  content: \"\\f06a\";\r\n  font-family: FontAwesome;\r\n  display: block;\r\n  position: absolute;\r\n  color: #c80000;\r\n  font-size: 15px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 13px;\r\n}\r\n\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*[ responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n  .wrap-login {\r\n    padding-top: 80px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n\r\n/*[ PADDING ]*/\r\n\r\n.p-t-10 {padding-top: 10px;}\r\n\r\n.p-t-20 {padding-top: 20px;}\r\n\r\n.p-t-122 {padding-top: 150px;}\r\n\r\n.p-b-30 {padding-bottom: 30px;}\r\n\r\n.p-b-230 {padding-bottom: 230px;}\r\n\r\n/*[ MARGIN ]*/\r\n\r\n.m-b-10 {margin-bottom: 10px;}\r\n\r\n.text-center {text-align: center;}\r\n\r\n.w-full {width: 100%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtDQUNiLDJDQUEyQztBQUM1Qzs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0NBQ0MsK0JBQStCO0NBQy9CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFlBQVk7Q0FDWixXQUFXO0NBQ1gsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQiw0QkFBNEI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHFCQUFxQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsZ0RBQWdEOztBQUVoRDtDQUNDLCtCQUErQjtDQUMvQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBR0EsZ0RBQWdEOztBQUNoRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUdBLGNBQWM7O0FBQ2Q7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUtBLFlBQVk7O0FBRVo7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUlBO0tBQ0s7O0FBQ0w7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUlBLGdEQUFnRDs7QUFDaEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBR0EsWUFBWTs7QUFDWjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjOztFQUVkLG9CQUFvQjtFQUlwQixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQiw0QkFBNEI7RUFHNUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQSxhQUFhOztBQUNiO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUlwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZiw0QkFBNEI7RUFHNUIsb0JBQW9COztFQUVwQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLE1BQU07RUFDTixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUc1QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFJQSxxQkFBcUI7O0FBRXJCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQixVQUFVOztFQUVWLGdDQUFnQztFQUdoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFJQSxjQUFjOztBQUVkLFNBQVMsaUJBQWlCLENBQUM7O0FBRTNCLFNBQVMsaUJBQWlCLENBQUM7O0FBRTNCLFVBQVUsa0JBQWtCLENBQUM7O0FBRTdCLFNBQVMsb0JBQW9CLENBQUM7O0FBRTlCLFVBQVUscUJBQXFCLENBQUM7O0FBS2hDLGFBQWE7O0FBRWIsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsY0FBYyxrQkFBa0IsQ0FBQzs7QUFDakMsU0FBUyxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gIGJhY2tncm91bmQ6ICMwYTU4MzE3MztcclxuICBoZWlnaHQ6IDEwMCU7XHJcblx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5hIHtcclxuXHRmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHRsaW5lLWhlaWdodDogMS43O1xyXG5cdGNvbG9yOiAjMGMwNTA1O1xyXG5cdG9wYWNpdHk6IDEwMDtcclxuXHRtYXJnaW46IDBweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbmE6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbnAge1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjc7XHJcblx0Y29sb3I6ICM2NjY2NjY7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmlucHV0IHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qWyBVdGlsaXR5IF0qL1xyXG4udHh0MSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzZDRkNGE7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qWyBsb2dpbiBdKi9cclxuXHJcbi5jb250YWluZXItbG9naW4geyBcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ2luOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi53cmFwLWxvZ2luIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyAgXSovXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ud3JhcC1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcclxufVxyXG5cclxuXHJcbi8qWyBGb2N1cyBdKi9cclxuLmZvY3VzLWlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEwLCAxNTAsIDQwLCAwLjY2NCk7XHJcbn0gXHJcblxyXG4uc3ltYm9sLWlucHV0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQgKyAuc3ltYm9sLWlucHV0IHtcclxuICBjb2xvcjogIzAxODUxMjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKlsgQnV0dG9uIF0qL1xyXG4uY29udGFpbmVyLWxvZ2luLWZvcm0tYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0biB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzIwMjUyNDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG4gIC8qIGJhY2tncm91bmQ6ICMzMzMzMzM7ICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0bjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjMDdiNDFlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBBbGVydCB2YWxpZGF0ZSBdKi9cclxuXHJcbi52YWxpZGF0ZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogOHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xyXG4gIGNvbG9yOiAjYzgwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcZjA2YVwiO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNjODAwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogMTNweDtcclxufVxyXG5cclxuLmFsZXJ0LXZhbGlkYXRlOmhvdmVyOmJlZm9yZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qWyByZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXAtbG9naW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKlsgUEFERElORyBdKi9cclxuXHJcbi5wLXQtMTAge3BhZGRpbmctdG9wOiAxMHB4O31cclxuXHJcbi5wLXQtMjAge3BhZGRpbmctdG9wOiAyMHB4O31cclxuXHJcbi5wLXQtMTIyIHtwYWRkaW5nLXRvcDogMTUwcHg7fVxyXG5cclxuLnAtYi0zMCB7cGFkZGluZy1ib3R0b206IDMwcHg7fVxyXG5cclxuLnAtYi0yMzAge3BhZGRpbmctYm90dG9tOiAyMzBweDt9XHJcblxyXG5cclxuXHJcblxyXG4vKlsgTUFSR0lOIF0qL1xyXG5cclxuLm0tYi0xMCB7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbi50ZXh0LWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnctZnVsbCB7d2lkdGg6IDEwMCU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.validation = false;
        this.email = null;
        this.password = null;
        this.confirm = null;
        this.getotp = null;
        this.otp = null;
        this.checkEmail = () => {
            if (!this.email) {
                this.toastr.warning('Please enter your email');
            }
            else {
                this.appService.getvalidateemail(this.email).subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        this.validation = true;
                        this.otp = Math.random().toString(10).substring(2, 8).toLocaleUpperCase();
                        this.appService.getOTP(this.otp, this.email).subscribe((apiResponse) => {
                            if (apiResponse.status === 200) {
                                this.toastr.success(apiResponse.message);
                            }
                            else {
                                this.toastr.error(apiResponse.message);
                            }
                        });
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                        this.validation = false;
                    }
                }, (err) => {
                    this.toastr.error(err.error.message);
                });
            }
        }; // end checkEmail
        this.back = () => {
            this.validation = false;
        };
        this.resetPassword = () => {
            if (!this.password) {
                this.toastr.warning('Please enter your password');
            }
            else if (this.confirm == null || this.confirm == undefined) {
                this.toastr.warning('Confirm password is empty');
            }
            else {
                if (this.confirm != this.password) {
                    this.toastr.warning('Password does not match!');
                }
                else {
                    if (this.getotp == this.otp) {
                        this.appService.resetPassword(this.email, this.password).subscribe((apiResponse) => {
                            if (apiResponse.status === 200) {
                                this.toastr.success(apiResponse.message);
                                this.router.navigate(['/login']);
                                this.validation = null;
                            }
                            else {
                                this.toastr.error(apiResponse.message);
                                this.validation = true;
                            }
                        }, (err) => {
                            this.toastr.error(err.error.message);
                        });
                    }
                    else {
                        this.toastr.warning('Please check the OTP');
                    }
                }
            }
        }; // end of resetPassword
    }
    ngOnInit() {
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {  \r\n  background: #0a583173;\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Montserrat-Regular;\r\n\tfont-size: 17px;\r\n\tline-height: 1.7;\r\n\tcolor: #0c0505;\r\n\topacity: 100;\r\n\tmargin: 0px;\r\n\t-webkit-transition: all 0.4s;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.5s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\np {\r\n\tfont-family: Montserrat-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n/*[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 16px;\r\n  color: #3d4d4a;\r\n  line-height: 1;\r\n}\r\n\r\n/*[ login ]*/\r\n\r\n.container-login {\r\n  min-height: 10vh;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  \r\n  position: relative;\r\n}\r\n\r\n.container-login::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  background: #0a583173;\r\n  opacity: 0.9;\r\n}\r\n\r\n.wrap-login {\r\n  width: 300px;\r\n  background: transparent;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[  ]*/\r\n\r\n.login-form {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n.wrap-input {\r\n  position: relative;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.input {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n  font-size: 15px;\r\n  line-height: 1.2;\r\n  color: #333333;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  background: #fff;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  padding: 0 30px 0 53px;\r\n}\r\n\r\n/*[ Focus ]*/\r\n\r\n.focus-input {\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 0px 0px 0px;\r\n  color: rgba(10, 150, 40, 0.664);\r\n}\r\n\r\n.symbol-input {\r\n  font-size: 15px;\r\n  color: #999999;\r\n\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-left: 30px;\r\n  pointer-events: none;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.input:focus + .focus-input + .symbol-input {\r\n  color: #018512;\r\n  padding-left: 20px;\r\n}\r\n\r\n/*[ Button ]*/\r\n\r\n.container-login-form-btn {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.login-form-btn {\r\n  font-family: Montserrat-Bold;\r\n  font-size: 15px;\r\n  line-height: 1.5;\r\n  color: #202524;\r\n\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background: #0a583173;\r\n  /* background: #333333; */\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 0 25px;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.login-form-btn::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  top: 0;\r\n  left: 0;\r\n  background: #07b41e;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  opacity: 0;\r\n}\r\n\r\n.login-form-btn:hover {\r\n  background: transparent;\r\n  color: #fff;\r\n}\r\n\r\n.login-form-btn:hover:before {\r\n  opacity: 1;\r\n}\r\n\r\n/*[ Alert validate ]*/\r\n\r\n.validate-input {\r\n  position: relative;\r\n}\r\n\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  max-width: 70%;\r\n  background-color: white;\r\n  border: 1px solid #c80000;\r\n  border-radius: 14px;\r\n  padding: 4px 25px 4px 10px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 8px;\r\n  pointer-events: none;\r\n\r\n  font-family: Montserrat-Bold;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n  -webkit-transition: opacity 0.4s;\r\n  transition: opacity 0.4s;\r\n}\r\n\r\n.alert-validate::after {\r\n  content: \"\\f06a\";\r\n  font-family: FontAwesome;\r\n  display: block;\r\n  position: absolute;\r\n  color: #c80000;\r\n  font-size: 15px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 13px;\r\n}\r\n\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*[ responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n  .wrap-login {\r\n    padding-top: 80px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n\r\n/*[ PADDING ]*/\r\n\r\n.p-t-10 {padding-top: 10px;}\r\n\r\n.p-t-20 {padding-top: 20px;}\r\n\r\n.p-t-122 {padding-top: 150px;}\r\n\r\n.p-b-30 {padding-bottom: 30px;}\r\n\r\n.p-b-230 {padding-bottom: 230px;}\r\n\r\n/*[ MARGIN ]*/\r\n\r\n.m-b-10 {margin-bottom: 10px;}\r\n\r\n.text-center {text-align: center;}\r\n\r\n.w-full {width: 100%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0NBQ3RCLDJDQUEyQztBQUM1Qzs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0NBQ0MsK0JBQStCO0NBQy9CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFlBQVk7Q0FDWixXQUFXO0NBQ1gsNEJBQW9CO0NBQXBCLG9CQUFvQjtDQUNwQiw0QkFBNEI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHFCQUFxQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUEsZ0RBQWdEOztBQUVoRDtDQUNDLCtCQUErQjtDQUMvQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBR0EsZ0RBQWdEOztBQUNoRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUdBLGNBQWM7O0FBQ2Q7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUtBLFlBQVk7O0FBRVo7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBSUE7S0FDSzs7QUFDTDtFQUNFLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBSUEsZ0RBQWdEOztBQUNoRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFHQSxZQUFZOztBQUNaO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7O0VBRWQsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7O0VBRXBCLDRCQUE0QjtFQUc1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUdBLGFBQWE7O0FBQ2I7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlOztFQUVmLDRCQUE0QjtFQUc1QixvQkFBb0I7O0VBRXBCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBRzVCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUlBLHFCQUFxQjs7QUFFckI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsUUFBUTtFQUNSLG1DQUFtQztFQUluQywyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLFVBQVU7O0VBRVYsZ0NBQWdDO0VBR2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUlBLGNBQWM7O0FBRWQsU0FBUyxpQkFBaUIsQ0FBQzs7QUFFM0IsU0FBUyxpQkFBaUIsQ0FBQzs7QUFFM0IsVUFBVSxrQkFBa0IsQ0FBQzs7QUFFN0IsU0FBUyxvQkFBb0IsQ0FBQzs7QUFFOUIsVUFBVSxxQkFBcUIsQ0FBQzs7QUFLaEMsYUFBYTs7QUFFYixTQUFTLG1CQUFtQixDQUFDOztBQUM3QixjQUFjLGtCQUFrQixDQUFDOztBQUNqQyxTQUFTLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwgeyAgXHJcbiAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuYSB7XHJcblx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNztcclxuXHRjb2xvcjogIzBjMDUwNTtcclxuXHRvcGFjaXR5OiAxMDA7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG5hOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5wIHtcclxuXHRmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMS43O1xyXG5cdGNvbG9yOiAjNjY2NjY2O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbnB1dCB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKlsgVXRpbGl0eSBdKi9cclxuLnR4dDEge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjM2Q0ZDRhO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKlsgbG9naW4gXSovXHJcblxyXG4uY29udGFpbmVyLWxvZ2luIHtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ2luOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMwYTU4MzE3MztcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi53cmFwLWxvZ2luIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyAgXSovXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ud3JhcC1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcclxufVxyXG5cclxuXHJcbi8qWyBGb2N1cyBdKi9cclxuLmZvY3VzLWlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDEwLCAxNTAsIDQwLCAwLjY2NCk7XHJcbn0gXHJcblxyXG4uc3ltYm9sLWlucHV0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQgKyAuc3ltYm9sLWlucHV0IHtcclxuICBjb2xvcjogIzAxODUxMjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKlsgQnV0dG9uIF0qL1xyXG4uY29udGFpbmVyLWxvZ2luLWZvcm0tYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0biB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzIwMjUyNDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG4gIC8qIGJhY2tncm91bmQ6ICMzMzMzMzM7ICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0bjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjMDdiNDFlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBBbGVydCB2YWxpZGF0ZSBdKi9cclxuXHJcbi52YWxpZGF0ZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogOHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xyXG4gIGNvbG9yOiAjYzgwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcZjA2YVwiO1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNjODAwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogMTNweDtcclxufVxyXG5cclxuLmFsZXJ0LXZhbGlkYXRlOmhvdmVyOmJlZm9yZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi8qWyByZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXAtbG9naW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKlsgUEFERElORyBdKi9cclxuXHJcbi5wLXQtMTAge3BhZGRpbmctdG9wOiAxMHB4O31cclxuXHJcbi5wLXQtMjAge3BhZGRpbmctdG9wOiAyMHB4O31cclxuXHJcbi5wLXQtMTIyIHtwYWRkaW5nLXRvcDogMTUwcHg7fVxyXG5cclxuLnAtYi0zMCB7cGFkZGluZy1ib3R0b206IDMwcHg7fVxyXG5cclxuLnAtYi0yMzAge3BhZGRpbmctYm90dG9tOiAyMzBweDt9XHJcblxyXG5cclxuXHJcblxyXG4vKlsgTUFSR0lOIF0qL1xyXG5cclxuLm0tYi0xMCB7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbi50ZXh0LWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnctZnVsbCB7d2lkdGg6IDEwMCU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.signinFunction = () => {
            if (!this.email) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else {
                let data = {
                    email: this.email,
                    password: this.password
                };
                this.appService.signinFunction(data)
                    .subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        this.toastr.success(apiResponse.message);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('email');
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('email', apiResponse.data.userDetails.email);
                        this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        this.router.navigate(['/home']);
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                    }
                }, (err) => {
                    this.toastr.error(err.error.message);
                });
            } // end condition
        }; // end signinFunction
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n\tfont-family: Montserrat-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n/*[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Montserrat-Regular;\r\n  font-size: 16px;\r\n  color: #3d4d4a;\r\n  line-height: 1;\r\n}\r\n\r\n/*[ login ]*/\r\n\r\n.container-login {\r\n  width: 100%;  \r\n  min-height: 10vh;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  \r\n  position: relative;\r\n}\r\n\r\n.container-login::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background: #0a583173;\r\n  opacity: 0.9;\r\n}\r\n\r\n.wrap-login {\r\n  width: 300px;\r\n  background: transparent;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n[  ]*/\r\n\r\n.login-form {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\n.wrap-input {\r\n  position: relative;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.input,#category {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n  font-size: 15px;\r\n  height: 40px;\r\n  color: #333333;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  background: #fff;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  padding: 0 30px 0 53px;\r\n}\r\n\r\n/*[ Focus ]*/\r\n\r\n.focus-input {\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 0px 0px 0px;\r\n  color: rgba(10, 150, 40, 0.664);\r\n}\r\n\r\n.symbol-input {\r\n  font-size: 15px;\r\n  color: #999999;\r\n\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-left: 30px;\r\n  pointer-events: none;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.input:focus + .focus-input + .symbol-input {\r\n  color: #018512;\r\n  padding-left: 20px;\r\n}\r\n\r\n/*[ Button ]*/\r\n\r\n.container-login-form-btn {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.login-form-btn {\r\n  font-family: Montserrat-Bold;\r\n  font-size: 15px;\r\n  line-height: 1.5;\r\n  color: #202524;\r\n\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  background: #0a583173;\r\n  /* background: #333333; */\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 0 25px;\r\n\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.login-form-btn::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  top: 0;\r\n  left: 0;\r\n  background: #07b41e;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  opacity: 0;\r\n}\r\n\r\n.login-form-btn:hover {\r\n  background: transparent;\r\n  color: #fff;\r\n}\r\n\r\n.login-form-btn:hover:before {\r\n  opacity: 1;\r\n}\r\n\r\n/*[ Alert validate ]*/\r\n\r\n.validate-input {\r\n  position: relative;\r\n}\r\n\r\n.alert-validate::before {\r\n  content: attr(data-validate);\r\n  position: absolute;\r\n  max-width: 70%;\r\n  background-color: white;\r\n  border: 1px solid #c80000;\r\n  border-radius: 14px;\r\n  padding: 4px 25px 4px 10px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 8px;\r\n  pointer-events: none;\r\n\r\n  font-family: Montserrat-Bold;\r\n  color: #c80000;\r\n  font-size: 13px;\r\n  line-height: 1.4;\r\n  text-align: left;\r\n\r\n  visibility: hidden;\r\n  opacity: 0;\r\n\r\n  -webkit-transition: opacity 0.4s;\r\n  transition: opacity 0.4s;\r\n}\r\n\r\n.alert-validate::after {\r\n  content: \"\\f06a\";\r\n  font-family: FontAwesome;\r\n  display: block;\r\n  position: absolute;\r\n  color: #c80000;\r\n  font-size: 15px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  right: 13px;\r\n}\r\n\r\n.alert-validate:hover:before {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .alert-validate::before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*[ responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n  .wrap-login {\r\n    padding-top: 80px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n\r\n/*[ PADDING ]*/\r\n\r\n.p-t-10 {padding-top: 10px;}\r\n\r\n.p-t-20 {padding-top: 20px;}\r\n\r\n.p-t-122 {padding-top: 70px;}\r\n\r\n.p-b-30 {padding-bottom: 30px;}\r\n\r\n.p-b-230 {padding-bottom: 120px;}\r\n\r\n/*[ MARGIN ]*/\r\n\r\n.m-b-10 {margin-bottom: 10px;}\r\n\r\n.text-center {text-align: center;}\r\n\r\n.w-full {width: 100%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywyQ0FBMkM7QUFDNUM7O0FBRUEsZ0RBQWdEOztBQUdoRCxnREFBZ0Q7O0FBQ2hEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFHQSxjQUFjOztBQUNkO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFLQSxZQUFZOztBQUVaO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUlBO0tBQ0s7O0FBQ0w7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUlBLGdEQUFnRDs7QUFDaEQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7O0VBRWQsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBR0EsWUFBWTs7QUFDWjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjOztFQUVkLG9CQUFvQjtFQUlwQixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQiw0QkFBNEI7RUFHNUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQSxhQUFhOztBQUNiO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUlwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZiw0QkFBNEI7RUFHNUIsb0JBQW9COztFQUVwQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLE1BQU07RUFDTixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUc1QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFJQSxxQkFBcUI7O0FBRXJCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQixVQUFVOztFQUVWLGdDQUFnQztFQUdoQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFJQSxjQUFjOztBQUVkLFNBQVMsaUJBQWlCLENBQUM7O0FBRTNCLFNBQVMsaUJBQWlCLENBQUM7O0FBRTNCLFVBQVUsaUJBQWlCLENBQUM7O0FBRTVCLFNBQVMsb0JBQW9CLENBQUM7O0FBRTlCLFVBQVUscUJBQXFCLENBQUM7O0FBS2hDLGFBQWE7O0FBRWIsU0FBUyxtQkFBbUIsQ0FBQzs7QUFDN0IsY0FBYyxrQkFBa0IsQ0FBQzs7QUFDakMsU0FBUyxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG5cdGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmlucHV0IHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qWyBVdGlsaXR5IF0qL1xyXG4udHh0MSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzZDRkNGE7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qWyBsb2dpbiBdKi9cclxuXHJcbi5jb250YWluZXItbG9naW4ge1xyXG4gIHdpZHRoOiAxMDAlOyAgXHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1sb2dpbjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLndyYXAtbG9naW4ge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5bICBdKi9cclxuLmxvZ2luLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi53cmFwLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmlucHV0LCNjYXRlZ29yeSB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogIzMzMzMzMztcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAwIDMwcHggMCA1M3B4O1xyXG59XHJcblxyXG5cclxuLypbIEZvY3VzIF0qL1xyXG4uZm9jdXMtaW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTAsIDE1MCwgNDAsIDAuNjY0KTtcclxufSBcclxuXHJcbi5zeW1ib2wtaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyArIC5mb2N1cy1pbnB1dCArIC5zeW1ib2wtaW5wdXQge1xyXG4gIGNvbG9yOiAjMDE4NTEyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcbi8qWyBCdXR0b24gXSovXHJcbi5jb250YWluZXItbG9naW4tZm9ybS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tYnRuIHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjMjAyNTI0O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiAjMGE1ODMxNzM7XHJcbiAgLyogYmFja2dyb3VuZDogIzMzMzMzMzsgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tYnRuOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMwN2I0MWU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ0bjpob3ZlcjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuLypbIEFsZXJ0IHZhbGlkYXRlIF0qL1xyXG5cclxuLnZhbGlkYXRlLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtdmFsaWRhdGUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzgwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogNHB4IDI1cHggNHB4IDEwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XHJcbiAgY29sb3I6ICNjODAwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbn1cclxuXHJcbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDZhXCI7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2M4MDAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLypbIHJlc3BvbnNpdmUgXSovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAud3JhcC1sb2dpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qWyBQQURESU5HIF0qL1xyXG5cclxuLnAtdC0xMCB7cGFkZGluZy10b3A6IDEwcHg7fVxyXG5cclxuLnAtdC0yMCB7cGFkZGluZy10b3A6IDIwcHg7fVxyXG5cclxuLnAtdC0xMjIge3BhZGRpbmctdG9wOiA3MHB4O31cclxuXHJcbi5wLWItMzAge3BhZGRpbmctYm90dG9tOiAzMHB4O31cclxuXHJcbi5wLWItMjMwIHtwYWRkaW5nLWJvdHRvbTogMTIwcHg7fVxyXG5cclxuXHJcblxyXG5cclxuLypbIE1BUkdJTiBdKi9cclxuXHJcbi5tLWItMTAge21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4udGV4dC1jZW50ZXIge3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi53LWZ1bGwge3dpZHRoOiAxMDAlO30iXX0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let SignupComponent = class SignupComponent {
    constructor(appService, router, toastr, vcr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.gender = "Gender";
        this.goToSignIn = () => {
            this.router.navigate(['/login']);
        }; // end goToSignIn
        this.signupFunction = () => {
            if (!this.firstName) {
                this.toastr.warning('enter first name');
            }
            else if (!this.lastName) {
                this.toastr.warning('enter last name');
            }
            else if (!this.place) {
                this.toastr.warning('Enter your place');
            }
            else if (!this.gender || this.gender == 'Gender') {
                this.toastr.warning('enter Gender');
            }
            else if (!this.email) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else if (!this.confirm) {
                this.toastr.warning('enter confirm password');
            }
            else {
                if (this.password != this.confirm) {
                    console.log('password missmatch');
                    this.toastr.warning('password missmatch');
                }
                else {
                    let data = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        gender: this.gender,
                        email: this.email,
                        password: this.password,
                        place: this.place
                    };
                    this.appService.signupFunction(data)
                        .subscribe((apiResponse) => {
                        if (apiResponse.status === 200) {
                            this.toastr.success(apiResponse.message);
                            this.goToSignIn();
                        }
                        else {
                            this.toastr.error(apiResponse.message);
                        }
                    }, (err) => {
                        this.toastr.error(err.error.message);
                    });
                }
            } // end condition
        }; // end signupFunction
    }
    ngOnInit() {
    }
};
SignupComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user/user-details/user-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n  }\r\n  \r\n  .sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n  \r\n  .sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVLGlCQUFpQixDQUFDO0lBQzVCLFlBQVksZUFBZSxDQUFDO0VBQzlCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserDetailsComponent = class UserDetailsComponent {
    constructor(toastr, appService, router, _route) {
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.created = 0;
        this.watched = 0;
        this.assigned = 0;
        this.name = '';
    }
    ngOnInit() {
        this.getALlUsers();
        this.getAllWatchers();
        this.getAllAssignee();
    }
    // for getting details of user issues
    getdetails(email, firstname, lastname) {
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
                    issueCreatedArray.push(i.title);
                }
                if (i.assigned == email) {
                    count2++;
                    issueAssignedArray.push(i.title);
                }
                for (let t of issueIDArray) {
                    if (i.trackingId == t) {
                        issuewatcherArray.push(i.title);
                    }
                }
            }
            this.assigned = count2;
            this.created = count1;
        }
        this.name = firstname + ' ' + lastname;
        this.issueWatcher = issuewatcherArray;
        this.issueAssigned = issueAssignedArray;
        this.issueCreated = issueCreatedArray;
    } // end of getdetails
    getALlUsers() {
        this.appService.getAllUsers().subscribe(data => {
            this.allUsers = data["data"];
        }, error => {
            //console.log("some error occured");
            // console.log(error.error.message)
        });
    } // edn of getALlUsers
    getAllWatchers() {
        this.appService.getAllWatchers().subscribe(data => {
            this.allwatchers = data["data"];
        }, error => {
            //console.log("some error occured");
            // console.log(error.error.message)
        });
    } // end of getAllWatchers
    getAllAssignee() {
        this.appService.getAllIssue('', '').subscribe(data => {
            this.allassignee = data["data"];
        }, error => {
            //console.log("some error occured");
            // console.log(error.error.message)
        });
    } // end of getAllAssignee
    //For opening and closing of the side navigation
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-details/user-details.component.html"),
        styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user/user-details/user-details.component.css")]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');\r\n\r\n.container {\r\n  width: auto;\r\n  padding: 0 15px;\r\n}\r\n\r\nbody, html {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-family: 'Montserrat', sans-serif;\r\n    background: #0a583173;\r\n    opacity: 0.9;\r\n}\r\n\r\ninput[type=\"text\"], #state, #summary, #assigned {\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    height:40px;\r\n    line-height: 50px;\r\n    padding-left: 3rem;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.text-white {\r\n    color: #fff!important;\r\n}\r\n\r\n.label{\r\n    font-size: 1.6rem;\r\n    color: #010100;\r\n    line-height: 5px;\r\n}\r\n\r\n.has-error input[type=\"text\"], .has-error textarea, .has-error select {\r\n    border: 1px solid #ff0400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFOztBQUUzRTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdHxPcGVuK1NhbnMnKTtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuYm9keSwgaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzBhNTgzMTczO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgI3N0YXRlLCAjc3VtbWFyeSwgI2Fzc2lnbmVkIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgY29sb3I6ICMwMTAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG59XHJcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cInRleHRcIl0sIC5oYXMtZXJyb3IgdGV4dGFyZWEsIC5oYXMtZXJyb3Igc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjA0MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







let UserProfileComponent = class UserProfileComponent {
    constructor(_route, router, appService, toastr, location) {
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.location = location;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName');
    }
    ngOnInit() {
        this.getAllUser();
    }
    getAllUser() {
        this.appService.getSingleUser(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('email')).subscribe(data => {
            this.currentUser = data["data"];
        }, error => {
            // console.log("some error occured");
            // console.log(error.error.message)
        });
    } // end get all users
    //for saving user detail
    save() {
        this.appService.editUser(this.currentUser.userId, this.currentUser)
            .subscribe(data => {
            this.toastr.success('Edited successfully!');
            this.router.navigate(['/user-detail']);
        }, error => {
            // console.log("some error occured");
            // console.log(error.error.message)
        });
    } // end edit
    goBackToPreviousPage() {
        this.location.back();
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-profile/user-profile.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user/user-details/user-details.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/home-route-guard.service */ "./src/app/home/home-route-guard.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");















let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
            _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], pathMatch: 'full' },
                { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], pathMatch: 'full' },
                { path: 'user-detail', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"], canActivate: [_home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_13__["HomeRouteGuardService"]], pathMatch: 'full' },
                { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"], canActivate: [_home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_13__["HomeRouteGuardService"]], pathMatch: 'full' }
            ])
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"], _home_home_route_guard_service__WEBPACK_IMPORTED_MODULE_13__["HomeRouteGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project 1\project1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map