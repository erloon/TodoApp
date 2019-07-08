import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map