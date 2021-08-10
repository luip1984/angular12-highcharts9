"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighchartsService = exports.HighchartsStatic = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var HighchartsStatic = (function () {
    function HighchartsStatic() {
    }
    HighchartsStatic.ɵfac = function HighchartsStatic_Factory(t) { return new (t || HighchartsStatic)(); };
    HighchartsStatic.ɵprov = i0.ɵɵdefineInjectable({ token: HighchartsStatic, factory: HighchartsStatic.ɵfac });
    return HighchartsStatic;
}());
exports.HighchartsStatic = HighchartsStatic;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighchartsStatic, [{
        type: core_1.Injectable
    }], null, null); })();
var HighchartsService = (function () {
    function HighchartsService(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    HighchartsService.prototype.getHighchartsStatic = function () {
        return this._highchartsStatice;
    };
    HighchartsService.ɵfac = function HighchartsService_Factory(t) { return new (t || HighchartsService)(i0.ɵɵinject(HighchartsStatic)); };
    HighchartsService.ɵprov = i0.ɵɵdefineInjectable({ token: HighchartsService, factory: HighchartsService.ɵfac });
    return HighchartsService;
}());
exports.HighchartsService = HighchartsService;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighchartsService, [{
        type: core_1.Injectable
    }], function () { return [{ type: HighchartsStatic }]; }, null); })();
//# sourceMappingURL=HighchartsService.js.map