"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartYAxisComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var ChartYAxisComponent = (function () {
    function ChartYAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartYAxisComponent.ɵfac = function ChartYAxisComponent_Factory(t) { return new (t || ChartYAxisComponent)(); };
    ChartYAxisComponent.ɵdir = i0.ɵɵdefineDirective({ type: ChartYAxisComponent, selectors: [["yAxis"]], outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" } });
    return ChartYAxisComponent;
}());
exports.ChartYAxisComponent = ChartYAxisComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartYAxisComponent, [{
        type: core_1.Directive,
        args: [{
                selector: 'yAxis'
            }]
    }], null, { afterBreaks: [{
            type: core_1.Output
        }], afterSetExtremes: [{
            type: core_1.Output
        }], pointBreak: [{
            type: core_1.Output
        }], pointInBreak: [{
            type: core_1.Output
        }], setExtremes: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=ChartYAxisComponent.js.map