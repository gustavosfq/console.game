import { DialogBox } from "./DialogBox";
import { Player } from "./Player";
import { Stage } from "./Stage";
export declare class Game {
    #private;
    readonly mainElementId: string;
    readonly preElement: HTMLPreElement;
    readonly width: number;
    readonly height: number;
    readonly halfWidth: number;
    readonly halfHeight: number;
    player: Player;
    currentStage: Stage;
    dialog: DialogBox | null;
    constructor(mainElementId: string, width: number, height: number, player: Player, stage: Stage);
    replaceAt(str: string, index: number, replacement: string): string;
    draw(): void;
    drawStage(): void;
    infoBar(): string;
    createDialog(text: string): string[];
}
