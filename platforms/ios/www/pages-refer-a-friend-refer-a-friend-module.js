(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refer-a-friend-refer-a-friend-module"],{

/***/ "./src/app/pages/refer-a-friend/refer-a-friend.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/refer-a-friend/refer-a-friend.module.ts ***!
  \***************************************************************/
/*! exports provided: ReferAFriendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAFriendPageModule", function() { return ReferAFriendPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refer_a_friend_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refer-a-friend.page */ "./src/app/pages/refer-a-friend/refer-a-friend.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _refer_a_friend_page__WEBPACK_IMPORTED_MODULE_5__["ReferAFriendPage"]
    }
];
var ReferAFriendPageModule = /** @class */ (function () {
    function ReferAFriendPageModule() {
    }
    ReferAFriendPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_refer_a_friend_page__WEBPACK_IMPORTED_MODULE_5__["ReferAFriendPage"]]
        })
    ], ReferAFriendPageModule);
    return ReferAFriendPageModule;
}());



/***/ }),

/***/ "./src/app/pages/refer-a-friend/refer-a-friend.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/refer-a-friend/refer-a-friend.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n         <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons> \r\n        <ion-title>\r\n            Refer-a-friend\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding>\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>-Social Sharing-</ion-card-subtitle>\r\n    <ion-card-title>Referal Code</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list>\r\n  <ion-item>\r\n    <ion-icon name=\"checkmark-circle-outline\" style=\"height:20px;\"></ion-icon>\r\n    <ion-label>Your referal link is:- http://localhost:4200/sign-up?rc={{userId}}</ion-label> \r\n  </ion-item>\r\n  <ion-item>\r\n    <button class=\"submit-btn\" expand=\"block\">Share </button>\r\n  </ion-item>\r\n\r\n    </ion-list>\r\n  </ion-card-content>\r\n</ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/refer-a-friend/refer-a-friend.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/refer-a-friend/refer-a-friend.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  --color: initial;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: pre-wrap;\n  overflow: hidden;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVmZXItYS1mcmllbmQvRTpcXGlvbmljX25ldy9zcmNcXGFwcFxccGFnZXNcXHJlZmVyLWEtZnJpZW5kXFxyZWZlci1hLWZyaWVuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBUTtFQUNSLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsNkNBQTJDO0VBQzNDLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUVoQix1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWZlci1hLWZyaWVuZC9yZWZlci1hLWZyaWVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgICAtLWNvbG9yOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/refer-a-friend/refer-a-friend.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/refer-a-friend/refer-a-friend.page.ts ***!
  \*************************************************************/
/*! exports provided: ReferAFriendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAFriendPage", function() { return ReferAFriendPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferAFriendPage = /** @class */ (function () {
    function ReferAFriendPage() {
        this.userId = '';
        this.userId = sessionStorage.getItem("loggedInId");
    }
    ReferAFriendPage.prototype.ngOnInit = function () {
    };
    ReferAFriendPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-a-friend',
            template: __webpack_require__(/*! ./refer-a-friend.page.html */ "./src/app/pages/refer-a-friend/refer-a-friend.page.html"),
            styles: [__webpack_require__(/*! ./refer-a-friend.page.scss */ "./src/app/pages/refer-a-friend/refer-a-friend.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferAFriendPage);
    return ReferAFriendPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-refer-a-friend-refer-a-friend-module.js.map