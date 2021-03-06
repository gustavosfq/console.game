import { GameObjectPosition } from "../interfaces/GameObjectPosition";
import { GameObject } from "./GameObject";
declare enum FollowMode {
    "AStar" = 0,
    "CheckingDirect" = 1,
    "DirectFollow" = 2
}
export declare class Enemy extends GameObject {
    followMode: FollowMode;
    path: GameObjectPosition[];
    isAnimating: boolean;
    lastPosition: GameObjectPosition;
    stoppedCounter: number;
    aStartInterval: number;
    directInterval: number;
    constructor(position: GameObjectPosition);
    startDirectFollow(): void;
    startAStar(): void;
    onCollide(gameObject: GameObject): void;
    animate(): Promise<void>;
    getPath(): GameObjectPosition[];
    getRayCasting(start: GameObjectPosition, end: GameObjectPosition, matrix: string[]): string;
    destroy(): void;
    setActive(value: boolean): void;
}
export {};
