"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartYAxisComponent = exports.ChartXAxisComponent = exports.ChartPointComponent = exports.ChartSeriesComponent = exports.ChartComponent = exports.ChartModule = void 0;
var core_1 = require("@angular/core");
var ChartComponent_1 = require("./ChartComponent");
Object.defineProperty(exports, "ChartComponent", { enumerable: true, get: function () { return ChartComponent_1.ChartComponent; } });
var ChartSeriesComponent_1 = require("./ChartSeriesComponent");
Object.defineProperty(exports, "ChartSeriesComponent", { enumerable: true, get: function () { return ChartSeriesComponent_1.ChartSeriesComponent; } });
var ChartPointComponent_1 = require("./ChartPointComponent");
Object.defineProperty(exports, "ChartPointComponent", { enumerable: true, get: function () { return ChartPointComponent_1.ChartPointComponent; } });
var ChartXAxisComponent_1 = require("./ChartXAxisComponent");
Object.defineProperty(exports, "ChartXAxisComponent", { enumerable: true, get: function () { return ChartXAxisComponent_1.ChartXAxisComponent; } });
var ChartYAxisComponent_1 = require("./ChartYAxisComponent");
Object.defineProperty(exports, "ChartYAxisComponent", { enumerable: true, get: function () { return ChartYAxisComponent_1.ChartYAxisComponent; } });
var HighchartsService_1 = require("./HighchartsService");
var i0 = require("@angular/core");
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent
];
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsService_1.HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    ChartModule.ɵfac = function ChartModule_Factory(t) { return new (t || ChartModule)(); };
    ChartModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartModule });
    ChartModule.ɵinj = i0.ɵɵdefineInjector({});
    return ChartModule;
}());
exports.ChartModule = ChartModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [CHART_DIRECTIVES],
                exports: [CHART_DIRECTIVES]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartModule, { declarations: [ChartComponent_1.ChartComponent,
        ChartSeriesComponent_1.ChartSeriesComponent,
        ChartPointComponent_1.ChartPointComponent,
        ChartXAxisComponent_1.ChartXAxisComponent,
        ChartYAxisComponent_1.ChartYAxisComponent], exports: [ChartComponent_1.ChartComponent,
        ChartSeriesComponent_1.ChartSeriesComponent,
        ChartPointComponent_1.ChartPointComponent,
        ChartXAxisComponent_1.ChartXAxisComponent,
        ChartYAxisComponent_1.ChartYAxisComponent] }); })();
//# sourceMappingURL=index.js.map