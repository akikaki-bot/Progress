export declare class ProgressBar<T = string> {
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
    setProgressTextA(string: string): this;
    private a;
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
    setProgressTextB(string: string): this;
    private b;
    /**
     *
     * @param count カウントされている数
     * @param max 基にする数
     * @returns Progress String
     */
    gen(setting: Setting): string;
    generate(setting: Setting): Promise<string>;
}
export declare type Setting = {
    count: number;
    max: number;
};
