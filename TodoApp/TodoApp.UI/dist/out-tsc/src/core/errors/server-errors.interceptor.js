import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var ServerErrorsInterceptor = /** @class */ (function () {
    function ServerErrorsInterceptor(router) {
        this.router = router;
    }
    ServerErrorsInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    ServerErrorsInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ServerErrorsInterceptor);
    return ServerErrorsInterceptor;
}());
export { ServerErrorsInterceptor };
//# sourceMappingURL=server-errors.interceptor.js.map