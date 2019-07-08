import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
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
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map