import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
var DateDirective = /** @class */ (function () {
    function DateDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.paragraph = this.renderer.createElement('p');
    }
    DateDirective.prototype.mouseEnter = function (eventDate) {
        this.paragraph.innerHTML = this.date;
        this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    };
    DateDirective.prototype.mouseLeave = function (eventDate) {
        this.renderer.removeChild(this.el.nativeElement, this.paragraph);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], DateDirective.prototype, "date", void 0);
    tslib_1.__decorate([
        HostListener('mouseenter'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], DateDirective.prototype, "mouseEnter", null);
    tslib_1.__decorate([
        HostListener('mouseleave'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Event]),
        tslib_1.__metadata("design:returntype", void 0)
    ], DateDirective.prototype, "mouseLeave", null);
    DateDirective = tslib_1.__decorate([
        Directive({
            selector: '[appDate]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], DateDirective);
    return DateDirective;
}());
export { DateDirective };
//# sourceMappingURL=date.directive.js.map