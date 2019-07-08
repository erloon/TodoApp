(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-task/todo-task.component */ "./src/app/components/todo-task/todo-task.component.ts");
/* harmony import */ var _components_done_task_done_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/done-task/done-task.component */ "./src/app/components/done-task/done-task.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");







var routes = [
    {
        path: '',
        redirectTo: '/todoTask',
        pathMatch: 'full'
    },
    {
        path: 'todoTask',
        component: _components_todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_3__["TodoTaskComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'doneTask',
        component: _components_done_task_done_task_component__WEBPACK_IMPORTED_MODULE_4__["DoneTaskComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <span class=\"navbar-brand mb-0 h1\">Todo App</span>\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"authService.user\" routerLink=\"todoTask\" routerLinkActive=\"active\">Zadania</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"authService.user\" routerLink=\"doneTask\" routerLinkActive=\"active\">Wykonane</a>\r\n      </li>\r\n    </ul>\r\n    <a class=\"nav-link\" *ngIf=\"authService.user\" (click)=\"logout()\">\r\n      <form class=\"form-inline\">\r\n        <button class=\"btn btn-outline-success\" type=\"button\">Wyloguj</button>\r\n      </form>\r\n    </a>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(taskService, authService, route) {
        this.taskService = taskService;
        this.authService = authService;
        this.route = route;
        this.navbarOpen = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.route.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/todo-task/todo-task.component */ "./src/app/components/todo-task/todo-task.component.ts");
/* harmony import */ var _components_done_task_done_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/done-task/done-task.component */ "./src/app/components/done-task/done-task.component.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _shared_checked_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/checked.directive */ "./src/app/shared/checked.directive.ts");
/* harmony import */ var _shared_date_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/date.directive */ "./src/app/shared/date.directive.ts");
/* harmony import */ var _shared_transform_task_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/transform-task.pipe */ "./src/app/shared/transform-task.pipe.ts");
/* harmony import */ var _shared_sort_name_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/sort-name.pipe */ "./src/app/shared/sort-name.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
























var firebaseConfig = {
    apiKey: 'AIzaSyDWWCn9scs5kxiOIjTUlVxiDX08L_IAFiU',
    authDomain: 'todoapp-dd595.firebaseapp.com',
    databaseURL: 'https://todoapp-dd595.firebaseio.com',
    projectId: 'todoapp-dd595',
    storageBucket: '',
    messagingSenderId: '614665409759',
    appId: '1:614665409759:web:5c41f288b35754c1'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_9__["AddTaskComponent"],
                _components_todo_task_todo_task_component__WEBPACK_IMPORTED_MODULE_10__["TodoTaskComponent"],
                _components_done_task_done_task_component__WEBPACK_IMPORTED_MODULE_11__["DoneTaskComponent"],
                _shared_checked_directive__WEBPACK_IMPORTED_MODULE_13__["CheckedDirective"],
                _shared_date_directive__WEBPACK_IMPORTED_MODULE_14__["DateDirective"],
                _shared_transform_task_pipe__WEBPACK_IMPORTED_MODULE_15__["TransformTaskPipe"],
                _shared_sort_name_pipe__WEBPACK_IMPORTED_MODULE_16__["SortNamePipe"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"]
            ],
            providers: [_services_tasks_service__WEBPACK_IMPORTED_MODULE_12__["TasksService"], _services_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(angularFire, route) {
        var _this = this;
        this.angularFire = angularFire;
        this.route = route;
        angularFire.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.angularFire.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.route.navigate(['/todoTask']);
        });
    };
    AuthService.prototype.signup = function (email, password) {
        return this.angularFire.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        this.angularFire.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\nform {\r\n  display: block;\r\n  margin-top: 0em;\r\n}\r\n.form-btn {\r\nmargin-top: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7QUFDQSxlQUFlO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG5tYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" (ngSubmit)=\"login(formData)\" #formData='ngForm'>\r\n  <div class=\"text-center mb-4\">\r\n    <img class=\"mb-4\" src=\"../../../assets/tasks.svg.png\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Zapraszamy</h1>\r\n  </div>\r\n\r\n  <div class=\"form-label-group\">\r\n    <label for=\"inputEmail\">Email</label>\r\n    <input ngModel type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" required>\r\n  </div>\r\n  <div class=\"form-label-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input ngModel type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n  </div>\r\n  <button class=\"btn btn-lg btn-dark btn-block form-btn\" type=\"submit\" [disabled]=\"formData.invalid\">Zaloguj</button>\r\n  <button class=\"btn btn-lg btn-dark btn-block form-btn\" type=\"button\" [disabled]=\"formData.invalid\" (click)=\"signup(formData)\">Zarejestruj</button>\r\n</form>\r\n<div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\r\n  {{error}}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        this.authService.login(formData.value.email, formData.value.password).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.signup = function (formData) {
        var _this = this;
        this.authService.signup(formData.value.email, formData.value.password)
            .catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  mt-2\">\r\n    <!-- <div class=\"col\"></div> -->\r\n  <div class=\"col\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=(add())>\r\n      <div class=\"form-group row\">\r\n        <div formArrayName=\"taskName\">\r\n          <div *ngFor=\"let task of addForm.get('taskName')['controls']; let i = index\">\r\n            <input class=\"form-control mt-1\" type=\"text\" [formControlName]=\"i\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col\">\r\n            <div class=\"btn-group\" role=\"group\">\r\n                <button type=\"submit\" [disabled]=\"addForm.invalid\" class=\"btn btn-dark mb-2\">Dodaj</button>\r\n                <button type=\"button\" (click)=\"addField()\" class=\"btn btn-dark mb-2\">Dodaj więcej</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- <div class=\"col\"></div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");





var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(tasksService, authService) {
        this.tasksService = tasksService;
        this.authService = authService;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.addForm = this.initForm();
    };
    AddTaskComponent.prototype.initForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)])
        });
    };
    AddTaskComponent.prototype.add = function () {
        var taskList = this.createTaskList();
        this.tasksService.add(taskList);
        this.addForm = this.initForm();
    };
    AddTaskComponent.prototype.addField = function () {
        var arr = this.addForm.get('taskName');
        arr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
    };
    AddTaskComponent.prototype.createTaskList = function () {
        var _this = this;
        var taskList = new Array();
        var taskArr = this.addForm.get('taskName').value;
        taskArr.forEach(function (taskName) {
            var task = ({ name: taskName, userId: _this.authService.user.uid, create: new Date().toLocaleString(), isDone: false });
            taskList.push(task);
        });
        return taskList;
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/components/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/done-task/done-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/done-task/done-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9uZS10YXNrL2RvbmUtdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/done-task/done-task.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/done-task/done-task.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2  justify-content-center\">\r\n    <div class=\"h3 \">Wykonane zadania {{tasksDone.length}}</div>\r\n  </div>\r\n<div class=\"row\">\r\n    <ul class=\"list-group\">\r\n        <li appChecked appDate [date]=\"task.end\" class=\"list-group-item d-flex justify-content-between align-items-center mt-1\" *ngFor=\"let task of tasksDone\">\r\n          <div class=\"image-parent\">\r\n              <img src=\"../../../assets/done.svg\" class=\"img-fluid\" alt=\"quixote\">\r\n            </div>\r\n            <a class=\"text-left\"> {{task.name | transformTask: ' - super'}}</a>\r\n        </li>\r\n      </ul>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/done-task/done-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/done-task/done-task.component.ts ***!
  \*************************************************************/
/*! exports provided: DoneTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneTaskComponent", function() { return DoneTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/services/tasks.service.ts");



var DoneTaskComponent = /** @class */ (function () {
    function DoneTaskComponent(tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.tasksDone = [];
        this.tasksService.getTasksListObs().subscribe(function (tasks) {
            _this.tasksDone = tasks.filter(function (t) { return t.isDone === true; });
        });
    }
    DoneTaskComponent.prototype.ngOnInit = function () {
    };
    DoneTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-done-task',
            template: __webpack_require__(/*! ./done-task.component.html */ "./src/app/components/done-task/done-task.component.html"),
            styles: [__webpack_require__(/*! ./done-task.component.css */ "./src/app/components/done-task/done-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], DoneTaskComponent);
    return DoneTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-task/todo-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-task/todo-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-parent {\r\n  max-width: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLXRhc2svdG9kby10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLXRhc2svdG9kby10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtcGFyZW50IHtcclxuICBtYXgtd2lkdGg6IDEwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-task/todo-task.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-task/todo-task.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-2  justify-content-center\">\r\n  <div class=\"h3 \">Dodaj zadania do wykonania</div>\r\n</div>\r\n<app-add-task></app-add-task>\r\n<div class=\"row\">\r\n  <ng-container *ngIf=\"tasksList.length>0;else noTask\">\r\n    <ul class=\"list-group\">\r\n      <li appDate [date]=\"task.create\" class=\"list-group-item\" *ngFor=\"let task of tasksList | sortName; let odd = odd\"\r\n        class=\"list-group-item d-flex justify-content-between align-items-center mt-1\">\r\n        <div class=\"image-parent\">\r\n          <img src=\"../../../assets/questionmark.svg\" class=\"img-fluid\" alt=\"quixote\">\r\n        </div>\r\n        <a class=\"text-left\"> {{task.name | transformTask:'!'}}</a>\r\n        <div class=\"btn-group btn-group-sm pull-right\" role=\"group\">\r\n          <button class=\"btn btn-secondary\" (click)=\"remove(task)\">Usuń</button>\r\n          <button class=\"btn btn-secondary\" (click)=\"done(task)\">Zrobione</button>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <ng-template #noTask>\r\n    Wszystkie zadania wykonane\r\n  </ng-template>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"save()\">Zapisz listę</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/todo-task/todo-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-task/todo-task.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTaskComponent", function() { return TodoTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/services/tasks.service.ts");



var TodoTaskComponent = /** @class */ (function () {
    function TodoTaskComponent(tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.tasksList = [];
        this.tasksService.getTasksListObs().subscribe(function (tasks) {
            _this.tasksList = tasks.filter(function (t) { return t.isDone === false; });
        });
    }
    TodoTaskComponent.prototype.ngOnInit = function () {
    };
    TodoTaskComponent.prototype.remove = function (task) {
        this.tasksService.remove(task);
    };
    TodoTaskComponent.prototype.done = function (task) {
        this.tasksService.done(task);
    };
    TodoTaskComponent.prototype.save = function () {
        this.tasksService.saveTasksInDB();
    };
    TodoTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-task',
            template: __webpack_require__(/*! ./todo-task.component.html */ "./src/app/components/todo-task/todo-task.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./todo-task.component.css */ "./src/app/components/todo-task/todo-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], TodoTaskComponent);
    return TodoTaskComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var HttpService = /** @class */ (function () {
    function HttpService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.URL_DB = 'https://tasks-cea3.restdb.io/rest/tasks';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-apikey', '5d0bfe5a52556062830a4653');
    }
    HttpService.prototype.getParams = function () {
        if (this.authService.user) {
            var uid = this.authService.user.uid;
            var query = { 'userId': uid };
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('q', JSON.stringify(query));
        }
    };
    HttpService.prototype.getTask = function () {
        return this.http.get(this.URL_DB, { headers: this.headers, params: this.getParams() });
    };
    HttpService.prototype.saveTasks = function (list) {
        var _this = this;
        list.forEach(function (x) {
            _this.http.post(_this.URL_DB, x, { headers: _this.headers, params: _this.getParams() }).subscribe();
        });
        console.log(list);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




var TasksService = /** @class */ (function () {
    function TasksService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.tasksListObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.httpService.getTask().subscribe(function (list) {
            _this.tasksListObs.next(list);
        });
    }
    TasksService.prototype.add = function (taskList) {
        var list = this.tasksListObs.getValue().concat(taskList);
        this.tasksListObs.next(list);
    };
    TasksService.prototype.remove = function (task) {
        var list = this.tasksListObs.getValue().filter(function (e) { return e !== task; });
        this.tasksListObs.next(list);
    };
    TasksService.prototype.done = function (task) {
        task.end = new Date().toLocaleString();
        task.isDone = true;
        var list = this.tasksListObs.getValue();
        this.tasksListObs.next(list);
    };
    TasksService.prototype.getTasksListObs = function () {
        return this.tasksListObs.asObservable();
    };
    TasksService.prototype.saveTasksInDB = function () {
        this.httpService.saveTasks(this.tasksListObs.getValue());
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/shared/checked.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/checked.directive.ts ***!
  \*********************************************/
/*! exports provided: CheckedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedDirective", function() { return CheckedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckedDirective = /** @class */ (function () {
    function CheckedDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    CheckedDirective.prototype.ngOnInit = function () {
        var li = this.el.nativeElement;
        this.renderer.addClass(li, 'list-group-item-success');
    };
    CheckedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appChecked]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CheckedDirective);
    return CheckedDirective;
}());



/***/ }),

/***/ "./src/app/shared/date.directive.ts":
/*!******************************************!*\
  !*** ./src/app/shared/date.directive.ts ***!
  \******************************************/
/*! exports provided: DateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDirective", function() { return DateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateDirective = /** @class */ (function () {
    function DateDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.paragraph = this.renderer.createElement('p');
    }
    DateDirective.prototype.mouseEnter = function (eventDate) {
        this.paragraph.innerHTML = this.date;
        this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    };
    DateDirective.prototype.mouseLeave = function (eventDate) {
        this.renderer.removeChild(this.el.nativeElement, this.paragraph);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DateDirective.prototype, "date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DateDirective.prototype, "mouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DateDirective.prototype, "mouseLeave", null);
    DateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDate]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DateDirective);
    return DateDirective;
}());



/***/ }),

/***/ "./src/app/shared/sort-name.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/sort-name.pipe.ts ***!
  \******************************************/
/*! exports provided: SortNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortNamePipe", function() { return SortNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortNamePipe = /** @class */ (function () {
    function SortNamePipe() {
    }
    SortNamePipe.prototype.transform = function (value, args) {
        return value.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    SortNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortName',
            pure: true,
        })
    ], SortNamePipe);
    return SortNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/transform-task.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/transform-task.pipe.ts ***!
  \***********************************************/
/*! exports provided: TransformTaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformTaskPipe", function() { return TransformTaskPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransformTaskPipe = /** @class */ (function () {
    function TransformTaskPipe() {
    }
    TransformTaskPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = ''; }
        return value.charAt(0).toUpperCase() + value.slice(1) + args;
    };
    TransformTaskPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'transformTask'
        })
    ], TransformTaskPipe);
    return TransformTaskPipe;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repozytoria\TodoApp\TodoApp\TodoApp.UI2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map