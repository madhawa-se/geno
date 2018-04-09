webpackJsonp([4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, formBuilder, toastCtrl, postServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.postServiceProvider = postServiceProvider;
        this.post = new __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* BlogModel */]();
        this.postForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
    };
    PostPage.prototype.doPost = function () {
        var _this = this;
        if (this.postForm.valid) {
            this.postServiceProvider.createPost(__WEBPACK_IMPORTED_MODULE_4_jquery__["param"](this.post)).then(function (result) {
                _this.toastCtrl.create({ message: 'News posted successfully', duration: 4500 }).present();
            }, function (err) {
                _this.toastCtrl.create({ message: 'error occured !', duration: 4500 }).present();
            });
        }
        else {
            this.toastCtrl.create({ message: 'Please input valid title and content', duration: 4500 })
                .present();
        }
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar color="secondary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-buttons start>\n      <button ion-button small clear (click)="doCancel()">Cancel</button>\n    </ion-buttons>\n    <ion-title>Create A Post</ion-title>\n    <ion-buttons end>\n      <button ion-button small clear (click)="doPost()">Post</button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="postForm">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/admin.png"/>\n        </ion-avatar>\n        <h3>madhawa</h3>\n      </ion-item>\n      <ion-item>\n        <ion-textarea [(ngModel)]="post.title" formControlName="title" rows="3" placeholder="title"></ion-textarea>\n      </ion-item>\n      <hr>\n      <ion-item>\n        <ion-textarea [(ngModel)]="post.content" formControlName="content" rows="3" placeholder="news content"></ion-textarea>\n      </ion-item>\n      <img src="assets/imgs/blank.png">\n    </ion-list>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button color="dark" clear icon-only block (click)="doCapture()">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["b" /* PostServiceProvider */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding no-bounce>\n    <form>\n        <div class="text-center animated profile-header">\n	        <div class="text-center profile-img-wrap">\n	            <img class="profile-img" src="/assets/imgs/admin.png" width="100px">\n	        </div>\n	        <div class="user-profile-name ellipsis">Madhawa Priyashantha</div>\n    	</div>\n	    <div class="animated profile-sub-header">\n	        <div class="row">\n	        	<div class=\'notification\'>\n	        		<p>An Activation email has sent .please check your email inbox and activate your profile</p>\n	        	</div>\n	        	<div class=\'notification\'>\n	        		<p>Your Account is being reviewd by Administrator.ones adminicstator activaste your account you can use full features.</p>\n	        	</div>\n	        	<div class=\'notification\'>\n	        		<p>Your account has been deleted by the administator</p>\n	        	</div>\n	        </div>\n\n	        <div class="row">\n	        	<ion-list>\n	        		<ion-list-header>\n    					User Information\n  					</ion-list-header>\n\n					<ion-item>\n					   Account Status\n					  <ion-icon float-right name="checkmark-circle" item-end></ion-icon>\n					</ion-item>\n\n					<ion-item>\n					     User Previliages\n					  <ion-icon float-right  name="radio-button-on" item-end></ion-icon>\n					</ion-item>\n				</ion-list>\n	        </div>	\n	    </div>\n    </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admin_service_admin_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, adminService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.adminService = adminService;
        this.getNewUsers();
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.getNewUsers = function () {
        var _this = this;
        this.adminService.getNewUsers().then(function (result) {
            _this.newUsers = result;
            console.log(_this.newUsers);
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    AdminPage.prototype.activateUser = function (id) {
        var _this = this;
        this.adminService.activateUser(id).then(function (result) {
            for (var i in _this.newUsers) {
                if (_this.newUsers[i].id == id) {
                    _this.newUsers[i].activated = true;
                }
            }
            console.log(_this.newUsers);
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>admin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item *ngFor="let user of newUsers">\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/admin.png">\n    </ion-thumbnail>\n    <h2>{{user.name}}</h2>\n    <p>20 hours ago</p>\n    <button ion-button icon-left  ion-button clear item-end color="secondary" (click)="activateUser(user.id)" ng-disabled="user.activated">\n	  <ion-icon name="{{ (user.activated)?\'checkmark-circle\':\'ios-checkmark\' }}"></ion-icon>\n	  {{ (user.activated)?\'activated\':\'activate\' }}\n	</button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_admin_service_admin_service__["a" /* AdminServiceProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fc_mservice_fc_mservice__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authServiceProvider, fcmService, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.fcmService = fcmService;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.userInfo = { email: '', password: '' };
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.authServiceProvider.postData(__WEBPACK_IMPORTED_MODULE_5_jquery__["param"](this.userInfo)).then(function (result) {
            //this.responseData = result;
            console.log(result);
            _this.getUserInfo(result);
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.saveUser = function (user) {
        this.authServiceProvider.saveUser(user);
    };
    LoginPage.prototype.getUserInfo = function (result) {
        var self = this;
        if (!(result == undefined)) {
            console.log('data recieved');
            if (result.status === true) {
                if (result.user_info.is_verified === '0') {
                    this.toastCtrl.create({ message: 'your account is not verified.check the email', duration: 4500 }).present();
                }
                else if (result.user_info.is_verified === '1') {
                    this.toastCtrl.create({ message: 'your account hasn\'t activated by the admin', duration: 4500 }).present();
                }
                else if (result.user_info.is_verified === '2') {
                    this.saveUser(result.user_info);
                    ////////////////////////
                    this.fcmService.get_fcm_token().then(function (token) {
                        self.fcmService.set_fcm_token(result.user_info.user_id, token).then(function (responce) {
                            console.log(responce);
                        }, function (err) {
                            console.log(err);
                        });
                    });
                    ////////////////////////
                    this.navigateHome();
                }
                else {
                    this.toastCtrl.create({ message: 'unknown error occured ! please try again later', duration: 4500 }).present();
                }
            }
            else {
                //login failed
                this.toastCtrl.create({ message: 'Login failed! recheck the credentials', duration: 4500 }).present();
            }
        }
        else {
            console.log('data did not recieved');
            this.toastCtrl.create({ message: 'unknown error occured ! please try again later', duration: 4500 }).present();
        }
    };
    LoginPage.prototype.onSignIn = function () {
    };
    LoginPage.prototype.onForgotPassword = function () {
    };
    LoginPage.prototype.navigateSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.navigateHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], {}, { animate: true, direction: "forward" });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding no-bounce>\n  <!--<div ion-fixed class="fullscreen">-->\n    <ion-icon name="arrow-back" color="light" (click)="doBack()"></ion-icon>\n\n    <form [formGroup]="loginForm">\n        <ion-list no-lines>\n            <h1 ion-text class="title text-center" color="light">SLCOG FEED</h1>\n            <p class="subtitle text-center">Instant Feed</p>\n            <ion-item>                \n                <ion-icon name="mail" item-left></ion-icon>\n                <ion-input formControlName="email" type="email" placeholder="Email Address" [(ngModel)]="userInfo.email"> </ion-input>                \n            </ion-item>\n\n            <ion-item>\n                <ion-icon name="lock" item-left></ion-icon>\n                <ion-input formControlName="password" type="password" placeholder="Password" [(ngModel)]="userInfo.password"></ion-input>\n            </ion-item>\n            \n            <button ion-button color="light" (click)="signIn(form)" [disabled]="!loginForm.valid" block outline>LOGIN</button>\n            <p ion-text color="light" class="text-center">\n                Don\'t have an account?\n                <a ion-text color="light" (click)="navigateSignup()">Signup.</a>\n            </p>\n            <button ion-button color="light" (click)="doForgotPassword()" clear block>Forgot Password?</button>\n        </ion-list>\n    </form>\n  <!--</div>-->\n</ion-content>'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_fc_mservice_fc_mservice__["a" /* FcMserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		299,
		3
	],
	"../pages/login/login.module": [
		300,
		2
	],
	"../pages/post/post.module": [
		297,
		1
	],
	"../pages/profile/profile.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AdminServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdminServiceProvider = /** @class */ (function () {
    function AdminServiceProvider(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        console.log('Hello AdminServiceProvider Provider');
    }
    AdminServiceProvider.prototype.getNewUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.commonService.REST_URL + 'admin/get_new_users').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AdminServiceProvider.prototype.activateUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.commonService.REST_URL + 'admin/activate_user/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AdminServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */]])
    ], AdminServiceProvider);
    return AdminServiceProvider;
}());

//# sourceMappingURL=admin-service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_password__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as $ from 'jquery'
var SignupEmailPage = /** @class */ (function () {
    function SignupEmailPage(navCtrl, navParams, loadingCtrl, toastCtrl, authServiceProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authServiceProvider = authServiceProvider;
        this.formBuilder = formBuilder;
        this.username = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])),
        });
        this.username = navParams.get('username');
    }
    SignupEmailPage.prototype.ionViewDidLoad = function () { };
    SignupEmailPage.prototype.pressBack = function () {
        this.navCtrl.pop();
    };
    SignupEmailPage.prototype.test = function () {
        alert('boom');
    };
    SignupEmailPage.prototype.pressNext = function (form) {
        if (form.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_password__["a" /* SignupPasswordPage */], {
                username: this.username,
                email: form.value.email,
            });
        }
        else {
            this.toastCtrl.create({ message: 'Please input valid email address.', duration: 4500 })
                .present();
        }
    };
    SignupEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup-email',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup-email.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n    <!--<ion-icon name="arrow-back" color="light" (click)="pressBack()"></ion-icon>-->\n\n\n\n    <form [formGroup]="form">\n\n        <ion-list no-lines>\n\n            <h3 ion-text class="title text-center" color="secondary">What\'s Your Email Address?</h3>\n\n            <ion-item>                \n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <ion-input formControlName="email" type="text" placeholder="Email"> </ion-input>                \n\n            </ion-item>\n\n            <button ion-button color="secondary" (click)="pressNext(form)" block>Continue</button>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup-email.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupEmailPage);
    return SignupEmailPage;
}());

//# sourceMappingURL=signup-email.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_complete__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPasswordPage = /** @class */ (function () {
    function SignupPasswordPage(navCtrl, navParams, loadingCtrl, toastCtrl, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authServiceProvider = authServiceProvider;
        this.username = '';
        this.email = '';
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        this.username = navParams.get('username');
        this.email = navParams.get('email');
    }
    SignupPasswordPage.prototype.ionViewDidLoad = function () { };
    SignupPasswordPage.prototype.pressBack = function () {
        this.navCtrl.pop();
    };
    SignupPasswordPage.prototype.pressNext = function (form) {
        if (form.valid) {
            if (form.value.password != form.value.confirmpassword) {
                this.toastCtrl.create({ message: 'Password is incorrect. Confirm your password again.', duration: 4500 })
                    .present();
                return;
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_complete__["a" /* ProfileCompletePage */], {
                username: this.username,
                email: this.email,
                password: form.value.password,
            });
        }
        else {
            this.toastCtrl.create({ message: 'Please input your password.', duration: 4500 })
                .present();
        }
    };
    SignupPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup-password',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup-password.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n    <!--<ion-icon name="arrow-back" color="light" (click)="pressBack()"></ion-icon>-->\n\n\n\n    <form [formGroup]="form">\n\n        <ion-list no-lines>\n\n            <h3 ion-text class="title text-center" color="secondary">Add a password.</h3>\n\n            <ion-item>                \n\n                <ion-icon name="key" item-left></ion-icon>\n\n                <ion-input formControlName="password" type="password" placeholder="Password"> </ion-input>                \n\n            </ion-item>\n\n            <ion-item>                \n\n                <ion-icon name="key" item-left></ion-icon>\n\n                <ion-input formControlName="confirmpassword" type="password" placeholder="Confirm password"> </ion-input>                \n\n            </ion-item>\n\n\n\n            <button ion-button color="secondary" (click)="pressNext(form)" block>Continue</button>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPasswordPage);
    return SignupPasswordPage;
}());

//# sourceMappingURL=signup-password.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../tabs/tabs';

var ProfileCompletePage = /** @class */ (function () {
    function ProfileCompletePage(app, navCtrl, navParams, platform, loadingCtrl, toastCtrl, authServiceProvider, storage, commonService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authServiceProvider = authServiceProvider;
        this.storage = storage;
        this.commonService = commonService;
        this.submitted = false;
        this.user = {};
        this.userMessage = { status: false, msg: null };
        this.user.name = navParams.get('username');
        this.user.email = navParams.get('email');
        this.user.password = navParams.get('password');
        this.signupUser(this.user);
        // this.authServiceProvider.saveUser(this.user);
    }
    ProfileCompletePage.prototype.signupUser = function (user) {
        var _this = this;
        this.authServiceProvider.signupUser(this.user).then(function (result) {
            //this.responseData = result;
            console.log(result);
            if (result.status) {
                _this.userMessage.status = true;
            }
            else {
                _this.userMessage.status = false;
            }
            _this.userMessage.msg = result.msg;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileCompletePage.prototype.getUser = function () {
        this.authServiceProvider.getUser().then(function (val) {
            alert(val);
        });
    };
    ProfileCompletePage.prototype.ionViewDidLoad = function () { };
    ProfileCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-complete',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\profile-complete.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n    <div class=\'notification\'>\n\n        <p *ngIf="userMessage.status" >{{userMessage.msg}}</p>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\profile-complete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */]])
    ], ProfileCompletePage);
    return ProfileCompletePage;
}());

//# sourceMappingURL=profile-complete.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostListPage = /** @class */ (function () {
    function PostListPage(navCtrl, navParams, postServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postServiceProvider = postServiceProvider;
        this.get_posts();
    }
    PostListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostListPage');
    };
    PostListPage.prototype.get_posts = function () {
        var _this = this;
        this.postServiceProvider.getPosts().then(function (result) {
            _this.stories = result;
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    PostListPage.prototype.createPost = function () {
    };
    PostListPage.prototype.getRandomNum = function () {
        return Math.floor((Math.random() * 6) + 1);
    };
    PostListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-list',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post-list.html"*/'<!--\n  Generated template for the PostListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar color="secondary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Instant Feed</ion-title>\n    <ion-buttons end>\n      <button ion-button small clear>Refresh</button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n\n\n  <hr no-margin no-padding>\n  <div (swipe)="swipePage($event)">\n\n    <!-- Cards -->\n    <ion-card no-padding padding-bottom no-margin class="card" *ngFor="let s of stories">\n\n      <ion-row>\n        <ion-col col-10>\n          <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/admin.png">\n        </ion-avatar>\n        <h2 style="font-weight: bold">admin</h2>\n        <p>srilanka</p>\n        \n      </ion-item>\n        </ion-col >\n        <ion-col col-2>\n          <button no-margin no-padding clear color="black" ion-button icon-only style="float: right; top: 15px" (click)="presentPostPopover()">\n            <ion-icon name="more"></ion-icon>\n        </button>\n        </ion-col>\n      </ion-row>\n      \n\n      <img src="http://lorempixel.com/500/400/nature/?id={{s.id}}">\n\n      <p no-margin no-padding>\n        <button clear ion-button icon-only  class="like-btn">\n          <ion-icon no-padding color="" class="icon-space"></ion-icon>\n        </button>\n        <button clear ion-button icon-only>\n          <ion-icon no-padding isActive="false" color="black" name="ios-text-outline" class="icon-space" style="font-weight: bold"></ion-icon>\n        </button>\n        <button clear ion-button icon-only (click)="get_posts()">\n          <ion-icon no-padding isActive="false" color="black" name="paper-plane" class="icon-space"></ion-icon>\n        </button>\n        <button no-margin no-padding clear color="black" ion-button icon-only style="float: right">\n          <ion-icon name="ios-bookmark-outline"></ion-icon>\n        </button>\n      </p>\n      <hr>\n\n      <ion-card-content>\n        <p class="like-content"><ion-icon name="heart"></ion-icon> 250 likes</p>\n        <p>{{s.title}}</p>\n      \n        <ion-note style="font-size: 12px">\n          11h ago\n        </ion-note>\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__["b" /* PostServiceProvider */]])
    ], PostListPage);
    return PostListPage;
}());

//# sourceMappingURL=post-list.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_email__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_password__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_profile_complete__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_post_post__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_post_post_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_post_post_view__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_post_service_post_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_common_service_common_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_admin_service_admin_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_fcm__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_fc_mservice_fc_mservice__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_email__["a" /* SignupEmailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_password__["a" /* SignupPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_profile_complete__["a" /* ProfileCompletePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_post_post_list__["a" /* PostListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_post_post_view__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup_email__["a" /* SignupEmailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_password__["a" /* SignupPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_profile_complete__["a" /* ProfileCompletePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_post_post_list__["a" /* PostListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_post_post_view__["a" /* PostViewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_post_service_post_service__["b" /* PostServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_common_service_common_service__["a" /* CommonServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_admin_service_admin_service__["a" /* AdminServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_fc_mservice_fc_mservice__["a" /* FcMserviceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service_common_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fc_mservice_fc_mservice__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, storage, commonService, fcm, fcmService) {
        this.http = http;
        this.storage = storage;
        this.commonService = commonService;
        this.fcm = fcm;
        this.fcmService = fcmService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        console.log('Hello AuthServiceProvider Provider');
        //this.local = new Storage(LocalStorage);
    }
    AuthServiceProvider.prototype.postData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.commonService.REST_URL + 'user/login_user', (data), { headers: _this.headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.signupUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.commonService.REST_URL + 'user/register_user', (__WEBPACK_IMPORTED_MODULE_6_jquery__["param"](user)), { headers: _this.headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.saveUser = function (user) {
        this.storage.set('user', user);
    };
    AuthServiceProvider.prototype.getUser = function () {
        return this.storage.get('user');
    };
    AuthServiceProvider.prototype.isAdmin = function () {
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_5__providers_fc_mservice_fc_mservice__["a" /* FcMserviceProvider */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_post_post__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_post_post_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authServiceProvider) {
        this.authServiceProvider = authServiceProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign In', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Sign Up', component: __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], icon: 'log-out' },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Profile Page', component: __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */], icon: 'contact' },
        ];
        var self = this;
        this.authServiceProvider.getUser().then(function (user) {
            if (user) {
                if (user.is_verified == 2 && user.user_type == 1) {
                    self.pages.push({ title: 'Admin', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */], icon: 'ion-disc' });
                    self.pages.push({ title: 'Post Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_post_post__["a" /* PostPage */], icon: 'ion-disc' });
                    self.pages.push({ title: 'Browse News', component: __WEBPACK_IMPORTED_MODULE_6__pages_post_post_list__["a" /* PostListPage */], icon: 'ion-disc' });
                }
                else if (user.is_verified == 2 && user.user_type == 0) {
                    self.pages.push({ title: 'Browse News', component: __WEBPACK_IMPORTED_MODULE_6__pages_post_post_list__["a" /* PostListPage */], icon: 'ion-disc' });
                }
            }
            else {
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\app\app.html"*/'\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <ion-list >\n     <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}}\n     </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PostViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostViewPage = /** @class */ (function () {
    function PostViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostViewPage');
    };
    PostViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-view',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post-view.html"*/'<!--\n  Generated template for the PostViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>post-view</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\post\post-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PostViewPage);
    return PostViewPage;
}());

//# sourceMappingURL=post-view.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonServiceProvider = /** @class */ (function () {
    function CommonServiceProvider() {
        //public REST_URL:string = 'http://localhost/logintest/';
        this.REST_URL = 'http://slcog.lk/instantfeed/';
        console.log('Hello CommonServiceProvider Provider');
    }
    CommonServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommonServiceProvider);
    return CommonServiceProvider;
}());

//# sourceMappingURL=common-service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PostServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BlogModel = /** @class */ (function () {
    function BlogModel() {
    }
    return BlogModel;
}());

var PostServiceProvider = /** @class */ (function () {
    function PostServiceProvider(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.apiUrl = 'http://slcog.lk/instantfeed/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        console.log('Hello PostService Provider');
        //this.local = new Storage(LocalStorage);
    }
    PostServiceProvider.prototype.getPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.commonService.REST_URL + 'blog/get_blogs').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PostServiceProvider.prototype.createPost = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.commonService.REST_URL + 'blog/create', (post), { headers: _this.headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */]])
    ], PostServiceProvider);
    return PostServiceProvider;
}());

//# sourceMappingURL=post-service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcMserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FcMserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcMserviceProvider = /** @class */ (function () {
    function FcMserviceProvider(http, commonService, fcm) {
        this.http = http;
        this.commonService = commonService;
        this.fcm = fcm;
        console.log('Hello FcMserviceProvider Provider');
    }
    FcMserviceProvider.prototype.set_fcm_token = function (id, token) {
        var _this = this;
        return new Promise(function (resolve) {
            // alert(this.commonService.REST_URL+'fcm/set_fcm_token/'+id+'/'+token);
            _this.http.get(_this.commonService.REST_URL + 'fcm/set_fcm_token/' + id + '/' + token).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    FcMserviceProvider.prototype.get_fcm_token = function () {
        return this.fcm.getToken();
    };
    FcMserviceProvider.prototype.initNotification = function () {
        //Notifications
        this.fcm.subscribeToTopic('all');
        this.fcm.getToken().then(function (token) {
            console.log(token);
            //alert(token);
            //this.set_fcm_token(token);
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            alert(token);
        });
        //end notifications.
    };
    FcMserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__["a" /* FCM */]])
    ], FcMserviceProvider);
    return FcMserviceProvider;
}());

//# sourceMappingURL=fc-mservice.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_email__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../tabs/tabs';

var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, loadingCtrl, toastCtrl, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authServiceProvider = authServiceProvider;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () { };
    SignupPage.prototype.doPageLogin = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.pressBack = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.pressNext = function (form) {
        if (form.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_email__["a" /* SignupEmailPage */], {
                username: this.form.value.username,
            });
        }
        else {
            this.toastCtrl.create({ message: 'Please input your full name.', duration: 4500 })
                .present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n    <!--<ion-icon name="arrow-back" color="light" (click)="pressBack()"></ion-icon>-->\n\n\n\n    <form [formGroup]="form">\n\n        <ion-list no-lines>\n\n            <h3 ion-text class="title text-center" color="secondary">What\'s Your Name?</h3>\n\n            <ion-item>                \n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-input formControlName="username" type="text" placeholder="Full Name"> </ion-input>                \n\n            </ion-item>\n\n            <button ion-button color="secondary" (click)="pressNext(form)" block>Continue</button>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-content padding>\n\n    <form [formGroup]="form" (ngSubmit)="doSignup(form)">\n\n        <ion-list no-lines>\n\n            <h2 ion-text class="title text-center" color="light" padding>Create an account</h2>\n\n            <ion-item>                \n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <ion-input formControlName="email" type="text" placeholder="Email"> </ion-input>                \n\n            </ion-item>\n\n\n\n            <ion-item>                \n\n                <ion-icon name="person" item-left></ion-icon>\n\n                <ion-input formControlName="username" type="text" placeholder="Username"> </ion-input>                \n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-icon name="lock" item-left></ion-icon>\n\n                <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-icon name="lock" item-left></ion-icon>\n\n                <ion-input formControlName="passwordconfirm" type="password" placeholder="Confirm Password"></ion-input>\n\n            </ion-item>\n\n            \n\n            <button ion-button color="light" type="submit" block outline>CONTINUE</button>\n\n            <p ion-text color="light" class="text-center">\n\n                Have an account?<a ion-text color="light" (click)="doPageLogin()">Login.</a>\n\n            </p>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n-->'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Desktop\ionicapp\geno\src\pages\home\home.html"*/'<ion-header>\n  \n  <ion-navbar color="secondary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SLCOG</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-lines>\n      <ion-item>\n        <h3>Welcome to slcog</h3>\n      </ion-item>\n\n       <ion-item>\n        <p>Sri Lanka College of Obstetricians & Gynaecologists is the apex body providing maternity care services for pregnant mothers,<p>\n        <p>improving adolescent health and health of post-reproductive women in the country.</p>\n      </ion-item>\n\n    </ion-list>\n\n     <ion-slides autoplay="5000" loop="true" speed="500">\n	    <ion-slide>\n	      <img src="assets/imgs/slide1.png">\n	    </ion-slide>\n	    <ion-slide>\n	      <img src="assets/imgs/slide2.png">\n	    </ion-slide>\n	    <ion-slide>\n	      <img src="assets/imgs/slide3.png">\n	    </ion-slide>\n     </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ionicapp\geno\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map