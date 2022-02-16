import { Game } from "./Game";
export declare class Listeners {
    game: Game;
    constructor(game: Game);
    init(): void;
    checkKey(e: KeyboardEvent, game: Game): void;
}
