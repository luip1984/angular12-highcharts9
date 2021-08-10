import { ElementRef, EventEmitter } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsService } from './HighchartsService';
import { ChartEvent } from './ChartEvent';
import * as i0 from "@angular/core";
export declare class ChartComponent {
    series: ChartSeriesComponent;
    xAxis: ChartXAxisComponent;
    yAxis: ChartYAxisComponent;
    create: EventEmitter<any>;
    click: EventEmitter<ChartEvent>;
    addSeries: EventEmitter<ChartEvent>;
    afterPrint: EventEmitter<ChartEvent>;
    beforePrint: EventEmitter<ChartEvent>;
    drilldown: EventEmitter<ChartEvent>;
    drillup: EventEmitter<ChartEvent>;
    load: EventEmitter<ChartEvent>;
    redraw: EventEmitter<ChartEvent>;
    selection: EventEmitter<ChartEvent>;
    chart: any;
    element: ElementRef;
    highchartsService: HighchartsService;
    private userOpts;
    private baseOpts;
    type: string;
    set options(opts: any);
    private init;
    ngAfterViewInit(): void;
    constructor(element: ElementRef, highchartsService: HighchartsService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartComponent, "chart", never, { "type": "type"; "options": "options"; }, { "create": "create"; "click": "click"; "addSeries": "addSeries"; "afterPrint": "afterPrint"; "beforePrint": "beforePrint"; "drilldown": "drilldown"; "drillup": "drillup"; "load": "load"; "redraw": "redraw"; "selection": "selection"; }, ["series", "xAxis", "yAxis"], never>;
}