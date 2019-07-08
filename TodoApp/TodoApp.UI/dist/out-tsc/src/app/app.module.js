import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { DoneTaskComponent } from './components/done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
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
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AddTaskComponent,
                TodoTaskComponent,
                DoneTaskComponent,
                CheckedDirective,
                DateDirective,
                TransformTaskPipe,
                SortNamePipe,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                BsDropdownModule.forRoot(),
                TooltipModule.forRoot(),
                ModalModule.forRoot(),
                FormsModule,
                AppRoutingModule,
                HttpClientModule,
                ReactiveFormsModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule
            ],
            providers: [TasksService, HttpService, AuthService, AuthGuardService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map