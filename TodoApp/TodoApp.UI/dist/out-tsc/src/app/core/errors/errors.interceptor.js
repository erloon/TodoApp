import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService) {
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return throwError(error);
        }));
    };
    ErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
export { ErrorInterceptor };
//# sourceMappingURL=errors.interceptor.js.map