import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
var DoneTaskComponent = /** @class */ (function () {
    function DoneTaskComponent(tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.tasksDone = [];
        this.tasksService.getTasksListObs().subscribe(function (tasks) {
            _this.tasksDone = tasks.filter(function (t) { return t.isDone === true; });
        });
    }
    DoneTaskComponent.prototype.ngOnInit = function () {
    };
    DoneTaskComponent = tslib_1.__decorate([
        Component({
            selector: 'app-done-task',
            templateUrl: './done-task.component.html',
            styleUrls: ['./done-task.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TasksService])
    ], DoneTaskComponent);
    return DoneTaskComponent;
}());
export { DoneTaskComponent };
//# sourceMappingURL=done-task.component.js.map