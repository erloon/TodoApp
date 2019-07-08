import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
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
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: []
        }),
        tslib_1.__metadata("design:paramtypes", [TasksService,
            AuthService,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map