(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-content>\r\n <ion-row>       \r\n    <ion-col>\r\n      <div class=\"ion-text-center\"> \r\n        <ion-img src=\"assets/images/Logo-colive.png\" style=\"max-width: 170px;width: auto;text-align: center; margin: auto;\"></ion-img>   \r\n      </div>\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>       \r\n    <ion-col><div class=\"headd ion-text-center\">  \r\n         <h6 style=\"margin-bottom: 0; margin-top: 0;font-weight: normal;font-size: 14px;\">Login using social media to get quick access</h6></div>\r\n    </ion-col>\r\n  </ion-row>  \r\n  \r\n  <ion-row>   \r\n    <ion-col class=\"centered\">  \r\n    <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px; margin: 30px 12px 20px 0; border-radius: 2px; background: #295dc3;color: #fff;\" ><ion-icon name=\"logo-facebook\"></ion-icon>Login</button>\r\n      <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px;margin: 30px 10px 20px 0;border-radius: 2px;background: #23abff;color: #fff\"><ion-icon name=\"logo-twitter\"></ion-icon>Login</button>\r\n      <button class=\"submit-btn\" expand=\"block\" style=\"border: none;padding: 10px 15px;margin: 30px 0 20px 0;border-radius: 2px;background: #ff2b26;color: #fff;\"><ion-icon name=\"logo-google\"></ion-icon>Login</button> \r\n    </ion-col>\r\n  </ion-row> \r\n\r\n<ion-segment>  \r\n  <ion-segment-button [routerLink]=\"['/login']\" value=\"login\">\r\n    <ion-label>Login</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button [routerLink]=\"['/register']\"  value=\"register\">\r\n    <ion-label>Register</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<form [formGroup]=\"login_form\" (submit)=\"login(login_form.value)\">\r\n\r\n   <ion-row>\r\n      <ion-col>\r\n        <div class=\"ion-text-start\">\r\n          <ion-item>\r\n            <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"username\" required></ion-input>   \r\n          </ion-item>\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\" style=\"padding: 10px; left;\">\r\n             <span *ngIf=\"f.username.errors.required\" style=\" text-align: left;color: red;\">Email is required.\r\n             </span> \r\n          </div>\r\n           <div class=\"ion-text-left\" style=\"text-align: left;padding: 10px;color: red;\" *ngIf=\"isError== true && errorsArr.username\">\r\n            Email does not exist\r\n            </div>\r\n        </div> \r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <ion-row>\r\n        <ion-col>\r\n         <div class=\"ion-text-start\">\r\n            <button class=\"submit-btn\" expand=\"block\" type=\"submit\" >Forgot Password</button>   \r\n         </div>\r\n        </ion-col>\r\n    </ion-row> \r\n  </form>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(http, router, formBuilder, itemService, alertController, loadingController) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.submitted = false;
        this.isError = false;
        this.isSuccess = false;
        this.res = [];
        this.errorsArr = [];
        this.sucessArr = [];
        this.login_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ForgotPasswordPage.prototype, "f", {
        get: function () { return this.login_form.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'please wait...',
                            duration: 2000,
                            cssClass: 'custom-class custom-loading1',
                            spinner: null
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.login_form.invalid) {
            console.log('invalid');
            return;
        }
        else {
            var input_data = {
                "email": form.username,
            };
            this.presentLoading();
            console.log(input_data);
            this.itemService.fpassword(input_data).subscribe(function (response) {
                console.log(response);
                _this.loadingController.dismiss().then(function (a) { return console.log('dismissed'); });
                _this.presentAlert();
            }, function (error) {
                console.log("ERROR");
                _this.isError = true;
                _this.errorsArr = error.error.errors;
                console.log(_this.errorsArr.username);
            });
        }
    };
    ForgotPasswordPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Success Message!',
                            subHeader: "Done!",
                            message: 'Email sent successfully!!! Please check your email.',
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirmed Okay');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map