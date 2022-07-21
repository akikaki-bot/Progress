"use strict";
///<reference path = "node_modules/typescript/lib/lib.es2015.d.ts" />
exports.__esModule = true;
exports.ProgressBar = void 0;
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
    }
    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     *
     * 初期値は "#"です。
     * ※最大で2文字
     * @example
     * ProgressBar.pgrGUIa("#")
     *
     * //60％[######----]
     *
    */
    ProgressBar.prototype.pgrGUIa = function (string) {
        this.a = string;
    };
    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     *
     * 初期値は "-"です。
     * ※最大で2文字
     * @example
     * ProgressBar.pgrGUIb("=")
     *
     * //60％[######====]
     *
    */
    ProgressBar.prototype.pgrGUIb = function (string) {
        this.b = string;
    };
    /**
     *
     * @param count カウントされている数
     * @param max 基にする数
     * @returns Progress String
     */
    ProgressBar.prototype.gen = function (setting) {
        var disa = "#";
        var disb = "-";
        /**
         * @param Errors.
         */
        if (Number(this.a.length) > 2)
            throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.');
        if (Number(this.b.length) > 2)
            throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.');
        if (this.a)
            disa = this.a;
        if (this.b)
            disb = this.b;
        if (!setting.count)
            throw new Error('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ');
        if (!setting.max)
            throw new Error('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ');
        var MathP = setting.count / setting.max * 100;
        var MathC = 100 - MathP;
        var RetuMathP = MathP / 10;
        var RetuMathC = MathC / 10;
        if (setting.count > setting.max)
            throw new Error('[ProgressBar / gen] The count is over the maximum.');
        return ("[".concat(disa.repeat(RetuMathP)).concat(disb.repeat(RetuMathC), "]"));
    };
    ProgressBar.prototype.generate = function (setting) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var disa = "#";
            var disb = "-";
            /**
             * @param Errors.
             */
            //if(this.pgrGUIa.length > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
            //if(this.pgrGUIb.length > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')
            if (_this.a)
                disa = _this.a;
            if (_this.b)
                disb = _this.b;
            if (!setting.count)
                reject('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ');
            if (!setting.max)
                reject('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ');
            var MathP = setting.count / setting.max * 100;
            var MathC = 100 - MathP;
            var RetuMathP = MathP / 10;
            var RetuMathC = MathC / 10;
            if (setting.count > setting.max)
                reject('[ProgressBar / gen] The count is over the maximum.');
            resolve("[".concat(disa.repeat(RetuMathP)).concat(disb.repeat(RetuMathC), "]"));
        });
    };
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
