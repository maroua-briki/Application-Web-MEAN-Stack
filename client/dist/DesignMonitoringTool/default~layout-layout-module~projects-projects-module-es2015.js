(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-layout-module~projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/add-project/add-project.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/add-project/add-project.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>add-project works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/azure-info/azure-info.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/azure-info/azure-info.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"add-title\">\n    <h2 class=\"primary\">Fill your azure info</h2>\n  </div>\n  <div>\n    <form [formGroup]=\"azureForm\"  (change)=\"formChanged()\" class=\"form\">\n\n      <mat-grid-list cols=\"3\" [cols]=\"breakpoint\" rowHeight=\"85px\" \n      (window:resize)=\"onResize($event)\">\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput formControlName=\"clientID\" placeholder=\"clientID\">\n                <mat-error *ngIf=\"azureForm.controls.clientID.hasError('required')\">\n                    Please enter your id\n                  </mat-error>\n            </mat-form-field>\n          \n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n\n            <mat-form-field class=\"example-full-width\">\n              <input matInput formControlName=\"subscriptionID\" placeholder=\"subscriptionID\">\n              <mat-error *ngIf=\"azureForm.controls.subscriptionID.hasError('required')\">\n                  Please enter your sub id\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input formControlName=\"tenantID\" matInput placeholder=\"tenantID*\">\n              <mat-error *ngIf=\"azureForm.controls.tenantID.hasError('required')\">\n                  Please enter your tenant  id\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input formControlName=\"clientSecret\" matInput placeholder=\"clientSecret\">\n              <mat-error *ngIf=\"azureForm.controls.clientSecret.hasError('required')\">\n                  Please enter your client secret\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input matInput formControlName=\"VMusername\" placeholder=\"VMusername\">\n              <mat-error *ngIf=\"azureForm.controls.VMusername.hasError('required')\">\n                  Please enter your VMusername\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input matInput placeholder=\"VMpassword\" formControlName=\"VMpassword\">\n              <mat-error *ngIf=\"azureForm.controls.VMpassword.hasError('required')\">\n                  Please enter your VMpassword\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n\n            <mat-form-field  class=\"example-full-width\">\n              <input formControlName=\"location\" matInput placeholder=\"location\">\n              <mat-error *ngIf=\"azureForm.controls.location.hasError('required')\">\n                  Please enter your location\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input formControlName=\"prefix\" matInput placeholder=\"prefix\">\n              <mat-error *ngIf=\"azureForm.controls.prefix.hasError('required')\">\n                  Please enter your prefix\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"text-inside\">\n            <mat-form-field  class=\"example-full-width\">\n              <input formControlName=\"VMsize\" matInput placeholder=\"VMsize\">\n              <mat-error *ngIf=\"azureForm.controls.VMsize.hasError('required')\">\n                  Please enter vm size\n                </mat-error>\n            </mat-form-field>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"text-inside\">\n        <mat-form-field  class=\"example-full-width\">\n          <input formControlName=\"VMnumber\" matInput placeholder=\"VMnumber\">\n          <mat-error *ngIf=\"azureForm.controls.VMnumber.hasError('required')\">\n              Please enter your vm's number\n            </mat-error>\n        </mat-form-field>\n        </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"text-inside\">\n        <mat-form-field  class=\"example-full-width\">\n          <input formControlName=\"offer\" matInput placeholder=\"offer\">\n        </mat-form-field>\n        </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"text-inside\">\n        <mat-form-field  class=\"example-full-width\">\n          <input formControlName=\"sku\" matInput placeholder=\"sku\">\n        </mat-form-field>\n        </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"text-inside\">\n        <mat-form-field  class=\"example-full-width\">\n          <input formControlName=\"version\" matInput placeholder=\"version\">\n        </mat-form-field>\n        </div>\n        </mat-grid-tile>\n\n      </mat-grid-list>\n\n        <div class=\"btn-sec\">\n            <button mat-raised-button type=\"button\" class=\"Discard-btn\" (click)=\"openDialog()\">Cancel</button>\n            <button mat-raised-button type=\"submit\" color=\"primary\"  [disabled]=\"!azureForm.valid\" class=\"Update-btn\" (click)=\"onAdd()\">Save</button>\n\n          </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/delete/delete.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/delete/delete.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Are you sure you want to discard the changes?</h3>\n<div>\n  <button mat-raised-button type=\"button\" class=\"Delete-btn\" (click)=\"cancelN()\">Discard</button>\n  <button mat-raised-button type=\"submit\" color=\"primary\" class=\"Cancel-btn\" (click)=\"cancel()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects-list/projects-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects-list/projects-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\">\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"stacksCount\">\n            <th mat-header-cell *matHeaderCellDef> stacksCount </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.stacksCount}} </td>\n          </ng-container>\n      \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"clustersCount\">\n            <th mat-header-cell *matHeaderCellDef> clustersCount </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.clustersCount}} </td>\n          </ng-container>\n      \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"nodesCount\">\n            <th mat-header-cell *matHeaderCellDef> nodesCount </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.nodesCount}} </td>\n          </ng-container>\n      \n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"volumesCount\">\n            <th mat-header-cell *matHeaderCellDef> volumesCount </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.volumesCount}} </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Add</button>\n      </div>\n       <!-- <app-projects-list></app-projects-list> -->\n       <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/page-header/page-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/page-header/page-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                {{heading}}\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/home']\">Home</a>\n                </li>\n                <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n            </ol>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/projects/add-project/add-project.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/projects/add-project/add-project.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/add-project/add-project.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/add-project/add-project.component.ts ***!
  \***************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddProjectComponent = class AddProjectComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-project',
        template: __webpack_require__(/*! raw-loader!./add-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/add-project/add-project.component.html"),
        styles: [__webpack_require__(/*! ./add-project.component.scss */ "./src/app/projects/add-project/add-project.component.scss")]
    })
], AddProjectComponent);



/***/ }),

/***/ "./src/app/projects/azure-info/azure-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/projects/azure-info/azure-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 90%;\n}\n\n.id-name {\n  width: 35%;\n  margin-right: 5px;\n}\n\n.id-number {\n  width: 55%;\n  margin-left: 5px;\n}\n\n.phone-name {\n  width: 45px;\n  margin-right: 5px;\n}\n\n.country-code {\n  width: 25%;\n  margin-left: 1px;\n}\n\n.phone-number {\n  width: 65%;\n  margin-left: 5px;\n}\n\n.btn-sec {\n  margin-right: 5rem !important;\n  text-align: right;\n  margin-top: 1.5em;\n}\n\n.Update-btn {\n  margin: 5px;\n}\n\n.Discard-btn {\n  margin: 5px;\n}\n\n.text-inside {\n  position: absolute;\n  left: 5px;\n  width: 100%;\n}\n\n@media (max-width: 800px) {\n  .btn-sec {\n    margin-right: 1rem !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .btn-sec {\n    margin-right: 1rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYXp1cmUtaW5mby9DOlxcVXNlcnNcXG1hcm91XFxEZXNrdG9wXFxzdGFnZVxcY2xpZW50L3NyY1xcYXBwXFxwcm9qZWN0c1xcYXp1cmUtaW5mb1xcYXp1cmUtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvYXp1cmUtaW5mby9henVyZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExFO0VBQ0UsV0FBQTtBQ1FKOztBRE5FO0VBQ0UsV0FBQTtBQ1NKOztBRFBFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJFO0VBQ0U7SUFDRSw2QkFBQTtFQ1dKO0FBQ0Y7O0FEVEU7RUFDRTtJQUNFLDZCQUFBO0VDV0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2F6dXJlLWluZm8vYXp1cmUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5pZC1uYW1lIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmlkLW51bWJlciB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLnBob25lLW5hbWUge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmNvdW50cnktY29kZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICB9XHJcbiAgLnBob25lLW51bWJlciB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLmJ0bi1zZWMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIH1cclxuICAuVXBkYXRlLWJ0biB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLkRpc2NhcmQtYnRuIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICAudGV4dC1pbnNpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmJ0bi1zZWMge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYnRuLXNlYyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5pZC1uYW1lIHtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pZC1udW1iZXIge1xuICB3aWR0aDogNTUlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucGhvbmUtbmFtZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvdW50cnktY29kZSB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi5waG9uZS1udW1iZXIge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYnRuLXNlYyB7XG4gIG1hcmdpbi1yaWdodDogNXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG59XG5cbi5VcGRhdGUtYnRuIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5EaXNjYXJkLWJ0biB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4udGV4dC1pbnNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/azure-info/azure-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/projects/azure-info/azure-info.component.ts ***!
  \*************************************************************/
/*! exports provided: AzureInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureInfoComponent", function() { return AzureInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_azure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/azure.service */ "./src/app/shared/services/azure.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/projects/delete/delete.component.ts");







let AzureInfoComponent = class AzureInfoComponent {
    constructor(_formBuilder, private_router, _azureService, dialog) {
        this._formBuilder = _formBuilder;
        this._azureService = _azureService;
        this.dialog = dialog;
        this.wasFormChanged = false;
        this.azureForm = this._formBuilder.group({
            'clientID': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'subscriptionID': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'tenantID': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'clientSecret': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'VMusername': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'VMpassword': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.checkPassword]],
            'location': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'prefix': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'VMsize': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'VMnumber': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
            'offer': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'sku': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'version': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.breakpoint = window.innerWidth <= 600 ? 1 : 3; // Breakpoint observer code
    }
    get f() { return this.azureForm.controls; }
    checkPassword(control) {
        let enteredPassword = control.value;
        let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
    }
    // tslint:disable-next-line:no-any
    onResize(event) {
        this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
    }
    ngOnInit() { }
    onAdd() {
        this.markAsDirty(this.azureForm);
    }
    openDialog() {
        console.log(this.wasFormChanged);
        if (this.azureForm.dirty) {
            const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"], {
                width: '340px',
            });
        }
        else {
            this.dialog.closeAll();
        }
    }
    markAsDirty(group) {
        group.markAsDirty();
        // tslint:disable-next-line:forin
        for (const i in group.controls) {
            group.controls[i].markAsDirty();
        }
    }
    formChanged() {
        this.wasFormChanged = true;
    }
};
AzureInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_azure_service__WEBPACK_IMPORTED_MODULE_4__["AzureService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
AzureInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-azure-info',
        template: __webpack_require__(/*! raw-loader!./azure-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/azure-info/azure-info.component.html"),
        styles: [__webpack_require__(/*! ./azure-info.component.scss */ "./src/app/projects/azure-info/azure-info.component.scss")]
    })
], AzureInfoComponent);



/***/ }),

/***/ "./src/app/projects/delete/delete.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/projects/delete/delete.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Cancel-btn {\n  margin-right: 0.5em;\n  margin-top: 1em;\n  height: 2.5em;\n  float: right;\n}\n\n.Delete-btn {\n  margin-left: 0.5em;\n  margin-top: 1em;\n  height: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZGVsZXRlL0M6XFxVc2Vyc1xcbWFyb3VcXERlc2t0b3BcXHN0YWdlXFxjbGllbnQvc3JjXFxhcHBcXHByb2plY3RzXFxkZWxldGVcXGRlbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5DYW5jZWwtYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBoZWlnaHQ6Mi41ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5EZWxldGUtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0Oi41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBoZWlnaHQ6Mi41ZW07XHJcbiAgfVxyXG4gICIsIi5DYW5jZWwtYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5EZWxldGUtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGhlaWdodDogMi41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/projects/delete/delete.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/delete/delete.component.ts ***!
  \*****************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DeleteComponent = class DeleteComponent {
    constructor(fb, dialog, dialogRef) {
        this.fb = fb;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
    } // Closing dialog window
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
    cancel() {
        this.dialogRef.close();
    }
    cancelN() {
        this.dialog.closeAll();
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete',
        template: __webpack_require__(/*! raw-loader!./delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/delete/delete.component.html"),
        styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/projects/delete/delete.component.scss")]
    })
], DeleteComponent);



/***/ }),

/***/ "./src/app/projects/projects-list/projects-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/projects/projects-list/projects-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtbGlzdC9DOlxcVXNlcnNcXG1hcm91XFxEZXNrdG9wXFxzdGFnZVxcY2xpZW50L3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMtbGlzdFxccHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects-list/projects-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/projects/projects-list/projects-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");



let ProjectsListComponent = class ProjectsListComponent {
    constructor() {
        this.displayedColumns = ['stacksCount', 'clustersCount', 'nodesCount', 'volumesCount'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() { }
};
ProjectsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! raw-loader!./projects-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects-list/projects-list.component.html"),
        animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./projects-list.component.scss */ "./src/app/projects/projects-list/projects-list.component.scss")]
    })
], ProjectsListComponent);

const ELEMENT_DATA = [
    { stacksCount: 1, clustersCount: 5, nodesCount: 1.0079, volumesCount: 4 },
    { stacksCount: 2, clustersCount: 4, nodesCount: 4.0026, volumesCount: 10 },
    { stacksCount: 3, clustersCount: 3, nodesCount: 6.941, volumesCount: 200 },
    { stacksCount: 4, clustersCount: 2, nodesCount: 9.0122, volumesCount: 500 },
    { stacksCount: 5, clustersCount: 0, nodesCount: 10.811, volumesCount: 20 },
    { stacksCount: 6, clustersCount: 1, nodesCount: 12.0107, volumesCount: 3 },
    { stacksCount: 7, clustersCount: 2, nodesCount: 14.0067, volumesCount: 110 },
    { stacksCount: 8, clustersCount: 3, nodesCount: 15.9994, volumesCount: 120 },
    { stacksCount: 9, clustersCount: 4, nodesCount: 18.9984, volumesCount: 80 },
    { stacksCount: 10, clustersCount: 0, nodesCount: 20.1797, volumesCount: 410 },
];


/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./azure-info/azure-info.component */ "./src/app/projects/azure-info/azure-info.component.ts");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/projects/projects-list/projects-list.component.ts");






const routes = [
    { path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        children: [
            { path: 'list', component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsListComponent"] },
            { path: 'azure', component: _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_4__["AzureInfoComponent"] },
        ]
    }
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectsRoutingModule);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxtYXJvdVxcRGVza3RvcFxcc3RhZ2VcXGNsaWVudC9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gIH0iLCJkaXYge1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./azure-info/azure-info.component */ "./src/app/projects/azure-info/azure-info.component.ts");





let ProjectsComponent = class ProjectsComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(_azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_4__["AzureInfoComponent"], {
            width: '1300px', disableClose: true
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/projects/projects-list/projects-list.component.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/projects/add-project/add-project.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/page-header/page-header.component */ "./src/app/shared/page-header/page-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_azure_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/azure.service */ "./src/app/shared/services/azure.service.ts");
/* harmony import */ var _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./azure-info/azure-info.component */ "./src/app/projects/azure-info/azure-info.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/projects/delete/delete.component.ts");













let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_7__["PageHeaderComponent"],
            _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
            _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"],
            _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_10__["AzureInfoComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"],
            _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjectsRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        exports: [
            _azure_info_azure_info_component__WEBPACK_IMPORTED_MODULE_10__["AzureInfoComponent"],
            _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
            _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"]
        ],
        providers: [_shared_services_azure_service__WEBPACK_IMPORTED_MODULE_9__["AzureService"]],
    })
], ProjectsModule);



/***/ }),

/***/ "./src/app/shared/page-header/page-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/page-header/page-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/page-header/page-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/page-header/page-header.component.ts ***!
  \*************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeaderComponent.prototype, "heading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/page-header/page-header.component.html"),
        styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/page-header/page-header.component.scss")]
    })
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/services/azure.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/azure.service.ts ***!
  \**************************************************/
/*! exports provided: AzureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureService", function() { return AzureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AzureService = class AzureService {
    constructor() { }
};
AzureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AzureService);



/***/ })

}]);
//# sourceMappingURL=default~layout-layout-module~projects-projects-module-es2015.js.map