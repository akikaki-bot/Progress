///<reference path = "node_modules/typescript/lib/lib.es2015.d.ts" />

export class ProgressBar<T = string>{
    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     * 
     * 初期値は "#"です。
     * ※最大で2文字
     * @returns this
     * @example
     * this.setProgressTextA("#")
     *
     * //60％[######----]
     * 
    */
    public setProgressTextA(string: string) : this {
        this.a = string;
        return this
    }

    private a :string

    /**
     * @param これはprogressバーを作る際の文字を設定できます。
     * 
     * 初期値は "-"です。
     * ※最大で2文字
     * @returns this
     * @example
     * this.setProgressTextB("=")
     *
     * //60％[######====]
     * 
    */
    public setProgressTextB(string: string) {
        this.b = string;
        return this
    }
    private b : string

     /**
      * 
      * @param count カウントされている数
      * @param max 基にする数
      * @returns Progress String
      */
    gen(setting: Setting): string {

        const disa = this.a ? this.a : "#"
        const disb = this.b ? this.b : "-"

        /**
         * @param Errors.
         */
        if(Number(this.a.length) > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        if(Number(this.b.length) > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')


        if(!setting.count) throw new Error('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ')
        if(!setting.max) throw new Error('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ')

        const MathP = setting.count / setting.max * 100;
        const MathC = 100 - MathP;

        const RetuMathP = MathP / 10
        const RetuMathC = MathC / 10

        if(setting.count > setting.max) throw new Error('[ProgressBar / gen] The count is over the maximum.')

        return (`[${disa.repeat(RetuMathP)}${disb.repeat(RetuMathC)}]`)

    }

    generate(setting: Setting): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            
        const disa = this.a ? this.a : "#"
        const disb = this.b ? this.b : "-"

        /**
         * @param Errors.
         */
        //if(this.pgrGUIa.length > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        //if(this.pgrGUIb.length > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')

        if(!setting.count) reject('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ')
        if(!setting.max) reject('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ')

        const MathP = setting.count / setting.max * 100;
        const MathC = 100 - MathP;

        const RetuMathP = MathP / 10
        const RetuMathC = MathC / 10

        if(setting.count > setting.max) reject('[ProgressBar / gen] The count is over the maximum.')

        resolve (`[${disa.repeat(RetuMathP)}${disb.repeat(RetuMathC)}]`)
        })
    }

}

export type Setting = {
 count : number,
 max: number
}


