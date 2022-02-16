import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { GameObject } from "../GameObject";
export declare class GunGo extends GameObject {
    constructor(position: GameObjectPosition);
    onCollide(gameObject: GameObject): void;
}
