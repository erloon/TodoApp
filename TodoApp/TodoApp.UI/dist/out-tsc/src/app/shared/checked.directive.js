import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
var CheckedDirective = /** @class */ (function () {
    function CheckedDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    CheckedDirective.prototype.ngOnInit = function () {
        var li = this.el.nativeElement;
        this.renderer.addClass(li, 'list-group-item-success');
    };
    CheckedDirective = tslib_1.__decorate([
        Directive({
            selector: '[appChecked]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], CheckedDirective);
    return CheckedDirective;
}());
export { CheckedDirective };
//# sourceMappingURL=checked.directive.js.map