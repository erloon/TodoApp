import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { DoneTaskComponent } from './components/done-task/done-task.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
var routes = [
    {
        path: '',
        redirectTo: '/todoTask',
        pathMatch: 'full'
    },
    {
        path: 'todoTask',
        component: TodoTaskComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'doneTask',
        component: DoneTaskComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map