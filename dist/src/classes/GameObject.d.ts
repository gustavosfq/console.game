import { KeyCodes } from "../utils/constants";
import { GameObjectPosition } from "../interfaces/GameObjectPosition";
interface GameObjectInterface {
    readonly id: string;
    x: number;
    y: number;
    char: string;
    colliderList: string;
    facing: KeyCodes;
    onCollide(gameObject: GameObject): void;
}
export declare class GameObject implements GameObjectInterface {
    readonly id: string;
    x: number;
    y: number;
    char: string;
    colliderList: string;
    facing: KeyCodes;
    constructor(x: number, y: number, char: string, colliderList?: string);
    willCollideStage(position: GameObjectPosition): boolean;
    willCollideGameObject(position: GameObjectPosition): GameObject | null;
    collide(arrow: KeyCodes): true | GameObject | null;
    onCollide(gameObject: GameObject): void;
    up(): void;
    down(): void;
    left(): void;
    right(): void;
    destroy(): void;
}
export {};
