import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TransformTaskPipe = /** @class */ (function () {
    function TransformTaskPipe() {
    }
    TransformTaskPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = ''; }
        return value.charAt(0).toUpperCase() + value.slice(1) + args;
    };
    TransformTaskPipe = tslib_1.__decorate([
        Pipe({
            name: 'transformTask'
        })
    ], TransformTaskPipe);
    return TransformTaskPipe;
}());
export { TransformTaskPipe };
//# sourceMappingURL=transform-task.pipe.js.map