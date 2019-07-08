import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
var HttpService = /** @class */ (function () {
    function HttpService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.URL_DB = 'https://tasks-cea3.restdb.io/rest/tasks';
        this.headers = new HttpHeaders().set('x-apikey', '5d0bfe5a52556062830a4653');
    }
    HttpService.prototype.getParams = function () {
        if (this.authService.user) {
            var uid = this.authService.user.uid;
            var query = { 'userId': uid };
            return new HttpParams().set('q', JSON.stringify(query));
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
    HttpService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map