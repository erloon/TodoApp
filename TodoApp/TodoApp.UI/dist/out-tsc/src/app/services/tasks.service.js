import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
var TasksService = /** @class */ (function () {
    function TasksService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.tasksListObs = new BehaviorSubject([]);
        this.httpService.getTask().subscribe(function (list) {
            _this.tasksListObs.next(list);
        });
    }
    TasksService.prototype.add = function (taskList) {
        var list = this.tasksListObs.getValue().concat(taskList);
        this.tasksListObs.next(list);
    };
    TasksService.prototype.remove = function (task) {
        var list = this.tasksListObs.getValue().filter(function (e) { return e !== task; });
        this.tasksListObs.next(list);
    };
    TasksService.prototype.done = function (task) {
        task.end = new Date().toLocaleString();
        task.isDone = true;
        var list = this.tasksListObs.getValue();
        this.tasksListObs.next(list);
    };
    TasksService.prototype.getTasksListObs = function () {
        return this.tasksListObs.asObservable();
    };
    TasksService.prototype.saveTasksInDB = function () {
        this.httpService.saveTasks(this.tasksListObs.getValue());
    };
    TasksService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpService])
    ], TasksService);
    return TasksService;
}());
export { TasksService };
//# sourceMappingURL=tasks.service.js.map