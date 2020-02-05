(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-detail-page-group-detail-page-module"],{

/***/ "./src/app/pages/group-detail-page/group-detail-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-detail-page/group-detail-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: GroupDetailPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPagePageModule", function() { return GroupDetailPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_detail_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-detail-page.page */ "./src/app/pages/group-detail-page/group-detail-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _group_detail_page_page__WEBPACK_IMPORTED_MODULE_5__["GroupDetailPagePage"]
    }
];
var GroupDetailPagePageModule = /** @class */ (function () {
    function GroupDetailPagePageModule() {
    }
    GroupDetailPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_group_detail_page_page__WEBPACK_IMPORTED_MODULE_5__["GroupDetailPagePage"]]
        })
    ], GroupDetailPagePageModule);
    return GroupDetailPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/group-detail-page/group-detail-page.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-detail-page/group-detail-page.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-buttons slot=\"end\">\r\n             <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n         </ion-buttons>  \r\n        <ion-title>\r\n            Group: {{nickname}}\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content padding>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n\r\n        <button (click)=\"joinChat()\" class=\"billList-class\">Chatroom </button>\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n\r\n  <ion-card>\r\n   <ion-card-header>\r\n      <ion-card-subtitle>Group members</ion-card-subtitle>\r\n      <ion-card-title>Colivers <!-- <ion-card-subtitle>-Swipe left to see actions-</ion-card-subtitle>--></ion-card-title>\r\n   </ion-card-header>\r\n   <ion-card-content style=\"overflow: auto\">\r\n      <ion-list style=\"\">\r\n         <ion-item *ngFor=\"let user of userArr\">   \r\n            <ion-label  [routerLink]=\"['/user-application-detail']\" [queryParams]=\"{teamId: teamId,userId:user.userId}\" style=\"white-space: pre-wrap;\">{{user?.login.username}}</ion-label>\r\n            <ion-button  *ngIf=\"owner != userId && user.userId == owner\"  type=\"button\" class=\"secondary\">Admin</ion-button>\r\n           <!--  <ion-button *ngIf=\"owner == userId\" type=\"button\" slot=\"end\" >Set Admin</ion-button> -->\r\n         <ion-button (click)=\"removeUserApi(user.userId,'remove')\" type=\"button\" slot=\"end\" *ngIf=\"owner == userId && user.userId != owner\">Remove</ion-button>\r\n           <ion-button (click)=\"removeUserApi(user.userId,'left')\" type=\"button\" slot=\"end\" *ngIf=\"loggedInUsername ===user?.login.username\">Leave the group</ion-button>\r\n         </ion-item> \r\n      </ion-list>\r\n   </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n<ion-card>\r\n   <ion-card-header>\r\n      <ion-card-subtitle>Social sharing</ion-card-subtitle>\r\n      <ion-card-title>Referral code</ion-card-title>\r\n   </ion-card-header>\r\n   <ion-card-content>\r\n      <ion-list>\r\n         <ion-item>\r\n            <ion-label style=\"white-space: pre-wrap;\">Share a link with potential candidates for your flatmates. You can copy the link and share it wherever you want. Once the link is clicked the candidate will be asked to fill-up the flatmate questionnaire and the answers will appear on the bottom of this page.\r\n         </ion-label>\r\n         </ion-item>\r\n         <ion-item>\r\n            <button shape=\"round\" fill=\"outline\" (click)=\"shareInfo()\" class=\"button_team\">Share </button>\r\n            <button shape=\"round\" fill=\"outline\" (click)=\"copyText($event)\" class=\"button_team\">Copy</button> \r\n         </ion-item>\r\n         <ion-item>\r\n            <button shape=\"round\" fill=\"outline\" (click)=\"downloadPDF()\" class=\"button_team\">View group cv</button> \r\n         </ion-item>\r\n      </ion-list>\r\n   </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n   <ion-card-header>\r\n      <ion-card-subtitle>Join group</ion-card-subtitle>\r\n      <ion-card-title>Direct group code</ion-card-title>\r\n   <ion-card-subtitle>Use this code to add a new coliver to this group. Keep in mind that this is direct code. Share it only with persons you know. </ion-card-subtitle>\r\n   </ion-card-header>\r\n   <ion-card-content>\r\n      <ion-list>\r\n         <ion-item>\r\n            <ion-label style=\"white-space: pre-wrap;\">{{teamId}}</ion-label>\r\n         </ion-item> \r\n         <ion-item> \r\n           <button shape=\"round\" fill=\"outline\" (click)=\"joinGroupShare()\" class=\"button_team\">Share </button>\r\n            <button shape=\"round\" fill=\"outline\" (click)=\"copyTextCode(teamId)\" class=\"button_team\">Copy</button> \r\n         </ion-item> \r\n      </ion-list>\r\n   </ion-card-content>\r\n</ion-card>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n        <button [routerLink]=\"['/group-application']\" [queryParams]=\"{teamId: teamId}\" class=\"billList-class\">New candidates to the group</button>\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>\r\n    <ion-col>\r\n        <button [routerLink]=\"['/flatemates']\" [queryParams]=\"{teamId: teamId}\" class=\"billList-class\">Issues</button>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/group-detail-page/group-detail-page.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/group-detail-page/group-detail-page.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWRldGFpbC1wYWdlL2dyb3VwLWRldGFpbC1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/group-detail-page/group-detail-page.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/group-detail-page/group-detail-page.page.ts ***!
  \*******************************************************************/
/*! exports provided: GroupDetailPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPagePage", function() { return GroupDetailPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
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












var GroupDetailPagePage = /** @class */ (function () {
    function GroupDetailPagePage(route, popoverController, clipboard, router, formBuilder, http, socialSharing, alertController, loadingController, viewCtrl, file, base64, fileOpener) {
        var _this = this;
        this.route = route;
        this.popoverController = popoverController;
        this.clipboard = clipboard;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.socialSharing = socialSharing;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewCtrl = viewCtrl;
        this.file = file;
        this.base64 = base64;
        this.fileOpener = fileOpener;
        this.nickname = '';
        this.submitted = false;
        //  private socket;
        this.base_url = "";
        this.ref_link = "";
        this.teamId = "";
        this.owner = "";
        this.userId = "";
        this.ref_code = "";
        this.loggedInUsername = "";
        this.refferal = "";
        this.socket_url = "";
        this.web_url = "";
        this.teamListArr = [];
        this.origionalListArr = [];
        this.userListArr = [];
        this.teamUserArr = [];
        this.userArr = [];
        this.pdfListArr = [];
        this.image_base_url = "";
        this.image_url = "";
        this.userImg = [];
        this.ImageObj = [];
        this.file_path = "assets/images/Logo-colive.png";
        this.image_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].image_base_url;
        this.web_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].website_url;
        this.userId = sessionStorage.getItem("loggedInId");
        this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
        this.ref_code = sessionStorage.getItem("ref_code");
        this.refferal = this.web_url + 'app.download?rc=' + this.ref_code;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.socket_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socket_url;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = params['teamId'];
            _this.owner = params['owner'];
            _this.nickname = params['nickname'];
        });
        this.ref_link = this.web_url + 'app.download?rc=' + this.ref_code + '/' + this.teamId;
    }
    GroupDetailPagePage.prototype.ngOnInit = function () {
    };
    GroupDetailPagePage.prototype.ionViewWillEnter = function () {
        this.getTeamsList();
        this.getPdfUserList();
    };
    GroupDetailPagePage.prototype.joinChat = function () {
        this.router.navigate(['/chatroom'], { queryParams: { 'teamId': this.teamId, 'nickname': this.nickname, 'owner': this.userId } });
    };
    Object.defineProperty(GroupDetailPagePage.prototype, "f", {
        get: function () { return this.update_from.controls; },
        enumerable: true,
        configurable: true
    });
    GroupDetailPagePage.prototype.confirmDelete = function (id, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: msg,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.removeUserCall(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupDetailPagePage.prototype.removeUserCall = function (userId_to_remove) {
        var _this = this;
        if (userId_to_remove && this.teamId) {
            var sent_data = {
                'userId': userId_to_remove,
                'team_id': this.teamId,
                'user_status': '2',
            };
            console.log(sent_data);
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
            this.http.post(this.base_url + '/team/user/remove', sent_data, httpOptions).subscribe(function (response) {
                _this.customsmessage(response.message);
                _this.popoverController.dismiss();
            }, function (error) {
                console.log(error.error);
                console.log(error.error.errors);
            });
        }
        else {
            var msg = 'user detail is not avaliable!';
            console.log(msg);
        }
    };
    GroupDetailPagePage.prototype.removeUserApi = function (userId_to_remove, obj) {
        if (obj == 'remove') {
            this.confirmDelete(userId_to_remove, 'You really want to remove user from the  group?');
        }
        if (obj == 'left') {
            this.confirmDelete(userId_to_remove, 'You really want to leave from the  group?');
        }
    };
    GroupDetailPagePage.prototype.update = function (form) {
        var _this = this;
        //    console.log(form);
        this.submitted = true;
        if (this.update_from.invalid) {
            //    console.log('invalid');
            return;
        }
        else {
            var input_data = {
                "name": form.title,
                "userId": form.owner,
                "teamId": form.teamId,
            };
            //   this.pleaseWait(); 
            var token = void 0;
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': token }) };
            this.http.post(this.base_url + 'updateTeam', input_data, httpOptions).subscribe(function (response) {
                //this.loadingController.dismiss().then(a => console.log('dismissed'));
                //   console.log(response); 
                _this.customsmessage(response.message);
            }, function (error) {
                //     console.log(error.error); 
                //    console.log(error.error.errors); 
            });
        }
    };
    GroupDetailPagePage.prototype.shareInfo = function () {
        this.socialSharing.share("Your referal link is:", "Invite", "", this.ref_link);
    };
    GroupDetailPagePage.prototype.joinGroupShare = function () {
        this.socialSharing.share("", "Invite", "", this.teamId);
    };
    GroupDetailPagePage.prototype.copyText = function (event) {
        this.clipboard.copy(this.ref_link);
        this.customsmessage('link has been successfully copied...');
    };
    GroupDetailPagePage.prototype.copyTextCode = function (event) {
        this.clipboard.copy(event);
        this.customsmessage('Group code has been successfully copied...');
    };
    GroupDetailPagePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000,
                            cssClass: 'custom-class custom-loading',
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
    GroupDetailPagePage.prototype.customsmessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            duration: 3000,
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
    GroupDetailPagePage.prototype.getTeamsList = function () {
        var _this = this;
        // console.log('All teams gets list out under this function'); 
        var sendlist = [];
        sendlist.push(this.teamId);
        var input_data = { 'teamId': sendlist };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.post('https://txweb.kindlebit.com/team/users', input_data, { headers: headers }).subscribe(function (response) {
            _this.teamListArr = response.teams;
            _this.userArr = response.teams;
            //    console.log(response.teams);
            for (var i = 0; i < _this.teamListArr.length; i++) {
                if (_this.teamListArr[i]['userProfile'] != null) {
                    _this.teamUserArr.push(_this.teamListArr[i]['userProfile']);
                    _this.teamUserArr.push(_this.teamListArr[i]['teams']);
                    _this.teamUserArr.push(_this.teamListArr[i]['login']);
                }
            }
            //  console.log(this.teamUserArr);
            _this.loadingController.dismiss();
        }, function (error) { });
    };
    GroupDetailPagePage.prototype.getBase64Image = function (imgUrl) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = imgUrl;
            img.setAttribute('crossOrigin', 'anonymous');
            console.log(img);
            img.onload = function () {
                var canvas = document.createElement("canvas");
                // console.log("image");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");
                return dataURL;
            };
            img.onerror = function () {
                reject("The image could not be loaded.");
            };
        });
    };
    GroupDetailPagePage.prototype.getPdfUserList = function () {
        var _this = this;
        var sendlist = [];
        sendlist.push(this.teamId);
        var input_data = { 'teamId': sendlist };
        var token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Authorization', token);
        this.http.post('https://txweb.kindlebit.com/team/users/pdf', input_data, { headers: headers }).subscribe(function (response) {
            _this.pdfListArr = response.teams;
            _this.userArr = response.teams;
            _this.loadingController.dismiss();
        }, function (error) { });
    };
    GroupDetailPagePage.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                //callback(dataURL);
                //  this.imageData=dataURL;
                //          console.log(this.imageData);
                canvas = null;
                resolve(dataURL);
            };
            img.src = url;
        });
    };
    GroupDetailPagePage.prototype.downloadPDF = function () {
        var _this = this;
        if (this.teamListArr.length != 0) {
            var doc = new jsPDF();
            var col = ["Fields", "Inputs"];
            var rows = [];
            var rows1 = [];
            var temp = [];
            var a = 11;
            / The following array of object as response from the API req /;
            // console.log( this.teamListArr[0].userProfile);
            this.pdfListArr.forEach(function (element) {
                if (element.userProfile) {
                    temp = ["Name", element.userProfile.firstName];
                    rows.push(temp);
                    temp = ["Surname", element.userProfile.lastName];
                    rows.push(temp);
                    temp = ["Email", element.userProfile.email];
                    rows.push(temp);
                    temp = ["Nationality", element.userProfile.nationality];
                    rows.push(temp);
                    if (element.userProfile.dob == 'Invalid date') {
                        temp = ["Date Of Birth", " "];
                        rows.push(temp);
                    }
                    else {
                        temp = ["Date Of Birth", element.userProfile.dob];
                        rows.push(temp);
                    }
                    temp = ["PhoneNumber", element.userProfile.phoneNo];
                    rows.push(temp);
                    if (element.userProfile.address == undefined || element.userProfile.country == undefined || element.userProfile.postalCode == undefined) {
                        temp = ["Contact Address", " "];
                        rows.push(temp);
                    }
                    else {
                        temp = ["Contact Address", element.userProfile.address + " " + element.userProfile.country + " " + element.userProfile.postalCode];
                        rows.push(temp);
                    }
                    if (element.userProfile.occuptation_tt == 6) {
                        temp = ["Occupation", "Full-time Internship"];
                        rows.push(temp);
                    }
                    else if (element.userProfile.occuptation_tt == 5) {
                        temp = ["Occupation", "Part Time Internship"];
                        rows.push(temp);
                    }
                    else if (element.userProfile.occuptation_tt == 4) {
                        temp = ["Occupation", "Full-time Student"];
                        rows.push(temp);
                    }
                    else if (element.userProfile.occuptation_tt == 3) {
                        temp = ["Occupation", "Full-time Student"];
                        rows.push(temp);
                    }
                    else if (element.userProfile.occuptation_tt == 2) {
                        temp = ["Occupation", "Part-time Employee"];
                        rows.push(temp);
                    }
                    else if (element.userProfile.occuptation_tt == 1) {
                        temp = ["Occupation", "Full-time Employee"];
                        rows.push(temp);
                    }
                    else {
                        temp = ["Occupation", " "];
                        rows.push(temp);
                    }
                    temp = ["WorkPlace/StudyPlace", element.userProfile.work_place];
                    rows.push(temp);
                    temp = ["Biography", element.userProfile.biography];
                    rows.push(temp);
                    temp = ["Previous City Of residence", element.userProfile.previous_city];
                    rows.push(temp);
                }
            });
            var img_url = "http://colivingapp.com/assets/images/Logo-colive.png";
            var imgUrl = 'assets/images/Logo-colive.png';
            var images1;
            var promiseObject = this.convertToDataURLviaCanvas(imgUrl, "image/png").then(function (base64Img) {
            });
            promiseObject.then(function (result) {
                console.log(result); //in this console log i have base 64 string
            });
            for (var i = 0; i < a; i++) {
                rows1.push(rows[i]);
                //doc.addImage(asdf, 'PNG', 90,10,0,20)
                doc.autoTable(col, rows1, {
                    theme: 'grid',
                    styles: { rowHeight: 11, overflow: 'linebreak' },
                    columnStyles: { 0: { columnWidth: 75 }, 1: { columnWidth: 110 } },
                    margin: { top: 20, left: 20, right: 20, bottom: 0 },
                });
                if (i + 1 == a) {
                    doc.addPage();
                    rows1 = [];
                    if (a < rows.length) {
                        a = a + 11;
                    }
                }
            }
            //doc.output('save','txt.pdf');
            var pdfOutput = doc.output();
            this.presentLoading();
            var buffer = new ArrayBuffer(pdfOutput.length);
            var array = new Uint8Array(buffer);
            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }
            // For this, you have to use ionic native file plugin
            var directory_1 = this.file.externalApplicationStorageDirectory;
            //  alert(directory);
            this.myRand = this.random();
            console.log(this.myRand);
            var fileName_1 = "Group_" + this.myRand + ".pdf";
            console.log(directory_1 + fileName_1);
            this.file.writeFile(directory_1, fileName_1, buffer, { replace: true })
                .then(function (success) {
                return _this.fileOpener.open(directory_1 + fileName_1, 'application/pdf').then(function () { return console.log('File is opened'); });
            })
                .catch(function (error) { return console.log("Cannot Create File"); });
        }
    };
    GroupDetailPagePage.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    GroupDetailPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-detail-page',
            template: __webpack_require__(/*! ./group-detail-page.page.html */ "./src/app/pages/group-detail-page/group-detail-page.page.html"),
            styles: [__webpack_require__(/*! ./group-detail-page.page.scss */ "./src/app/pages/group-detail-page/group-detail-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__["Base64"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"]])
    ], GroupDetailPagePage);
    return GroupDetailPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-group-detail-page-group-detail-page-module.js.map