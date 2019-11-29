(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stacks-stacks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stacks/add-stack/add-stack.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stacks/add-stack/add-stack.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>add-stack works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stacks/stacks-list/stacks-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stacks/stacks-list/stacks-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\">\n      \n         \n      \n          <ng-container matColumnDef=\"position\">\n            <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n          </ng-container> \n      \n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"weight\">\n            <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"expandedDetail\">\n            <mat-cell *matCellDef=\"let detail\"> \n              The symbol for {{detail.element.name}} is {{detail.element.symbol}}\n            </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                  matRipple \n                  class=\"element-row\" \n                  [class.expanded]=\"expandedElement == row\"\n                  (click)=\"expandedElement = row\"></mat-row>\n          <mat-row *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\"\n                  [@detailExpand]=\"row.element == expandedElement ? 'expanded' : 'collapsed'\"\n                  style=\"overflow: hidden\"> \n          </mat-row>\n        </mat-table>\n      </div>\n      \n      \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stacks/stacks.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stacks/stacks.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div>\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Add</button>\n      </div>\n      <!-- <app-stacks-list></app-stacks-list> -->\n      <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/stacks/add-stack/add-stack.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/stacks/add-stack/add-stack.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWNrcy9hZGQtc3RhY2svYWRkLXN0YWNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stacks/add-stack/add-stack.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/stacks/add-stack/add-stack.component.ts ***!
  \*********************************************************/
/*! exports provided: AddStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStackComponent", function() { return AddStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddStackComponent = class AddStackComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-stack',
        template: __webpack_require__(/*! raw-loader!./add-stack.component.html */ "./node_modules/raw-loader/index.js!./src/app/stacks/add-stack/add-stack.component.html"),
        styles: [__webpack_require__(/*! ./add-stack.component.scss */ "./src/app/stacks/add-stack/add-stack.component.scss")]
    })
], AddStackComponent);



/***/ }),

/***/ "./src/app/stacks/stacks-list/stacks-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/stacks/stacks-list/stacks-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.element-row {\n  position: relative;\n}\n\n.element-row:not(.expanded) {\n  cursor: pointer;\n}\n\n.element-row:not(.expanded):hover {\n  background: #f5f5f5;\n}\n\n.element-row.expanded {\n  border-bottom-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhY2tzL3N0YWNrcy1saXN0L0M6XFxVc2Vyc1xcbWFyb3VcXERlc2t0b3BcXHN0YWdlXFxjbGllbnQvc3JjXFxhcHBcXHN0YWNrc1xcc3RhY2tzLWxpc3RcXHN0YWNrcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFja3Mvc3RhY2tzLWxpc3Qvc3RhY2tzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0YWNrcy9zdGFja3MtbGlzdC9zdGFja3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZWxlbWVudC1yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZCk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLmVsZW1lbnQtcm93LmV4cGFuZGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmVsZW1lbnQtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5lbGVtZW50LXJvdy5leHBhbmRlZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/stacks/stacks-list/stacks-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/stacks/stacks-list/stacks-list.component.ts ***!
  \*************************************************************/
/*! exports provided: StacksListComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksListComponent", function() { return StacksListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let StacksListComponent = class StacksListComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight'];
        this.dataSource = new ExampleDataSource();
        this.isExpansionDetailRow = (i, row) => row.hasOwnProperty('detailRow');
    }
    ngOnInit() {
    }
};
StacksListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stacks-list',
        template: __webpack_require__(/*! raw-loader!./stacks-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/stacks/stacks-list/stacks-list.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', visibility: 'visible' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./stacks-list.component.scss */ "./src/app/stacks/stacks-list/stacks-list.component.scss")]
    })
], StacksListComponent);

const data = [
    { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { name: 'Helium', weight: 4.0026, symbol: 'He' },
    { name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { name: 'Boron', weight: 10.811, symbol: 'B' },
    { name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
class ExampleDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"] {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        const rows = [];
        data.forEach(element => rows.push(element, { detailRow: true, element }));
        console.log(rows);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(rows);
    }
    disconnect() { }
}


/***/ }),

/***/ "./src/app/stacks/stacks-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stacks/stacks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StacksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksRoutingModule", function() { return StacksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stacks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacks.component */ "./src/app/stacks/stacks.component.ts");
/* harmony import */ var _stacks_list_stacks_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacks-list/stacks-list.component */ "./src/app/stacks/stacks-list/stacks-list.component.ts");
/* harmony import */ var _add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-stack/add-stack.component */ "./src/app/stacks/add-stack/add-stack.component.ts");






const routes = [
    { path: '', component: _stacks_component__WEBPACK_IMPORTED_MODULE_3__["StacksComponent"],
        children: [
            { path: 'list', component: _stacks_list_stacks_list_component__WEBPACK_IMPORTED_MODULE_4__["StacksListComponent"] },
            { path: 'add', component: _add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_5__["AddStackComponent"] },
        ]
    }
];
let StacksRoutingModule = class StacksRoutingModule {
};
StacksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StacksRoutingModule);



/***/ }),

/***/ "./src/app/stacks/stacks.component.scss":
/*!**********************************************!*\
  !*** ./src/app/stacks/stacks.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}\n\ndiv {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhY2tzL0M6XFxVc2Vyc1xcbWFyb3VcXERlc2t0b3BcXHN0YWdlXFxjbGllbnQvc3JjXFxhcHBcXHN0YWNrc1xcc3RhY2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFja3Mvc3RhY2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0YWNrcy9zdGFja3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuXHJcbiAgZGl2e1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gIH0iLCJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbmRpdiB7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/stacks/stacks.component.ts":
/*!********************************************!*\
  !*** ./src/app/stacks/stacks.component.ts ***!
  \********************************************/
/*! exports provided: StacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksComponent", function() { return StacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-stack/add-stack.component */ "./src/app/stacks/add-stack/add-stack.component.ts");




let StacksComponent = class StacksComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(_add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_3__["AddStackComponent"], {
            width: '1300px', disableClose: true
        });
    }
};
StacksComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
StacksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stacks',
        template: __webpack_require__(/*! raw-loader!./stacks.component.html */ "./node_modules/raw-loader/index.js!./src/app/stacks/stacks.component.html"),
        styles: [__webpack_require__(/*! ./stacks.component.scss */ "./src/app/stacks/stacks.component.scss")]
    })
], StacksComponent);



/***/ }),

/***/ "./src/app/stacks/stacks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stacks/stacks.module.ts ***!
  \*****************************************/
/*! exports provided: StacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksModule", function() { return StacksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stacks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacks-routing.module */ "./src/app/stacks/stacks-routing.module.ts");
/* harmony import */ var _stacks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacks.component */ "./src/app/stacks/stacks.component.ts");
/* harmony import */ var _stacks_list_stacks_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacks-list/stacks-list.component */ "./src/app/stacks/stacks-list/stacks-list.component.ts");
/* harmony import */ var _add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-stack/add-stack.component */ "./src/app/stacks/add-stack/add-stack.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");








let StacksModule = class StacksModule {
};
StacksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stacks_component__WEBPACK_IMPORTED_MODULE_4__["StacksComponent"], _stacks_list_stacks_list_component__WEBPACK_IMPORTED_MODULE_5__["StacksListComponent"], _add_stack_add_stack_component__WEBPACK_IMPORTED_MODULE_6__["AddStackComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _stacks_routing_module__WEBPACK_IMPORTED_MODULE_3__["StacksRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ]
    })
], StacksModule);



/***/ })

}]);
//# sourceMappingURL=stacks-stacks-module-es2015.js.map