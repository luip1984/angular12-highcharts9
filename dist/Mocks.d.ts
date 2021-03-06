import * as i0 from "@angular/core";
export declare class ChartEventEmitter {
    static emitChartEvent(eventName: any): void;
    static emitSeriesEvent(eventName: any): void;
    static emitPointEvent(eventName: any): void;
    static emitXAxisEvent(eventName: any): void;
    static emitYAxisEvent(eventName: any): void;
}
export declare class HighchartsChartObjectMock {
    constructor(_opts: any);
}
export declare class HighchartsServiceMock {
    getHighchartsStatic(): {
        Chart: typeof HighchartsChartObjectMock;
        StockChart: typeof HighchartsChartObjectMock;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<HighchartsServiceMock, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HighchartsServiceMock>;
}
