import { GameObjectPosition } from "../interfaces/GameObjectPosition";
import { GameObject } from "./GameObject";
export declare class Stage {
    matrix: string[];
    gameObjects: Array<GameObject>;
    private playerPosition;
    constructor(matrix: string[], playerPosition: GameObjectPosition);
    addGameObject(gameObject: GameObject): void;
    getChar(x: number, y: number): string;
    addFrame(matrix: string[]): string[];
}
