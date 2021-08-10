import { ModuleWithProviders } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsStatic } from './HighchartsService';
import * as i0 from "@angular/core";
import * as i1 from "./ChartComponent";
import * as i2 from "./ChartSeriesComponent";
import * as i3 from "./ChartPointComponent";
import * as i4 from "./ChartXAxisComponent";
import * as i5 from "./ChartYAxisComponent";
export declare class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic, ...highchartsModules: Array<Function>): ModuleWithProviders<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChartModule, [typeof i1.ChartComponent, typeof i2.ChartSeriesComponent, typeof i3.ChartPointComponent, typeof i4.ChartXAxisComponent, typeof i5.ChartYAxisComponent], never, [typeof i1.ChartComponent, typeof i2.ChartSeriesComponent, typeof i3.ChartPointComponent, typeof i4.ChartXAxisComponent, typeof i5.ChartYAxisComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChartModule>;
}
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, };
