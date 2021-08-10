"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartComponent = void 0;
var core_1 = require("@angular/core");
var ChartSeriesComponent_1 = require("./ChartSeriesComponent");
var ChartXAxisComponent_1 = require("./ChartXAxisComponent");
var ChartYAxisComponent_1 = require("./ChartYAxisComponent");
var HighchartsService_1 = require("./HighchartsService");
var initChart_1 = require("./initChart");
var createBaseOpts_1 = require("./createBaseOpts");
var i0 = require("@angular/core");
var i1 = require("./HighchartsService");
var ChartComponent = (function () {
    function ChartComponent(element, highchartsService) {
        this.create = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.addSeries = new core_1.EventEmitter();
        this.afterPrint = new core_1.EventEmitter();
        this.beforePrint = new core_1.EventEmitter();
        this.drilldown = new core_1.EventEmitter();
        this.drillup = new core_1.EventEmitter();
        this.load = new core_1.EventEmitter();
        this.redraw = new core_1.EventEmitter();
        this.selection = new core_1.EventEmitter();
        this.type = 'Chart';
        this.element = element;
        this.highchartsService = highchartsService;
    }
    Object.defineProperty(ChartComponent.prototype, "options", {
        set: function (opts) {
            this.userOpts = opts;
            this.init();
        },
        enumerable: false,
        configurable: true
    });
    ;
    ChartComponent.prototype.init = function () {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart_1.initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.baseOpts = createBaseOpts_1.createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.element.nativeElement);
        this.init();
    };
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HighchartsService)); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["chart"]], contentQueries: function ChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, ChartSeriesComponent_1.ChartSeriesComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, ChartXAxisComponent_1.ChartXAxisComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, ChartYAxisComponent_1.ChartYAxisComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.series = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.xAxis = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.yAxis = _t.first);
        } }, inputs: { type: "type", options: "options" }, outputs: { create: "create", click: "click", addSeries: "addSeries", afterPrint: "afterPrint", beforePrint: "beforePrint", drilldown: "drilldown", drillup: "drillup", load: "load", redraw: "redraw", selection: "selection" }, features: [i0.ɵɵProvidersFeature([HighchartsService_1.HighchartsService])], decls: 1, vars: 0, template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "\u00A0");
        } }, encapsulation: 2 });
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'chart',
                template: '&nbsp;',
                providers: [HighchartsService_1.HighchartsService],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HighchartsService }]; }, { series: [{
            type: core_1.ContentChild,
            args: [ChartSeriesComponent_1.ChartSeriesComponent]
        }], xAxis: [{
            type: core_1.ContentChild,
            args: [ChartXAxisComponent_1.ChartXAxisComponent]
        }], yAxis: [{
            type: core_1.ContentChild,
            args: [ChartYAxisComponent_1.ChartYAxisComponent]
        }], create: [{
            type: core_1.Output
        }], click: [{
            type: core_1.Output
        }], addSeries: [{
            type: core_1.Output
        }], afterPrint: [{
            type: core_1.Output
        }], beforePrint: [{
            type: core_1.Output
        }], drilldown: [{
            type: core_1.Output
        }], drillup: [{
            type: core_1.Output
        }], load: [{
            type: core_1.Output
        }], redraw: [{
            type: core_1.Output
        }], selection: [{
            type: core_1.Output
        }], type: [{
            type: core_1.Input
        }], options: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=ChartComponent.js.map