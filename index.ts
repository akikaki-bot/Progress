///<reference path = "node_modules/typescript/lib/lib.es2015.d.ts" />

export class ProgressBar {
    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     * 
     * 初期値は "#"です。
     * ※最大で2文字
     * @example
     * ProgressBar.pgrGUIa = "#"
     *
     * //60％[######----]
     * 
    */
    public pgrGUIa : string

    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     * 
     * 初期値は "-"です。
     * ※最大で2文字
     * @example
     * ProgressBar.pgrGUIb = "="
     *
     * //60％[######====]
     * 
    */
    public pgrGUIb : string
     /**
      * 
      * @param count カウントされている数
      * @param max 基にする数
      * @returns ProgressBar
      */
    gen(count :number, max : number){


        let disa = "#"
        let disb = "-"

        /**
         * @param Errors.
         */
        //if(this.pgrGUIa.length > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        //if(this.pgrGUIb.length > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')

        if(this.pgrGUIa) disa = this.pgrGUIa
        if(this.pgrGUIb) disb = this.pgrGUIb

        if(!count) throw new Error('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ')
        if(!max) throw new Error('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ')

        let MathP = count / max * 100;
        let MathC = 100 - MathP;

        let RetuMathP = MathP / 10
        let RetuMathC = MathC / 10

        if(count > max) throw new Error('[ProgressBar / gen] The count is over the maximum.')

        return (`[${disa.repeat(RetuMathP)}${disb.repeat(RetuMathC)}]`)

    }

}
