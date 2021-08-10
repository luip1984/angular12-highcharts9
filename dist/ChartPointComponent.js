"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartPointComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var ChartPointComponent = (function () {
    function ChartPointComponent() {
        this.click = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.unselect = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.update = new core_1.EventEmitter();
    }
    ChartPointComponent.ɵfac = function ChartPointComponent_Factory(t) { return new (t || ChartPointComponent)(); };
    ChartPointComponent.ɵdir = i0.ɵɵdefineDirective({ type: ChartPointComponent, selectors: [["point"]], outputs: { click: "click", remove: "remove", select: "select", unselect: "unselect", mouseOver: "mouseOver", mouseOut: "mouseOut", update: "update" } });
    return ChartPointComponent;
}());
exports.ChartPointComponent = ChartPointComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartPointComponent, [{
        type: core_1.Directive,
        args: [{
                selector: 'point'
            }]
    }], null, { click: [{
            type: core_1.Output
        }], remove: [{
            type: core_1.Output
        }], select: [{
            type: core_1.Output
        }], unselect: [{
            type: core_1.Output
        }], mouseOver: [{
            type: core_1.Output
        }], mouseOut: [{
            type: core_1.Output
        }], update: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=ChartPointComponent.js.map