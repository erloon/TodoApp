import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var SortNamePipe = /** @class */ (function () {
    function SortNamePipe() {
    }
    SortNamePipe.prototype.transform = function (value, args) {
        return value.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    SortNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'sortName',
            pure: true,
        })
    ], SortNamePipe);
    return SortNamePipe;
}());
export { SortNamePipe };
//# sourceMappingURL=sort-name.pipe.js.map