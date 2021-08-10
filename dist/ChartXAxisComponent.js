"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartXAxisComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var ChartXAxisComponent = (function () {
    function ChartXAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartXAxisComponent.ɵfac = function ChartXAxisComponent_Factory(t) { return new (t || ChartXAxisComponent)(); };
    ChartXAxisComponent.ɵdir = i0.ɵɵdefineDirective({ type: ChartXAxisComponent, selectors: [["xAxis"]], outputs: { afterBreaks: "afterBreaks", afterSetExtremes: "afterSetExtremes", pointBreak: "pointBreak", pointInBreak: "pointInBreak", setExtremes: "setExtremes" } });
    return ChartXAxisComponent;
}());
exports.ChartXAxisComponent = ChartXAxisComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartXAxisComponent, [{
        type: core_1.Directive,
        args: [{
                selector: 'xAxis'
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
//# sourceMappingURL=ChartXAxisComponent.js.map