"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartSeriesComponent = void 0;
var core_1 = require("@angular/core");
var ChartPointComponent_1 = require("./ChartPointComponent");
var i0 = require("@angular/core");
var ChartSeriesComponent = (function () {
    function ChartSeriesComponent() {
        this.click = new core_1.EventEmitter();
        this.afterAnimate = new core_1.EventEmitter();
        this.checkboxClick = new core_1.EventEmitter();
        this.hide = new core_1.EventEmitter();
        this.legendItemClick = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.show = new core_1.EventEmitter();
    }
    ChartSeriesComponent.ɵfac = function ChartSeriesComponent_Factory(t) { return new (t || ChartSeriesComponent)(); };
    ChartSeriesComponent.ɵdir = i0.ɵɵdefineDirective({ type: ChartSeriesComponent, selectors: [["series"]], contentQueries: function ChartSeriesComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ChartPointComponent_1.ChartPointComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.point = _t.first);
        } }, outputs: { click: "click", afterAnimate: "afterAnimate", checkboxClick: "checkboxClick", hide: "hide", legendItemClick: "legendItemClick", mouseOver: "mouseOver", mouseOut: "mouseOut", show: "show" } });
    return ChartSeriesComponent;
}());
exports.ChartSeriesComponent = ChartSeriesComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartSeriesComponent, [{
        type: core_1.Directive,
        args: [{
                selector: 'series'
            }]
    }], null, { point: [{
            type: core_1.ContentChild,
            args: [ChartPointComponent_1.ChartPointComponent]
        }], click: [{
            type: core_1.Output
        }], afterAnimate: [{
            type: core_1.Output
        }], checkboxClick: [{
            type: core_1.Output
        }], hide: [{
            type: core_1.Output
        }], legendItemClick: [{
            type: core_1.Output
        }], mouseOver: [{
            type: core_1.Output
        }], mouseOut: [{
            type: core_1.Output
        }], show: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=ChartSeriesComponent.js.map