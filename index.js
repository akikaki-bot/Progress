"use strict";
///<reference path = "node_modules/typescript/lib/lib.es2015.d.ts" />
exports.__esModule = true;
exports.ProgressBar = void 0;
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
    }
    /**
     *
     * @param count カウントされている数
     * @param max 基にする数
     * @returns ProgressBar
     */
    ProgressBar.prototype.gen = function (count, max) {
        var disa = "#";
        var disb = "-";
        /**
         * @param Errors.
         */
        //if(this.pgrGUIa.length > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        //if(this.pgrGUIb.length > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')
        if (this.pgrGUIa)
            disa = this.pgrGUIa;
        if (this.pgrGUIb)
            disb = this.pgrGUIb;
        if (!count)
            throw new Error('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ');
        if (!max)
            throw new Error('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ');
        var MathP = count / max * 100;
        var MathC = 100 - MathP;
        var RetuMathP = MathP / 10;
        var RetuMathC = MathC / 10;
        if (count > max)
            throw new Error('[ProgressBar / gen] The count is over the maximum.');
        return ("[".concat(disa.repeat(RetuMathP)).concat(disb.repeat(RetuMathC), "]"));
    };
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
