///<reference path = "node_modules/typescript/lib/lib.es2015.d.ts" />

export class ProgressBar<T extends string>{
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
    public pgrGUIa(string: string) {
        this.a = string;
    }

    private a :string

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
    public pgrGUIb(string: string) {
        this.b = string;
    }
    private b : string

     /**
      * 
      * @param count カウントされている数
      * @param max 基にする数
      * @returns Progress String
      */
    gen(setting: Setting): string{

        let disa = "#"
        let disb = "-"

        /**
         * @param Errors.
         */
        if(Number(this.a.length) > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        if(Number(this.b.length) > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')

        if(this.a) disa = this.a
        if(this.b) disb = this.b

        if(!setting.count) throw new Error('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ')
        if(!setting.max) throw new Error('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ')

        let MathP = setting.count / setting.max * 100;
        let MathC = 100 - MathP;

        let RetuMathP = MathP / 10
        let RetuMathC = MathC / 10

        if(setting.count > setting.max) throw new Error('[ProgressBar / gen] The count is over the maximum.')

        return (`[${disa.repeat(RetuMathP)}${disb.repeat(RetuMathC)}]`)

    }

    generate(setting: Setting): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            
        let disa = "#"
        let disb = "-"

        /**
         * @param Errors.
         */
        //if(this.pgrGUIa.length > 2) throw new Error('[ProgressBar / pgrGUIa ] pgrGUIa settings length longest than 2.') 
        //if(this.pgrGUIb.length > 2) throw new Error('[ProgressBar / pgrGUIb ] pgrGUIb settings length longest than 2.')

        if(this.a) disa = this.a
        if(this.b) disb = this.b

        if(!setting.count) reject('[ProgressBar / gen(*count*, max)] count setting is undefined in Gen function. ')
        if(!setting.max) reject('[ProgressBar / gen(count, *max*)] max setting is undefined in Gen function. ')

        let MathP = setting.count / setting.max * 100;
        let MathC = 100 - MathP;

        let RetuMathP = MathP / 10
        let RetuMathC = MathC / 10

        if(setting.count > setting.max) reject('[ProgressBar / gen] The count is over the maximum.')

        resolve (`[${disa.repeat(RetuMathP)}${disb.repeat(RetuMathC)}]`)
        })
    }

}

export type Setting = {
 count : number,
 max: number
}


