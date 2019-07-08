import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(tasksService, authService) {
        this.tasksService = tasksService;
        this.authService = authService;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.addForm = this.initForm();
    };
    AddTaskComponent.prototype.initForm = function () {
        return new FormGroup({
            taskName: new FormArray([new FormControl(null, Validators.required)])
        });
    };
    AddTaskComponent.prototype.add = function () {
        var taskList = this.createTaskList();
        this.tasksService.add(taskList);
        this.addForm = this.initForm();
    };
    AddTaskComponent.prototype.addField = function () {
        var arr = this.addForm.get('taskName');
        arr.push(new FormControl(null, Validators.required));
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
    AddTaskComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-task',
            templateUrl: './add-task.component.html',
            styleUrls: ['./add-task.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TasksService, AuthService])
    ], AddTaskComponent);
    return AddTaskComponent;
}());
export { AddTaskComponent };
//# sourceMappingURL=add-task.component.js.map