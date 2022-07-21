export declare class ProgressBar<T extends string> {
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
    pgrGUIa(string: string): void;
    private a;
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
    pgrGUIb(string: string): void;
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
