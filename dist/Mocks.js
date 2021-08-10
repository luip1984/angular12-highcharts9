"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighchartsServiceMock = exports.HighchartsChartObjectMock = exports.ChartEventEmitter = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var opts;
var ChartEventEmitter = (function () {
    function ChartEventEmitter() {
    }
    ChartEventEmitter.emitChartEvent = function (eventName) {
        opts.chart.events[eventName]();
    };
    ChartEventEmitter.emitSeriesEvent = function (eventName) {
        opts.plotOptions.series.events[eventName]();
    };
    ChartEventEmitter.emitPointEvent = function (eventName) {
        opts.plotOptions.series.point.events[eventName]();
    };
    ChartEventEmitter.emitXAxisEvent = function (eventName) {
        opts.xAxis.events[eventName]();
    };
    ChartEventEmitter.emitYAxisEvent = function (eventName) {
        opts.yAxis.events[eventName]();
    };
    return ChartEventEmitter;
}());
exports.ChartEventEmitter = ChartEventEmitter;
var HighchartsChartObjectMock = (function () {
    function HighchartsChartObjectMock(_opts) {
        opts = _opts;
    }
    return HighchartsChartObjectMock;
}());
exports.HighchartsChartObjectMock = HighchartsChartObjectMock;
var highchartsStatic = {
    Chart: HighchartsChartObjectMock,
    StockChart: HighchartsChartObjectMock
};
var HighchartsServiceMock = (function () {
    function HighchartsServiceMock() {
    }
    HighchartsServiceMock.prototype.getHighchartsStatic = function () {
        return highchartsStatic;
    };
    HighchartsServiceMock.ɵfac = function HighchartsServiceMock_Factory(t) { return new (t || HighchartsServiceMock)(); };
    HighchartsServiceMock.ɵprov = i0.ɵɵdefineInjectable({ token: HighchartsServiceMock, factory: HighchartsServiceMock.ɵfac });
    return HighchartsServiceMock;
}());
exports.HighchartsServiceMock = HighchartsServiceMock;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighchartsServiceMock, [{
        type: core_1.Injectable
    }], null, null); })();
//# sourceMappingURL=Mocks.js.map