import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { GameObject } from "../GameObject";
export declare class Talkable extends GameObject {
    onTalk: Function;
    constructor(position: GameObjectPosition, char: string, func: Function);
    onCollide(gameObject: GameObject): void;
}
