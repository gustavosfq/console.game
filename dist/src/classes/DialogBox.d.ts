export declare class DialogBox {
    matrix: string[];
    text: string;
    width: number;
    constructor(text: string);
    getDialog(lastScreen: string[]): string[];
    init(): void;
    textRow(text: string): string[];
}
