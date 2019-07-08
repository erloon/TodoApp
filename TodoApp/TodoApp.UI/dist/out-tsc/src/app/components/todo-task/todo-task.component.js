import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
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
    TodoTaskComponent = tslib_1.__decorate([
        Component({
            selector: 'app-todo-task',
            templateUrl: './todo-task.component.html',
            styleUrls: ['./todo-task.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [TasksService])
    ], TodoTaskComponent);
    return TodoTaskComponent;
}());
export { TodoTaskComponent };
//# sourceMappingURL=todo-task.component.js.map