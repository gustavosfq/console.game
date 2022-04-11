import { Option } from "../Option";
export declare class OptionDialog {
    matrix: string[];
    optionsTemp: Option[];
    options: Option[];
    width: number;
    index: number;
    constructor(options: Option[]);
    getOptions(lastScreen: string[]): string[];
    init(): void;
    next(): void;
    previous(): void;
    textRow(text: string): string[];
}
