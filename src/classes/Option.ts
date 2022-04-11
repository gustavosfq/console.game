export class Option {
    public text: string | string[];
    public func: Function;
    constructor(text: string | string[], func: Function) {
        this.text = text;
        this.func = func;
    }

}